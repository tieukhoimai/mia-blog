import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="tieukhoimai" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Interest" />
        <ProjectsSection sectionId="topic" heading="Topic" />
        <ContactSection sectionId="contact" heading="Let's Keep In Touch" />
      </Page>
    </>
  );
}
