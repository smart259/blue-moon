'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-brand-bg text-brand-cream">
      <Navigation />

      <main id="main-content" className="pt-nav">
        {/* HERO SECTION */}
        <section className="scroll-hero-wrapper" id="home" aria-label="Willkommen beim Cafe Blue Moon">
          <div className="relative h-screen w-full bg-gradient-to-b from-brand-bg3 to-brand-bg flex items-center justify-center overflow-hidden">
            {/* Hero Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/65 via-transparent to-brand-bg/75 pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-12">
              <h1 className="font-serif-display text-6xl md:text-8xl font-bold mb-4">
                <span className="text-brand-cream">Blue</span>{' '}
                <span className="text-brand-amber">Moon</span>
              </h1>
              <p className="font-serif-display text-xl md:text-2xl italic text-brand-cream mb-2">
                The Color of the Night
              </p>
              <p className="font-serif-label text-sm md:text-base uppercase tracking-wider text-brand-muted mb-8">
                Wuppertal · Seit 1995
              </p>

              {/* Hero Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="#kontakt" className="btn btn-primary">
                  Jetzt anrufen
                </a>
                <a href="#aktionen" className="btn btn-primary">
                  Aktionen entdecken
                </a>
              </div>

              {/* Hero Strip */}
              <div className="flex flex-wrap justify-center gap-4 p-4 bg-brand-bg2/60 backdrop-blur-sm border border-brand-border rounded-lg">
                <div className="flex items-center gap-2 text-sm font-serif-label uppercase">
                  <span>✓ Über</span> <strong className="text-brand-cream">133 Cocktails</strong>
                </div>
                <div className="flex items-center gap-2 text-sm font-serif-label uppercase">
                  <span>✓</span> <strong className="text-brand-cream">Live Musik</strong> <span>am Wochenende</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-serif-label uppercase">
                  <span>✓</span> <strong className="text-brand-cream">Terrasse</strong> <span>geöffnet</span>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-serif-label uppercase text-brand-cream-muted animate-bounce">
              <span>Scrollen</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about py-20 md:py-32" id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src="/images/gallery/bar_bild.png"
                  alt="Blue Moon Wuppertal – Bar"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="overline">Herzlich Willkommen</span>
                <h2 className="section-title mb-6" id="about-title">
                  <em>The Color of</em> the Night
                </h2>
                <p className="mb-4 text-brand-cream-muted leading-relaxed">
                  Seit 1995 ist das Cafe Blue Moon Wuppertals gemütlichste Adresse für internationale warme Küche –
                  Tapas, Meze, mediterrane und heimische Spezialitäten. Dazu erwarten euch mehrere Sorten Bier von
                  Flensburg bis Franken, unser Heimatbier <strong>WICKÜLER</strong> und über{' '}
                  <strong>133 Cocktails</strong>.
                </p>
                <p className="mb-8 text-brand-cream-muted leading-relaxed">
                  Am Wochenende ist meistens Live Musik eingeplant. Viel Spaß dabei wünscht euch Euer{' '}
                  <strong>Blue Moon Team</strong>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 border border-brand-border rounded-lg">
                    <div className="text-2xl font-bold text-brand-amber">133+</div>
                    <div className="text-xs font-serif-label uppercase tracking-wide text-brand-muted">Cocktails</div>
                  </div>
                  <div className="p-4 border border-brand-border rounded-lg">
                    <div className="text-2xl font-bold text-brand-amber">30+</div>
                    <div className="text-xs font-serif-label uppercase tracking-wide text-brand-muted">Jahre Erfahrung</div>
                  </div>
                  <div className="p-4 border border-brand-border rounded-lg">
                    <div className="text-2xl font-bold text-brand-amber">5★</div>
                    <div className="text-xs font-serif-label uppercase tracking-wide text-brand-muted">Live Musik</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW ITEMS SECTION */}
        <section className="neu py-20 md:py-32 bg-brand-bg2" id="neu" aria-labelledby="neu-title">
          <div className="container">
            <div className="mb-12">
              <span className="overline">Neu bei uns</span>
              <h2 className="section-title" id="neu-title">
                Frisch auf <em>der Karte</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-brand-bg border border-brand-border rounded-lg hover:border-brand-border-hover transition-colors">
                <h3 className="font-serif-display text-2xl mb-3 text-brand-cream">Cocktails To Go</h3>
                <p className="text-brand-cream-muted mb-4">
                  Eure Lieblingscocktails zum Mitnehmen – über 133 Kreationen jetzt auch außer Haus genießen.
                </p>
                <div className="w-12 h-12 bg-brand-amber/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍹</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-brand-bg border border-brand-border rounded-lg hover:border-brand-border-hover transition-colors">
                <h3 className="font-serif-display text-2xl mb-3 text-brand-cream">Pizza</h3>
                <p className="text-brand-cream-muted mb-4">
                  Knusprige Pizzen frisch aus unserem Ofen – der perfekte Begleiter zu einem kühlen Bier oder Cocktail.
                </p>
                <div className="w-12 h-12 bg-brand-amber/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COCKTAILS SECTION */}
        <section className="cocktails py-20 md:py-32" id="cocktails" aria-labelledby="cocktails-title">
          <div className="container">
            <div className="mb-12">
              <span className="overline text-brand-cream">133 Kreationen</span>
              <h2 className="section-title" id="cocktails-title">
                <em>Unsere</em> Cocktails
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Gin', count: 16, price: '6,00 €', emoji: '🍸' },
                { name: 'Wodka', count: 13, price: '6,00 €', emoji: '🧊' },
                { name: 'Rum', count: 21, price: '6,00 €', emoji: '🌴' },
              ].map((cat) => (
                <div key={cat.name} className="p-6 bg-brand-bg2 border border-brand-border rounded-lg hover:border-brand-border-hover transition-colors">
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <h3 className="font-serif-display text-2xl mb-2 text-brand-cream">{cat.name}</h3>
                  <div className="text-sm text-brand-muted mb-3">
                    <div>{cat.count} Cocktails</div>
                    <div>ab <strong className="text-brand-amber">{cat.price}</strong></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/speisekarte" className="btn btn-primary">
                Alle Cocktails entdecken
              </a>
            </div>
          </div>
        </section>

        {/* ACTIONS SECTION */}
        <section className="aktionen py-20 md:py-32 bg-brand-bg2" id="aktionen" aria-labelledby="aktionen-title">
          <div className="container">
            <div className="mb-12">
              <span className="overline">Wochentags-Specials</span>
              <h2 className="section-title" id="aktionen-title">
                Unsere <em>Aktionen</em>
              </h2>
              <p className="text-brand-cream-muted mt-4">Jeden Tag eine andere Köstlichkeit – zu unschlagbaren Preisen.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { day: 'Montag', name: 'Köftetag', desc: 'türkische Hackfleischspieße', price: '10,00 €' },
                { day: 'Dienstag', name: 'Mantitag', desc: 'türkische Teigtaschen', price: '10,00 €' },
                { day: 'Mittwoch', name: 'Schnitzeltag', desc: 'Schnitzel, Pommes & Sauce', price: '12,00 €' },
              ].map((action) => (
                <div key={action.day} className="p-6 bg-brand-bg border border-brand-border rounded-lg">
                  <span className="text-xs font-serif-label uppercase tracking-wider text-brand-amber mb-2 block">
                    {action.day}
                  </span>
                  <h3 className="font-serif-display text-xl mb-2 text-brand-cream">{action.name}</h3>
                  <p className="text-sm text-brand-cream-muted mb-3">{action.desc}</p>
                  <span className="text-brand-amber font-semibold">{action.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOURS SECTION */}
        <section className="zeiten py-20 md:py-32" id="zeiten" aria-labelledby="zeiten-title">
          <div className="container">
            <div className="mb-12">
              <span className="overline">Wir sind für euch da</span>
              <h2 className="section-title" id="zeiten-title">
                Öffnungs<em>zeiten</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-brand-bg2 border border-brand-border rounded-lg">
                <h3 className="font-serif-display text-xl mb-6 text-brand-cream">Bar & Terrasse</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Montag</span>
                    <span className="text-brand-cream">18:00 – 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Dienstag – Donnerstag</span>
                    <span className="text-brand-cream">18:00 – 24:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Freitag & Samstag</span>
                    <span className="text-brand-cream">18:00 – 01:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Sonntag</span>
                    <span className="text-brand-cream">17:00 – 22:00</span>
                  </div>
                </div>
                <p className="text-xs text-brand-muted mt-6">* Schließzeiten können betriebsbedingt abweichen.</p>
              </div>

              <div className="p-8 bg-brand-bg2 border border-brand-border rounded-lg">
                <h3 className="font-serif-display text-xl mb-6 text-brand-cream">Küche & To Go</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Montag – Donnerstag</span>
                    <span className="text-brand-cream">18:00 – 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Freitag & Samstag</span>
                    <span className="text-brand-cream">18:00 – 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Sonntag</span>
                    <span className="text-brand-cream">17:00 – 21:00</span>
                  </div>
                </div>
                <p className="text-xs text-brand-muted mt-6">* Nach Küchenschluss gibt's noch Kleinigkeiten!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
              {[
                { icon: '💳', label: 'Kartenzahlung möglich' },
                { icon: '📶', label: 'Free WiFi' },
                { icon: '👥', label: 'Gruppenreservierung möglich' },
                { icon: '🎵', label: 'Live Musik am Wochenende' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-brand-bg2 border border-brand-border rounded-lg">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-brand-cream-muted text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="galerie py-20 md:py-32 bg-brand-bg2" id="galerie" aria-labelledby="galerie-title">
          <div className="container">
            <div className="mb-12">
              <span className="overline">Unser Ambiente</span>
              <h2 className="section-title" id="galerie-title">
                Galerie &amp; <em>Impressionen</em>
              </h2>
            </div>
            <div className="flex justify-center">
              <Link href="/galerie" className="btn btn-primary">
                Zur Galerie
              </Link>
            </div>
          </div>
        </section>

        {/* EVENTS SECTION */}
        <section className="veranstaltungen py-20 md:py-32" id="veranstaltungen" aria-labelledby="veranstaltungen-title">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="overline">Was ist los bei uns</span>
              <h2 className="section-title" id="veranstaltungen-title">
                Ver<em>anstaltungen</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Live-Abend im Blue Moon', desc: 'Genieße einen unvergesslichen Abend mit Live-Musik, besonderen Cocktails und einzigartiger Atmosphäre.' },
                { title: 'Cocktail-Abend Special', desc: 'Unser Barkeeper-Team kreiert für euch exklusive Signature-Drinks – kommt vorbei und lasst euch überraschen.' },
                { title: 'Terrassenparty', desc: 'Wenn das Wetter mitspielt, feiern wir draußen! Sichert euch euren Platz auf der Terrasse.' },
              ].map((event) => (
                <div key={event.title} className="p-6 bg-brand-bg2 border border-brand-border rounded-lg hover:border-brand-border-hover transition-colors">
                  <span className="text-xs font-serif-label uppercase tracking-wider text-brand-amber mb-2 block">
                    Demnächst
                  </span>
                  <h3 className="font-serif-display text-lg mb-3 text-brand-cream">{event.title}</h3>
                  <p className="text-sm text-brand-cream-muted">{event.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://www.instagram.com/blue_moon_wuppertal/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Weitere Veranstaltungen auf Instagram"
              >
                Weitere Veranstaltungen auf Instagram
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="kontakt py-20 md:py-32 bg-brand-bg2" id="kontakt" aria-labelledby="kontakt-title">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <span className="overline">Wir freuen uns auf euch</span>
                <h2 className="section-title mb-6" id="kontakt-title">
                  Kontakt &amp; <em>Anfahrt</em>
                </h2>
                <p className="text-brand-cream-muted mb-8">
                  Für Reservierungen und Voranmeldungen – besonders bei Gruppen ab 5 Personen – kontaktiert uns gerne
                  telefonisch oder per WhatsApp.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:+4920225321847"
                    className="flex items-center gap-4 p-4 bg-brand-bg border border-brand-border rounded-lg hover:border-brand-border-hover transition-colors"
                  >
                    <div className="text-2xl">📞</div>
                    <div>
                      <div className="text-xs font-serif-label uppercase tracking-wide text-brand-muted">Festnetz</div>
                      <div className="text-brand-cream font-semibold">+49 202 25321847</div>
                    </div>
                  </a>
                  <a
                    href="tel:+491782784646"
                    className="flex items-center gap-4 p-4 bg-brand-bg border border-brand-border rounded-lg hover:border-brand-border-hover transition-colors"
                  >
                    <div className="text-2xl">📱</div>
                    <div>
                      <div className="text-xs font-serif-label uppercase tracking-wide text-brand-muted">Mobil</div>
                      <div className="text-brand-cream font-semibold">0178 2784646</div>
                    </div>
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/491782784646?text=Hallo%20Blue%20Moon%20Team%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center justify-center gap-2"
                  >
                    <span>💬</span> Per WhatsApp
                  </a>
                  <a href="tel:+4920225321847" className="btn btn-primary flex items-center justify-center gap-2">
                    <span>☎️</span> Anrufen
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <div className="p-6 bg-brand-bg border border-brand-border rounded-lg">
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">☀️ Terrasse</h3>
                  <p className="text-sm text-brand-cream-muted">
                    Unsere Terrasse ist bei schönem Wetter geöffnet und bietet euch eine entspannte Atmosphäre im Freien.
                  </p>
                </div>
                <div className="p-6 bg-brand-bg border border-brand-border rounded-lg">
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">🎵 Live Musik & Veranstaltungen</h3>
                  <p className="text-sm text-brand-cream-muted">
                    Am Wochenende ist meistens Live Musik eingeplant. Aktuelle Veranstaltungen und Konzerte – einfach
                    nachfragen!
                  </p>
                </div>
                <div className="p-6 bg-brand-bg border border-brand-border rounded-lg">
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">👥 Gruppenreservierungen</h3>
                  <p className="text-sm text-brand-cream-muted">
                    Ab 5 Personen bitten wir um Voranmeldung per WhatsApp. So können wir euch den besten Platz
                    reservieren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-brand-bg border-t border-brand-border py-12" role="contentinfo">
          <div className="container">
            <div className="text-center mb-8">
              <div className="font-serif-display text-2xl mb-2">
                Blue <span className="text-brand-amber">Moon</span> Wuppertal
              </div>
              <p className="text-brand-muted text-sm">"The Color of the Night" – Seit 1995</p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="#about" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Über uns
              </a>
              <a href="#aktionen" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Aktionen
              </a>
              <a href="#zeiten" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Öffnungszeiten
              </a>
              <a href="#galerie" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Galerie
              </a>
              <a href="#kontakt" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Kontakt
              </a>
              <Link href="/impressum" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">
                Datenschutz
              </Link>
            </nav>

            <div className="border-t border-brand-border pt-8 text-center">
              <p className="text-xs text-brand-muted">
                &copy; 2025 Cafe Blue Moon Wuppertal · Alle Rechte vorbehalten
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
