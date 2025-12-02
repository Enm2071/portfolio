// src/i18n/ui.ts

export const languages = {
  es: "Español",
  en: "English",
};

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

    about_viewProjects: "Ver Proyectos",
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

    about_viewProjects: "View Projects",
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
  },
} as const;
