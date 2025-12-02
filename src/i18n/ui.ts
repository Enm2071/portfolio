// src/i18n/ui.ts

export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
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
  },

  en: {
    contact_title: "Let's Work <span class=\"text-gradient\">Together</span>",
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
  },
} as const;
