"use client";

import React, { useState } from "react";
import Row from "./row";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import useToggle from "@/hooks/use-toggle";

export default function Experiences({ experiences, locale }) {

  const {openedIndex, toggle} = useToggle()

  return (
    <section className="experiences mt-24 relative z-10">
      <h2 className="text-clamp w-full block uppercase font-funnel text-bold">
        {locale === 'fr' ? 'Expériences' : 'Experiences'}
      </h2>

      {experiences.map((item, index) => {
        return (
          <Row
            delay={index / 8 + 0.5}
            context={
              openedIndex === index
                ? item.fields.description[locale]
                : null
            }
            isOpened={openedIndex === index}
            onToggle={() => {
              toggle(index)

              if(!window.umami) return;

              window.umami.track(`Expérience - ${item.fields.company["fr"]}`)
            }}
            key={index}
          >
            <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-10">
              <div className="sm:min-w-36 order-1">
                <h3 className="text-xl">
                  {item.fields.link ? (
                    <Link
                      href={item.fields.link["fr"]}
                      target="_blank"
                      className="flex gap-2"
                    >
                      {item.fields.company["fr"]}
                      <ArrowUpRightIcon width={12} />
                    </Link>
                  ) : (
                    item.fields.company["fr"]
                  )}
                </h3>
                <p className="text-sm mt-1">
                  <span className="inline-block mx-2">•</span>
                  {item.fields.date["fr"]}
                </p>
              </div>
              <div className="row-introduction sm:max-w-[50%] order-3 sm:order-2">
                {item.fields.introduction[locale]}
              </div>
              <div className="max-w-40 w-full sm:text-right order-2 sm:order-3">
                <span className="badge">{item.fields.job[locale]}</span>
              </div>
            </div>

            {/* Print Only */}
            <div className="row-content row-content-print mt-8 hidden">{documentToReactComponents(item.fields.description[locale])}</div>
          </Row>
        );
      })}
    </section>
  );
}
