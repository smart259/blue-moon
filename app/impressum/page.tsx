'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="bg-brand-bg text-brand-cream min-h-screen">
      <Navigation />

      <main className="pt-nav py-20 md:py-32">
        <div className="container max-w-3xl">
          <h1 className="section-title mb-12">Impressum</h1>

          <div className="space-y-8 text-brand-cream-muted leading-relaxed">
            <section className="p-6 bg-brand-bg2 rounded-lg border border-brand-border">
              <h2 className="font-serif-display text-xl text-brand-cream mb-4">Angaben gemäß § 5 TMG (Telemediengesetz)</h2>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Betreiber der Website:</strong><br/>
                  Café Blue Moon Wuppertal
                </p>
                <p>
                  <strong>Anschrift:</strong><br/>
                  Wuppertal<br/>
                  Deutschland
                </p>
                <p>
                  <strong>Telefon:</strong><br/>
                  <a href="tel:+4920225321847" className="text-brand-amber hover:underline">+49 202 25321847</a>
                </p>
                <p>
                  <strong>Mobilfunk:</strong><br/>
                  <a href="tel:+491782784646" className="text-brand-amber hover:underline">0178 2784646</a>
                </p>
                <p>
                  <strong>WhatsApp:</strong><br/>
                  <a href="https://wa.me/491782784646" className="text-brand-amber hover:underline" target="_blank" rel="noopener">0178 2784646</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">Haftungshinweis</h2>
              <p>
                Der Inhalt der Website wurde mit größter Sorgfalt zusammengestellt. Trotzdem können wir keine Gewähr für 
                die Aktualität, Richtigkeit und Vollständigkeit übernehmen. Die Rechteinhaber tragen die Verantwortung für 
                die von ihnen bereitgestellten Inhalte.
              </p>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">Verlinkung</h2>
              <p>
                Für die Inhalte der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Wir distanzieren 
                uns davon, Inhalte zu unterstützen, die gegen geltendes Recht verstoßen.
              </p>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">Urheberrecht</h2>
              <p>
                Die auf dieser Website verwendeten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen schriftlicher 
                Zustimmung des Autors oder Rechteinhabers.
              </p>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">Datenschutz</h2>
              <p>
                Bitte beachten Sie unsere <Link href="/datenschutz" className="text-brand-amber hover:underline">Datenschutzerklärung</Link>.
              </p>
            </section>

            <section className="p-6 bg-brand-bg2 rounded-lg border border-brand-border">
              <h2 className="font-serif-display text-xl text-brand-cream mb-4">Kommunikation</h2>
              <p className="text-sm mb-4">
                Für Fragen, Anliegen oder weitere Informationen kontaktieren Sie uns gerne:
              </p>
              <p className="text-sm">
                <strong>Telefon:</strong> <a href="tel:+4920225321847" className="text-brand-amber hover:underline">+49 202 25321847</a><br/>
                <strong>WhatsApp:</strong> <a href="https://wa.me/491782784646" className="text-brand-amber hover:underline" target="_blank" rel="noopener">0178 2784646</a>
              </p>
            </section>

            <section className="pt-8 border-t border-brand-border">
              <p className="text-sm text-brand-muted">
                <em>Zuletzt aktualisiert: April 2025</em>
              </p>
            </section>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/" className="btn btn-primary">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg2 border-t border-brand-border py-8">
        <div className="container text-center text-sm text-brand-muted">
          © 2025 Café Blue Moon Wuppertal
        </div>
      </footer>
    </div>
  );
}
