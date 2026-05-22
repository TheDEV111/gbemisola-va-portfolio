import { Nav } from "./components/nav";
import { ProfileShell } from "./components/profile-shell";
import { ProfileTransition } from "./components/profile-transition";
import { ProfileProvider } from "./context/profile-context";
import { reader } from "./lib/reader";

import type {
  AvailabilityData,
  ExperienceEntry,
  HeroData,
  SkillGroup,
  TestimonialEntry,
} from "./types";


async function loadContent() {
  const [rawExperience, rawTestimonials, rawSkills, rawAvailability, rawHero] =
    await Promise.all([
      reader.collections.experience.all(),
      reader.collections.testimonials.all(),
      reader.singletons.skills.read(),
      reader.singletons.availability.read(),
      reader.singletons.hero.read(),
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
      "Five years in healthcare operations, government logistics, and pharmaceutical administration, now channelled into keeping your business ruthlessly organised.",
  };

  return { experience, testimonials, skills, availability, hero };
}

export async function PortfolioPage() {
  const { experience, testimonials, skills, availability, hero } = await loadContent();

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
      />
    </ProfileProvider>
  );
}
