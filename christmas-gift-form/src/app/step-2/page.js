"use client";

import { Button } from "@/components/Button";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { redirect, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  let amount = parseInt(searchParams.get("amount"));

  function send(formData, i) {
    const data = [
      {
        name: formData.getAll("name"),
        email: formData.getAll("email"),
        size: formData.getAll("size"),
      },
    ];

    redirect("/step-3");
  }

  return (
    <LayoutWrapper>
      <form action={send} className="w-[85%] flex flex-col items-center">
        <h1 className="mb-8 text-2xl font-bold text-green-950">
          Udfyld detaljerne for at bestille
          <span className="text-red-900 font-extrabold"> Julenisser</span>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {Array(amount)
            .fill(0)
            .map((item, i) => (
              <fieldset
                key={i}
                className="p-4 bg-green-950/50 rounded-xl flex flex-col gap-1"
              >
                <legend className="py-2 px-4 bg-green-950 rounded-md text-white text-lg">
                  Nisse {i + 1}
                </legend>
                <label htmlFor="name">Navn på modtager</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mb-4 py-1 px-2 rounded-md"
                ></input>

                <label htmlFor="email">E-mail på modtager</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mb-4 py-1 px-2 rounded-md"
                ></input>

                <label htmlFor="size">Størrelse på nissen</label>
                <select
                  id="size"
                  name="size"
                  className="mb-4 py-1 px-2 rounded-md"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </fieldset>
            ))}
        </div>

        <Button>Bestil julenisser</Button>
      </form>
    </LayoutWrapper>
  );
}
