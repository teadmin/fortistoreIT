'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiPhone, FiMail, FiSearch, FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mainCategories = [
    { name: 'FortiGate', href: '/categoria/fortigate' },
    { name: 'FortiWiFi', href: '/categoria/fortiwifi' },
    { name: 'FortiSwitch', href: '/categoria/fortiswitch' },
    { name: 'FortiAP', href: '/categoria/fortiap' },
    { name: 'Management', href: '/categoria/management' },
    { name: 'Email & Web Security', href: '/categoria/security' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-fortinet-dark text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+390212345678" className="flex items-center gap-2 hover:text-fortinet-red transition-colors">
              <FiPhone size={14} />
              <span className="hidden sm:inline">+39 02 1234 5678</span>
            </a>
            <a href="mailto:info@fortistore.it" className="flex items-center gap-2 hover:text-fortinet-red transition-colors">
              <FiMail size={14} />
              <span className="hidden sm:inline">info@fortistore.it</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="hidden md:inline">Spedizione gratuita in Italia per ordini superiori a €500</span>
            <span className="md:hidden">Spedizione gratuita &gt; €500</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-fortinet-red">
              FortiStore
            </div>
            <div className="hidden sm:block text-sm text-gray-600">
              Italia
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cerca FortiGate, FortiSwitch, FortiAP..."
                className="w-full px-4 py-2 pr-12 border-2 border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-fortinet-red">
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/preventivo"
              className="hidden md:inline-flex btn-primary text-sm py-2"
            >
              Richiedi Preventivo
            </Link>

            <button className="p-2 hover:text-fortinet-red transition-colors lg:hidden">
              <FiSearch size={24} />
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cerca prodotti..."
              className="w-full px-4 py-2 pr-12 border-2 border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-fortinet-red">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-center gap-1">
            <li>
              <Link
                href="/prodotti"
                className="block px-4 py-4 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all"
              >
                Tutti i Prodotti
              </Link>
            </li>
            {mainCategories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="block px-4 py-4 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contatti"
                className="block px-4 py-4 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all"
              >
                Contatti
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <ul className="lg:hidden py-4 space-y-2">
              <li>
                <Link
                  href="/prodotti"
                  className="block px-4 py-2 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tutti i Prodotti
                </Link>
              </li>
              {mainCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="block px-4 py-2 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/preventivo"
                  className="block px-4 py-2 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Richiedi Preventivo
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="block px-4 py-2 text-sm font-medium hover:text-fortinet-red hover:bg-white transition-all rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contatti
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
