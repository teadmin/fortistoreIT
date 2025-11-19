import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guide Tecniche Fortinet | Tutorial e Best Practice | FortiStore IT',
  description: 'Guide complete su FortiGate, FortiSwitch, FortiAP: configurazione, sizing, casi d\'uso reali, best practice e troubleshooting. Risorse per IT professionals.',
  keywords: 'fortinet guide, fortigate tutorial, configurazione fortigate, sizing fortinet, best practice firewall, sd-wan setup',
}

const guides = [
  {
    title: 'Sizing Guide: Come Scegliere il FortiGate Giusto',
    slug: 'fortigate-sizing',
    category: 'Planning',
    difficulty: 'Beginner',
    duration: '10 min',
    description: 'Guida completa per dimensionare correttamente il firewall FortiGate in base a utenti, throughput, servizi UTM e crescita futura.',
    topics: [
      'Calcolo throughput NGFW vs firewall-only',
      'Considerazioni per VPN concurrent users',
      'Impatto performance di IPS, antivirus, SSL inspection',
      'Margine di crescita e scalabilità',
      'Tabella comparativa modelli 40F-600F'
    ]
  },
  {
    title: 'FortiGate SD-WAN: Setup Multi-Sede',
    slug: 'sd-wan-multi-site',
    category: 'Configuration',
    difficulty: 'Intermediate',
    duration: '30 min',
    description: 'Come configurare SD-WAN con FortiGate per collegare sedi distribuite con failover automatico e SLA monitoring.',
    topics: [
      'Topology: hub-and-spoke vs full-mesh',
      'IPsec overlay VPN configuration',
      'SD-WAN rules e application steering',
      'SLA monitoring (latency, jitter, packet loss)',
      'Failover automatico tra link MPLS/internet',
      'FortiManager orchestration per deployment scalabile'
    ]
  },
  {
    title: 'FortiLink: Gestione Zero-Touch di FortiSwitch',
    slug: 'fortilink-setup',
    category: 'Configuration',
    difficulty: 'Beginner',
    duration: '15 min',
    description: 'Setup FortiLink per gestire FortiSwitch direttamente da FortiGate senza configurazione manuale dello switch.',
    topics: [
      'Connessione fisica FortiGate-FortiSwitch',
      'Auto-discovery e provisioning',
      'VLAN configuration da FortiGate GUI',
      'PoE management e monitoring',
      'Troubleshooting: switch non rilevato, LLDP issues'
    ]
  },
  {
    title: 'WiFi Aziendale con FortiGate e FortiAP',
    slug: 'enterprise-wifi',
    category: 'Configuration',
    difficulty: 'Intermediate',
    duration: '25 min',
    description: 'Deployment completo di rete WiFi enterprise: SSID multipli, guest WiFi, captive portal, 802.1X authentication.',
    topics: [
      'FortiGate wireless controller setup',
      'FortiAP discovery e provisioning',
      'SSID configuration: corporate (WPA3 + RADIUS) vs guest (captive portal)',
      'VLAN segmentation per WiFi',
      'Bandwidth shaping e QoS',
      'Roaming optimization (802.11k/r/v)'
    ]
  },
  {
    title: 'VPN SSL per Smart Working: Setup Completo',
    slug: 'ssl-vpn-remote-access',
    category: 'Configuration',
    difficulty: 'Beginner',
    duration: '20 min',
    description: 'Configurare VPN SSL su FortiGate per permettere accesso remoto sicuro ai dipendenti in smart working.',
    topics: [
      'SSL-VPN portal configuration',
      'User groups e authentication (local DB / LDAP / RADIUS)',
      'FortiClient VPN download e installazione',
      'Tunnel mode vs web mode',
      '2FA con FortiToken',
      'Split tunneling vs full tunneling',
      'Troubleshooting: connection failed, DNS issues'
    ]
  },
  {
    title: 'Alta Disponibilità (HA) FortiGate: Active-Passive',
    slug: 'fortigate-ha-setup',
    category: 'Advanced',
    difficulty: 'Advanced',
    duration: '40 min',
    description: 'Configurazione cluster HA Active-Passive per continuità operativa in caso di guasto hardware.',
    topics: [
      'Requisiti: 2 FortiGate identici, cavo HA, licenze',
      'Cablaggio: HA heartbeat, session sync',
      'Configuration sync e override',
      'Failover testing e tempi di convergenza (<1 sec)',
      'Monitoring cluster status',
      'Upgrade firmware su cluster HA'
    ]
  },
  {
    title: 'Security Fabric: Integrazione FortiGate-FortiSwitch-FortiAP',
    slug: 'security-fabric',
    category: 'Advanced',
    difficulty: 'Intermediate',
    duration: '30 min',
    description: 'Implementare Security Fabric per visibilità end-to-end e risposta automatizzata agli incidenti.',
    topics: [
      'Topology visibility: dispositivi, utenti, applicazioni',
      'Threat intelligence sharing',
      'Automated response: quarantena endpoint infetto',
      'FortiClient integration (endpoint security)',
      'Use case: rilevamento malware → isolamento automatico porta switch'
    ]
  },
  {
    title: 'Web Filtering e Application Control',
    slug: 'web-filtering-app-control',
    category: 'Configuration',
    difficulty: 'Beginner',
    duration: '15 min',
    description: 'Configurare web filtering per bloccare siti inappropriati e application control per gestire social/P2P/streaming.',
    topics: [
      'FortiGuard web filtering categories',
      'Custom URL filtering (blacklist/whitelist)',
      'Application Control: bloccare Facebook, YouTube, BitTorrent',
      'Bandwidth shaping per applicazione',
      'Exemption per user groups (es. marketing può accedere social)',
      'Logging e reporting utilizzo web'
    ]
  },
  {
    title: 'IPS e Antivirus: Protezione dalle Minacce',
    slug: 'ips-antivirus',
    category: 'Security',
    difficulty: 'Intermediate',
    duration: '20 min',
    description: 'Configurare IPS (Intrusion Prevention) e Antivirus per proteggere la rete da exploit, malware e ransomware.',
    topics: [
      'IPS signature database e update FortiGuard',
      'IPS profiles: protect, default, strict',
      'Antivirus scanning: proxy-based vs flow-based',
      'SSL inspection per scansione traffico HTTPS',
      'Exemption per falsi positivi',
      'Alert e logging su FortiAnalyzer'
    ]
  },
  {
    title: 'Segmentazione di Rete con VLAN',
    slug: 'network-segmentation-vlan',
    category: 'Configuration',
    difficulty: 'Intermediate',
    duration: '25 min',
    description: 'Implementare segmentazione di rete con VLAN per isolare traffico: LAN, DMZ, WiFi guest, VoIP, IoT.',
    topics: [
      'VLAN planning: quante VLAN servono',
      'VLAN configuration su FortiGate',
      'VLAN trunking verso FortiSwitch',
      'Firewall policy inter-VLAN',
      'Use case: DMZ per web server, VLAN guest isolata, VLAN VoIP con QoS'
    ]
  },
  {
    title: 'FortiAnalyzer: Setup Logging e Reporting',
    slug: 'fortianalyzer-setup',
    category: 'Management',
    difficulty: 'Intermediate',
    duration: '30 min',
    description: 'Configurare FortiAnalyzer per centralizzare log, creare dashboard e generare report di compliance.',
    topics: [
      'FortiAnalyzer deployment: VM vs hardware',
      'Registrazione dispositivi (FortiGate, FortiSwitch, FortiAP)',
      'Log storage e retention policy',
      'Dashboard customization',
      'Scheduled reports (PCI-DSS, GDPR)',
      'Alert configuration per eventi critici'
    ]
  },
  {
    title: 'Troubleshooting FortiGate: Problemi Comuni',
    slug: 'fortigate-troubleshooting',
    category: 'Troubleshooting',
    difficulty: 'Intermediate',
    duration: '20 min',
    description: 'Diagnosticare e risolvere i problemi più comuni: connettività, VPN, performance, policy.',
    topics: [
      'Debug flow: tracciare pacchetti attraverso policy',
      'Sniffer packet capture',
      'Session table monitoring',
      'CPU/memory high usage',
      'VPN tunnel down: phase1/phase2 mismatch',
      'DNS resolution issues',
      'Comandi CLI essenziali per troubleshooting'
    ]
  }
]

