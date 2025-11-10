import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMacbookStore = create(
  persist(
    (set) => ({
      color: "#2e2c2e",
      setColor: (color) => set({ color }),

      scale: 0.08,
      setScale: (scale) => set({ scale }),

      texture: '/videos/feature-1.mp4',
      setTexture: (texture) => set({ texture }),

      reset: () => set({ color: "#2e2e2c", scale: 0.08, texture: '/video/feature-1.mp4' }),
    }),
    { name: "macbook-store" } // storage key
  )
);

export default useMacbookStore;
