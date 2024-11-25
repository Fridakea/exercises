"use client";

import Image from "next/image";
import tShirt from "@/assets/images/t-shirt.png";
import Link from "next/link";
import { Button } from "./Button";

export const ProductSingleView = () => {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const colors = ["White", "Grey", "Black"];

  return (
    <section className="flex">
      <Image src={tShirt} alt="T-shirt" width={500} height={500} />

      <article>
        <h1>Bare en t-shirt</h1>

        <fieldset>
          <legend>Sizes</legend>
        </fieldset>

        <fieldset>
          <legend>Colors</legend>
        </fieldset>
      </article>

      <Button text={"Gå til betaling"} />
    </section>
  );
};
