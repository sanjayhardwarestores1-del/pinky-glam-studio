import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Pinky Makeover Studio | Book Bridal Makeup in Raipur"
        description="Book Pinky Makeover Studio for bridal, party, nude & editorial makeup in Raipur. WhatsApp +91 99077 56210."
        path="/contact"
      />

      <section className="container py-16 md:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Get in Touch —</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
              Let's create something <span className="text-gradient italic">beautiful</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tell us about your event on WhatsApp and we'll personally reply with package details,
              availability and our portfolio.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <Reveal>
            <Card className="p-7 hover-lift border-border/60 h-full">
              <MessageCircle className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-serif text-2xl mb-1">WhatsApp Quick Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Fastest way to reach us — usually replies within minutes.</p>
              <Button asChild variant="luxe" className="w-full">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="p-7 border-border/60 space-y-4 h-full">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Call</p>
                  <a href={`tel:${SITE.phone}`} className="story-link font-medium">{SITE.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="story-link font-medium break-all">{SITE.email}</a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Studio</p>
                  <p className="text-sm">{SITE.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Instagram className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</p>
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="story-link font-medium">@pinkymakeoverstudio</a>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="container pb-24">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Find the Studio</h2>
          <div className="rounded-2xl overflow-hidden shadow-soft border border-border/60">
            <iframe
              title="Pinky Makeover Studio location"
              src="https://www.google.com/maps?q=Devendra+Nagar+Sector+4+Raipur+Chhattisgarh&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Contact;
