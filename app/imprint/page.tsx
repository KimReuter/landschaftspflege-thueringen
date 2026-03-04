import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | Landschaftspflege Thüringen",
    description: "Impressum und rechtliche Angaben von Landschaftspflege Thüringen.",
};

export default function ImprintPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-24">
            <h1 className="font-serif text-4xl text-foreground">Impressum</h1>
            <p className="mt-2 text-sm text-muted">Angaben gemäß § 5 TMG</p>

            <section className="mt-10 space-y-1 text-sm text-muted leading-6">
                <p className="font-semibold text-foreground">Franz Eberitsch</p>
                <p>Einzelunternehmen</p>
                <p>Landschaftspflege, Gartenbau u. mehr</p>
                <p>Rote-Berg-Straße 21</p>
                <p>07333 Unterwellenborn</p>
                <p>Deutschland</p>
            </section>

            <section className="mt-8 space-y-2 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
                <p>
                    Telefon:{" "}
                    <a href="tel:+4915234002234" className="hover:text-foreground transition-colors">
                        +49 152 34002234
                    </a>
                </p>
                <p>
                    E-Mail:{" "}
                    <a href="mailto:franz.eberitsch@web.de" className="hover:text-foreground transition-colors">
                        franz.eberitsch@web.de
                    </a>
                </p>
            </section>

            <section className="mt-8 space-y-2 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">Steuerliche Angaben</h2>
                <p>Steuernummer: 165/153/49816</p>
                <p>Umsatzsteuer-Identifikationsnummer (§ 27a UStG): DE325057870</p>
            </section>

            <section className="mt-8 space-y-2 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">Verantwortlich für den Inhalt</h2>
                <p>Franz Eberitsch, Rote-Berg-Str. 21, 07333 Unterwellenborn</p>
            </section>

            <section className="mt-8 space-y-2 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">Haftung für Inhalte</h2>
                <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                    verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                    Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                    Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
            </section>

            <section className="mt-8 space-y-2 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">Haftung für Links</h2>
                <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                    haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                    der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
            </section>

            <section className="mt-8 space-y-2 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">Urheberrecht</h2>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                    außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                    Autors bzw. Erstellers.
                </p>
            </section>
        </main>
    );
}