const useCases = [
  {
    title: 'PMI Manifatturiera: Protezione Rete OT/IT',
    industry: 'Manufacturing',
    size: '50 dipendenti, 2 sedi',
    challenge: 'Proteggere macchinari industriali (OT) mantenendo connettività con rete uffici (IT), VPN site-to-site, remote access per tecnici',
    solution: 'FortiGate 100F HQ + FortiGate 60F stabilimento, Industrial Security Bundle, segmentazione VLAN OT/IT, IPSec VPN',
    benefits: ['Segmentazione sicura OT/IT', 'Protezione protocolli industriali (Modbus, Profinet)', 'Remote access sicuro per tecnici', 'Visibilità traffico OT']
  },
  {
    title: 'Studio Legale: Smart Working Sicuro',
    industry: 'Legal',
    size: '20 avvocati',
    challenge: 'VPN sicuro per 15 utenti remoti, protezione documenti sensibili (DLP), compliance GDPR, WiFi guest per clienti',
    solution: 'FortiGate 60F + UTM Bundle, SSL-VPN con 2FA (FortiToken), 2x FortiAP 231F, FortiAnalyzer-VM per audit log',
    benefits: ['Accesso remoto sicuro con 2FA', 'DLP blocca upload documenti sensibili', 'Audit trail completo (GDPR)', 'WiFi guest isolato da rete interna']
  },
  {
    title: 'E-commerce: Compliance PCI-DSS',
    industry: 'Retail',
    size: 'Negozio online con web server e database',
    challenge: 'Segmentazione DMZ, protezione web application, WAF per PCI-DSS compliance, log retention 1 anno',
    solution: 'FortiGate 200F + Enterprise Bundle, FortiWeb 100F (WAF), FortiAnalyzer 200F, segmentazione VLAN (DMZ/LAN/Admin)',
    benefits: ['PCI-DSS compliant (requisito 6.6 con FortiWeb)', 'Protezione SQL injection e XSS', 'Log retention 1 anno', 'IPS high security per traffico DMZ']
  },
  {
    title: 'Hotel: WiFi Guest per 80 Camere',
    industry: 'Hospitality',
    size: '80 camere, 5000 mq',
    challenge: 'Coverage WiFi completa, captive portal customizzato, voucher per ospiti, bandwidth shaping',
    solution: 'FortiGate 100F, 25x FortiAP 231F indoor + 5x FortiAP 431F outdoor (piscina/giardino), captive portal con branding hotel',
    benefits: ['Coverage seamless 5000 mq', 'Voucher stampabili da reception', 'Bandwidth limit 10 Mbps/client', 'Guest isolation per sicurezza']
  },
  {
    title: 'Università: Web Filtering Educational',
    industry: 'Education',
    size: '500 studenti, 50 docenti',
    challenge: 'Web filtering (blocco social/gaming), WiFi sicuro studenti/staff separato, bandwidth shaping, protezione minori',
    solution: 'FortiGate 400F + UTM Bundle, 40x FortiAP 431F, 8x FortiSwitch 248F-POE, web filtering categoria Educational, 802.1X per staff',
    benefits: ['Blocco social media e gaming in orario lezioni', 'YouTube filtering (solo contenuti educativi)', 'SSID separati staff/studenti', 'Bandwidth shaping per streaming']
  }
]

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guide Tecniche Fortinet</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Tutorial completi, best practice e casi d'uso reali per FortiGate, FortiSwitch, FortiAP e soluzioni Fortinet
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Guide Tecniche */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guide Step-by-Step</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span className={`text-xs font-medium ${
                    guide.difficulty === 'Beginner' ? 'text-green-600' :
                    guide.difficulty === 'Intermediate' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {guide.description}
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Argomenti trattati:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {guide.topics.slice(0, 3).map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                    {guide.topics.length > 3 && (
                      <li className="text-red-600 text-xs">+ {guide.topics.length - 3} altri argomenti</li>
                    )}
                  </ul>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <span>⏱️ {guide.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casi d'Uso Reali */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Casi d'Uso Reali per Settore</h2>
          <p className="text-gray-600 mb-8">
            Scopri come aziende simili alla tua hanno risolto le loro sfide di sicurezza con Fortinet
          </p>
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded">🏢 {useCase.industry}</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">👥 {useCase.size}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Sfida</h4>
                    <p className="text-gray-700 text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">💡 Soluzione</h4>
                    <p className="text-gray-700 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">✅ Benefici</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Hai bisogno di una consulenza personalizzata?</h2>
          <p className="text-red-100 mb-6 text-lg">
            I nostri esperti Fortinet possono aiutarti a progettare la soluzione perfetta per la tua azienda
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/preventivo"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Richiedi Preventivo
            </Link>
            <Link
              href="/contatti"
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors border-2 border-white"
            >
              Contattaci
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
