'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <div className="bg-brand-bg text-brand-cream min-h-screen">
      <Navigation />

      <main className="pt-nav py-20 md:py-32">
        <div className="container max-w-3xl">
          <h1 className="section-title mb-12">Datenschutz</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-brand-cream-muted leading-relaxed">
            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">1. Datenschutzerklärung</h2>
              <p>
                Wir, das Team des Café Blue Moon Wuppertal, nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung erläutert, welche Informationen wir erfassen und wie wir diese verwenden.
              </p>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">2. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung ist:<br/>
                <strong>Café Blue Moon Wuppertal</strong><br/>
                Wuppertal, Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">3. Datenerfassung auf unserer Website</h2>
              <p>
                Unsere Website erfasst automatisch bestimmte Informationen über Ihren Besuch, wie beispielsweise:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser-Typ und Version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Besuchte Seiten</li>
                <li>Besuchszeit und -dauer</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">4. Kontaktformulare</h2>
              <p>
                Wenn Sie uns über Kontaktformulare oder E-Mail kontaktieren, erfassen wir die von Ihnen bereitgestellten Informationen, um Ihre Anfrage zu beantworten. Diese Daten werden nicht an Dritte weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">5. Ihre Rechte</h2>
              <p>
                Sie haben das Recht:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
                <li>Fehlerhafte Daten korrigieren zu lassen</li>
                <li>Ihre Daten löschen zu lassen (Recht auf Vergessenwerden)</li>
                <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">6. Kontakt bei Fragen</h2>
              <p>
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:
              </p>
              <div className="bg-brand-bg2 p-4 rounded-lg border border-brand-border">
                <p>
                  <strong>Café Blue Moon Wuppertal</strong><br/>
                  Telefon: <a href="tel:+4920225321847" className="text-brand-amber hover:underline">+49 202 25321847</a><br/>
                  WhatsApp: <a href="https://wa.me/491782784646" className="text-brand-amber hover:underline" target="_blank" rel="noopener">0178 2784646</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif-display text-2xl text-brand-cream mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Die aktuelle Version wird auf dieser Seite veröffentlicht.
              </p>
            </section>

            <section className="pt-8 border-t border-brand-border">
              <p className="text-sm">
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
