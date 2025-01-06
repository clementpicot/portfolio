"use client";

import React from "react";
import Row from "./row";
import useToggle from "@/hooks/use-toggle";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Projects({ projects, locale }) {

  const { openedIndex, toggle } = useToggle();

  return (
    <section className="mt-24 relative z-10">
      <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
        {locale === 'fr' ? 'Projets' : 'Projects'}
      </h2>
      {projects.map((item, index) => {
        return (
          <Row
            className="mt-8"
            delay={index / 8 + 0.5}
            context={
              openedIndex === index
                ? documentToReactComponents(item.fields.description[locale])
                : null
            }
            isOpened={openedIndex === index}
            onToggle={() => toggle(index)}
            key={index}
          >
            <div className="flex flex-col-reverse sm:items-center sm:flex-row sm:justify-between gap-2">
              <h3 className="text-xl font-bold">
                {item.fields.project_name["fr"]}{" "}
                <span className="text-base font-normal">
                  {" "}
                  - {item.fields.job[locale]}
                </span>
              </h3>
            </div>
            <div className="mt-2 space-y-4">
              <div className="space-x-2 space-y-2">
                {item.fields.technos["fr"].map((techno, index) => (
                  <span key={index} className="badge">
                    {techno}
                  </span>
                ))}
              </div>
              <p>{item.fields.introduction[locale]}</p>
            </div>
          </Row>
        );
      })}
    </section>
  );
}
