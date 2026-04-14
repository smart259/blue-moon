/**
 * Bento Gallery Component
 * Draggable, responsive masonry gallery with modal lightbox
 * 
 * Features:
 * - Horizontal drag scrolling with mouse and touch
 * - Smooth animations on scroll reveal
 * - Lightbox modal with prev/next navigation
 * - Keyboard accessibility (Arrow keys, Enter, Escape)
 * - Responsive grid layout
 * 
 * Usage: BentoGallery.mount('#galerie', GALLERY_DATA)
 */

class BentoGallery {
  constructor(containerSelector, data) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) throw new Error(`Container ${containerSelector} not found`);

    this.data = data;
    this.items = [];
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.render();
    this.setupObservers();
    this.setupModalListeners();
    this.setupKeyboardNav();
  }

  render() {
    // Clear container
    this.container.innerHTML = '';

    // Wrapper
    const wrapper = document.createElement('div');
    wrapper.id = 'galerie';

    // Section
    const section = document.createElement('section');
    section.className = 'bento-galerie';
    section.setAttribute('aria-labelledby', 'bento-galerie-title');

    // Content container
    const content = document.createElement('div');
    content.className = 'bento-galerie-content';

    // Header
    const header = document.createElement('div');
    header.className = 'bento-galerie-header';
    header.id = 'bento-galerie-header';
    header.innerHTML = `
      <span class="overline">Impressionen</span>
      <h2 class="section-title" id="bento-galerie-title">Blick ins <em>${this.data.title.split(' ')[2]}</em></h2>
      <p class="description">${this.data.description}</p>
    `;

    // Grid
    const grid = document.createElement('div');
    grid.className = 'bento-galerie-grid';
    grid.id = 'bento-galerie-grid';
    grid.setAttribute('role', 'list');
    grid.setAttribute('aria-label', 'Bildergalerie');

    // Render items
    this.data.items.forEach((item, idx) => {
      const gridItem = document.createElement('div');
      const flyDirections = ['fly-left', 'fly-bottom', 'fly-bottom', 'fly-right', 'fly-bottom', 'fly-right'];
      const flyClass = flyDirections[idx % 6];
      gridItem.className = `bento-galerie-item ${flyClass}`;
      gridItem.setAttribute('role', 'listitem');
      gridItem.setAttribute('data-index', idx);
      gridItem.setAttribute('tabindex', '0');
      gridItem.setAttribute('aria-label', `${item.title} – ${item.desc}`);

      gridItem.innerHTML = `
        <img 
          src="${item.url}" 
          alt="${item.title}"
          loading="${idx < 3 ? 'eager' : 'lazy'}"
          fetchpriority="${idx < 3 ? 'high' : 'auto'}"
          decoding="async"
        />
        <div class="bento-galerie-item-content">
          <h3 class="bento-galerie-item-title">${item.title}</h3>
          <p class="bento-galerie-item-desc">${item.desc}</p>
        </div>
      `;

      gridItem.addEventListener('click', () => this.openModal(idx));
      gridItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openModal(idx);
        }
      });

      grid.appendChild(gridItem);
      this.items.push(gridItem);
    });

    // Modal
    const modal = document.createElement('div');
    modal.className = 'bento-galerie-modal';
    modal.id = 'bento-galerie-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'bento-galerie-modal-title');
    modal.innerHTML = `
      <div class="bento-galerie-modal-content">
        <button class="bento-galerie-modal-close" id="bento-galerie-modal-close" aria-label="Schließen">
          ✕
        </button>
        
        <img class="bento-galerie-modal-img" id="bento-galerie-modal-img" src="" alt="" />
        
        <div class="bento-galerie-modal-info">
          <h3 class="bento-galerie-modal-title" id="bento-galerie-modal-title"></h3>
          <p class="bento-galerie-modal-desc" id="bento-galerie-modal-desc"></p>
        </div>

        <button class="bento-galerie-modal-nav bento-galerie-modal-prev" id="bento-galerie-modal-prev" aria-label="Vorheriges Bild">
          ◀
        </button>
        <button class="bento-galerie-modal-nav bento-galerie-modal-next" id="bento-galerie-modal-next" aria-label="Nächstes Bild">
          ▶
        </button>

        <div class="bento-galerie-modal-counter" id="bento-galerie-modal-counter"></div>
      </div>
    `;

    // Assemble
    content.appendChild(header);
    content.appendChild(grid);

    section.appendChild(content);
    section.appendChild(modal);

    wrapper.appendChild(section);
    this.container.appendChild(wrapper);

    // Store references
    this.grid = grid;
    this.header = header;
    this.modal = modal;
  }


  // ─── SCROLL ANIMATIONS ───────────────────────────────────────
  setupObservers() {
    // Staggered reveal for items
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, idx * 60); // Stagger by 60ms
        }
      });
    }, observerOptions);

    this.items.forEach((item) => observer.observe(item));

    // Header reveal on scroll
    const headerObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.header.classList.add('revealed');
          }, 200);
        }
      });
    }, headerObserverOptions);

    headerObserver.observe(this.header);

    // Fallback: falls Header beim Laden bereits im Viewport ist
    if (this.header.getBoundingClientRect().top < window.innerHeight) {
      setTimeout(() => {
        this.header.classList.add('revealed');
      }, 200);
    }
  }

  // ─── MODAL / LIGHTBOX ────────────────────────────────────────
  setupModalListeners() {
    const closeBtn = document.getElementById('bento-galerie-modal-close');
    const prevBtn = document.getElementById('bento-galerie-modal-prev');
    const nextBtn = document.getElementById('bento-galerie-modal-next');

    closeBtn.addEventListener('click', () => this.closeModal());
    prevBtn.addEventListener('click', () => this.prevImage());
    nextBtn.addEventListener('click', () => this.nextImage());

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });
  }

  openModal(index) {
    this.currentIndex = index;
    const item = this.data.items[index];

    document.getElementById('bento-galerie-modal-img').src = item.url;
    document.getElementById('bento-galerie-modal-img').alt = item.title;
    document.getElementById('bento-galerie-modal-title').textContent = item.title;
    document.getElementById('bento-galerie-modal-desc').textContent = item.desc;
    document.getElementById('bento-galerie-modal-counter').textContent = `${index + 1} / ${this.data.items.length}`;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    document.getElementById('bento-galerie-modal-close').focus();
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.data.items.length) % this.data.items.length;
    this.openModal(this.currentIndex);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.data.items.length;
    this.openModal(this.currentIndex);
  }

  // ─── KEYBOARD NAVIGATION ─────────────────────────────────────
  setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.nextImage();
      }
    });

    // Tab within gallery items
    this.grid.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        // Allow normal tab behavior
        return;
      }
    });
  }

  // ─── PUBLIC API ──────────────────────────────────────────────
  static mount(selector, data) {
    return new BentoGallery(selector, data);
  }

  destroy() {
    this.container.innerHTML = '';
  }
}

// Auto-initialize if DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof GALLERY_DATA !== 'undefined') {
      BentoGallery.mount('#galerie-content', GALLERY_DATA);
    }
  });
} else {
  if (typeof GALLERY_DATA !== 'undefined') {
    BentoGallery.mount('#galerie-content', GALLERY_DATA);
  }
}
