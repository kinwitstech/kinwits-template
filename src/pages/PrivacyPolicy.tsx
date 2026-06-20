import Navigation from '@/components/Navigation';
import { useSeo } from '@/hooks/useSeo';

const PrivacyPolicy = () => {
  useSeo({
    title: 'Privacy Policy',
    description: 'Privacy policy for Kinwits Technologies — how we collect, use, and protect your information.',
  });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-sm text-muted-foreground mb-16">Last updated: June 2025</p>

            <div className="space-y-12 text-base text-muted-foreground leading-relaxed font-normal">
              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">1. Who We Are</h2>
                <p>
                  Kinwits Technologies ("Kinwits", "we", "us", or "our") is a software and AI agency headquartered at Shivam Tower, 1st floor, Kota, Udupi District, Karnataka, India — 576221. We can be reached at{' '}
                  <a href="mailto:info@kinwits.com" className="text-foreground underline underline-offset-4">
                    info@kinwits.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">2. Information We Collect</h2>
                <p className="mb-4">
                  When you use the contact form on our website, we collect the following information you voluntarily provide:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>The subject and content of your message</li>
                </ul>
                <p className="mt-4">
                  We do not use cookies for advertising, analytics tracking, or profiling. We do not collect any information passively beyond standard server logs (IP address, browser type, referring URL) which are retained for security purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">Information submitted through our contact form is used solely to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your enquiry or message</li>
                  <li>Follow up on a potential project engagement</li>
                </ul>
                <p className="mt-4">
                  We do not use your information for marketing purposes without your explicit consent, and we do not sell, rent, or share your personal information with third parties except as necessary to operate our services (e.g., our email delivery infrastructure).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">4. Data Retention</h2>
                <p>
                  We retain contact form submissions for as long as necessary to respond to and close your enquiry, typically no longer than 12 months. You may request deletion of your data at any time by contacting us at{' '}
                  <a href="mailto:info@kinwits.com" className="text-foreground underline underline-offset-4">
                    info@kinwits.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">5. Third-Party Services</h2>
                <p className="mb-4">Our website uses the following third-party services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground font-medium">Google Fonts</strong> — to serve the Unbounded typeface. Google may collect limited technical data per their{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">
                      privacy policy
                    </a>.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">Google Maps</strong> — displayed when you click "See on the Map". Google's privacy policy applies when the embed is loaded.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">AWS (contact form backend)</strong> — contact form submissions are processed via an AWS Lambda function. Data is transmitted securely over HTTPS and not stored in AWS beyond delivery.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to personal information we hold about you</li>
                  <li>Request correction or deletion of your personal information</li>
                  <li>Withdraw any consent you have provided</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, email us at{' '}
                  <a href="mailto:info@kinwits.com" className="text-foreground underline underline-offset-4">
                    info@kinwits.com
                  </a>. We will respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">7. Security</h2>
                <p>
                  We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, or disclosure. All data in transit is encrypted via HTTPS/TLS.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. The "Last updated" date at the top of this page will reflect any changes. Continued use of our website after an update constitutes acceptance of the revised policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium tracking-wide text-foreground mb-4">9. Contact</h2>
                <p>
                  Questions about this policy? Contact us at{' '}
                  <a href="mailto:info@kinwits.com" className="text-foreground underline underline-offset-4">
                    info@kinwits.com
                  </a>{' '}
                  or write to us at Shivam Tower, 1st floor, Kota, Udupi District, KA, India — 576221.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
