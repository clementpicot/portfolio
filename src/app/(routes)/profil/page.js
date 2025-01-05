import React from "react";
import client from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Experiences from "@/components/experiences";
import Link from "next/link";

export default async function Competences() {
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
      <div>Dossier</div>
      <div>
        <Link href={"/"}>Accueil</Link>
      </div>

      <Experiences experiences={experiences} />

      <section>
        <h2 className="text-3xl text-bold underline underline-offset-4">
          Projets
        </h2>
        {projects.map((item, index) => {
          return (
            <div className="mt-8" key={index}>
              <div className="flex flex-col-reverse sm:items-center sm:flex-row sm:justify-between gap-2">
                <h3 className="text-xl font-bold">
                  {item.fields.project_name["fr"]}{" "}
                  <span className="text-base font-normal">
                    {" "}
                    - {item.fields.job["fr"]}
                  </span>
                </h3>
                <span className="badge">{item.fields.date["fr"]}</span>
              </div>
              <div className="mt-2 space-y-2 max-w-[90%]">
                {documentToReactComponents(item.fields.description["fr"])}
                <p>Technologies utilisées : {item.fields.technos["fr"]}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="text-3xl text-bold underline underline-offset-4">
          Compétences techniques
        </h2>
        {competences.map((item, index) => {
          return (
            <div className="mt-8" key={index}>
              <h3 className="text-xl font-bold">{item.fields.title["fr"]}</h3>
              <div className="mt-2 space-y-2">
                {documentToReactComponents(item.fields.description["fr"])}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
