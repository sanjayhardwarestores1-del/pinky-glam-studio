import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Pinky Makeover Studio logo"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-soft"
          />
          <span className="font-serif text-xl md:text-2xl tracking-tight">
            Pinky <span className="text-gradient italic">Makeover</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `story-link text-sm tracking-wide uppercase font-medium ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`
              }
              end={l.to === "/"}
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="luxe" size="sm" className="hidden sm:inline-flex">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-lg font-serif ${isActive ? "text-primary" : "text-foreground"}`
                }
                end={l.to === "/"}
              >
                {l.label}
              </RouterNavLink>
            ))}
            <Button asChild variant="luxe" className="mt-2 w-full">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
