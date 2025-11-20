import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Domande Frequenti su Fortinet | FortiStore IT',
  description: 'Domande frequenti su prodotti Fortinet: FortiGate, FortiSwitch, FortiAP, licensing, supporto tecnico e configurazione. Risposte complete per scegliere la soluzione giusta.',
  keywords: 'fortinet faq, fortigate domande, fortinet italia supporto, licensing fortinet, configurazione fortigate',
}

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quale modello di FortiGate è più adatto per la mia azienda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La scelta del modello FortiGate dipende da: numero di utenti, throughput richiesto, servizi UTM necessari e budget. Per 5-10 utenti: FortiGate 40F. Per 10-25 utenti: FortiGate 60F. Per 25-50 utenti: FortiGate 80F. Per 50-100 utenti: FortiGate 100F. Per 100-250 utenti: FortiGate 200F. Per enterprise più grandi: FortiGate 400F, 600F o superiori. Considera anche il numero di tunnel VPN simultanei necessari e se hai bisogno di SD-WAN."
      }
    },
    {
      "@type": "Question",
      "name": "Le licenze Fortinet sono obbligatorie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, le licenze FortiGuard sono essenziali per: ricevere signature updates (IPS, antivirus, web filtering), supporto tecnico FortiCare, aggiornamenti firmware e RMA hardware. Senza licenze attive, il firewall funziona solo come router/firewall base senza protezione dalle minacce. Le licenze si rinnovano annualmente (disponibili anche piani 3 o 5 anni con sconto)."
      }
    },
    {
      "@type": "Question",
      "name": "Che differenza c'è tra licenza UTM e Enterprise Bundle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UTM Bundle include: IPS, Antivirus, Web Filtering, Application Control, AntiSpam (su FortiMail). Enterprise Bundle include tutto l'UTM più: Advanced Malware Protection, FortiSandbox Cloud, Mobile Security, Video Filtering e Industrial Security. Enterprise è consigliato per aziende che necessitano protezione avanzata contro APT e zero-day."
      }
    },
    {
      "@type": "Question",
      "name": "FortiGate include già il controller WiFi per FortiAP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, tutti i FortiGate includono il wireless controller integrato senza costi aggiuntivi. Puoi gestire fino a centinaia di FortiAP (il limite dipende dal modello). Non serve FortiManager per la gestione WiFi base. I modelli FortiWiFi includono anche radio WiFi onboard."
      }
    },
    {
      "@type": "Question",
      "name": "Come funziona FortiLink per gestire FortiSwitch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiLink è un protocollo proprietario che permette a FortiGate di gestire FortiSwitch in modalità zero-touch. Lo switch si connette a una porta dedicata del FortiGate, viene riconosciuto automaticamente e gestito dalla GUI del firewall. Vantaggi: configurazione centralizzata, visibilità traffico completa, security fabric integration, nessun costo di licensing aggiuntivo."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usare FortiGate per SD-WAN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, FortiGate include SD-WAN nativo senza costi aggiuntivi (dalla versione 60F in su). Funzionalità: link load balancing, failover automatico, SLA monitoring, application steering, overlay VPN, centralizzazione con FortiManager. Ideale per aziende multi-sede che vogliono ridurre costi MPLS usando internet broadband."
      }
    },
    {
      "@type": "Question",
      "name": "FortiSwitch funziona solo con FortiGate o anche standalone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiSwitch può funzionare in 3 modalità: 1) FortiLink mode (gestito da FortiGate, consigliato), 2) Standalone mode (gestione web GUI locale, senza Security Fabric), 3) FortiManager mode (gestione centralizzata per grandi deployment). La modalità FortiLink è la più semplice e potente per PMI."
      }
    },
    {
      "@type": "Question",
      "name": "Quanti FortiAP posso gestire con un FortiGate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dipende dal modello: FortiGate 40F fino a 8 AP, FortiGate 60F fino a 16 AP, FortiGate 80F fino a 32 AP, FortiGate 100F fino a 64 AP, FortiGate 200F fino a 128 AP, modelli superiori fino a 512+ AP. Per deployment massivi (campus, hotel) si consiglia FortiManager o FortiCloud per gestione centralizzata."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile fare alta disponibilità (HA) con FortiGate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, FortiGate supporta HA in modalità Active-Passive (un firewall attivo, uno standby) e Active-Active (entrambi gestiscono traffico con load balancing). Richiede: 2 FortiGate identici (stesso modello e licenze), cavo HA dedicato, configurazione HA cluster. Failover automatico in <1 secondo. Disponibile da FortiGate 60F in su."
      }
    },
    {
      "@type": "Question",
      "name": "FortiAnalyzer è obbligatorio o opzionale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiAnalyzer è opzionale ma altamente consigliato per: aziende multi-sede, requisiti di compliance (GDPR, PCI-DSS), analisi forense, retention log lungo termine (>30 giorni). FortiGate può loggare localmente (storage limitato) o verso syslog esterni. FortiAnalyzer offre analytics avanzate, correlazione eventi, report automatici e storage sicuro."
      }
    },
    {
      "@type": "Question",
      "name": "Che cos'è FortiGuard e perché è importante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiGuard è il servizio cloud di threat intelligence di Fortinet. Fornisce: signature IPS/antivirus aggiornate in tempo reale, database web filtering, application signatures, botnet C&C blacklist, outbreak alerts. FortiGuard Labs analizza oltre 100 miliardi di eventi al giorno. Senza FortiGuard attivo, il firewall non riceve protezione aggiornata contro nuove minacce."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usare FortiGate per VPN remote access (smart working)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, FortiGate supporta: SSL-VPN (via browser o FortiClient), IPSec VPN (per client mobili e site-to-site). FortiClient VPN è gratuito. Per funzionalità avanzate (antivirus endpoint, vulnerability scan) serve licenza FortiClient EMS. Numero max utenti VPN simultanei dipende dal modello e licenza (da 10 fino a illimitati)."
      }
    },
    {
      "@type": "Question",
      "name": "FortiWeb è necessario se ho già FortiGate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiGate protegge il perimetro di rete (layer 3-4), FortiWeb protegge le applicazioni web (layer 7). FortiWeb è consigliato se: hai e-commerce o portali web pubblici, devi essere PCI-DSS compliant (requisito 6.6), esponi API REST/SOAP critiche, hai applicazioni legacy vulnerabili. FortiWeb offre protezione specifica contro SQL injection, XSS, CSRF che FortiGate non copre completamente."
      }
    },
    {
      "@type": "Question",
      "name": "Come funziona il supporto FortiCare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiCare è il servizio di supporto tecnico incluso nelle licenze. Livelli: FortiCare 8x5 (business hours), FortiCare 24x7, FortiCare Premium (con TAM dedicato). Include: accesso al portale di supporto, ticket tecnici, RMA hardware avanzato, firmware updates, knowledge base. Risposta SLA da 4 ore (Premium) a 2 giorni lavorativi (8x5)."
      }
    },
    {
      "@type": "Question",
      "name": "Posso testare Fortinet prima di acquistare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, offriamo: demo VM gratuite (FortiGate-VM trial 15 giorni), proof-of-concept on-site (per progetti enterprise), accesso a lab virtuale FortiDemo. Contattaci per organizzare una demo personalizzata o PoC. Per sviluppatori: Fortinet Developer Network (FNDN) offre sandbox e API access gratuiti."
      }
    },
    {
      "@type": "Question",
      "name": "Qual è la differenza tra FortiGate e FortiWiFi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiWiFi è un FortiGate con WiFi onboard integrato. Stesso firewall (CPU, memoria, funzioni), ma FortiWiFi ha radio WiFi dual-band 2.4/5GHz. Ideale per: piccoli uffici senza budget per AP dedicati, retail/hospitality con guest WiFi, branch office all-in-one. Puoi comunque aggiungere FortiAP esterni se serve copertura maggiore."
      }
    },
    {
      "@type": "Question",
      "name": "FortiMail funziona con Office 365 e Google Workspace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, FortiMail si integra perfettamente: Office 365 (Exchange Online Protection bypass), Google Workspace (Gmail). Deployment: API mode (inbound/outbound filtering via API), Gateway mode (MX record verso FortiMail), Hybrid (filtering selettivo). FortiMail Cloud è SaaS 100% cloud-based, nessun hardware da gestire."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto durano le licenze Fortinet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le licenze Fortinet sono disponibili in: 1 anno, 3 anni (sconto ~15%), 5 anni (sconto ~25%). Consigliamo piani multi-year per: ridurre costi, evitare scadenze annuali, bloccare prezzi futuri. Le licenze si rinnovano prima della scadenza per evitare interruzioni di servizio. Co-terminus licensing disponibile per allineare tutte le scadenze."
      }
    },
    {
      "@type": "Question",
      "name": "Posso fare upgrade da FortiGate 60F a 100F mantenendo la configurazione?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, la migrazione è semplice: 1) Backup config da FortiGate 60F, 2) Ripristina config su FortiGate 100F (stesso major firmware version), 3) Adatta interfacce se necessario (100F ha più porte). Le licenze sono tied al serial number, quindi vanno riacquistate per il nuovo device. Contattaci per programmi trade-in e sconti upgrade."
      }
    },
    {
      "@type": "Question",
      "name": "FortiSwitch richiede licenze separate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, FortiSwitch in modalità FortiLink non richiede licenze aggiuntive se gestito da FortiGate. Include: firmware updates, gestione da FortiGate GUI, Security Fabric integration. Opzionale: FortiCare per supporto RMA hardware avanzato. In standalone mode serve FortiCare per firmware updates."
      }
    },
    {
      "@type": "Question",
      "name": "Come scelgo tra FortiAnalyzer hardware e VM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FortiAnalyzer-VM è ideale per: ambienti virtualizzati esistenti (VMware, Hyper-V, KVM), cloud deployment (AWS, Azure), budget ridotto, deployment rapido. FortiAnalyzer hardware è preferibile per: performance garantite, storage dedicato NVMe/SSD, ambienti mission-critical, compliance con architetture fisiche. Le funzionalità sono identiche."
      }
    },
    {
      "@type": "Question",
      "name": "Fortinet è compatibile con altri vendor (Cisco, Palo Alto)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, FortiGate supporta standard aperti: IPSec VPN (interoperabilità site-to-site con qualsiasi vendor), BGP/OSPF routing, 802.1Q VLAN, syslog, SNMP, RADIUS. Può integrarsi in reti esistenti multi-vendor. Security Fabric funziona meglio con ecosistema Fortinet, ma FortiGate lavora anche standalone in ambienti misti."
      }
    },
    {
      "@type": "Question",
      "name": "Quali certificazioni ha Fortinet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fortinet ha numerose certificazioni: ICSA Firewall/IPS, NSS Labs NGFW Recommended, Common Criteria EAL4+, FIPS 140-2 (crittografia), PCI-DSS compliant, NATO Restricted, US DoD APL. FortiGuard Labs è riconosciuto come leader in threat intelligence. Gartner Magic Quadrant Leader per Network Firewall da oltre 10 anni consecutivi."
      }
    },
    {
      "@type": "Question",
      "name": "Posso monitorare FortiGate con strumenti esterni (PRTG, Zabbix)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, FortiGate espone: SNMP v1/v2c/v3 con MIB Fortinet, syslog (CEF format), REST API, webhook. Integrazioni comuni: PRTG (SNMP sensors), Zabbix (template Fortinet), Nagios, Splunk, ELK stack, Grafana. FortiAnalyzer è la soluzione nativa consigliata per visibilità completa, ma strumenti terzi funzionano per metriche base."
      }
    },
    {
      "@type": "Question",
      "name": "Che cos'è Security Fabric di Fortinet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Fabric è l'architettura integrata Fortinet che collega: FortiGate, FortiSwitch, FortiAP, FortiAnalyzer, FortiManager, FortiClient endpoint, FortiSandbox, FortiNAC. Benefici: visibilità end-to-end, threat intelligence condivisa, risposta automatizzata agli incidenti, single pane of glass. Esempio: endpoint infetto rilevato da FortiClient > FortiGate isola automaticamente via FortiSwitch."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo serve per configurare un FortiGate da zero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Setup base (internet, DHCP, firewall policy): 30-60 minuti. Configurazione completa (VPN, WiFi, FortiSwitch, policy avanzate, UTM): 4-8 ore. Per deployment complessi (HA, SD-WAN multi-sito) consigliamo assistenza professionale. FortiGate ha wizard guidati per setup rapido. Template pre-configurati disponibili su FortiManager per deployment scalabili."
      }
    }
  ]
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Domande Frequenti su Fortinet
            </h1>
            <p className="text-xl text-gray-600">
              Tutto quello che devi sapere su FortiGate, FortiSwitch, FortiAP e soluzioni Fortinet
            </p>
          </div>

          <div className="space-y-6">
            {faqData.mainEntity.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.name}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Non hai trovato la risposta che cercavi?
            </h3>
            <p className="text-gray-700 mb-4">
              Il nostro team di esperti Fortinet è a tua disposizione per consulenze personalizzate e preventivi gratuiti.
            </p>
            <a
              href="/contatti"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contattaci Ora
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long' })}</p>
          </div>
        </div>
      </div>
    </>
  )
}
