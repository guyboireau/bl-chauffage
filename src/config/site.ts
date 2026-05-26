// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
//  Structure :
//    siteConfig.business  → infos de l'entreprise
//    siteConfig.branding  → couleurs, polices, logo
//    siteConfig.seo       → titre, description, mots-clés
//    siteConfig.design    → variantes de mise en page A/B/C par section
//    siteConfig.pages     → titres/descriptions des pages (multipage)
//    siteConfig.features  → activer/désactiver des modules
//    siteConfig.content   → contenus sections (hero, services, etc.)
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'Tarifs',    href: '#tarifs' },
    { label: 'FAQ',       href: '#faq' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'BL Chauffage',
    tagline:  'Votre expert plomberie, chauffage et climatisation',
    industry: 'plumber',          // utilisé pour schema.org + choix de contenu IA
    icon:     'wrench',            // Icône de métier (Phosphor icon name sans le préfixe ph-)
    phone:    '07 84 54 57 77',
    email:    'contact@bl-chauffage.fr',
    address: {
      street:     '4 route Minorville',
      city:       'Manonville',
      postalCode: '54385',
      country:    'FR',
    },
    openingHours: {
      monday:    '08:00-19:00',
      tuesday:   '08:00-19:00',
      wednesday: '08:00-19:00',
      thursday:  '08:00-19:00',
      friday:    '08:00-19:00',
      saturday:  null,
      sunday:    null,
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  '',
      twitter:   '',
    },
    siret:        '',
    availability: 'Disponible',
    urgency: {
      active:    true,
      label:     'Dépannage Rapide',
      phone:     '07 84 54 57 77',
    },
    serviceArea: [
      'Manonville',
      'Domèvre-en-Haye',
      'Saizerais',
      'Meurthe-et-Moselle',
    ],
    certifications: [
      { label: 'Fluides frigorigènes', sublabel: 'Aptitude certifiée',          icon: '❄️' },
      { label: 'Expérience',                sublabel: 'Installations et réparations', icon: '🔧' },
      { label: 'Normes',           sublabel: 'Sécurité et environnement respectés',            icon: '✅' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#1d62c8',   // Bleu Plombier
    primaryDark:     '#1550a8',
    primarySoft:     '#dbeafe',
    secondaryColor:  '#0f172a',
    accentColor:     '#f08c00',   // Orange urgence
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | BL Chauffage',
    defaultTitle:       'BL Chauffage — Plomberie, Chauffage et Climatisation à Manonville',
    defaultDescription: 'BL Chauffage offre des services de plomberie, chauffage et climatisation de haute qualité. Intervention rapide sur Manonville et environs.',
    keywords: [
      'Plombier Manonville',
      'Dépannage chauffage',
      'Climatisation PAC',
      'Plomberie Meurthe-et-Moselle',
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://votre-site.fr',
    ogImage:             '/assets/og-image.jpg',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'A',
      hero:         'A',
      services:     'A',
      about:        'A',
      testimonials: 'A',
      pricing:      'A',
      faq:          'A',
      cta:          'A',
      footer:       'A',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Bienvenue sur notre site.',
    },
    services: {
      slug:        '/services',
      title:       'Nos services',
      description: 'Découvrez nos prestations.',
    },
    about: {
      slug:        '/a-propos',
      title:       'À propos',
      description: 'En savoir plus sur notre entreprise.',
    },
    blog: {
      slug:        '/blog',
      title:       'Blog',
      description: 'Actualités et conseils.',
    },
    realisations: {
      slug:        '/realisations',
      title:       'Réalisations',
      description: 'Nos projets récents.',
    },
    contact: {
      slug:        '/contact',
      title:       'Contact',
      description: 'Contactez-nous pour toute demande.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       true,
    testimonials:  true,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {

    hero: {
      eyebrow:  '— VOTRE ARTISAN DE CONFIANCE',
      h1:       'Plomberie, Chauffage & Climatisation',
      subtitle: 'BL Chauffage assure le bon fonctionnement de vos installations : réparations, installations neuves et entretiens réguliers. Intervention rapide garantie !',
      image:    '/assets/images/hero.png',
      cta1:     { label: 'Demander une intervention', href: '#contact' },
      cta2:     { label: 'Nos services', href: '#services' },
      trust:    ['Intervention rapide', 'Satisfaction client', 'Aptitude fluides frigorigènes'],
      badge:    { label: 'Note', value: '5/5', sub: 'Pages Jaunes' },
      infoCard: { status: 'Disponible', hours: 'Lun–Ven · 8h–19h', location: 'Manonville (54)' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Notre Savoir-Faire',
      subtitle: 'De la réparation d\'urgence à l\'installation complète, nous répondons à toutes vos exigences.',
      items: [
        {
          icon:  'drop',
          title: 'Plomberie & Sanitaires',
          text:  'Intervention rapide pour tout travail de dépannage, réparation de fuites ou installation de vos sanitaires.',
          link:  'En savoir plus →',
          tag:   'Dépannage rapide',
          features: ['Recherche et réparation de fuites', 'Pose de sanitaires', 'Amélioration de l\'habitat'],
        },
        {
          icon:  'fire',
          title: 'Chauffage',
          text:  'Assurez votre confort thermique avec nos services d\'entretien, réparation et pose de systèmes de chauffage.',
          link:  'En savoir plus →',
          tag:   'Entretien & Installation',
          features: ['Dépannage chauffage', 'Installations neuves', 'Entretiens réguliers'],
        },
        {
          icon:  'wind',
          title: 'Climatisation & PAC',
          text:  'Nous possédons la qualification d\'aptitude en manipulation des fluides frigorigènes pour vos installations.',
          link:  'En savoir plus →',
          tag:   'Agréé fluides',
          features: ['Pompes à Chaleur (PAC)', 'Climatisation réversible', 'Maintenance et sécurité'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos',
      title:   'L\'Exigence de la Qualité',
      text: [
        'Chez BL Chauffage, nous offrons des services de plomberie, chauffage et climatisation de haute qualité afin de répondre à toutes vos exigences. Cette petite entreprise expérimentée vous assure le bon fonctionnement de vos installations, que ce soit pour des réparations, des installations neuves ou une amélioration de votre habitat.',
        'Nous privilégions la satisfaction de nos clients en proposant des solutions efficaces et durables, tout en respectant scrupuleusement les normes de sécurité et d\'environnement.',
      ],
      stats: [
        { value: '5/5',   label: 'Avis Pages Jaunes' },
        { value: '100%',  label: 'Satisfaction Client' },
        { value: '24h',  label: 'Réactivité' },
      ],
      cta:    { label: 'Contactez-nous', href: '#contact' },
      image:  '/assets/images/about.png',
      author: { name: 'BL Chauffage', role: 'Artisan Expert', image: '/assets/images/portrait.png' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     'Ce que pensent nos clients',
      ratingStr: '5 / 5 · Avis Pages Jaunes',
      items: [
        {
          quote:   'Plombier au top du top Je recommande à 200% Intervenu en urgence pour un problème de chauffe eau, il est venu après sa longue journée de travail en début de soirée pour pas me laisser sans eau chaude Personne très agréable, réactif et à l’écoute ++++',
          name:    'valentdelay',
          role:    'Client Pages Jaunes',
          initial: 'V',
        },
      ],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    'Des prix justes et transparents',
      subtitle: 'Nos interventions sont facturées au forfait ou sur devis, sans mauvaise surprise.',
      plans: [
        {
          name:      'Dépannage Rapide',
          price:     '80€',
          unit:      '/ intervention',
          desc:      'Pour les urgences, fuites ou pannes mineures.',
          features:   ['Déplacement inclus (15km)', 'Diagnostic de la panne', '1h de main d\'œuvre'],
          cta:        'Appeler',
          highlight:  false,
          stripeLink: '',
        },
        {
          name:       'Entretien Chauffage',
          price:      '120€',
          unit:       '/ an',
          desc:       'L\'entretien annuel obligatoire pour votre chaudière ou PAC.',
          features:   ['Nettoyage complet', 'Vérification des sécurités', 'Attestation d\'entretien fournie'],
          cta:        'Prendre RDV',
          highlight:  true,
          stripeLink: '',
        },
        {
          name:       'Installation & Rénovation',
          price:      'Sur Devis',
          unit:       '',
          desc:       'Pour vos grands projets d\'installation ou d\'amélioration.',
          features:   ['Étude personnalisée gratuite', 'Conseils sur-mesure', 'Matériel de haute qualité'],
          cta:        'Demander un devis',
          highlight:  false,
          stripeLink: '',
        },
      ],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   'Vos questions sur nos interventions',
      items: [
        { q: 'Quels sont vos délais d\'intervention en cas d\'urgence ?', a: 'Nous nous efforçons d\'intervenir dans les plus brefs délais, généralement dans la journée ou sous 24h selon votre localisation autour de Manonville, afin de sécuriser votre installation.' },
        { q: 'Vos devis sont-ils gratuits ?', a: 'Oui, nous réalisons des devis gratuits et détaillés avant toute intervention lourde ou nouvelle installation. Pas de mauvaise surprise.' },
        { q: 'Êtes-vous habilités pour l\'installation de pompes à chaleur (PAC) ?', a: 'Tout à fait. Nous possédons l\'aptitude à la manipulation des fluides frigorigènes, une obligation légale pour intervenir sur les pompes à chaleur et climatisations.' },
        { q: 'Proposez-vous des contrats d\'entretien ?', a: 'Oui, nous proposons des contrats d\'entretien annuels pour vos chaudières et pompes à chaleur afin d\'en assurer la longévité et de respecter la réglementation.' },
        { q: 'Dans quel périmètre intervenez-vous ?', a: 'Notre entreprise BL Chauffage est située à Manonville, et nous nous déplaçons dans tout le secteur environnant ainsi que dans une grande partie du département de Meurthe-et-Moselle.' },
      ],
    },

    cta: {
      eyebrow:  '— INTERVENTION RAPIDE',
      title:    'Un problème de chauffage ou de plomberie ?',
      subtitle: 'N\'attendez plus, contactez-nous dès maintenant pour une intervention efficace et durable.',
      cta1:     { label: 'Appeler le 07 84 54 57 77', href: 'tel:0784545777' },
      cta2:     { label: 'Nous contacter',  href: '#contact' },
    },

    contact: {
      eyebrow:        '— Contact',
      title:          'Demandez votre devis gratuit',
      subtitle:       'Nous sommes à votre disposition pour toute demande d\'intervention sur Manonville et ses environs.',
      successMessage: 'Message bien reçu — nous vous répondons rapidement.',
      formTypes:      ['Dépannage d\'urgence', 'Installation', 'Entretien', 'Autre demande'],
    },
    certifications: {
      eyebrow:  '— Certifications & Garanties',
      title:    'Des travaux certifiés, une tranquillité d\'esprit',
      subtitle: 'La sécurité de vos installations est notre priorité. Nos habilitations vous garantissent un travail aux normes.',
    },

    footer: {
      description: 'BL Chauffage : votre expert plomberie, chauffage et climatisation basé à Manonville. Qualité, efficacité et sécurité.',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'Tarifs',    href: '#tarifs' },
        { label: 'FAQ',       href: '#faq' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé par <a href="https://guyboireau.com" rel="noopener" target="_blank">guyboireau.com</a>',
    },
    portfolio: {
      items: [
        {
          title:       'Rénovation Complète de Salle de Bain',
          category:    'Plomberie',
          location:    'Manonville',
          year:        '2024',
          description: 'Remplacement complet de la tuyauterie, pose d\'une douche à l\'italienne et installation des nouveaux équipements sanitaires.',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/placeholder-after.png',
        },
        {
          title:       'Installation d\'une Pompe à Chaleur',
          category:    'Climatisation / PAC',
          location:    'Domèvre-en-Haye',
          year:        '2024',
          description: 'Mise en place d\'un système de chauffage moderne et éco-responsable (PAC air/eau) en remplacement d\'une chaudière fioul.',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/placeholder-after.png',
        },
        {
          title:       'Remplacement d\'un Chauffe-eau Électrique',
          category:    'Chauffage',
          location:    'Saizerais',
          year:        '2023',
          description: 'Intervention d\'urgence pour remplacer un cumulus percé. Installation sécurisée avec groupe de sécurité neuf.',
          before:      '/assets/images/placeholder-before.png',
          after:       '/assets/images/placeholder-after.png',
        },
      ]
    },

  }, // fin content

} as const;

// ─── Re-exports nommés (compat avec les composants existants) ──────────────
export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;

// ─── Palettes de départ (copier-coller les valeurs dans branding) ──────────
// Plombier  → primary #1d62c8  primaryDark #1550a8  primarySoft #dbeafe  accent #f08c00
// Artisan   → primary #b8763d  primaryDark #9a6128  primarySoft #f6e7d4
// BtoB      → primary #1e3a5f  primaryDark #152b47  primarySoft #dbeafe
// Restaurant→ primary #c1440e  primaryDark #a03809  primarySoft #fde8de
// Santé     → primary #4a7c59  primaryDark #3a6347  primarySoft #dcf0e4
// ABPM      → primary #0ea5e9  primaryDark #0284c7  primarySoft #e0f2fe (Outfit)
