import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { IMAGES } from "@/lib/images";

const categories = ["All", "Bridal", "Party", "Nude", "Editorial"] as const;
type Cat = typeof categories[number];

const items: { cat: Exclude<Cat, "All">; label: string; src: string }[] = [
  { cat: "Bridal", label: "Traditional Red Bride", src: IMAGES.bridalTraditional },
  { cat: "Bridal", label: "Soft Glam Bride", src: IMAGES.bridalSoftglam },
  { cat: "Bridal", label: "Reception Diva", src: IMAGES.bridalSoftglam },
  { cat: "Party", label: "Cocktail Glam", src: IMAGES.party },
  { cat: "Party", label: "Sangeet Sparkle", src: IMAGES.insta5 },
  { cat: "Party", label: "Birthday Glow", src: IMAGES.light },
  { cat: "Nude", label: "Engagement Nude", src: IMAGES.nude },
  { cat: "Nude", label: "Pre-Wedding Glow", src: IMAGES.before1 },
  { cat: "Nude", label: "Minimal Bride", src: IMAGES.before2 },
  { cat: "Editorial", label: "High Fashion", src: IMAGES.editorial },
  { cat: "Editorial", label: "Beauty Macro", src: IMAGES.insta2 },
  { cat: "Editorial", label: "Bridal Detail", src: IMAGES.insta3 },
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
                className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden hover-lift"
              >
                <img
                  src={it.src}
                  alt={`${it.label} — ${it.cat} makeup look by Pinky Makeover Studio Raipur`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={768}
                  height={1024}
                />
                <Sparkles className="absolute top-3 right-3 w-4 h-4 text-background/80 drop-shadow" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent text-left">
                  <p className="font-serif text-lg text-background">{it.label}</p>
                  <p className="text-xs text-background/80 uppercase tracking-wider">{it.cat}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-gradient-soft py-24">
        <div className="container">
          <SectionTitle eyebrow="Transformations" title="Before & After" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { b: IMAGES.before1, a: IMAGES.bridalSoftglam, l: "Bridal" },
              { b: IMAGES.before2, a: IMAGES.editorial, l: "Editorial" },
            ].map((it, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-soft bg-card">
                <div className="grid grid-cols-2">
                  <div className="aspect-[4/5] relative">
                    <img src={it.b} alt={`Before ${it.l} makeup`} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale-[15%]" width={1024} height={1280} />
                    <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-[0.3em] text-background bg-foreground/40 backdrop-blur px-2 py-1 rounded">Before</span>
                  </div>
                  <div className="aspect-[4/5] relative">
                    <img src={it.a} alt={`After ${it.l} makeup`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" width={1024} height={1280} />
                    <span className="absolute bottom-2 right-2 text-[10px] uppercase tracking-[0.3em] text-background bg-primary/70 backdrop-blur px-2 py-1 rounded">After</span>
                  </div>
                </div>
                <p className="p-4 text-center font-serif text-lg">{it.l} Transformation</p>
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
            className="max-w-2xl w-full aspect-[3/4] rounded-2xl shadow-luxe relative animate-scale-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={filtered[lightbox].src} alt={filtered[lightbox].label} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
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
