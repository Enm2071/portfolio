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
    projects_github_button: "Ver cuenta de GitHub",

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
    projects_github_button: "View GitHub Account",

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
