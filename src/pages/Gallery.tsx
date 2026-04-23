import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

const categories = ["All", "Bridal", "Party", "Nude", "Editorial"] as const;
type Cat = typeof categories[number];

const items: { cat: Exclude<Cat, "All">; label: string; hue: string }[] = [
  { cat: "Bridal", label: "Traditional Red Bride", hue: "from-blush-deep to-rose-gold-deep" },
  { cat: "Bridal", label: "Soft Glam Bride", hue: "from-blush to-champagne" },
  { cat: "Bridal", label: "Reception Diva", hue: "from-rose-gold to-blush-deep" },
  { cat: "Party", label: "Cocktail Glam", hue: "from-rose-gold-deep to-blush" },
  { cat: "Party", label: "Sangeet Sparkle", hue: "from-blush-deep to-champagne" },
  { cat: "Party", label: "Birthday Glow", hue: "from-rose-gold to-champagne" },
  { cat: "Nude", label: "Engagement Nude", hue: "from-nude to-blush" },
  { cat: "Nude", label: "Pre-Wedding Glow", hue: "from-champagne to-nude" },
  { cat: "Nude", label: "Minimal Bride", hue: "from-blush to-nude" },
  { cat: "Editorial", label: "High Fashion", hue: "from-rose-gold-deep to-blush-deep" },
  { cat: "Editorial", label: "Magazine Cover", hue: "from-blush-deep to-rose-gold" },
  { cat: "Editorial", label: "Avant-Garde", hue: "from-rose-gold to-blush" },
];

const Gallery = () => {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = items.filter((i) => active === "All" || i.cat === active);

  return (
    <>
      <SEO
        title="Gallery | Bridal & Editorial Makeup Looks — Pinky Makeover Studio"
        description="Explore Pinky's portfolio of bridal, party, nude and editorial makeup looks created in Raipur. Real client transformations."
        path="/gallery"
      />

      <section className="container py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Portfolio —</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            A gallery of <span className="text-gradient italic">unforgettable</span> looks.
          </h1>
        </Reveal>

        <div className="flex flex-wrap gap-2 mt-12 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                active === c
                  ? "bg-gradient-rose text-primary-foreground shadow-soft"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((it, i) => (
            <Reveal key={`${it.label}-${i}`} delay={(i % 4) * 70}>
              <button
                onClick={() => setLightbox(i)}
                className={`group relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-br ${it.hue} hover-lift`}
              >
                <Sparkles className="absolute top-3 right-3 w-4 h-4 text-background/70" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent text-left">
                  <p className="font-serif text-lg text-background">{it.label}</p>
                  <p className="text-xs text-background/80 uppercase tracking-wider">{it.cat}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER (simple) */}
      <section className="bg-gradient-soft py-24">
        <div className="container">
          <SectionTitle eyebrow="Transformations" title="Before & After" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              ["from-nude to-blush", "from-blush-deep to-rose-gold-deep", "Bridal"],
              ["from-champagne to-ivory", "from-rose-gold to-blush", "Editorial"],
            ].map(([b, a, l], i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-soft">
                <div className="grid grid-cols-2">
                  <div className={`aspect-[4/5] bg-gradient-to-br ${b} grid place-items-center text-xs uppercase tracking-[0.3em] text-foreground/60`}>Before</div>
                  <div className={`aspect-[4/5] bg-gradient-to-br ${a} grid place-items-center text-xs uppercase tracking-[0.3em] text-background/90`}>After</div>
                </div>
                <p className="p-4 bg-card text-center font-serif text-lg">{l} Transformation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-foreground/85 backdrop-blur-md grid place-items-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-background" aria-label="Close">
            <X className="w-7 h-7" />
          </button>
          <div
            className={`max-w-2xl w-full aspect-[3/4] rounded-2xl bg-gradient-to-br ${filtered[lightbox].hue} shadow-luxe relative animate-scale-in`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 grid place-items-center">
              <Sparkles className="w-20 h-20 text-background/50" />
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/70 to-transparent rounded-b-2xl">
              <p className="font-serif text-3xl text-background">{filtered[lightbox].label}</p>
              <p className="text-background/80 text-xs uppercase tracking-[0.3em] mt-1">{filtered[lightbox].cat} Look</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
