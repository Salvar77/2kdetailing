"use client";

import dynamic from "next/dynamic";

export const ContactWithAnimation = dynamic(
  () => import("../../components/More/ContactWithAnimation"),
  { ssr: false },
);

export const ContactContent = dynamic(() => import("./ContactContent"), {
  ssr: false,
});
