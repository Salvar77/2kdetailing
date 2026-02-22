"use client";

import dynamic from "next/dynamic";

export const Galeria = dynamic(() => import("./clientGaleria"), {
  ssr: false,
});
