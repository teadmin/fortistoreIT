'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { FiMail, FiPhone, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi'

export default function PreventivoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    prodottoInteresse: '',
    messaggio: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // TODO: Implement form submission with Supabase
    setTimeout(() => {
      setStatus('success')
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        azienda: '',
        prodottoInteresse: '',
        messaggio: '',
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-fortinet-dark to-gray-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Richiedi un Preventivo Gratuito
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Il nostro team di esperti ti aiuterà a trovare la soluzione Fortinet perfetta per la tua azienda
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contattaci</h2>
                <p className="text-gray-600 mb-6">
                  Compila il modulo o contattaci direttamente. Riceverai una risposta entro 24 ore.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiPhone className="text-fortinet-red mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Telefono</div>
                    <a href="tel:+390212345678" className="text-gray-600 hover:text-fortinet-red">
                      +39 02 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="text-fortinet-red mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@fortistore.it" className="text-gray-600 hover:text-fortinet-red">
                      info@fortistore.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiBriefcase className="text-fortinet-red mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Orari</div>
                    <div className="text-gray-600">
                      Lun - Ven: 9:00 - 18:00<br />
                      Sab - Dom: Chiuso
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Risposta rapida garantita:</strong> Il nostro team risponde a tutte le richieste entro 24 ore lavorative.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Richiesta Inviata!</h3>
                    <p className="text-gray-600 mb-6">
                      Grazie per la tua richiesta. Ti contatteremo entro 24 ore.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                    >
                      Invia Altra Richiesta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
                          placeholder="Mario"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cognome *
                        </label>
                        <input
                          type="text"
                          name="cognome"
                          value={formData.cognome}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
                          placeholder="Rossi"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Aziendale *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
                        placeholder="mario.rossi@azienda.it"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
                        placeholder="+39 02 1234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Azienda *
                      </label>
                      <input
                        type="text"
                        name="azienda"
                        value={formData.azienda}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
                        placeholder="Nome azienda"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Prodotto di Interesse
                      </label>
                      <select
                        name="prodottoInteresse"
                        value={formData.prodottoInteresse}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
                      >
                        <option value="">Seleziona un prodotto</option>
                        <option value="fortigate">FortiGate Firewall</option>
                        <option value="fortiwifi">FortiWiFi</option>
                        <option value="fortiswitch">FortiSwitch</option>
                        <option value="fortiap">FortiAP</option>
                        <option value="fortianalyzer">FortiAnalyzer</option>
                        <option value="fortimanager">FortiManager</option>
                        <option value="fortimail">FortiMail</option>
                        <option value="fortiweb">FortiWeb</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Messaggio *
                      </label>
                      <textarea
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none resize-none"
                        placeholder="Descrivi le tue esigenze o fai domande sui nostri prodotti..."
                      />
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>
                        Inviando questo modulo accetti la nostra{' '}
                        <a href="/privacy" className="text-fortinet-red hover:underline">
                          Privacy Policy
                        </a>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Invio in corso...' : 'Invia Richiesta'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-12">
            Cosa Succede Dopo la Richiesta?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Analisi Esigenze',
                description: 'Analizziamo le tue necessità di sicurezza',
              },
              {
                step: '2',
                title: 'Preventivo Personalizzato',
                description: 'Ti inviamo un preventivo dettagliato',
              },
              {
                step: '3',
                title: 'Consulenza Tecnica',
                description: 'Supporto nella scelta della soluzione',
              },
              {
                step: '4',
                title: 'Implementazione',
                description: 'Installazione e configurazione professionale',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-fortinet-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
