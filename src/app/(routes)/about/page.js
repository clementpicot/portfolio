import React from "react";
import ArticleTransition from "@/components/article-transition";
import HeadingTransition from "@/components/heading-transition";
import Link from "next/link";

export default function About() {
  return (
    <>
      <HeadingTransition title="Who am I" />

      <ArticleTransition>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          ut dolorem repudiandae rem corporis nemo placeat molestias eos in
          similique possimus deleniti officiis cupiditate perferendis officia
          quibusdam. Consectetur nemo harum saepe ipsum quidem natus aspernatur
          est blanditiis, ipsam odit totam suscipit assumenda ea dolore pariatur
          dolores, modi tenetur. Totam unde tenetur non at eveniet ratione
          voluptate quis est aspernatur quidem aperiam dignissimos neque
          corrupti ipsam deserunt accusantium cupiditate magnam, tempora quasi,
          maxime suscipit quo commodi ipsum laborum? Harum, ducimus distinctio.
          Consectetur deserunt ex quasi repudiandae animi explicabo, ut ratione
          excepturi maiores, itaque incidunt exercitationem porro eius aliquid
          quas quo voluptas nisi velit quisquam est veritatis officia pariatur.
          Libero, repellat eligendi voluptatibus dolorem ex est asperiores
          facilis ab eos veritatis esse consequatur. Nihil, doloribus repellat
          quis dolore incidunt laborum aliquam quasi, id excepturi ratione,
          maxime inventore. Quae iusto autem facilis commodi perferendis, at
          aliquam doloremque optio fugiat necessitatibus ad, quibusdam porro
          libero possimus. Illo placeat accusamus laboriosam labore distinctio
          vitae, dicta, doloribus recusandae sed neque eius asperiores ex rerum
          laudantium, tenetur perspiciatis nihil qui sequi beatae ipsa!
          Voluptatibus minima magnam sequi delectus suscipit optio fugit officia
          aliquid corporis, et iure odit possimus atque quod ut vero animi
          officiis molestias ullam harum minus. Sit totam facilis quo numquam
          veritatis, quos rem a. Nihil sit distinctio quo! Similique nobis quas
          eius fugiat ad excepturi eum cupiditate quaerat, ullam blanditiis
          recusandae maiores itaque, <Link href="/" className="text-blue-500 hover:text-blue-700">deleniti</Link> neque
          aperiam cumque explicabo, eos alias. Quod ab rerum quae iure ex
          tenetur quisquam. Quam cumque illum qui quasi fugit, ipsum obcaecati
          similique magni voluptatum, illo necessitatibus porro itaque dolores.
          Sint omnis commodi labore odio? Ipsam dignissimos deserunt asperiores
          qui ipsum? Dolore quod quaerat rerum eius hic eaque, exercitationem
          sit, molestiae ducimus sed optio dolores. Autem veniam beatae et
          officiis dolore doloremque aperiam quam, assumenda praesentium,
          voluptas minima, iusto quia.
        </p>
      </ArticleTransition>
    </>
  );
}
