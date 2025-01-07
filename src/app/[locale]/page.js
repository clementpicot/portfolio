import React from "react";
import client from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import RichTextRenderer from "@/components/rich-text-renderer";

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
      <section className="mt-12">
        <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
          {locale === "fr" ? "À propos" : "About"}
        </h2>
        <RichTextRenderer richText={about[0].fields.informations[locale]} />
      </section>

      <Experiences experiences={experiences} locale={locale} />

      <Projects projects={projects} locale={locale} />

      <section className="mt-24 mb-12">
        <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
          {locale === "fr" ? "Savoir-faire" : "Skills"}
        </h2>
        <div className="sm:grid grid-cols-2 gap-x-24 gap-y-12 space-y-8 sm:space-y-0 mt-8">
          {competences.map((item, index) => {
            return (
              <div className="col-span-1" key={index}>
                <h3 className="text-xl font-bold">{item.fields.title["fr"]}</h3>
                <div className="mt-2 space-y-3">
                  {documentToReactComponents(item.fields.description[locale])}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
