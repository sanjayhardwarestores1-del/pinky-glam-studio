import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Heart, Award, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/data/services";
import { testimonials, stats, faqs } from "@/data/content";
import { SITE, waLink } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": SITE.name,
    "image": `${SITE.url}/og-image.jpg`,
    "telephone": SITE.phone,
    "email": SITE.email,
    "url": SITE.url,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Devendra Nagar Sector 4, D-231, Near Saraswati School",
      "addressLocality": "Raipur",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN",
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 21.2514, "longitude": 81.6296 },
    "openingHours": "Mo-Su 09:00-21:00",
    "sameAs": [SITE.instagram],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "210" },
  };

  return (
    <>
      <SEO
        title="Pinky Makeover Studio | Best Bridal Makeup Artist in Raipur"
        description="Premium bridal, party, airbrush & editorial makeup artist in Raipur, Chhattisgarh. HD long-lasting makeup. Book on WhatsApp today."
        path="/"
        schema={schema}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxe" />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--rose-gold-deep)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blush-deep blur-3xl opacity-50 animate-pulse-soft" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-rose-gold blur-3xl opacity-30 animate-pulse-soft" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="space-y-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm border border-primary/20 text-xs uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Raipur • Bridal • Editorial
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
              Enhancing Your <br />
              <span className="text-gradient italic">Natural Beauty</span> <br />
              with Luxury Makeup
            </h1>
            <p className="text-lg text-foreground/75 max-w-lg leading-relaxed">
              Bridal · Party · Airbrush · Nude · Editorial — handcrafted soft-glam looks
              by <span className="font-medium text-foreground">Pinky Makeover Studio</span>, Raipur's most-loved makeup artist.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="luxe" size="lg">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outlineLuxe" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br ${
                    i % 2 ? "from-blush-deep to-rose-gold" : "from-rose-gold to-champagne"
                  }`} />
                ))}
              </div>
              <div>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Loved by 1200+ brides & divas</p>
              </div>
            </div>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-blush via-champagne to-blush-deep shadow-luxe relative overflow-hidden">
                <div className="absolute inset-6 rounded-[1.5rem] border border-background/40 bg-background/10 backdrop-blur-sm" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center px-8">
                    <Sparkles className="w-12 h-12 mx-auto text-rose-gold-deep mb-4 animate-float" />
                    <p className="font-serif text-3xl text-foreground/80 italic">"Beauty begins<br/>the moment you decide<br/>to be yourself."</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-foreground/60">— Coco Chanel</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-luxe p-5 max-w-[200px] animate-float">
                <Award className="w-6 h-6 text-primary mb-2" />
                <p className="font-serif text-2xl">8+ Years</p>
                <p className="text-xs text-muted-foreground">of Bridal Artistry</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-rose text-primary-foreground rounded-2xl shadow-luxe p-4 animate-float" style={{ animationDelay: "1.2s" }}>
                <Heart className="w-5 h-5 mb-1 fill-current" />
                <p className="text-xs font-medium leading-tight">500+ Brides<br/>Beautified</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-16 md:py-20">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-secondary/40 hover-lift">
                <p className="font-serif text-4xl md:text-5xl text-gradient">{s.number}</p>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container py-20 md:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-rose-gold via-blush to-champagne overflow-hidden shadow-luxe">
            <div className="absolute inset-0 grid place-items-center">
              <Sparkles className="w-24 h-24 text-background/40" />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/30 to-transparent p-8">
              <p className="font-serif italic text-2xl text-background">— Pinky</p>
              <p className="text-background/80 text-sm">Founder & Lead Artist</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">— About the Artist —</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Where artistry meets <span className="text-gradient italic">elegance</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over eight years, Pinky has been crafting unforgettable bridal and editorial
              looks across Raipur and Chhattisgarh. Trained in HD, airbrush and avant-garde
              editorial techniques, she pairs world-class products with a deeply personal,
              intuitive approach to every client.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the softest nude glam to bold traditional bridal — every look is custom-built to
              your features, outfit and the story of your day.
            </p>
            <Button asChild variant="outlineLuxe" size="lg">
              <Link to="/about">Read Pinky's Story <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-soft py-24">
        <div className="container">
          <SectionTitle
            eyebrow="Signature Services"
            title="Looks designed for every chapter"
            subtitle="Bridal, party, airbrush, nude and editorial — each service is personalised, premium and crafted to last."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Card className="group h-full p-8 border-border/60 bg-background/80 backdrop-blur-sm hover-lift overflow-hidden relative">
                  <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${s.hue} opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className="relative">
                    <Sparkles className="w-7 h-7 text-primary mb-5" />
                    <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.short}</p>
                    <Link to="/services" className="story-link text-sm font-medium text-primary inline-flex items-center gap-1">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="container py-24">
        <SectionTitle
          eyebrow="The Pinky Transformation"
          title="Before & After"
          subtitle="Real clients, real glow-ups — every look is enhanced, never overdone."
        />
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["from-nude to-blush", "from-blush-deep to-rose-gold", "Bridal Glow"],
              ["from-champagne to-ivory", "from-rose-gold to-blush-deep", "Soft Nude"],
              ["from-blush to-champagne", "from-rose-gold-deep to-blush", "Editorial"],
            ].map(([b, a, label], i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-soft hover-lift">
                <div className="grid grid-cols-2">
                  <div className={`aspect-[3/4] bg-gradient-to-br ${b} grid place-items-center`}>
                    <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">Before</span>
                  </div>
                  <div className={`aspect-[3/4] bg-gradient-to-br ${a} grid place-items-center relative`}>
                    <Sparkles className="absolute top-3 right-3 w-4 h-4 text-background" />
                    <span className="text-xs uppercase tracking-[0.3em] text-background/90">After</span>
                  </div>
                </div>
                <div className="p-4 bg-card text-center">
                  <p className="font-serif text-lg">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-soft py-24">
        <div className="container">
          <SectionTitle eyebrow="Kind Words" title="Loved by brides & divas" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <Card className="h-full p-7 bg-background/90 border-border/60 hover-lift">
                  <Quote className="w-7 h-7 text-primary/40 mb-4" />
                  <div className="flex mb-3 text-primary">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/85 italic">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-serif text-lg">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="container py-24">
        <SectionTitle
          eyebrow="As Seen on Instagram"
          title="Follow @pinkymakeoverstudio"
          subtitle="A daily dose of bridal inspiration, behind-the-scenes magic and real client transformations."
        />
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "from-blush to-rose-gold",
              "from-champagne to-blush-deep",
              "from-rose-gold to-blush",
              "from-blush-deep to-champagne",
              "from-nude to-blush",
              "from-rose-gold-deep to-rose-gold",
            ].map((g, i) => (
              <a
                key={i}
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${g} hover-lift`}
              >
                <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition bg-foreground/40">
                  <Instagram className="w-7 h-7 text-background" />
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outlineLuxe">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" /> View on Instagram
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-soft py-24">
        <div className="container max-w-3xl">
          <SectionTitle eyebrow="Frequently Asked" title="Your questions, answered" />
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/70">
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-rose p-10 md:p-20 text-center text-primary-foreground shadow-luxe">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--background)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative max-w-2xl mx-auto">
            <Sparkles className="w-10 h-10 mx-auto mb-6 animate-float" />
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Book Your Dream Look Today
            </h2>
            <p className="mt-5 text-primary-foreground/90 text-lg">
              Packages starting from ₹999 · Trials available · Bookings open for this wedding season.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp Pinky</a>
              </Button>
              <Button asChild size="xl" variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                <Link to="/contact">Inquiry Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
