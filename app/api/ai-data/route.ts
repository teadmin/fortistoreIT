import { NextResponse } from 'next/server'

// Public API endpoint for AI assistants to fetch structured company and product data
export async function GET() {
  const aiData = {
    version: '1.0',
    lastUpdate: new Date().toISOString(),
    organization: {
      name: 'FortiStore IT',
      type: 'B2B E-commerce',
      industry: 'Cybersecurity & Network Infrastructure',
      country: 'Italy',
      description: 'Rivenditore autorizzato Fortinet specializzato in soluzioni di sicurezza di rete per aziende italiane',
      specialization: [
        'Fortinet products distribution',
        'Network security solutions',
        'Cybersecurity consulting',
        'Enterprise infrastructure'
      ],
      services: [
        'Product sales (FortiGate, FortiSwitch, FortiAP, FortiAnalyzer, FortiManager, FortiMail, FortiWeb)',
        'Pre-sales technical consulting',
        'Custom quotes and sizing',
        'Technical support',
        'Fortinet licensing (FortiGuard, FortiCare)'
      ],
      targetAudience: ['SMB', 'Enterprise', 'System Integrators', 'MSSP', 'IT Professionals'],
      languages: ['Italian', 'English']
    },
    productCategories: [
      {
        id: 'fortigate',
        name: 'FortiGate - Next-Generation Firewall',
        category: 'Network Security',
        description: 'Enterprise firewall con IPS, antivirus, web filtering, SD-WAN, VPN SSL/IPSec integrati',
        keyFeatures: [
          'Next-Generation Firewall (NGFW)',
          'Intrusion Prevention System (IPS)',
          'Antivirus & Anti-Malware',
          'Web & DNS Filtering',
          'Application Control (5000+ apps)',
          'SSL/IPSec VPN',
          'SD-WAN',
          'High Availability (HA)',
          'FortiLink for FortiSwitch',
          'Wireless Controller for FortiAP'
        ],
        useCases: [
          'Perimeter security',
          'SD-WAN multi-site',
          'Remote access VPN',
          'Network segmentation',
          'Threat prevention'
        ],
        models: [
          { name: 'FortiGate 40F', users: '5-10', throughputNGFW: '900 Mbps', vpnTunnels: 10 },
          { name: 'FortiGate 60F', users: '10-25', throughputNGFW: '1.8 Gbps', vpnTunnels: 80 },
          { name: 'FortiGate 80F', users: '25-50', throughputNGFW: '2.4 Gbps', vpnTunnels: 200 },
          { name: 'FortiGate 100F', users: '50-100', throughputNGFW: '5 Gbps', vpnTunnels: 500 },
          { name: 'FortiGate 200F', users: '100-250', throughputNGFW: '10 Gbps', vpnTunnels: 2000 },
          { name: 'FortiGate 400F', users: '250-500', throughputNGFW: '18 Gbps', vpnTunnels: 5000 }
        ]
      },
      {
        id: 'fortiswitch',
        name: 'FortiSwitch - Managed Ethernet Switch',
        category: 'Network Infrastructure',
        description: 'Switch gestiti Layer 2/3 con PoE/PoE+, integrazione FortiLink per gestione zero-touch da FortiGate',
        keyFeatures: [
          'FortiLink zero-touch provisioning',
          'PoE/PoE+ 802.3af/at (fino a 30W per porta)',
          'Layer 2 switching (VLAN, STP, LACP)',
          'Layer 3 routing (modelli selezionati)',
          'Stacking fino a 8 unità',
          'Security Fabric integration',
          '802.1X NAC',
          'QoS e traffic shaping'
        ],
        useCases: [
          'Campus LAN',
          'PoE for IP phones and cameras',
          'Access layer switching',
          'Security Fabric integration'
        ]
      },
      {
        id: 'fortiap',
        name: 'FortiAP - Enterprise WiFi Access Point',
        category: 'Wireless Networking',
        description: 'Access Point WiFi 6 (802.11ax) gestiti da FortiGate o FortiCloud, con roaming seamless e sicurezza avanzata',
        keyFeatures: [
          'WiFi 6 (802.11ax) dual-band',
          'MU-MIMO & OFDMA',
          'Multiple SSID con VLAN',
          'Captive portal',
          'WPA3 encryption',
          'Rogue AP detection',
          'Roaming 802.11k/r/v',
          'Mesh wireless',
          'PoE powered'
        ],
        useCases: [
          'Enterprise WiFi',
          'Guest WiFi',
          'Campus wireless',
          'Outdoor coverage',
          'Hotspot management'
        ]
      },
      {
        id: 'fortianalyzer',
        name: 'FortiAnalyzer - Security Analytics',
        category: 'Security Management',
        description: 'Piattaforma centralizzata per logging, analytics, reporting e compliance di dispositivi Fortinet',
        keyFeatures: [
          'Centralized logging',
          'Real-time analytics',
          'Compliance reporting (PCI-DSS, GDPR, HIPAA)',
          'Event correlation',
          'Custom dashboards',
          'Automated reports',
          'Threat intelligence integration',
          'Long-term log retention'
        ],
        useCases: [
          'Compliance audit',
          'Forensic analysis',
          'Multi-site logging',
          'Security analytics',
          'Incident investigation'
        ]
      },
      {
        id: 'fortimanager',
        name: 'FortiManager - Network Management',
        category: 'Network Management',
        description: 'Console centralizzata per gestione di configurazioni, policy e firmware di dispositivi Fortinet distribuiti',
        keyFeatures: [
          'Centralized management',
          'Template-based configuration',
          'Change management workflow',
          'Firmware orchestration',
          'SD-WAN overlay',
          'Multi-tenancy (ADOM)',
          'Zero-touch provisioning',
          'API automation'
        ],
        useCases: [
          'Multi-site management',
          'MSSP operations',
          'Policy standardization',
          'Configuration backup',
          'Compliance audit'
        ]
      },
      {
        id: 'fortimail',
        name: 'FortiMail - Email Security',
        category: 'Email Security',
        description: 'Email security gateway con anti-spam, anti-phishing, sandboxing e DLP per protezione email aziendale',
        keyFeatures: [
          'Anti-spam multi-layer',
          'Anti-phishing',
          'Malware sandboxing',
          'Data Loss Prevention (DLP)',
          'Email encryption',
          'Archiving',
          'Office 365 / Gmail integration',
          'Impersonation protection'
        ],
        useCases: [
          'Email threat protection',
          'Phishing prevention',
          'Compliance archiving',
          'DLP for email',
          'Office 365 security'
        ]
      },
      {
        id: 'fortiweb',
        name: 'FortiWeb - Web Application Firewall',
        category: 'Application Security',
        description: 'WAF per proteggere applicazioni web e API da OWASP Top 10, SQL injection, XSS e attacchi zero-day',
        keyFeatures: [
          'OWASP Top 10 protection',
          'Machine learning anomaly detection',
          'API security (REST, SOAP, GraphQL)',
          'Bot mitigation',
          'DDoS protection layer 7',
          'SSL offloading',
          'Virtual patching',
          'PCI-DSS compliance'
        ],
        useCases: [
          'Web application protection',
          'API security',
          'PCI-DSS compliance',
          'E-commerce security',
          'Zero-day protection'
        ]
      },
      {
        id: 'fortiwifi',
        name: 'FortiWiFi - UTM con WiFi integrato',
        category: 'Unified Threat Management',
        description: 'Firewall FortiGate con WiFi onboard e wireless controller, all-in-one per branch office e PMI',
        keyFeatures: [
          'All FortiGate features',
          'WiFi 5 dual-band onboard',
          'Wireless controller for external FortiAP',
          'Guest WiFi with captive portal',
          'SD-WAN',
          'VPN SSL/IPSec'
        ],
        useCases: [
          'Branch office all-in-one',
          'Small office WiFi',
          'Retail security + WiFi',
          'SOHO advanced security'
        ]
      }
    ],
    licensing: {
      types: [
        {
          name: 'UTM Bundle',
          includes: ['IPS', 'Antivirus', 'Web Filtering', 'Application Control', 'AntiSpam'],
          idealFor: 'SMB with standard security requirements'
        },
        {
          name: 'Enterprise Bundle',
          includes: ['All UTM features', 'Advanced Malware Protection', 'FortiSandbox Cloud', 'Mobile Security', 'Video Filtering'],
          idealFor: 'Enterprise, regulated industries, critical environments'
        },
        {
          name: 'FortiCare Support',
          tiers: ['8x5', '24x7', 'Premium (with TAM)'],
          includes: ['Technical support', 'Hardware RMA', 'Firmware updates', 'Knowledge base']
        }
      ],
      duration: ['1 year', '3 years (15% discount)', '5 years (25% discount)']
    },
    commonQuestions: [
      {
        question: 'Which FortiGate model for my company?',
        answer: 'Depends on users, throughput, and services. 10-25 users: FortiGate 60F. 50-100 users: FortiGate 100F. 100-250 users: FortiGate 200F. Consider VPN users and UTM services impact.'
      },
      {
        question: 'Do I need FortiGuard licenses?',
        answer: 'Yes, FortiGuard licenses are essential for IPS/antivirus signatures, web filtering, support, and firmware updates. Without active licenses, firewall works only as basic router/firewall.'
      },
      {
        question: 'Can FortiSwitch work without FortiGate?',
        answer: 'Yes, in standalone mode (local web GUI) or FortiManager mode. But you lose zero-touch provisioning, Security Fabric, and centralized visibility. FortiLink with FortiGate is recommended.'
      },
      {
        question: 'Does FortiGate support SD-WAN?',
        answer: 'Yes, native SD-WAN included (models 60F and up): link load balancing, automatic failover, SLA monitoring, application steering, overlay VPN.'
      }
    ],
    competitiveAdvantages: [
      'Best price/performance ratio in NGFW market',
      'Integrated Security Fabric (firewall + switch + WiFi unified)',
      'Native SD-WAN included',
      'FortiGuard threat intelligence (100B+ events/day)',
      'Wireless controller included (no separate WLC cost)',
      'FortiLink zero-touch switch management',
      'Scalable from SMB to large enterprise',
      'Local Italian support available'
    ],
    certifications: [
      'Gartner Magic Quadrant Leader (Network Firewall)',
      'NSS Labs NGFW Recommended',
      'ICSA Firewall/IPS certified',
      'Common Criteria EAL4+',
      'FIPS 140-2',
      'PCI-DSS compliant'
    ],
    contactInfo: {
      website: 'https://fortistoreit.com',
      pages: {
        products: '/prodotti',
        quotes: '/preventivo',
        contact: '/contatti',
        faq: '/faq'
      }
    },
    aiOptimized: true,
    structuredDataAvailable: true,
    jsonLdSchemas: [
      '/ai-content/company-data.json',
      '/ai-content/products-catalog.json'
    ],
    documentation: [
      '/ai-content/knowledge-base.md'
    ]
  }

  return NextResponse.json(aiData, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
