import { Nav } from "./components/nav";
import { ProfileShell } from "./components/profile-shell";
import { ProfileTransition } from "./components/profile-transition";
import { ProfileProvider } from "./context/profile-context";
import { reader } from "./lib/reader";

import type {
  AboutData,
  AvailabilityData,
  ExperienceEntry,
  HeroData,
  OwnerData,
  PharmacistCompetencyEntry,
  PharmacistCredentials,
  PharmacistRole,
  ServiceEntry,
  SkillGroup,
  TestimonialEntry,
  WhyHireEntry,
} from "./types";


async function loadContent() {
  const [
    rawExperience,
    rawTestimonials,
    rawSkills,
    rawAvailability,
    rawHero,
    rawOwner,
    rawAbout,
    rawServices,
    rawWhyHire,
    rawPharmacistExperience,
    rawPharmacistCompetencies,
    rawPharmacistCredentials,
  ] = await Promise.all([
    reader.collections.experience.all(),
    reader.collections.testimonials.all(),
    reader.singletons.skills.read(),
    reader.singletons.availability.read(),
    reader.singletons.hero.read(),
    reader.singletons.owner.read(),
    reader.singletons.about.read(),
    reader.singletons.services.read(),
    reader.singletons.whyHire.read(),
    reader.collections.pharmacistExperience.all(),
    reader.singletons.pharmacistCompetencies.read(),
    reader.singletons.pharmacistCredentials.read(),
  ]);

  const experience: ExperienceEntry[] = rawExperience
    .map((e) => ({
      slug: e.slug,
      role: e.entry.role,
      company: e.entry.company,
      type: e.entry.type ?? "",
      period: e.entry.period,
      sortOrder: e.entry.sortOrder,
      highlights: e.entry.highlights.filter(Boolean) as string[],
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const testimonials: TestimonialEntry[] = rawTestimonials
    .map((t) => ({
      slug: t.slug,
      name: t.entry.name,
      title: t.entry.title,
      initials: t.entry.initials,
      quote: t.entry.quote,
      sortOrder: t.entry.sortOrder,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const skills: SkillGroup[] = (rawSkills?.groups ?? []).map((g) => ({
    category: g.category,
    tools: g.tools.filter(Boolean) as string[],
  }));

  const availability: AvailabilityData = {
    isAvailable: rawAvailability?.isAvailable ?? true,
    description:
      rawAvailability?.description ??
      "Open to freelance contracts, part-time retainers, and full-time remote VA roles.",
  };

  const hero: HeroData = {
    tagline: rawHero?.tagline ?? "Where precision meets possibility.",
    subTagline:
      rawHero?.subTagline ??
      "Five years in healthcare operations — now channelled into keeping your business ruthlessly organised.",
  };

  const owner: OwnerData = {
    displayName: rawOwner?.displayName ?? "Gbemisola Oginni",
    subtitle: rawOwner?.subtitle ?? "Property & Guest Operations Specialist",
    email: rawOwner?.email ?? "gbemisola299@gmail.com",
    location: rawOwner?.location ?? "Lagos, Nigeria (GMT +1)",
    linkedin: rawOwner?.linkedin ?? "https://linkedin.com/in/oluwagbemisola-oginni",
    resumeUrl: rawOwner?.resumeUrl ?? "/Oginni_CV_VA.pdf",
  };

  const about: AboutData = {
    headline: rawAbout?.headline ?? "More than a VA. A systems-thinker in your corner.",
    paragraphs: (rawAbout?.paragraphs ?? []).filter(Boolean) as string[],
    pullQuote:
      rawAbout?.pullQuote ??
      "I don't just execute tasks — I protect the conditions that allow you to do your best work.",
    credential: rawAbout?.credential ?? "B.Pharm · Licensed Pharmacist",
    stats: (rawAbout?.stats ?? []).map((s) => ({ value: s.value, label: s.label })),
  };

  const services: ServiceEntry[] = (rawServices?.items ?? []).map((s) => ({
    iconName: s.iconName,
    title: s.title,
    description: s.description,
  }));

  const whyHire: WhyHireEntry[] = (rawWhyHire?.items ?? []).map((w) => ({
    iconName: w.iconName,
    title: w.title,
    description: w.description,
  }));

  const pharmacistRoles: PharmacistRole[] = rawPharmacistExperience
    .map((e) => ({
      slug: e.slug,
      role: e.entry.role,
      company: e.entry.company,
      badge: e.entry.badge ?? "",
      isCurrent: e.entry.isCurrent,
      period: e.entry.period,
      sortOrder: e.entry.sortOrder,
      highlights: e.entry.highlights.filter(Boolean) as string[],
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const pharmacistCompetencies: PharmacistCompetencyEntry[] = (
    rawPharmacistCompetencies?.items ?? []
  ).map((c) => ({
    iconName: c.iconName,
    title: c.title,
    description: c.description,
  }));

  const pharmacistCredentials: PharmacistCredentials = {
    education: (rawPharmacistCredentials?.education ?? []).map((e) => ({
      degree: e.degree,
      institution: e.institution,
      period: e.period,
      note: e.note ?? "",
    })),
    certificates: (rawPharmacistCredentials?.certificates ?? []).map((c) => ({
      name: c.name,
      issuer: c.issuer,
      year: c.year,
    })),
    affiliations: (rawPharmacistCredentials?.affiliations ?? []).map((a) => ({
      organization: a.organization,
      role: a.role,
      year: a.year,
    })),
    languages: (rawPharmacistCredentials?.languages ?? []).map((l) => ({
      language: l.language,
      level: l.level,
    })),
  };

  return {
    experience,
    testimonials,
    skills,
    availability,
    hero,
    owner,
    about,
    services,
    whyHire,
    pharmacistRoles,
    pharmacistCompetencies,
    pharmacistCredentials,
  };
}

export async function PortfolioPage() {
  const {
    experience,
    testimonials,
    skills,
    availability,
    hero,
    owner,
    about,
    services,
    whyHire,
    pharmacistRoles,
    pharmacistCompetencies,
    pharmacistCredentials,
  } = await loadContent();

  return (
    <ProfileProvider>
      <ProfileTransition />
      <Nav />
      <ProfileShell
        experience={experience}
        testimonials={testimonials}
        skills={skills}
        availability={availability}
        hero={hero}
        owner={owner}
        about={about}
        services={services}
        whyHire={whyHire}
        pharmacistRoles={pharmacistRoles}
        pharmacistCompetencies={pharmacistCompetencies}
        pharmacistCredentials={pharmacistCredentials}
      />
    </ProfileProvider>
  );
}
