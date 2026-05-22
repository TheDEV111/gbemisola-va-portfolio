"use client";

import { About } from "./about";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { PharmacistProfile } from "./pharmacist/pharmacist-profile";
import { Services } from "./services";
import { Skills } from "./skills";
import { Testimonials } from "./testimonials";
import { WhyHire } from "./why-hire";
import { useProfile } from "../context/profile-context";

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
} from "../types";

interface ProfileShellProps {
  experience: ExperienceEntry[];
  testimonials: TestimonialEntry[];
  skills: SkillGroup[];
  availability: AvailabilityData;
  hero: HeroData;
  owner: OwnerData;
  about: AboutData;
  services: ServiceEntry[];
  whyHire: WhyHireEntry[];
  pharmacistRoles: PharmacistRole[];
  pharmacistCompetencies: PharmacistCompetencyEntry[];
  pharmacistCredentials: PharmacistCredentials;
}

export function ProfileShell({
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
}: ProfileShellProps) {
  const { profile } = useProfile();

  if (profile === "va") {
    return (
      <>
        <main>
          <Hero tagline={hero.tagline} subTagline={hero.subTagline} ownerEmail={owner.email} ownerSubtitle={owner.subtitle} resumeUrl={owner.resumeUrl} />
          <About about={about} ownerDisplayName={owner.displayName} />
          <Services services={services} />
          <Skills groups={skills} />
          <Experience jobs={experience} />
          <Testimonials items={testimonials} />
          <WhyHire items={whyHire} />
          <Contact availability={availability} owner={owner} />
        </main>
        <Footer owner={owner} />
      </>
    );
  }

  return (
    <PharmacistProfile
      owner={owner}
      roles={pharmacistRoles}
      competencies={pharmacistCompetencies}
      credentials={pharmacistCredentials}
    />
  );
}
