"use client";

import { create } from "zustand";

const useCounter = create((set) => ({
  counter: 0,
  incrCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useCounter;
