import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz | Landschaftspflege Thüringen",
    description: "Datenschutzerklärung von Landschaftspflege Thüringen.",
};

export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-24">
            <h1 className="font-serif text-4xl text-foreground">Datenschutzerklärung</h1>
            <p className="mt-2 text-sm text-muted">Stand: März 2026</p>

            <section className="mt-10 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">1. Verantwortlicher</h2>
                <p>
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p>
                    Franz Eberitsch<br />
                    Rote-Berg-Str. 21<br />
                    07333 Unterwellenborn | OT Kamsdorf<br />
                    Deutschland<br />
                    Telefon: +49 152 34002234<br />
                    E-Mail: franz.eberitsch@web.de
                </p>
            </section>

            <section className="mt-8 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">2. Hosting</h2>
                <p>
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                    werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.&nbsp;a. um
                    IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                    Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
            </section>

            <section className="mt-8 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">3. Kontaktformular</h2>
                <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                    Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
                    ohne Ihre Einwilligung weiter.
                </p>
                <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                    Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                    Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
                    berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
                    (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
                <p>
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                    auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                    entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
                    unberührt.
                </p>
            </section>

            <section className="mt-8 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">4. Kontaktformular-Dienst (Formspree)</h2>
                <p>
                    Für die Verarbeitung von Kontaktanfragen über das Formular auf dieser Website nutzen wir den
                    Dienst Formspree (Formspree, Inc., 2261 Market Street #4950, San Francisco, CA 94114, USA).
                    Wenn Sie das Kontaktformular absenden, werden Ihre eingegebenen Daten (Name, Telefon, E-Mail,
                    Leistung, Nachricht) an Server von Formspree in den USA übertragen und dort verarbeitet.
                </p>
                <p>
                    Formspree verarbeitet diese Daten ausschließlich zur Weiterleitung der Anfrage an uns und
                    speichert sie für einen begrenzten Zeitraum. Weitere Informationen finden Sie in der
                    Datenschutzerklärung von Formspree:{" "}
                    <a
                        href="https://formspree.io/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline underline-offset-2"
                    >
                        https://formspree.io/legal/privacy-policy
                    </a>
                </p>
                <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f
                    DSGVO (berechtigtes Interesse an der effizienten Bearbeitung von Anfragen).
                </p>
            </section>

            <section className="mt-8 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">5. Google Maps</h2>
                <p>
                    Diese Website nutzt den Kartendienst Google Maps der Google LLC, 1600 Amphitheatre Parkway,
                    Mountain View, CA 94043, USA (bzw. Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                    Irland für Nutzer im EWR).
                </p>
                <p>
                    Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
                    Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort
                    gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                </p>
                <p>
                    Google Maps wird auf dieser Website erst nach aktiver Bestätigung durch den Nutzer geladen
                    (2-Klick-Lösung). Erst durch das Klicken auf „Karte laden" werden Daten an Google übertragen.
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                </p>
                <p>
                    Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline underline-offset-2"
                    >
                        https://policies.google.com/privacy
                    </a>
                </p>
            </section>

            <section className="mt-8 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">6. Ihre Rechte</h2>
                <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                </ul>
                <p>
                    Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
                    Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde in Thüringen
                    ist der Thüringer Landesbeauftragter für den Datenschutz und die Informationsfreiheit (TLfDI).
                </p>
            </section>

            <section className="mt-8 space-y-3 text-sm text-muted leading-6">
                <h2 className="text-base font-semibold text-foreground">7. Datensicherheit</h2>
                <p>
                    Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                    eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                    Adresszeile des Browsers von „http://" auf „https://" wechselt.
                </p>
            </section>
        </main>
    );
}
