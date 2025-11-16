import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FortiStore Italia - Rivenditore Ufficiale Fortinet',
    short_name: 'FortiStore IT',
    description: 'Rivenditore ufficiale Fortinet in Italia. FortiGate, FortiWiFi, FortiSwitch, FortiAP e tutte le soluzioni di sicurezza Fortinet.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#EE3124',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
