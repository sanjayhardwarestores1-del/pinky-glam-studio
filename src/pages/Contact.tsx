import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  event: z.string().trim().min(2, "Event type is required").max(50),
  date: z.string().max(20).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().max(800).optional().or(z.literal("")),
});

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please check your details", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const v = parsed.data;
    const msg =
      `Hi Pinky! I'd like to book a makeup service.\n\n` +
      `Name: ${v.name}\nPhone: ${v.phone}\nEvent: ${v.event}\n` +
      (v.date ? `Date: ${v.date}\n` : "") +
      (v.budget ? `Budget: ${v.budget}\n` : "") +
      (v.message ? `\nMessage: ${v.message}` : "");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setTimeout(() => {
      toast({ title: "Inquiry sent!", description: "Continue the conversation on WhatsApp." });
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <>
      <SEO
        title="Contact Pinky Makeover Studio | Book Bridal Makeup in Raipur"
        description="Book Pinky Makeover Studio for bridal, party, nude & editorial makeup in Raipur. WhatsApp +91 99077 56210 or fill the inquiry form."
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
              Tell us about your event and we'll personally reply on WhatsApp with package details,
              availability and our portfolio.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10 mt-16">
          <Reveal className="lg:col-span-3">
            <Card className="p-8 md:p-10 border-border/60 shadow-soft">
              <h2 className="font-serif text-3xl mb-6">Inquiry Form</h2>
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required maxLength={80} placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp / Phone *</Label>
                  <Input id="phone" name="phone" required maxLength={20} placeholder="+91 9XXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event">Event Type *</Label>
                  <Input id="event" name="event" required maxLength={50} placeholder="Bridal, Party, Engagement…" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Input id="date" name="date" type="date" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" name="budget" maxLength={40} placeholder="e.g. ₹5,000 – ₹15,000" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Tell us more (optional)</Label>
                  <Textarea id="message" name="message" maxLength={800} rows={4} placeholder="Share venue, look inspiration, special requests…" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="luxe" size="lg" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending…" : <>Send Inquiry <Send className="w-4 h-4" /></>}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    Your inquiry opens a pre-filled WhatsApp chat with Pinky.
                  </p>
                </div>
              </form>
            </Card>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2 space-y-4">
            <Card className="p-7 hover-lift border-border/60">
              <MessageCircle className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-serif text-2xl mb-1">WhatsApp Quick Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Fastest way to reach us — usually replies within minutes.</p>
              <Button asChild variant="luxe" className="w-full">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </Card>

            <Card className="p-7 border-border/60 space-y-4">
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
