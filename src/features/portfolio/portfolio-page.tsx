import { reader } from "./lib/reader";
import type {
  AvailabilityData,
  ExperienceEntry,
  HeroData,
  SkillGroup,
  TestimonialEntry,
} from "./types";

import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Testimonials } from "./components/testimonials";
import { WhyHire } from "./components/why-hire";

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
      "Five years in healthcare operations, government logistics, and pharmaceutical administration — now channelled into keeping your business ruthlessly organised.",
  };

  return { experience, testimonials, skills, availability, hero };
}

export async function PortfolioPage() {
  const { experience, testimonials, skills, availability, hero } =
    await loadContent();

  return (
    <>
      <Nav />
      <main>
        <Hero tagline={hero.tagline} subTagline={hero.subTagline} />
        <About />
        <Services />
        <Skills groups={skills} />
        <Experience jobs={experience} />
        <Testimonials items={testimonials} />
        <WhyHire />
        <Contact availability={availability} />
      </main>
      <Footer />
    </>
  );
}
