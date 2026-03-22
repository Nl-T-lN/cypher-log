import React, { useLayoutEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import useScrollSpy from "../hooks/useScrollSpy";

const NAV_ITEMS = [
  {
    label: "Navigate",
    bgColor: "var(--secondary-color)",
    textColor: "var(--bg-color)",
    links: [
      { label: "Home", sectionId: "home" },
      { label: "About", sectionId: "about" },
    ],
  },
  {
    label: "Work",
    bgColor: "var(--text-color-3)",
    textColor: "var(--bg-color)",
    links: [
      { label: "Projects", sectionId: "portfolio" },
      { label: "Contact", sectionId: "contact" },
    ],
  },
  {
    label: "Connect",
    bgColor: "var(--primary-color)",
    textColor: "var(--text-color)",
    links: [
      ...(socialprofils.github
        ? [{ label: "GitHub", href: socialprofils.github }]
        : []),
      ...(socialprofils.linkedin
        ? [{ label: "LinkedIn", href: socialprofils.linkedin }]
        : []),
    ],
  },
];

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const sectionIds = ["home", "about", "portfolio", "contact"];
  const activeSection = useScrollSpy(sectionIds, 150);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".cardnav__content");
      if (contentEl) {
        const prev = {
          vis: contentEl.style.visibility,
          pe: contentEl.style.pointerEvents,
          pos: contentEl.style.position,
          h: contentEl.style.height,
        };
        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";
        void contentEl.offsetHeight;
        const total = 60 + contentEl.scrollHeight + 16;
        contentEl.style.visibility = prev.vis;
        contentEl.style.pointerEvents = prev.pe;
        contentEl.style.position = prev.pos;
        contentEl.style.height = prev.h;
        return total;
      }
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease: "power3.out",
    });
    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", stagger: 0.08 },
      "-=0.1"
    );
    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        const h = calculateHeight();
        gsap.set(navRef.current, { height: h });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) tlRef.current = newTl;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // close menu
    if (isExpanded) {
      setIsOpen(false);
      tlRef.current?.eventCallback("onReverseComplete", () =>
        setIsExpanded(false)
      );
      tlRef.current?.reverse();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <>
      <div className="cardnav__container">
        <nav
          ref={navRef}
          className={`cardnav ${isExpanded ? "cardnav--open" : ""}`}
        >
          {/* Top bar */}
          <div className="cardnav__top">
            <div
              className={`cardnav__hamburger ${isOpen ? "cardnav__hamburger--open" : ""}`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? "Close menu" : "Open menu"}
              tabIndex={0}
            >
              <div className="cardnav__hamburger-line" />
              <div className="cardnav__hamburger-line" />
            </div>

            <button
              className="cardnav__logo"
              onClick={() => scrollToSection("home")}
            >
              {logotext}
            </button>

            <Themetoggle />
          </div>

          {/* Cards content */}
          <div
            className={`cardnav__content ${isExpanded ? "cardnav__content--visible" : ""}`}
            aria-hidden={!isExpanded}
          >
            {NAV_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="cardnav__card"
                ref={setCardRef(idx)}
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                <div className="cardnav__card-label">{item.label}</div>
                <div className="cardnav__card-links">
                  {item.links.map((lnk, i) =>
                    lnk.sectionId ? (
                      <button
                        key={i}
                        className={`cardnav__card-link ${activeSection === lnk.sectionId ? "cardnav__card-link--active" : ""}`}
                        onClick={() => scrollToSection(lnk.sectionId)}
                        style={{ color: "inherit" }}
                      >
                        <GoArrowUpRight className="cardnav__card-link-icon" />
                        {lnk.label}
                      </button>
                    ) : (
                      <a
                        key={i}
                        className="cardnav__card-link"
                        href={lnk.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "inherit" }}
                      >
                        <GoArrowUpRight className="cardnav__card-link-icon" />
                        {lnk.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
