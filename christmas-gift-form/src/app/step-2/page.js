"use client";

import { Button } from "@/components/Button";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function Page() {
  let amount = parseInt(params.get("amount"), 10);

  return (
    <LayoutWrapper>
      <form>
        <fieldset className="flex flex-col items-center justify-center">
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
          />
          <p className="mb-6">{amount}</p>
          <Button type="submit">Næste step</Button>
        </fieldset>
      </form>
    </LayoutWrapper>
  );
}
