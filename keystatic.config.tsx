import { config, collection, singleton, fields } from "@keystatic/core";

const isDev = !process.env["KEYSTATIC_GITHUB_CLIENT_ID"];

const iconOptions = [
  { label: "Mail", value: "Mail" },
  { label: "Calendar", value: "CalendarDays" },
  { label: "Headphones", value: "Headphones" },
  { label: "Plane", value: "Plane" },
  { label: "Database", value: "Database" },
  { label: "Grid", value: "LayoutGrid" },
  { label: "Search", value: "Search" },
  { label: "Clipboard", value: "ClipboardList" },
  { label: "Git Branch", value: "GitBranch" },
  { label: "Check Circle", value: "CheckCircle" },
  { label: "Message Square", value: "MessageSquare" },
  { label: "Zap", value: "Zap" },
  { label: "Shield", value: "Shield" },
  { label: "Shield Check", value: "ShieldCheck" },
  { label: "Monitor", value: "Monitor" },
  { label: "Clock", value: "Clock" },
  { label: "Flask", value: "FlaskConical" },
  { label: "Activity", value: "Activity" },
  { label: "Users", value: "Users" },
  { label: "Warehouse", value: "Warehouse" },
  { label: "Thermometer", value: "Thermometer" },
  { label: "Book Open", value: "BookOpen" },
  { label: "Briefcase", value: "Briefcase" },
  { label: "File Text", value: "FileText" },
  { label: "Globe", value: "Globe" },
  { label: "Star", value: "Star" },
  { label: "Award", value: "Award" },
  { label: "Lightbulb", value: "Lightbulb" },
  { label: "Target", value: "Target" },
  { label: "Heart", value: "Heart" },
  { label: "Pen", value: "PenLine" },
] as const;

