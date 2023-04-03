import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

// Add this after HeroSection for medium articles: 
// <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
export default function IndexPage() {
  return (
    <>
      <Seo title="Alex Aselstyne Site and Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="Skills and Interests" />
        <ProjectsSection sectionId="projects" heading="Projects and Extracurriculars" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
