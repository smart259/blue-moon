'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Speisekarte() {
  return (
    <div className="bg-brand-bg text-brand-cream min-h-screen">
      <Navigation />

      <main className="pt-nav">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="overline">Kulinarische Vielfalt</span>
              <h1 className="section-title">
                Unsere <em>Speisen & Getränke</em>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Food Section */}
              <div>
                <h2 className="font-serif-display text-2xl mb-6 text-brand-amber">🍽️ Küche</h2>
                <p className="text-brand-cream-muted mb-6">
                  Genießet unsere international warme Küche mit Tapas, Meze, mediterranen und heimischen Spezialitäten. 
                  Unsere Küche ist täglich frisch und hochwertig zubereitet.
                </p>
                <p className="text-sm text-brand-muted mb-4">
                  <strong>Öffnungszeiten Küche:</strong><br/>
                  Mo–Do: 18:00 – 22:00 Uhr<br/>
                  Fr–Sa: 18:00 – 23:00 Uhr<br/>
                  So: 17:00 – 21:00 Uhr
                </p>
                <a href="/speisekarte.pdf" download className="btn btn-primary">
                  Speisekarte PDF
                </a>
              </div>

              {/* Drinks Section */}
              <div>
                <h2 className="font-serif-display text-2xl mb-6 text-brand-amber">🍹 Getränke</h2>
                <p className="text-brand-cream-muted mb-6">
                  Über <strong>133 Cocktails</strong> erwartet euch! Von klassischen Long Drinks bis zu unseren eigenen 
                  Kreationen. Dazu diverses Bier, Wein, und alkoholfreie Alternativen.
                </p>
                <p className="text-sm text-brand-muted mb-4">
                  <strong>Spezialitäten:</strong><br/>
                  ✓ Hauscocktails<br/>
                  ✓ Premium Spirits<br/>
                  ✓ Craft Beers
                </p>
                <a href="/alle-cocktails.pdf" download className="btn btn-primary">
                  Alle Cocktails PDF
                </a>
              </div>
            </div>

            {/* Featured Items */}
            <div className="bg-brand-bg2 p-8 md:p-12 rounded-lg border border-brand-border">
              <h2 className="font-serif-display text-2xl mb-6">⭐ Unsere Klassiker</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">Blue Moon – Cocktail #1</h3>
                  <p className="text-sm text-brand-cream-muted">Unser Namensgeber – ein unvergesslicher Cocktail.</p>
                </div>
                <div>
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">Mojito</h3>
                  <p className="text-sm text-brand-cream-muted">Klassiker aus Kuba mit Minze, Limette und Rum.</p>
                </div>
                <div>
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">Manhattan</h3>
                  <p className="text-sm text-brand-cream-muted">Ein ikonisches Whiskey-Cocktail-Meisterwerk.</p>
                </div>
                <div>
                  <h3 className="font-serif-display text-lg mb-2 text-brand-cream">Pina Colada</h3>
                  <p className="text-sm text-brand-cream-muted">Der tropische Klassiker für pure Entspannung.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-brand-cream-muted mb-6">
                Ihr habt Fragen zu unserer Speisekarte oder möchtet einen Tisch reservieren?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+4920225321847" className="btn btn-primary">
                  Uns anrufen
                </a>
                <a
                  href="https://wa.me/491782784646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Per WhatsApp schreiben
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg2 border-t border-brand-border py-8">
        <div className="container text-center text-sm text-brand-muted">
          <Link href="/" className="hover:text-brand-cream transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </footer>
    </div>
  );
}
