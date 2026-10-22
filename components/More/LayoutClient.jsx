"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ContactBubble from "../../components/More/ContactBubble";
import BooksyBubble from "./BooksyBubble";
import ScrollToTop from "./ScrollToTop";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ScrollToTop />
      <header>
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
      </header>

      {isHome ? <main>{children}</main> : children}

      <Footer />
      <ContactBubble />
      {/* <BooksyBubble /> */}
    </>
  );
}
