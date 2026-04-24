import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/data/services";
import { waLink } from "@/lib/site";
import { serviceImages } from "@/lib/images";

const Services = () => (
  <>
    <SEO
      title="Makeup Services in Raipur | Bridal, Party, Editorial — Pinky Makeover"
      description="Premium bridal makeup, party makeup, nude, light & editorial makeup services in Raipur. Long-lasting HD makeup by Pinky. Packages starting from ₹999."
      path="/services"
    />

    <section className="container py-16 md:py-24">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Signature Services —</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
            A look for every <span className="text-gradient italic">moment</span> that matters.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From your wedding morning to fashion week — every Pinky service is built around premium
            products, personalised colour matching and long-lasting, photo-ready finishes.
          </p>
        </div>
      </Reveal>
    </section>

    <section className="container pb-24 space-y-20">
      {services.map((s, i) => (
        <Reveal key={s.slug}>
          <article id={s.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative aspect-[4/5] rounded-[2rem] shadow-luxe overflow-hidden">
              <img
                src={serviceImages[s.slug]}
                alt={`${s.keyword} — ${s.title} portfolio by Pinky Makeover Studio`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Ideal for</p>
                <p className="font-serif text-lg mt-1">{s.ideal}</p>
              </div>
            </div>

            <Card className="p-8 md:p-10 border-border/60 bg-card">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— {s.keyword} —</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-3 mb-8">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 grid place-items-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-sm text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="luxe">
                  <a href={waLink(`Hi Pinky, I'd love to book ${s.title}. Please share details.`)} target="_blank" rel="noopener noreferrer">
                    Book {s.title} <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <span className="self-center text-xs text-muted-foreground">Packages from ₹999 →</span>
              </div>
            </Card>
          </article>
        </Reveal>
      ))}
    </section>

    <section className="bg-gradient-soft py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Locations We Serve"
          title="Available across Raipur & beyond"
          subtitle="Studio appointments in Devendra Nagar · On-location bridal services across Chhattisgarh · Destination weddings pan-India."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Raipur", "Bhilai", "Bilaspur", "Durg", "Naya Raipur", "Korba", "Rajnandgaon", "Pan-India"].map((c) => (
            <div key={c} className="text-center py-5 rounded-xl bg-background/80 border border-border/60 font-serif text-lg">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