export default config({
  storage: isDev
    ? { kind: "local" as const }
    : {
        kind: "github" as const,
        repo: {
          owner: "TheDEV111",
          name: "gbemisola-va-portfolio",
        },
      },

  ui: {
    brand: { name: "Gbemisola's Portfolio" },
    navigation: {
      "VA Profile": ["owner", "hero", "availability", "about"],
      "VA Content": ["experience", "skills", "services", "whyHire", "testimonials"],
      "Pharmacist Profile": ["pharmacistExperience", "pharmacistCompetencies", "pharmacistCredentials"],
    },
  },

  /* ------------------------------------------------------------------ */
  /* Collections                                                           */
  /* ------------------------------------------------------------------ */
  collections: {
    experience: collection({
      label: "VA Experience",
      slugField: "role",
      path: "content/experience/*",
      format: { data: "yaml" },
      entryLayout: "form",
      schema: {
        role: fields.slug({ name: { label: "Role / Job Title" } }),
        company: fields.text({ label: "Company" }),
        type: fields.text({
          label: "Type (e.g. NYSC, Contract)",
          validation: { isRequired: false },
        }),
        period: fields.text({ label: "Period (e.g. Mar 2026 – Present)" }),
        sortOrder: fields.integer({
          label: "Sort Order (lower = shown first)",
          defaultValue: 99,
          validation: { isRequired: true, min: 0 },
        }),
        highlights: fields.array(
          fields.text({ label: "Highlight", multiline: true }),
          {
            label: "Key Highlights",
            itemLabel: (props) => props.value || "Highlight",
          },
        ),
      },
    }),

    testimonials: collection({
      label: "Testimonials",
      slugField: "name",
      path: "content/testimonials/*",
      format: { data: "yaml" },
      entryLayout: "form",
      schema: {
        name: fields.slug({ name: { label: "Client Name" } }),
        title: fields.text({ label: "Client Title / Company" }),
        initials: fields.text({ label: "Initials (e.g. AN)" }),
        quote: fields.text({ label: "Quote", multiline: true }),
        sortOrder: fields.integer({
          label: "Sort Order (lower = shown first)",
          defaultValue: 99,
          validation: { isRequired: true, min: 0 },
        }),
      },
    }),

    pharmacistExperience: collection({
      label: "Pharmacist Experience",
      slugField: "role",
      path: "content/pharmacist-experience/*",
      format: { data: "yaml" },
      entryLayout: "form",
      schema: {
        role: fields.slug({ name: { label: "Role / Job Title" } }),
        company: fields.text({ label: "Company & Location" }),
        badge: fields.text({
          label: "Badge (e.g. NYSC, Current)",
          validation: { isRequired: false },
        }),
        isCurrent: fields.checkbox({
          label: "Current Position",
          defaultValue: false,
        }),
        period: fields.text({ label: "Period" }),
        sortOrder: fields.integer({
          label: "Sort Order (lower = shown first)",
          defaultValue: 99,
          validation: { isRequired: true, min: 0 },
        }),
        highlights: fields.array(
          fields.text({ label: "Highlight", multiline: true }),
          {
            label: "Key Highlights",
            itemLabel: (props) => props.value || "Highlight",
          },
        ),
      },
    }),
  },

  /* ------------------------------------------------------------------ */
  /* Singletons                                                           */
  /* ------------------------------------------------------------------ */
  singletons: {
    owner: singleton({
      label: "Owner / Contact Info",
      path: "content/owner",
      format: { data: "yaml" },
      schema: {
        displayName: fields.text({ label: "Display Name (e.g. Gbemisola Oginni)" }),
        subtitle: fields.text({ label: "VA Profile Subtitle (e.g. Property & Guest Operations Specialist)" }),
        email: fields.text({ label: "Email Address" }),
        location: fields.text({ label: "Location (e.g. Lagos, Nigeria (GMT +1))" }),
        linkedin: fields.text({ label: "LinkedIn URL" }),
        resumeUrl: fields.text({ label: "VA Resume path (e.g. /Oginni_CV_VA.pdf)" }),
      },
    }),

    hero: singleton({
      label: "VA Hero Section",
      path: "content/hero",
      format: { data: "yaml" },
      schema: {
        tagline: fields.text({ label: "Main Tagline" }),
        subTagline: fields.text({
          label: "Sub-tagline (longer description)",
          multiline: true,
        }),
      },
    }),

    availability: singleton({
      label: "Availability",
      path: "content/availability",
      format: { data: "yaml" },
      schema: {
        isAvailable: fields.checkbox({
          label: "Currently Available for Work",
          defaultValue: true,
        }),
        description: fields.text({
          label: "Availability Description",
          multiline: true,
        }),
      },
    }),

    about: singleton({
      label: "VA About Section",
      path: "content/about",
      format: { data: "yaml" },
      schema: {
        headline: fields.text({ label: "Section Headline" }),
        paragraphs: fields.array(
          fields.text({ label: "Paragraph", multiline: true }),
          {
            label: "Bio Paragraphs",
            itemLabel: (props) => props.value.slice(0, 60) || "Paragraph",
          },
        ),
        pullQuote: fields.text({
          label: "Pull Quote (blockquote at bottom)",
          multiline: true,
        }),
        credential: fields.text({
          label: "Credential Line (shown in signature, e.g. B.Pharm · Licensed Pharmacist)",
        }),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: "Value (e.g. 5+)" }),
            label: fields.text({ label: "Label (e.g. Years of Experience)" }),
          }),
          {
            label: "Stats",
            itemLabel: (props) => props.fields.label.value || "Stat",
          },
        ),
      },
    }),

    skills: singleton({
      label: "VA Skills & Tools",
      path: "content/skills",
      format: { data: "yaml" },
      schema: {
        groups: fields.array(
          fields.object({
            category: fields.text({ label: "Category Name" }),
            tools: fields.array(
              fields.text({ label: "Tool / Skill" }),
              { label: "Tools", itemLabel: (props) => props.value || "Tool" },
            ),
          }),
          {
            label: "Skill Groups",
            itemLabel: (props) => props.fields.category.value || "Group",
          },
        ),
      },
    }),

    services: singleton({
      label: "VA Services",
      path: "content/services",
      format: { data: "yaml" },
      schema: {
        items: fields.array(
          fields.object({
            iconName: fields.select({
              label: "Icon",
              options: iconOptions,
              defaultValue: "ClipboardList",
            }),
            title: fields.text({ label: "Service Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          {
            label: "Services",
            itemLabel: (props) => props.fields.title.value || "Service",
          },
        ),
      },
    }),

    whyHire: singleton({
      label: "Why Hire Me",
      path: "content/why-hire",
      format: { data: "yaml" },
      schema: {
        items: fields.array(
          fields.object({
            iconName: fields.select({
              label: "Icon",
              options: iconOptions,
              defaultValue: "CheckCircle",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          {
            label: "Reasons",
            itemLabel: (props) => props.fields.title.value || "Reason",
          },
        ),
      },
    }),

    pharmacistCompetencies: singleton({
      label: "Pharmacist Competencies",
      path: "content/pharmacist-competencies",
      format: { data: "yaml" },
      schema: {
        items: fields.array(
          fields.object({
            iconName: fields.select({
              label: "Icon",
              options: iconOptions,
              defaultValue: "FlaskConical",
            }),
            title: fields.text({ label: "Competency Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          {
            label: "Competencies",
            itemLabel: (props) => props.fields.title.value || "Competency",
          },
        ),
      },
    }),

    pharmacistCredentials: singleton({
      label: "Pharmacist Credentials",
      path: "content/pharmacist-credentials",
      format: { data: "yaml" },
      schema: {
        education: fields.array(
          fields.object({
            degree: fields.text({ label: "Degree / Qualification" }),
            institution: fields.text({ label: "Institution" }),
            period: fields.text({ label: "Period" }),
            note: fields.text({
              label: "Note (e.g. In progress)",
              validation: { isRequired: false },
            }),
          }),
          {
            label: "Education",
            itemLabel: (props) => props.fields.degree.value || "Degree",
          },
        ),
        certificates: fields.array(
          fields.object({
            name: fields.text({ label: "Certificate Name" }),
            issuer: fields.text({ label: "Issuing Body" }),
            year: fields.text({ label: "Year" }),
          }),
          {
            label: "Certificates",
            itemLabel: (props) => props.fields.name.value || "Certificate",
          },
        ),
        affiliations: fields.array(
          fields.object({
            organization: fields.text({ label: "Organisation" }),
            role: fields.text({ label: "Role / Membership" }),
            year: fields.text({ label: "Year" }),
          }),
          {
            label: "Affiliations",
            itemLabel: (props) => props.fields.organization.value || "Affiliation",
          },
        ),
        languages: fields.array(
          fields.object({
            language: fields.text({ label: "Language" }),
            level: fields.text({ label: "Proficiency Level" }),
          }),
          {
            label: "Languages",
            itemLabel: (props) => props.fields.language.value || "Language",
          },
        ),
      },
    }),
  },
});
