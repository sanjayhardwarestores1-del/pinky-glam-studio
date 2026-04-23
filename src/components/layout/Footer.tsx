import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="bg-gradient-to-b from-background to-blush/40 border-t border-border mt-24">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-gradient-rose grid place-items-center shadow-soft">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </span>
          <span className="font-serif text-2xl">
            Pinky <span className="text-gradient italic">Makeover Studio</span>
          </span>
        </div>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          Raipur's trusted luxury makeup artist for brides, parties, fashion shoots and editorials.
          Personalised soft-glam looks crafted with premium HD & airbrush products.
        </p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm story-link"
        >
          <Instagram className="w-4 h-4" /> @pinkymakeoverstudio
        </a>
      </div>

      <div className="space-y-3">
        <h4 className="font-serif text-xl">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/services", "Services"],
            ["/gallery", "Gallery"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <li key={to}>
              <Link to={to} className="story-link hover:text-foreground">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h4 className="font-serif text-xl">Visit / Reach</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /><span>{SITE.address}</span></li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" /><a href={`tel:${SITE.phone}`} className="story-link">{SITE.phoneDisplay}</a></li>
          <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /><a href={`mailto:${SITE.email}`} className="story-link break-all">{SITE.email}</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Pinky Makeover Studio. All rights reserved.</p>
        <p>Crafted with love in Raipur, Chhattisgarh.</p>
      </div>
    </div>
  </footer>
);
