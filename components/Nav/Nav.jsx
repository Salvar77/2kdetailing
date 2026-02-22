"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import classes from "./Nav.module.scss";
import AnimatedButton from "../More/AnimatedButton";
import { usePathname } from "next/navigation";

export default function Nav({ isOpen, toggleNav }) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  const items = [
    { href: "/cennik", label: "Cennik" },
    { href: "/oferta", label: "Oferta" },
    { href: "/blog", label: "Blog" },
    { href: "/recenzje", label: "Recenzje" },
    { href: "/galeria", label: "Galeria" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  // WARUNEK: Każda podstrona poza główną "/" otrzymuje klasę solid
  const isSubpage = pathname !== "/";
  const navClasses = `${classes.navbar} ${isSubpage ? classes.solid : ""}`;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        toggleNav();
      }
      setIsDesktop(window.innerWidth >= 992);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, toggleNav]);

  return (
    <nav className={navClasses}>
      <div className={classes.container}>
        <Logo />

        <div className={classes.navGroup}>
          <ul className={classes.links}>
            {items.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className={classes.navLink}>
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={classes.buttonWrapper}>
            <AnimatedButton
              onClick={() => (window.location.href = "tel:+48797234734")}
            >
              +48 797 234 734
            </AnimatedButton>
          </div>
        </div>

        <div className={classes.burgerContainer}>
          <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
        </div>
      </div>

      {/* Menu Mobilne */}
      <ul className={`${classes.mobileMenu} ${isOpen ? classes.open : ""}`}>
        {items.map((it) => (
          <li key={it.href} className={classes.mobileItem}>
            <Link
              href={it.href}
              onClick={toggleNav}
              className={classes.mobileLink}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Overlay/Spacer przy otwartym menu */}
      <div
        className={`${classes.spacer} ${isOpen ? classes.open : ""}`}
        onClick={toggleNav}
      />
    </nav>
  );
}
