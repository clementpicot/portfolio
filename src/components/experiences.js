"use client";

import React, { useState } from "react";
import Experience from "./experience";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Experiences({ experiences }) {
  const [openedIndex, setOpenedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="my-12">
      <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
        Expériences
      </h2>

      {experiences.map((item, index) => {
        return (
          <Experience
            delay={index / 8 + 0.5}
            context={
              openedIndex === index
                ? documentToReactComponents(item.fields.description["fr"])
                : null
            }
            isOpened={openedIndex === index}
            onToggle={() => toggleAccordion(index)}
            key={index}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-10">
              <div className="sm:min-w-36 order-1">
                <h3 className="text-xl">{item.fields.company["fr"]}</h3>
                <p className="text-sm mt-1">
                  <span className="inline-block mx-2">•</span>
                  {item.fields.date["fr"]}
                </p>
              </div>
              <div className="sm:max-w-[50%] order-3 sm:order-2">
                {item.fields.introduction["fr"]}
              </div>
              <div className="max-w-40 w-full sm:text-right order-2 sm:order-3">
                <span className="badge">{item.fields.job["fr"]}</span>
              </div>
            </div>
          </Experience>
        );
      })}
    </section>
  );
}
