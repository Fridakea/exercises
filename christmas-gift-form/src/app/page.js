"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { Button } from "@/components/Button";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function Home() {
  const [amount, setAmount] = useState(1);

  function FormAction() {
    redirect("/step-2?amount=" + amount);
  }

  return (
    <LayoutWrapper fit={"fit"}>
      <form action={FormAction}>
        <fieldset className="flex flex-col items-center justify-center text-green-950">
          <legend className="mb-6 text-2xl font-bold text-center">
            Formular step 1
          </legend>

          <label htmlFor="amount">Antal Julenisser</label>
          <input
            type="range"
            id="amount"
            name="amount"
            min="1"
            max="10"
            value={amount}
            onInput={(e) => setAmount(e.currentTarget.value)}
            className="cursor-pointer"
          />
          <p className="mb-6">{amount}</p>
          <Button type="submit">Næste step</Button>
        </fieldset>
      </form>
    </LayoutWrapper>
  );
}
