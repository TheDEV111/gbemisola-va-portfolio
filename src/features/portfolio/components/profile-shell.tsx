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

import type { AvailabilityData, ExperienceEntry, HeroData, SkillGroup, TestimonialEntry } from "../types";

interface ProfileShellProps {
  experience: ExperienceEntry[];
  testimonials: TestimonialEntry[];
  skills: SkillGroup[];
  availability: AvailabilityData;
  hero: HeroData;
}

export function ProfileShell({
  experience,
  testimonials,
  skills,
  availability,
  hero,
}: ProfileShellProps) {
  const { profile } = useProfile();

  if (profile === "va") {
    return (
      <>
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

  return <PharmacistProfile />;
}
