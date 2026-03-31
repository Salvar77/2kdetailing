"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import classes from "./Nav.module.scss";
import AnimatedButton from "../More/AnimatedButton";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

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

  const socialLinks = [
    {
      href: "https://www.facebook.com/people/2K-Auto-Detailing-Opole/61587187552980/",
      icon: <FaFacebookF />,
      label: "Facebook 2K Auto Detailing Opole",
      className: classes.socialFb,
    },
    {
      href: "https://www.instagram.com/2kdetailingopole/",
      icon: <FaInstagram />,
      label: "Instagram 2K Auto Detailing Opole",
      className: classes.socialIg,
    },
    {
      href: "https://www.tiktok.com/@2kdetailingopole",
      icon: <FaTiktok />,
      label: "TikTok 2K Auto Detailing Opole",
      className: classes.socialTt,
    },
  ];

  return (
    <nav className={navClasses}>
      <div className={classes.container}>
        <Logo />

        {/* Social Icons - Desktop (between logo and nav links) */}
        <div className={classes.socialIcons}>
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`${classes.socialLink} ${s.className}`}
            >
              {s.icon}
            </a>
          ))}
        </div>

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
        {/* Social Icons - Mobile (bottom of dropdown) */}
        <li className={classes.mobileSocialRow}>
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`${classes.mobileSocialLink} ${s.className}`}
            >
              {s.icon}
            </a>
          ))}
        </li>
      </ul>

      {/* Overlay/Spacer przy otwartym menu */}
      <div
        className={`${classes.spacer} ${isOpen ? classes.open : ""}`}
        onClick={toggleNav}
      />
    </nav>
  );
}
