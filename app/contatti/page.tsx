import { Metadata } from 'next'
import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Contatti - FortiStore Italia',
  description: 'Contatta FortiStore Italia per informazioni sui prodotti Fortinet. Telefono, email, orari di apertura. Assistenza specializzata in italiano.',
}

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-fortinet-dark to-gray-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contattaci
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Siamo qui per aiutarti a trovare la soluzione Fortinet perfetta per la tua azienda
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-fortinet-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-fortinet-red" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefono</h3>
              <a href="tel:+390212345678" className="text-fortinet-red hover:underline text-lg">
                +39 02 1234 5678
              </a>
              <p className="text-sm text-gray-600 mt-2">Lun - Ven: 9:00 - 18:00</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-fortinet-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-fortinet-red" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@fortistore.it" className="text-fortinet-red hover:underline">
                info@fortistore.it
              </a>
              <p className="text-sm text-gray-600 mt-2">Risposta entro 24h</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-fortinet-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-fortinet-red" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Sede</h3>
              <p className="text-gray-600">
                Via Roma 123<br />
                20121 Milano, Italia
              </p>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-fortinet-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-fortinet-red" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Orari</h3>
              <p className="text-gray-600">
                Lun - Ven: 9:00 - 18:00<br />
                Sab - Dom: Chiuso
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-fortinet-red to-red-700 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hai Bisogno di un Preventivo?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Compila il nostro modulo di richiesta preventivo e ricevi un&apos;offerta personalizzata entro 24 ore
            </p>
            <Link href="/preventivo" className="inline-block bg-white text-fortinet-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Richiedi Preventivo Gratuito
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Domande Frequenti
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Quali sono i tempi di consegna?',
                a: 'Offriamo consegna rapida in 24-48 ore nelle principali città italiane (Roma, Milano, Torino, Napoli). Per altre località, i tempi possono variare da 2 a 5 giorni lavorativi.',
              },
              {
                q: 'Offrite servizi di installazione?',
                a: 'Sì, offriamo servizi professionali di installazione, configurazione e formazione per tutti i prodotti Fortinet. Contattaci per maggiori informazioni.',
              },
              {
                q: 'Qual è la garanzia sui prodotti?',
                a: 'Tutti i nostri prodotti sono coperti dalla garanzia ufficiale del produttore Fortinet. La durata varia in base al modello e alle licenze acquistate.',
              },
              {
                q: 'Posso richiedere una demo?',
                a: 'Assolutamente sì! Contattaci per programmare una dimostrazione dei prodotti Fortinet presso la tua sede o in videoconferenza.',
              },
              {
                q: 'Offrite supporto tecnico post-vendita?',
                a: 'Sì, offriamo supporto tecnico specializzato in italiano. Inoltre, tutti i prodotti includono accesso al supporto Fortinet in base alle licenze acquistate.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serviamo Tutta Italia
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              FortiStore Italia fornisce prodotti e servizi Fortinet in tutte le regioni italiane
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-fortinet-red mb-3">Nord Italia</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Milano</li>
                  <li>• Torino</li>
                  <li>• Genova</li>
                  <li>• Bologna</li>
                  <li>• Venezia</li>
                  <li>• Verona</li>
                  <li>• Brescia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-fortinet-red mb-3">Centro Italia</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Roma</li>
                  <li>• Firenze</li>
                  <li>• Perugia</li>
                  <li>• Ancona</li>
                  <li>• Pescara</li>
                  <li>• L&apos;Aquila</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-fortinet-red mb-3">Sud Italia</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Napoli</li>
                  <li>• Bari</li>
                  <li>• Palermo</li>
                  <li>• Catania</li>
                  <li>• Salerno</li>
                  <li>• Cagliari</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
