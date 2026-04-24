import { Sparkles, Heart, Award, Gem, Users, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { stats } from "@/data/content";
import { waLink } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const About = () => (
  <>
    <SEO
      title="About Pinky Makeover Studio | Luxury Makeup Artist Raipur"
      description="Meet Pinky — Raipur's premier bridal & editorial makeup artist with 2+ years of experience and 50+ happy clients across Chhattisgarh."
      path="/about"
    />

    <section className="container py-16 md:py-24">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Our Story —</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
            The art of <span className="text-gradient italic">becoming</span> the most beautiful you.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Pinky Makeover Studio was born out of a simple belief — every woman deserves to feel
            extraordinary on the days that matter most. What began as a passion in a small home
            studio in Raipur has grown into Chhattisgarh's most-loved bridal and editorial atelier.
          </p>
        </div>
      </Reveal>
    </section>

    <section className="bg-gradient-soft py-24">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
            <img
              src={IMAGES.aboutArtist}
              alt="Pinky — luxury bridal makeup artist in Raipur"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/70 to-transparent p-8">
              <p className="font-serif italic text-3xl text-background">Pinky</p>
              <p className="text-background/80 text-sm">Founder & Lead Artist</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="space-y-5">
            <h2 className="font-serif text-4xl md:text-5xl">Meet the Artist</h2>
            <p className="text-muted-foreground leading-relaxed">
              Trained in HD and avant-garde editorial techniques, Pinky has spent the last
              two years perfecting the craft of soft-glam bridal and contemporary editorial makeup.
              Her signature is luminous, second-skin makeup that enhances — never masks — your
              features.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond the brushes, Pinky is known for her calming presence on wedding mornings, her
              meticulous trials and her uncompromising standards on hygiene and product quality.
              Every kit is sanitised before every booking. Every brush is freshly cleaned.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From shy first-time brides to seasoned models, every client receives the same care:
              a personalised consultation, premium products and an experience that feels deeply,
              wonderfully <em>yours</em>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="container py-24">
      <SectionTitle eyebrow="What Makes Us Different" title="Premium, personal, perfect" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Heart, title: "Personalised Looks", text: "No template makeup. Every look is custom-designed for your features, outfit, lighting and event story." },
          { icon: Gem, title: "Premium Products", text: "MAC, Huda Beauty, Charlotte Tilbury, Kryolan, Bobbi Brown & Anastasia — only world-class brands." },
          { icon: Smile, title: "Affordable Luxury", text: "Packages starting from ₹999. Premium experience without the premium-only pricing." },
          { icon: Award, title: "2+ Years Mastery", text: "Hundreds of brides, dozens of editorial campaigns, thousands of moments of magic." },
          { icon: Users, title: "Trusted by 50+ Clients", text: "5-star ratings on Google & Instagram. The kindest reviews from the kindest brides." },
          { icon: Sparkles, title: "Hygiene First", text: "Every brush, sponge & palette sanitised before every client. Your safety is non-negotiable." },
        ].map((f, i) => (
          <Reveal key={f.title} delay={i * 60}>
            <Card className="h-full p-7 hover-lift border-border/60">
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-2xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="bg-gradient-soft py-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-5xl md:text-6xl text-gradient">{s.number}</p>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-24 text-center">
      <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
        Ready to experience the <span className="text-gradient italic">Pinky difference</span>?
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild variant="luxe" size="lg"><a href={waLink()} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a></Button>
        <Button asChild variant="outlineLuxe" size="lg"><Link to="/services">Explore Services</Link></Button>
      </div>
    </section>
  </>
);

export default About;
