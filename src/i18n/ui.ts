// src/i18n/ui.ts

export const languages = {
  es: "Español",
  en: "English",
};

export const supportedLangs = Object.keys(languages);

export const defaultLang = "es";

export const ui = {
  es: {
    /* ============================
        ABOUT / HERO
    ============================ */
    about_title: 'Hola, soy <span class="text-gradient">Ernesto Núñez</span>.<br/>Desarrollador Full Stack.',
    /* Short hero snippet and CTA */
    about_snippet: "Desarrollador Full Stack centrado en interfaces modernas y soluciones escalables...",
    about_readMore: "Saber más sobre mí",

    about_paragraph1:
      "Soy un desarrollador de software con más de 7 años de experiencia transformando ideas complejas en soluciones digitales elegantes, funcionales y orientadas al usuario. Mi especialidad es el desarrollo frontend con tecnologías como ReactJS, Next.js, React Native, TypeScript y JavaScript, lo que me permite crear interfaces modernas, escalables y de alto rendimiento. A nivel backend, cuento con experiencia intermedia en Node.js, .NET y Python, además de integrar servicios y arquitecturas basadas en AWS.",

    about_paragraph2:
      "Mi trabajo se fundamenta en buenas prácticas, patrones de diseño, APIs eficientes y estrategias de pruebas robustas que garantizan calidad y confiabilidad en cada proyecto. Me caracterizo por combinar autonomía técnica con una colaboración efectiva en equipos multidisciplinarios, siempre enfocado en construir productos que generen impacto real y resultados sostenibles.",

    about_viewProjects: "Ir a LinkedIn",
    about_downloadCV: "Descargar CV",

    about_yearsExp: "Años de Exp.",
    about_projects: "Proyectos",
    about_commitment: "Compromiso",

    about_currentStatus: "Status actual",
    about_currentStatusMessage: "Construyendo la próxima generación de apps web",

    /* ============================
        ABOUT PAGE (LEARN MORE)
    ============================ */
    about_page_hero_title: "SOBRE\nMÍ.",
    about_page_hero_subtitle:
      "Soy un Full Stack Developer impulsado por la intersección entre estética retro y performance moderno.",
    about_page_based_in_label: "BASADO EN",
    about_page_based_in_value: "Santo Domingo, República Dominicana",

    about_page_journey_title: "MI TRAYECTORIA",

    about_page_journey_1_title: "La Base",
    about_page_journey_1_description:
      "Comencé mi camino con sistemas de bajo nivel y fundamentos sólidos, desarrollando una comprensión profunda de cómo el software interactúa con el hardware.",
    about_page_journey_1_tag_1: "C/C++ (Fundamentos)",
    about_page_journey_1_tag_2: "Diseño de algoritmos",
    about_page_journey_1_tag_3: "Gestión de memoria",

    about_page_journey_2_title: "Especialización Frontend",
    about_page_journey_2_description:
      "Me enamoré del lado visual de la web. Me enfoqué en React, motion design y en construir interfaces pulidas que escalan.",
    about_page_journey_2_tag_1: "React & Next.js",
    about_page_journey_2_tag_2: "Animación (GSAP)",
    about_page_journey_2_tag_3: "Arquitectura UI/UX",

    about_page_journey_3_title: "Dominio Full Stack",
    about_page_journey_3_description:
      "Cerrando la brecha entre frontends elegantes y backends robustos. Hoy trabajo con sistemas distribuidos y apps cloud-native.",
    about_page_journey_3_tag_1: "Node.js",
    about_page_journey_3_tag_2: "PostgreSQL / Redis",
    about_page_journey_3_tag_3: "Arquitectura en AWS",

    about_page_philosophy_title: "FILOSOFÍA & METODOLOGÍA",
    about_page_philosophy_description:
      "Creo que el software debe ser tan agradable de leer como de usar. Mi enfoque prioriza claridad, performance y mantenibilidad a largo plazo.",

    about_page_method_1_title: "Performance First",
    about_page_method_1_description:
      "Optimizando el render crítico y apuntando a puntajes Lighthouse cercanos a 100/100.",

    about_page_method_2_title: "Diseño Escalable",
    about_page_method_2_description:
      "Construyendo sistemas modulares que crecen con los requerimientos del negocio.",

    about_page_core_methodology_title: "METODOLOGÍA BASE",
    about_page_core_badge_1: "SOLID",
    about_page_core_badge_2: "DRY",
    about_page_core_badge_3: "ATOMIC",

    about_page_interests_title: "INTERESES PERSONALES",
    about_page_interest_1: "RETRO GAMING",
    about_page_interest_2: "CÓDIGO ABIERTO",
    about_page_interest_3: "SYNTH DESIGN",
    about_page_interest_4: "FOTOGRAFÍA ANALÓGICA",
    about_page_interest_5: "UNIX RICE",

    about_page_cta_title: "CONSTRUYAMOS EL FUTURO JUNTOS.",
    about_page_cta_get_in_touch: "CONTACTAR",
    about_page_cta_back_home: "VOLVER AL INICIO",


    /* ============================
        CONTACT
    ============================ */
    contact_title: 'Trabajemos <span class="text-gradient">Juntos</span>',
    contact_description:
      "Actualmente estoy disponible para proyectos freelance y roles full-time. Si tienes un proyecto que necesita un toque creativo, me encantaría escuchar sobre él.",

    contact_emailLabel: "Email",
    contact_emailValue: "enm2071@gmail.com",

    contact_phoneLabel: "Teléfono",
    contact_phoneValue: "+1 829 335-0738",

    contact_locationLabel: "Ubicación",
    contact_locationValue: "Santo Domingo, República Dominicana",

    contact_fname: "Nombre",
    contact_fname_placeholder: "Juan",

    contact_lname: "Apellido",
    contact_lname_placeholder: "Pérez",

    contact_form_email: "Email",
    contact_form_email_placeholder: "juan@ejemplo.com",

    contact_message: "Mensaje",
    contact_message_placeholder: "Cuéntame sobre tu proyecto...",

    contact_send: "Enviar Mensaje",

    /* ============================
        NAVIGATION
    ============================ */
    nav_about: "Sobre Mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contactar",


    /* ============================
        PROJECTS
    ============================ */

    projects_title: "Proyectos <span class=\"primary\">Destacados</span>",
    projects_subtitle:
      "Una selección de mi trabajo reciente, desde aplicaciones web hasta sistemas de diseño.",

    // project_1_title: "E-Commerce Dashboard",
    // project_1_description:
    //   "Panel de análisis completo para minoristas online con visualización de datos en tiempo real.",

    // project_2_title: "AI Content Generator",
    // project_2_description:
    //   "Aplicación SaaS que utiliza la API de OpenAI para ayudar a crear textos de marketing en segundos.",

    // project_3_title: "Task Management App",
    // project_3_description:
    //   "Herramienta de gestión de proyectos colaborativa con tableros kanban y chat de equipo.",

    project_1_title: "Módulos y Servicios Next.js para Thryv",
    project_1_description:
      "Desarrollo de módulos escalables y optimización de servicios usando Next.js, React, Node.js y microservicios. Implementación de interfaces y mejoras de rendimiento para la plataforma Thryv.",

    project_2_title: "Migración de Flask a GraphQL",
    project_2_description:
      "Reestructuración completa de servicios, migrándolos de Flask a GraphQL. Mejoras significativas en rendimiento, reducción de latencia y creación de pruebas automatizadas para garantizar estabilidad.",

    project_3_title: "Extensión WordPress con Micro-Frontends",
    project_3_description:
      "Construcción de una extensión avanzada para WordPress con arquitectura micro-frontend, permitiendo gestionar campañas, logos, landing pages y automatizaciones.",

    project_4_title: "Portal Administrativo para Gestión de Usuarios",
    project_4_description:
      "Desarrollo de un portal administrativo con React, Redux y .NET Core para gestionar reportes, perfiles, servicios integrados y módulos avanzados del sistema.",

    project_5_title: "App Móvil de Reservaciones Premium",
    project_5_description:
      "Aplicación móvil para clientes premium de bancos dominicanos con soporte multilenguaje, pagos integrados y administración de reservaciones en aeropuertos.",

    project_6_title: "Plataforma Web y Móvil de Peajes",
    project_6_description:
      "Sistema web y móvil para gestión de peajes en RD: perfiles, recargas, reportes, ERP integrado y apps nativas para iOS/Android.",

    project_7_title: "Migración de Backend a GraphQL (Django)",
    project_7_description:
      "Modernización de un backend hacia una API GraphQL sobre Django: diseño de esquema, resolución de queries/mutations y suite de pruebas con pytest para asegurar estabilidad y evolutividad.",

    project_8_title: "Sistema de Gestión de Consultorio Médico",
    project_8_description:
      "Aplicación para administrar pacientes, citas y facturación con autenticación segura (Cognito) y backend serverless en AWS. Integración de pagos con Stripe y sincronización de datos con DynamoDB y Lambda, con experiencia de escritorio mediante Electron.",

    project_9_title: "Gestión de Seguros Empresariales (EE. UU.)",
    project_9_description:
      "Plataforma para administrar pólizas, cotizaciones y renovaciones para empresas en Estados Unidos, con paneles operativos y flujos de aprobación. Frontend en React y backend en .NET/C#, integrando servicios en AWS para escalabilidad y seguridad.",

    project_10_title: "Proyfin — Plataforma Personal de Finanzas",
    project_10_description:
      "Desarrollo full-stack de una app de finanzas personales con seguimiento de ingresos/gastos, categorización asistida por IA (OpenAI) y recordatorios de deudas. Automatización de resúmenes quincenales por correo y conciliación de pagos con flujos n8n, suscripciones con Stripe, PWA con notificaciones push y suite de pruebas (Jest + Playwright) sobre Neon Postgres.",

    project_11_title: "Alianca ERP — Plataforma Multi-Tenant para PYMEs",
    project_11_description:
      "Construcción del ERP multi-tenant de Alianca desde cero: autenticación real con AWS Cognito y URLs por tenant, módulos de Contactos, Ingresos y Contabilidad, y una capa de hooks compartidos (paginación, CRUD, ordenamiento) reutilizada en todos los módulos para acelerar el desarrollo. Implementación fiel al sistema de diseño en Figma, incluyendo soporte completo de modo claro/oscuro.",

    project_12_title: "Alianca Reportes — Facturación y Reportes Fiscales DGII",
    project_12_description:
      "Plataforma de facturación electrónica y reportes fiscales (606/607) para República Dominicana. Motor de extracción de facturas con AWS Textract y aprendizaje incremental de plantillas, backend serverless (Cognito, DynamoDB, S3, EventBridge, SQS, Lambda), cobros recurrentes con Stripe y autenticación con Google OAuth.",

    /* ============================
        SKILLS
    ============================ */

    skills_title: 'Arsenal <span class="primary">Técnico</span>',
    skills_subtitle:
      'Me especializo en un stack moderno que prioriza el rendimiento, la escalabilidad y la experiencia de usuario.',

    skills_category_frontend: "Frontend",
    skills_category_backend: "Backend",
    skills_category_devops: "DevOps",
    skills_category_mobile: "Mobile",
    skills_category_database: "Base de Datos",
  },

  en: {
    /* ============================
        ABOUT / HERO
    ============================ */
    about_title: 'Hi, I\'m <span class="text-gradient">Ernesto Núñez</span>.<br/>Full Stack Developer.',
    /* Short hero snippet and CTA */
    about_snippet: "Full Stack developer focused on modern interfaces and scalable solutions...",
    about_readMore: "Learn more about me",

    about_paragraph1:
      "I am a software developer with over 7 years of experience transforming complex ideas into elegant, functional, and user-centered digital solutions. My specialization is frontend development with technologies such as ReactJS, Next.js, React Native, TypeScript, and JavaScript, enabling me to build modern, scalable, and high-performance interfaces. On the backend side, I have intermediate experience with Node.js, .NET, and Python, as well as integrating cloud-based architectures using AWS.",

    about_paragraph2:
      "My work is grounded in best practices, design patterns, efficient APIs, and robust testing strategies that guarantee reliability and high-quality results. I combine strong technical autonomy with effective collaboration across multidisciplinary teams, always focused on delivering impactful and sustainable solutions.",

    about_viewProjects: "Go to LinkedIn",
    about_downloadCV: "Download CV",

    about_yearsExp: "Years of Exp.",
    about_projects: "Projects",
    about_commitment: "Commitment",

    about_currentStatus: "Current Status",
    about_currentStatusMessage: "Building the next generation of web applications",

    /* ============================
        ABOUT PAGE (LEARN MORE)
    ============================ */
    about_page_hero_title: "ABOUT\nME.",
    about_page_hero_subtitle:
      "Senior Full-Stack Developer with 8+ years delivering high-performance, user-centric applications across web, mobile, and desktop. Expert in React, Next.js, and TypeScript; adept with Node.js and Python, designing scalable APIs and cloud-native architectures (AWS Amplify, Cognito, Lambda, GraphQL). Led payment platforms and fraud-resistant integrations (3DS, PayPal, Nexio, Kount, WorldPay) and migrated REST services to GraphQL to accelerate response times and streamline data access. Known for rigorous testing (Jest, pytest), clean architecture, and cross-functional collaboration to ship secure, scalable solutions aligned with business goals.",
    about_page_based_in_label: "BASED IN",
    about_page_based_in_value: "Santo Domingo, Dominican Republic",

    about_page_journey_title: "MY JOURNEY",

    about_page_journey_1_title: "The Foundation",
    about_page_journey_1_description:
      "Started my coding path with low-level systems and strong fundamentals, building a deep understanding of how software interacts with hardware.",
    about_page_journey_1_tag_1: "C/C++ Fundamentals",
    about_page_journey_1_tag_2: "Algorithm Design",
    about_page_journey_1_tag_3: "Memory Management",

    about_page_journey_2_title: "Frontend Specialization",
    about_page_journey_2_description:
      "Fell in love with the visual side of the web. Focused on React, motion design, and building polished interfaces that scale.",
    about_page_journey_2_tag_1: "React & Next.js",
    about_page_journey_2_tag_2: "Animation (GSAP)",
    about_page_journey_2_tag_3: "UI/UX Architecture",

    about_page_journey_3_title: "Full Stack Mastery",
    about_page_journey_3_description:
      "Bridging the gap between beautiful frontends and robust backends. Currently building distributed systems and cloud-native apps.",
    about_page_journey_3_tag_1: "Node.js",
    about_page_journey_3_tag_2: "PostgreSQL / Redis",
    about_page_journey_3_tag_3: "AWS Cloud Architecture",

    about_page_philosophy_title: "PHILOSOPHY & METHODOLOGY",
    about_page_philosophy_description:
      "I believe software should be as delightful to read as it is to use. My approach centers on clarity, performance, and long-term maintainability.",

    about_page_method_1_title: "Performance First",
    about_page_method_1_description:
      "Optimizing the critical rendering path and aiming for near 100/100 Lighthouse scores.",

    about_page_method_2_title: "Scalable Design",
    about_page_method_2_description:
      "Building modular systems that grow with business requirements.",

    about_page_core_methodology_title: "CORE METHODOLOGY",
    about_page_core_badge_1: "SOLID",
    about_page_core_badge_2: "DRY",
    about_page_core_badge_3: "ATOMIC",

    about_page_interests_title: "PERSONAL INTERESTS",
    about_page_interest_1: "RETRO GAMING",
    about_page_interest_2: "OPEN SOURCE",
    about_page_interest_3: "SYNTH DESIGN",
    about_page_interest_4: "FILM PHOTOGRAPHY",
    about_page_interest_5: "UNIX RICE",

    about_page_cta_title: "LET'S BUILD THE FUTURE TOGETHER.",
    about_page_cta_get_in_touch: "GET IN TOUCH",
    about_page_cta_back_home: "BACK TO HOME",


    /* ============================
        CONTACT
    ============================ */
    contact_title: 'Let’s Work <span class="text-gradient">Together</span>',
    contact_description:
      "I am currently available for freelance projects and full-time roles. If you have a project that needs a creative touch, I’d love to hear about it.",

    contact_emailLabel: "Email",
    contact_emailValue: "enm2071@gmail.com",

    contact_phoneLabel: "Phone",
    contact_phoneValue: "+1 829 335-0738",

    contact_locationLabel: "Location",
    contact_locationValue: "Santo Domingo, Dominican Republic",

    contact_fname: "First Name",
    contact_fname_placeholder: "John",

    contact_lname: "Last Name",
    contact_lname_placeholder: "Doe",

    contact_form_email: "Email",
    contact_form_email_placeholder: "john@example.com",

    contact_message: "Message",
    contact_message_placeholder: "Tell me about your project...",

    contact_send: "Send Message",

    /* ============================
        NAVIGATION
    ============================ */
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",


    /* ============================
        PROJECTS
    ============================ */

    projects_title: "Featured <span class=\"primary\">Projects</span>",
    projects_subtitle:
      "A selection of my recent work, ranging from web applications to design systems.",

    // project_1_title: "E-Commerce Dashboard",
    // project_1_description:
    //   "A complete analytics dashboard for online retailers with real-time data visualization.",

    // project_2_title: "AI Content Generator",
    // project_2_description:
    //   "A SaaS application using the OpenAI API to help create marketing text in seconds.",

    // project_3_title: "Task Management App",
    // project_3_description: "A collaborative project management tool featuring kanban boards and team chat.",

    project_1_title: "Next.js Modules and Service Integrations for Thryv",
    project_1_description:
      "Development of scalable Next.js modules and service optimizations using React, Node.js, and a microservices architecture. Enhanced UI performance and user experience across the platform.",

    project_2_title: "Flask to GraphQL Migration",
    project_2_description:
      "Complete service migration from Flask to GraphQL, achieving improved response times, optimized data retrieval, and fully automated testing coverage.",

    project_3_title: "WordPress Extension with Micro-Frontend Architecture",
    project_3_description:
      "Advanced WordPress extension supporting email campaigns, logo builders, landing pages, and automation—powered by a robust micro-frontend architecture.",

    project_4_title: "Administrative Portal for User & Reporting Management",
    project_4_description:
      "Administrative portal built with React, Redux, and .NET Core for managing reports, user profiles, integrated services, and advanced modules.",

    project_5_title: "Premium Reservation Mobile App",
    project_5_description:
      "Mobile app for premium banking clients with multi-language support, secure payments, and reservation management for VIP airport lounges.",

    project_6_title: "Web & Mobile Toll Management Platform",
    project_6_description:
      "Comprehensive toll system with user profiles, balance management, recharge features, reporting, ERP integration, and mobile apps for iOS/Android.",

    project_7_title: "Backend to GraphQL Migration (Django)",
    project_7_description:
      "Modernized a backend into a Django-based GraphQL API: schema design, query/mutation resolvers, and a pytest test suite to ensure stability and long-term maintainability.",

    project_8_title: "Medical Clinic Management System",
    project_8_description:
      "Application to manage patients, appointments, and billing with secure authentication (Cognito) and an AWS serverless backend. Stripe payments integration and data synchronization with DynamoDB and Lambda, delivered as a desktop experience via Electron.",

    project_9_title: "US Business Insurance Management",
    project_9_description:
      "Platform to manage policies, quotes, and renewals for US businesses, with operational dashboards and approval workflows. React frontend and .NET/C# backend, integrating AWS services for scalability and security.",

    project_10_title: "Proyfin — Personal Finance Platform",
    project_10_description:
      "Full-stack development of a personal finance app with income/expense tracking, AI-assisted categorization (OpenAI), and debt reminders. Automated biweekly email summaries and payment reconciliation via n8n workflows, Stripe subscriptions, a PWA with push notifications, and a full test suite (Jest + Playwright) on Neon Postgres.",

    project_11_title: "Alianca ERP — Multi-Tenant Platform for SMBs",
    project_11_description:
      "Built Alianca's multi-tenant ERP from the ground up: real authentication with AWS Cognito and per-tenant URL scoping, Contacts/Income/Accounting modules, and a shared hooks layer (pagination, CRUD, sorting) reused across every module to speed up development. Pixel-accurate implementation of the Figma design system, including full light/dark mode support.",

    project_12_title: "Alianca Reportes — DGII Invoicing & Tax Reports",
    project_12_description:
      "Electronic invoicing and tax reporting platform (606/607) for the Dominican Republic. Invoice extraction engine built on AWS Textract with incremental template learning, a serverless backend (Cognito, DynamoDB, S3, EventBridge, SQS, Lambda), recurring billing with Stripe, and Google OAuth authentication.",

    /* ============================
        SKILLS
    ============================ */
    skills_title: 'Technical <span class="primary">Toolkit</span>',
    skills_subtitle:
      'I specialize in a modern tech stack focused on performance, scalability, and exceptional user experience.',
    skills_category_frontend: "Frontend",
    skills_category_backend: "Backend",
    skills_category_devops: "DevOps",
    skills_category_mobile: "Mobile",
    skills_category_database: "Database",
  },
} as const;
