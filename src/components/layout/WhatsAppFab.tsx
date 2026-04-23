import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const WhatsAppFab = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    <span className="relative flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-luxe hover:scale-105 transition-transform">
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">Chat with Pinky</span>
    </span>
  </a>
);
