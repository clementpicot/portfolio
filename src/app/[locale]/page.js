import React from "react";
import client from "@/lib/contentful";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import About from "@/components/about";
import Skills from "@/components/skills";

export default async function Home({ params }) {
  const { locale } = await params;

  const { items: about } = await client.withAllLocales.getEntries({
    content_type: "about",
  });

  const { items: competences } = await client.withAllLocales.getEntries({
    content_type: "competences",
    order: "fields.order",
  });

  const { items: projects } = await client.withAllLocales.getEntries({
    content_type: "projects",
    order: "fields.order",
  });

  const { items: experiences } = await client.withAllLocales.getEntries({
    content_type: "experiences",
    order: "fields.order",
  });

  return (
    <>
      <About about={about} locale={locale} />

      <Experiences experiences={experiences} locale={locale} />

      <Projects projects={projects} locale={locale} />

      <Skills competences={competences} locale={locale} />
    </>
  );
}
