import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-fortinet-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-fortinet-red mb-4">FortiStore Italia</h3>
            <p className="text-gray-300 mb-4">
              Rivenditore ufficiale Fortinet in Italia. Soluzioni di cybersecurity per aziende di ogni dimensione.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/fortistoreitalia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-fortinet-red transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/fortistoreitalia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-fortinet-red transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/fortistoreit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-fortinet-red transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Prodotti</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categoria/fortigate" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  FortiGate Firewall
                </Link>
              </li>
              <li>
                <Link href="/categoria/fortiwifi" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  FortiWiFi
                </Link>
              </li>
              <li>
                <Link href="/categoria/fortiswitch" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  FortiSwitch
                </Link>
              </li>
              <li>
                <Link href="/categoria/fortiap" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  FortiAP Access Point
                </Link>
              </li>
              <li>
                <Link href="/categoria/management" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Management & Analytics
                </Link>
              </li>
              <li>
                <Link href="/categoria/security" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Email & Web Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Supporto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/preventivo" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Richiedi Preventivo
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Contattaci
                </Link>
              </li>
              <li>
                <Link href="/come-scegliere" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Come Scegliere
                </Link>
              </li>
              <li>
                <Link href="/installazione" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Servizi di Installazione
                </Link>
              </li>
              <li>
                <Link href="/assistenza" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Assistenza Tecnica
                </Link>
              </li>
              <li>
                <Link href="/garanzia" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  Garanzia e Resi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-fortinet-red" size={20} />
                <span className="text-gray-300">
                  Via Roma 123<br />
                  20121 Milano, Italia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="flex-shrink-0 text-fortinet-red" size={20} />
                <a href="tel:+390212345678" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  +39 02 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="flex-shrink-0 text-fortinet-red" size={20} />
                <a href="mailto:info@fortistore.it" className="text-gray-300 hover:text-fortinet-red transition-colors">
                  info@fortistore.it
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Orari di apertura:</p>
              <p className="text-sm text-gray-300">
                Lun - Ven: 9:00 - 18:00<br />
                Sab - Dom: Chiuso
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} FortiStore Italia. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-fortinet-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/termini" className="text-gray-400 hover:text-fortinet-red transition-colors">
                Termini e Condizioni
              </Link>
              <Link href="/cookie" className="text-gray-400 hover:text-fortinet-red transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              Fortinet, FortiGate, FortiWiFi, FortiSwitch, FortiAP e altri marchi Fortinet sono marchi registrati di Fortinet, Inc.
              Tutti gli altri marchi appartengono ai rispettivi proprietari.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
