import { config, collection, singleton, fields } from "@keystatic/core";

const isDev = process.env.NODE_ENV !== "production";

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
      Content: ["experience", "skills", "testimonials"],
      Settings: ["hero", "availability"],
    },
  },

  collections: {
    experience: collection({
      label: "Experience",
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
            itemLabel: (props) => props.fields.value.value || "Highlight",
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
  },

  singletons: {
    skills: singleton({
      label: "Skills & Tools",
      path: "content/skills",
      format: { data: "yaml" },
      schema: {
        groups: fields.array(
          fields.object({
            category: fields.text({ label: "Category Name" }),
            tools: fields.array(
              fields.text({ label: "Tool / Skill" }),
              { label: "Tools", itemLabel: (props) => props.fields.value.value || "Tool" },
            ),
          }),
          {
            label: "Skill Groups",
            itemLabel: (props) => props.fields.category.value || "Group",
          },
        ),
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

    hero: singleton({
      label: "Hero Section",
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
  },
});
