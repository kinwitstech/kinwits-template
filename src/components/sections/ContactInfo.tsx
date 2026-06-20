import { MapPin, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
// TODO: Add Twitter/X handle here when available — e.g. https://twitter.com/kinwits

const ContactInfo = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">ADDRESS</h3>
                <p className="text-muted-foreground mb-2 whitespace-pre-line">
                  Shivam Tower, 1st floor,{'\n'}Kota, Udupi District, KA{'\n'}INDIA - 576221
                </p>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-2"
                >
                  SEE ON THE MAP
                </button>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">EMAIL</h3>
                <p className="text-muted-foreground mb-2">info@kinwits.com</p>
                <a
                  href="mailto:info@kinwits.com"
                  className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-2 inline-block"
                >
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
            <button
              onClick={() => setShowMap(!showMap)}
              className="inline-flex flex-col items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-background" />
              </div>
              <span className="flex items-center gap-2">
                {showMap ? 'Close' : 'Open'} The Map{' '}
                {showMap ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </span>
            </button>
          </div>

          {showMap && (
            <div className="mt-12 w-full h-[400px] bg-secondary/30 rounded-lg overflow-hidden animate-fade-in">
              <iframe
                title="Map showing the Kinwits office in Kota, Udupi District"
                src="https://maps.google.com/maps?q=Shivam+Tower,+1st+floor,+Kota,+Udupi+District,+KA,+INDIA+-+576221&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
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
              <a
                href="https://www.linkedin.com/company/kinwits/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Kinwits on LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-background" />
              </a>
              <a
                href="https://www.instagram.com/kinwitstechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Kinwits on Instagram"
              >
                <FaInstagram className="w-4 h-4 text-background" />
              </a>
              {/* Twitter/X — uncomment and update href when handle is available
              <a
                href="https://twitter.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Kinwits on X (Twitter)"
              >
                <FaTwitter className="w-4 h-4 text-background" />
              </a>
              */}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-6 text-xs sm:text-sm tracking-widest uppercase px-4">
              <a
                href="/#hero"
                className="text-background/80 hover:text-background transition-colors py-1"
              >
                HOME
              </a>
              <span className="text-background/40">|</span>
              <a
                href="mailto:info@kinwits.com"
                className="text-background/80 hover:text-background transition-colors py-1"
              >
                SUPPORT
              </a>
              <span className="text-background/40">|</span>
              <a
                href="/privacy"
                className="text-background/80 hover:text-background transition-colors whitespace-nowrap py-1"
              >
                PRIVACY POLICY
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-background/80 font-normal">
              © KINWITS TECH {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactInfo;
