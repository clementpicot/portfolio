import React from "react";
import RichTextRenderer from "./rich-text-renderer";

export default function About({ about, locale }) {

  return (
    <section className="mt-12">
      <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
        {locale === "fr" ? "À propos" : "About"}
      </h2>
      <RichTextRenderer richText={about[0].fields.informations[locale]} />
    </section>
  );
}
