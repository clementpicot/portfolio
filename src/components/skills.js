import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

export default function Skills({ competences, locale }) {
  return (
    <section className="skills mt-24 mb-12">
      <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
        {locale === "fr" ? "Savoir-faire" : "Skills"}
      </h2>
      <div className="sm:grid grid-cols-2 gap-x-24 gap-y-12 space-y-8 sm:space-y-0 mt-8">
        {competences.map((item, index) => {
          return (
            <div className="skill col-span-1" key={index}>
              <h3 className="text-xl font-bold">{item.fields.title["fr"]}</h3>
              <div className="mt-2 space-y-3">
                {documentToReactComponents(item.fields.description[locale])}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
