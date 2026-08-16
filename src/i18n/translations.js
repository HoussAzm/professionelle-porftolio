export const translations = {
  fr: {
    nav: {
      links: [
        { label: 'À propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Locations', href: '#rentals' },
        { label: 'Projets', href: '#portfolio' },
        { label: 'Avis', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ],
      menuAriaLabel: 'Ouvrir le menu',
    },
    hero: {
      badge: '💼 IT & Location de luxe à Marrakech',
      heading: [
        { t: "Développeur Full-Stack et hôte de séjours d'exception à " },
        { t: 'Marrakech', hl: true },
      ],
      subtitle:
        "Je conçois des sites et plateformes web sur mesure, et je gère en parallèle un portefeuille de palais, villas, riads et appartements en location courte durée. Deux activités, une même exigence de qualité.",
      ctaPrimary: 'Démarrer un projet',
      ctaSecondary: 'Voir mes locations',
      stats: [
        { value: '5+', label: "Ans d'expérience" },
        { value: '30+', label: 'Projets livrés' },
        { value: '20+', label: 'Clients satisfaits' },
      ],
    },
    about: {
      eyebrow: 'À propos',
      heading: [
        { t: 'Deux domaines, une même exigence : ' },
        { t: 'le détail', hl: true },
        { t: ' et ' },
        { t: "l'expérience", hl: true },
        { t: '.' },
      ],
      bio1: "Développeur full-stack depuis plus de 5 ans, j'accompagne des marques et des entrepreneurs dans la création de sites vitrines, plateformes e-commerce et outils internes sur mesure. Mon approche : comprendre l'objectif business avant d'écrire la moindre ligne de code, puis livrer une interface rapide, accessible et facile à faire évoluer.",
      bio2: "En parallèle, je gère un portefeuille de biens d'exception en location courte durée à Marrakech — palais, villas, riads et appartements. De l'accueil des voyageurs à la conciergerie, j'applique la même rigueur que dans mes projets web : chaque détail compte dans l'expérience vécue.",
      skills: ['React', 'Next.js', 'JavaScript / TypeScript', 'Node.js', 'Laravel', 'PHP', 'MySQL / PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Git', 'Figma'],
      facts: [
        { label: 'Basé à', value: 'Marrakech, Maroc' },
        { label: 'Activités', value: 'Développement web & Location de luxe' },
        { label: 'Expérience', value: '5+ ans' },
        { label: 'Langues', value: 'FR · EN · AR' },
      ],
    },
    services: {
      eyebrow: 'Services',
      heading: 'Ce que je peux faire pour vous',
      subtitle: "De la première maquette à la mise en production, je couvre l'ensemble du cycle de développement.",
      items: [
        { icon: '🎨', title: 'Design & UI/UX', description: "Interfaces modernes, cohérentes et pensées pour guider l'utilisateur vers l'action." },
        { icon: '⚛️', title: 'Développement Frontend', description: 'Applications React / Next.js rapides, accessibles et responsive sur tous les écrans.' },
        { icon: '🔧', title: 'Développement Backend', description: 'APIs et architectures robustes avec Node.js et Laravel, pensées pour évoluer.' },
        { icon: '🛒', title: 'E-commerce', description: 'Boutiques en ligne performantes, du catalogue produit au paiement sécurisé.' },
        { icon: '🏨', title: 'Plateformes de réservation', description: "Systèmes de réservation sur mesure pour l'hôtellerie et la location de biens." },
        { icon: '🚀', title: 'Consulting technique', description: 'Audit, choix technologiques et accompagnement pour lancer ou faire évoluer un produit.' },
      ],
    },
    rentals: {
      eyebrow: 'Location de luxe · Marrakech',
      heading: "Des séjours d'exception à Marrakech",
      subtitle: 'En parallèle du développement web, je gère un portefeuille de biens haut de gamme en location courte durée — de la réservation à la conciergerie sur place.',
      types: [
        { icon: '🏰', title: 'Palais', description: 'Demeures royales avec riad intérieur, piscine et service de majordome.' },
        { icon: '🏡', title: 'Villas', description: "Villas modernes avec piscine privée, jardin et vue sur l'Atlas." },
        { icon: '🕌', title: 'Riads', description: 'Riads traditionnels rénovés au cœur de la médina, authenticité et confort.' },
        { icon: '🏢', title: 'Appartements', description: 'Appartements design dans les quartiers de Guéliz et Hivernage.' },
      ],
      features: ['Conciergerie 24/7', 'Ménage & linge inclus', 'Transferts aéroport', 'Réservation flexible'],
      cta: 'Demander une disponibilité',
    },
    stats: {
      items: [
        { value: '30+', label: 'Projets livrés' },
        { value: '20+', label: 'Clients accompagnés' },
        { value: '5+', label: "Années d'expérience" },
        { value: '98%', label: 'Taux de satisfaction' },
      ],
    },
    portfolio: {
      eyebrow: 'Projets',
      heading: 'Une sélection de mes réalisations',
      subtitle: 'Quelques projets représentatifs de ma manière de travailler : design soigné, code propre, résultats mesurables.',
      projects: [
        { emoji: '🏛️', title: 'MenaraStay', category: 'Plateforme de réservation', description: 'Plateforme développée pour mon activité de location de palais, villas et riads à Marrakech : gestion multi-propriétés et paiement en ligne.', tags: ['React', 'Node.js', 'Stripe'] },
        { emoji: '🛍️', title: 'Atlas Boutique', category: 'E-commerce', description: "Boutique en ligne pour une marque d'artisanat marocain, du catalogue à la logistique.", tags: ['Next.js', 'Laravel', 'MySQL'] },
        { emoji: '📊', title: 'PalmDash', category: 'Outil interne', description: "Tableau de bord d'administration pour piloter réservations, revenus et occupation en temps réel.", tags: ['React', 'Node.js', 'PostgreSQL'] },
        { emoji: '🏢', title: 'Noor Consulting', category: 'Site vitrine', description: 'Site corporate pour un cabinet de conseil, optimisé pour la génération de leads.', tags: ['React', 'Tailwind CSS'] },
      ],
    },
    testimonials: {
      eyebrow: 'Avis clients',
      heading: 'Ce que disent mes clients',
      items: [
        { quote: "Houssam a livré notre plateforme de réservation en avance sur le planning, avec une qualité de code irréprochable. Communication claire du début à la fin.", name: 'Sara El Amrani', role: 'Fondatrice, MenaraStay' },
        { quote: "Un vrai partenaire technique plus qu'un simple prestataire. Il a su traduire nos besoins business en solutions techniques concrètes.", name: 'Yassine Bennani', role: 'CEO, Atlas Boutique' },
        { quote: 'Le site a doublé notre taux de conversion en trois mois. Réactif, rigoureux et force de proposition sur le design.', name: 'Laila Fassi', role: 'Directrice Marketing, Noor Consulting' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Travaillons ensemble',
      lead: "Un projet web en tête ou une envie de séjour à Marrakech ? Parlez-moi de vos objectifs, je reviens vers vous sous 24h.",
      info: [
        { label: 'Email', value: 'houssamazmour@gmail.com', href: 'mailto:houssamazmour@gmail.com' },
        { label: 'Localisation', value: 'Marrakech, Maroc' },
        { label: 'Disponibilité', value: 'Ouvert aux missions freelance' },
      ],
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email',
        emailPlaceholder: 'vous@exemple.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet...',
        submit: 'Envoyer le message',
        success: '✓ Message envoyé, merci ! Je vous réponds rapidement.',
      },
    },
    footer: {
      socials: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Email', href: 'mailto:houssamazmour@gmail.com' },
      ],
      rights: 'Tous droits réservés.',
    },
  },

  en: {
    nav: {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Rentals', href: '#rentals' },
        { label: 'Projects', href: '#portfolio' },
        { label: 'Reviews', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ],
      menuAriaLabel: 'Open menu',
    },
    hero: {
      badge: '💼 IT & Luxury Rentals in Marrakech',
      heading: [
        { t: 'Full-Stack Developer and host of exceptional stays in ' },
        { t: 'Marrakech', hl: true },
      ],
      subtitle:
        'I design custom websites and web platforms, and manage a portfolio of palaces, villas, riads and apartments for short-term rental. Two activities, one standard of quality.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'View my rentals',
      stats: [
        { value: '5+', label: 'Years of experience' },
        { value: '30+', label: 'Projects delivered' },
        { value: '20+', label: 'Happy clients' },
      ],
    },
    about: {
      eyebrow: 'About',
      heading: [
        { t: 'Two fields, one same standard: ' },
        { t: 'attention to detail', hl: true },
        { t: ' and ' },
        { t: 'experience', hl: true },
        { t: '.' },
      ],
      bio1: "A full-stack developer for over 5 years, I help brands and entrepreneurs build showcase websites, e-commerce platforms and custom internal tools. My approach: understand the business goal before writing a single line of code, then deliver an interface that's fast, accessible and easy to evolve.",
      bio2: 'Alongside that, I manage a portfolio of exceptional short-term rental properties in Marrakech — palaces, villas, riads and apartments. From welcoming guests to concierge service, I apply the same rigor as in my web projects: every detail shapes the experience.',
      skills: ['React', 'Next.js', 'JavaScript / TypeScript', 'Node.js', 'Laravel', 'PHP', 'MySQL / PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Git', 'Figma'],
      facts: [
        { label: 'Based in', value: 'Marrakech, Morocco' },
        { label: 'Activities', value: 'Web development & Luxury rentals' },
        { label: 'Experience', value: '5+ years' },
        { label: 'Languages', value: 'FR · EN · AR' },
      ],
    },
    services: {
      eyebrow: 'Services',
      heading: 'What I can do for you',
      subtitle: 'From the first mockup to production, I cover the full development cycle.',
      items: [
        { icon: '🎨', title: 'Design & UI/UX', description: 'Modern, consistent interfaces designed to guide users toward action.' },
        { icon: '⚛️', title: 'Frontend Development', description: 'Fast, accessible React / Next.js applications, responsive on every screen.' },
        { icon: '🔧', title: 'Backend Development', description: 'Robust APIs and architectures with Node.js and Laravel, built to scale.' },
        { icon: '🛒', title: 'E-commerce', description: 'High-performing online stores, from product catalog to secure checkout.' },
        { icon: '🏨', title: 'Booking Platforms', description: 'Custom booking systems for hospitality and property rental.' },
        { icon: '🚀', title: 'Technical Consulting', description: 'Audit, technology choices and support to launch or evolve a product.' },
      ],
    },
    rentals: {
      eyebrow: 'Luxury Rentals · Marrakech',
      heading: 'Exceptional stays in Marrakech',
      subtitle: 'Alongside web development, I manage a portfolio of high-end short-term rental properties — from booking to on-site concierge service.',
      types: [
        { icon: '🏰', title: 'Palaces', description: 'Royal residences with an inner riad, pool and butler service.' },
        { icon: '🏡', title: 'Villas', description: 'Modern villas with private pool, garden and Atlas mountain views.' },
        { icon: '🕌', title: 'Riads', description: 'Traditional riads renovated in the heart of the medina, authenticity and comfort.' },
        { icon: '🏢', title: 'Apartments', description: 'Design apartments in the Guéliz and Hivernage districts.' },
      ],
      features: ['24/7 concierge', 'Housekeeping & linen included', 'Airport transfers', 'Flexible booking'],
      cta: 'Check availability',
    },
    stats: {
      items: [
        { value: '30+', label: 'Projects delivered' },
        { value: '20+', label: 'Clients served' },
        { value: '5+', label: 'Years of experience' },
        { value: '98%', label: 'Satisfaction rate' },
      ],
    },
    portfolio: {
      eyebrow: 'Projects',
      heading: 'A selection of my work',
      subtitle: 'A few projects that represent how I work: careful design, clean code, measurable results.',
      projects: [
        { emoji: '🏛️', title: 'MenaraStay', category: 'Booking platform', description: 'Platform built for my palace, villa and riad rental business in Marrakech: multi-property management and online payment.', tags: ['React', 'Node.js', 'Stripe'] },
        { emoji: '🛍️', title: 'Atlas Boutique', category: 'E-commerce', description: 'Online store for a Moroccan craftsmanship brand, from catalog to logistics.', tags: ['Next.js', 'Laravel', 'MySQL'] },
        { emoji: '📊', title: 'PalmDash', category: 'Internal tool', description: 'Admin dashboard to manage bookings, revenue and occupancy in real time.', tags: ['React', 'Node.js', 'PostgreSQL'] },
        { emoji: '🏢', title: 'Noor Consulting', category: 'Showcase website', description: 'Corporate website for a consulting firm, optimized for lead generation.', tags: ['React', 'Tailwind CSS'] },
      ],
    },
    testimonials: {
      eyebrow: 'Client reviews',
      heading: 'What my clients say',
      items: [
        { quote: 'Houssam delivered our booking platform ahead of schedule, with flawless code quality. Clear communication from start to finish.', name: 'Sara El Amrani', role: 'Founder, MenaraStay' },
        { quote: 'A true technical partner, not just a contractor. He translated our business needs into concrete technical solutions.', name: 'Yassine Bennani', role: 'CEO, Atlas Boutique' },
        { quote: 'The website doubled our conversion rate in three months. Responsive, rigorous, and full of design ideas.', name: 'Laila Fassi', role: 'Marketing Director, Noor Consulting' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's work together",
      lead: "Have a web project in mind, or planning a stay in Marrakech? Tell me about your goals — I'll get back to you within 24h.",
      info: [
        { label: 'Email', value: 'houssamazmour@gmail.com', href: 'mailto:houssamazmour@gmail.com' },
        { label: 'Location', value: 'Marrakech, Morocco' },
        { label: 'Availability', value: 'Open to freelance work' },
      ],
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send message',
        success: "✓ Message sent, thank you! I'll get back to you shortly.",
      },
    },
    footer: {
      socials: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Email', href: 'mailto:houssamazmour@gmail.com' },
      ],
      rights: 'All rights reserved.',
    },
  },

  es: {
    nav: {
      links: [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Servicios', href: '#services' },
        { label: 'Alquileres', href: '#rentals' },
        { label: 'Proyectos', href: '#portfolio' },
        { label: 'Opiniones', href: '#testimonials' },
        { label: 'Contacto', href: '#contact' },
      ],
      menuAriaLabel: 'Abrir el menú',
    },
    hero: {
      badge: '💼 IT y Alquileres de Lujo en Marrakech',
      heading: [
        { t: 'Desarrollador Full-Stack y anfitrión de estancias excepcionales en ' },
        { t: 'Marrakech', hl: true },
      ],
      subtitle:
        'Diseño sitios web y plataformas a medida, y gestiono en paralelo una cartera de palacios, villas, riads y apartamentos en alquiler de corta duración. Dos actividades, una misma exigencia de calidad.',
      ctaPrimary: 'Empezar un proyecto',
      ctaSecondary: 'Ver mis alquileres',
      stats: [
        { value: '5+', label: 'Años de experiencia' },
        { value: '30+', label: 'Proyectos entregados' },
        { value: '20+', label: 'Clientes satisfechos' },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      heading: [
        { t: 'Dos áreas, una misma exigencia: ' },
        { t: 'el detalle', hl: true },
        { t: ' y ' },
        { t: 'la experiencia', hl: true },
        { t: '.' },
      ],
      bio1: 'Desarrollador full-stack desde hace más de 5 años, ayudo a marcas y emprendedores a crear sitios web corporativos, plataformas de e-commerce y herramientas internas a medida. Mi enfoque: entender el objetivo de negocio antes de escribir una sola línea de código, y luego entregar una interfaz rápida, accesible y fácil de evolucionar.',
      bio2: 'En paralelo, gestiono una cartera de propiedades excepcionales en alquiler de corta duración en Marrakech — palacios, villas, riads y apartamentos. Desde la acogida de los huéspedes hasta el servicio de conserjería, aplico el mismo rigor que en mis proyectos web: cada detalle cuenta en la experiencia vivida.',
      skills: ['React', 'Next.js', 'JavaScript / TypeScript', 'Node.js', 'Laravel', 'PHP', 'MySQL / PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Git', 'Figma'],
      facts: [
        { label: 'Ubicado en', value: 'Marrakech, Marruecos' },
        { label: 'Actividades', value: 'Desarrollo web y alquileres de lujo' },
        { label: 'Experiencia', value: '5+ años' },
        { label: 'Idiomas', value: 'FR · EN · AR' },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      heading: 'Qué puedo hacer por ti',
      subtitle: 'Desde la primera maqueta hasta la puesta en producción, cubro todo el ciclo de desarrollo.',
      items: [
        { icon: '🎨', title: 'Diseño & UI/UX', description: 'Interfaces modernas y coherentes, pensadas para guiar al usuario hacia la acción.' },
        { icon: '⚛️', title: 'Desarrollo Frontend', description: 'Aplicaciones React / Next.js rápidas, accesibles y responsive en todas las pantallas.' },
        { icon: '🔧', title: 'Desarrollo Backend', description: 'APIs y arquitecturas robustas con Node.js y Laravel, pensadas para escalar.' },
        { icon: '🛒', title: 'E-commerce', description: 'Tiendas online de alto rendimiento, desde el catálogo hasta el pago seguro.' },
        { icon: '🏨', title: 'Plataformas de reserva', description: 'Sistemas de reserva a medida para hostelería y alquiler de propiedades.' },
        { icon: '🚀', title: 'Consultoría técnica', description: 'Auditoría, elección tecnológica y acompañamiento para lanzar o evolucionar un producto.' },
      ],
    },
    rentals: {
      eyebrow: 'Alquiler de lujo · Marrakech',
      heading: 'Estancias excepcionales en Marrakech',
      subtitle: 'En paralelo al desarrollo web, gestiono una cartera de propiedades de alta gama en alquiler de corta duración — desde la reserva hasta la conserjería in situ.',
      types: [
        { icon: '🏰', title: 'Palacios', description: 'Residencias reales con riad interior, piscina y servicio de mayordomo.' },
        { icon: '🏡', title: 'Villas', description: 'Villas modernas con piscina privada, jardín y vistas al Atlas.' },
        { icon: '🕌', title: 'Riads', description: 'Riads tradicionales renovados en el corazón de la medina, autenticidad y confort.' },
        { icon: '🏢', title: 'Apartamentos', description: 'Apartamentos de diseño en los barrios de Guéliz e Hivernage.' },
      ],
      features: ['Conserjería 24/7', 'Limpieza y ropa de cama incluidas', 'Traslados al aeropuerto', 'Reserva flexible'],
      cta: 'Consultar disponibilidad',
    },
    stats: {
      items: [
        { value: '30+', label: 'Proyectos entregados' },
        { value: '20+', label: 'Clientes atendidos' },
        { value: '5+', label: 'Años de experiencia' },
        { value: '98%', label: 'Tasa de satisfacción' },
      ],
    },
    portfolio: {
      eyebrow: 'Proyectos',
      heading: 'Una selección de mis trabajos',
      subtitle: 'Algunos proyectos representativos de mi forma de trabajar: diseño cuidado, código limpio, resultados medibles.',
      projects: [
        { emoji: '🏛️', title: 'MenaraStay', category: 'Plataforma de reservas', description: 'Plataforma desarrollada para mi actividad de alquiler de palacios, villas y riads en Marrakech: gestión multipropiedad y pago en línea.', tags: ['React', 'Node.js', 'Stripe'] },
        { emoji: '🛍️', title: 'Atlas Boutique', category: 'E-commerce', description: 'Tienda online para una marca de artesanía marroquí, desde el catálogo hasta la logística.', tags: ['Next.js', 'Laravel', 'MySQL'] },
        { emoji: '📊', title: 'PalmDash', category: 'Herramienta interna', description: 'Panel de administración para gestionar reservas, ingresos y ocupación en tiempo real.', tags: ['React', 'Node.js', 'PostgreSQL'] },
        { emoji: '🏢', title: 'Noor Consulting', category: 'Sitio corporativo', description: 'Sitio web corporativo para una consultora, optimizado para la generación de leads.', tags: ['React', 'Tailwind CSS'] },
      ],
    },
    testimonials: {
      eyebrow: 'Opiniones de clientes',
      heading: 'Lo que dicen mis clientes',
      items: [
        { quote: 'Houssam entregó nuestra plataforma de reservas antes de lo previsto, con una calidad de código impecable. Comunicación clara de principio a fin.', name: 'Sara El Amrani', role: 'Fundadora, MenaraStay' },
        { quote: 'Un verdadero socio técnico, más que un simple proveedor. Supo traducir nuestras necesidades de negocio en soluciones técnicas concretas.', name: 'Yassine Bennani', role: 'CEO, Atlas Boutique' },
        { quote: 'El sitio duplicó nuestra tasa de conversión en tres meses. Receptivo, riguroso y con muchas propuestas de diseño.', name: 'Laila Fassi', role: 'Directora de Marketing, Noor Consulting' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Trabajemos juntos',
      lead: '¿Tienes un proyecto web en mente o planeas una estancia en Marrakech? Cuéntame tus objetivos, te respondo en menos de 24h.',
      info: [
        { label: 'Email', value: 'houssamazmour@gmail.com', href: 'mailto:houssamazmour@gmail.com' },
        { label: 'Ubicación', value: 'Marrakech, Marruecos' },
        { label: 'Disponibilidad', value: 'Abierto a proyectos freelance' },
      ],
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@ejemplo.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar mensaje',
        success: '✓ ¡Mensaje enviado, gracias! Te responderé pronto.',
      },
    },
    footer: {
      socials: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Email', href: 'mailto:houssamazmour@gmail.com' },
      ],
      rights: 'Todos los derechos reservados.',
    },
  },
};

export const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];
