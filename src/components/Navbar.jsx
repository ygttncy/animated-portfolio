import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Ana Sayfa" },
    { href: "#projects", label: "Projeler" },
    { href: "#certs", label: "Sertifikalar" },
    { href: "#about", label: "Hakkımda" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
      data-scrolled={scrolled}
      style={{
        position: "fixed",
        inset: "20px 0 auto",
        zIndex: 50,
      }}
    >
      <div className="container">
        <div
          className="nav-inner card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
          }}
        >
          <a
            href="#home"
            className="brand"
            style={{ fontWeight: 700, letterSpacing: ".3px" }}
          >
            Yiğit<span style={{ color: "var(--accent-2)" }}>.</span>
          </a>
          <nav className="desktop" style={{ display: "none", gap: "24px" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="button"
            aria-label="Menüyü Aç/Kapat"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <style jsx="true">{`
        .navbar[data-scrolled="true"] .nav-inner {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        @media (min-width: 960px) {
          .navbar .desktop {
            display: flex;
          }
          .navbar .button {
            display: none;
          }
        }
        .nav-link {
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }
        .nav-link:hover {
          opacity: 1;
        }
      `}</style>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container"
          >
            <div
              className="card"
              style={{ marginTop: 12, padding: 16, display: "grid", gap: 8 }}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
