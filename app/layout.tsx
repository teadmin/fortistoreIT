import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { italianKeywords } from '@/lib/seo-keywords'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fortistore.it'),
  title: {
    default: 'FortiStore Italia - Rivenditore Ufficiale Fortinet | FortiGate, FortiWiFi, FortiSwitch',
    template: '%s | FortiStore Italia'
  },
  description: 'Rivenditore ufficiale Fortinet in Italia. Acquista FortiGate, FortiWiFi, FortiSwitch, FortiAP. Firewall di nuova generazione, protezione dalle minacce, SD-WAN. Spedizione in tutta Italia: Roma, Milano, Torino, Napoli.',
  keywords: [
    ...italianKeywords.primary,
    ...italianKeywords.secondary.slice(0, 10),
  ],
  authors: [{ name: 'FortiStore Italia' }],
  creator: 'FortiStore Italia',
  publisher: 'FortiStore Italia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://fortistore.it',
    title: 'FortiStore Italia - Rivenditore Ufficiale Fortinet',
    description: 'Rivenditore ufficiale Fortinet in Italia. FortiGate, FortiWiFi, FortiSwitch, FortiAP. Firewall NGFW, protezione cybersecurity.',
    siteName: 'FortiStore Italia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FortiStore Italia - Fortinet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FortiStore Italia - Rivenditore Ufficiale Fortinet',
    description: 'Rivenditore ufficiale Fortinet in Italia. FortiGate, FortiWiFi, FortiSwitch, FortiAP.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://fortistore.it',
    languages: {
      'it-IT': 'https://fortistore.it',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#EE3124" />

        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FortiStore Italia',
              url: 'https://fortistore.it',
              logo: 'https://fortistore.it/images/logo.png',
              description: 'Rivenditore ufficiale Fortinet in Italia',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+39-02-XXXXXXX',
                contactType: 'customer service',
                areaServed: 'IT',
                availableLanguage: ['Italian'],
              },
              sameAs: [
                'https://www.facebook.com/fortistoreitalia',
                'https://www.linkedin.com/company/fortistoreitalia',
                'https://twitter.com/fortistoreit',
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'FortiStore Italia',
              url: 'https://fortistore.it',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://fortistore.it/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
