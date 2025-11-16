'use client'

import { useState } from 'react'
import { FiMail } from 'react-icons/fi'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Implement newsletter signup with Supabase
    setStatus('success')
    setEmail('')

    setTimeout(() => {
      setStatus('idle')
    }, 3000)
  }

  return (
    <section className="bg-fortinet-red text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <FiMail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rimani Aggiornato
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Ricevi offerte esclusive, novità sui prodotti Fortinet e consigli sulla cybersecurity
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Il tuo indirizzo email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-fortinet-red font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Iscriviti Ora
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-200 font-medium">
              ✓ Iscrizione completata! Controlla la tua email.
            </p>
          )}

          <p className="mt-6 text-sm text-red-100">
            Rispettiamo la tua privacy. Nessuno spam, puoi cancellarti in qualsiasi momento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
