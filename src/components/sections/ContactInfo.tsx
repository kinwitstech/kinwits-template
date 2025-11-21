import { Phone, MapPin, Mail, ChevronDown, ChevronUp, Linkedin, Instagram, Twitch, Music, Twitter } from 'lucide-react';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
const ContactInfo = () => {
  const [showMap, setShowMap] = useState(false);
  return <>
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">CALL US</h3>
                <p className="text-muted-foreground mb-2">+61 383 767 284</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">ADDRESS</h3>
                <p className="text-muted-foreground mb-2">245 Quigley Blvd, Ste K</p>
                <button onClick={() => setShowMap(!showMap)} className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-2">
                  SEE ON THE MAP
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">EMAIL</h3>
                <p className="text-muted-foreground mb-2">+61 383 767 284</p>
                <a href="mailto:hello@kinwitstech.com" className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-2 inline-block">
                  SAY HELLO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Toggle Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <button onClick={() => setShowMap(!showMap)} className="inline-flex flex-col items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group">
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-background" />
              </div>
              <span className="flex items-center gap-2">
                {showMap ? 'Close' : 'Open'} The Map {showMap ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </span>
            </button>
          </div>

          {showMap && <div className="mt-12 w-full h-[400px] bg-secondary/30 rounded-lg overflow-hidden animate-fade-in">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531652!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
              <div className="text-foreground font-bold text-2xl">K</div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-background" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-background" />
              </a>
              
              
              
              
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-background" />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[9px] sm:text-xs tracking-widest uppercase px-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                HOME
              </a>
              <span className="text-background/40">|</span>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                SUPPORT
              </a>
              <span className="text-background/40">|</span>
              <a href="#" className="text-background/60 hover:text-background transition-colors whitespace-nowrap">
                PRIVACY POLICY
              </a>
              
              
            </nav>

            {/* Copyright */}
            <p className="text-sm text-background/60 font-normal">
              © KINWITS TECH 2025
            </p>
          </div>
        </div>
      </footer>
    </>;
};
export default ContactInfo;