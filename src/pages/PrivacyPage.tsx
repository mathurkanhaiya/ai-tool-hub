import SEOHead from "@/components/SEOHead";

const PrivacyPage = () => (
  <>
    <SEOHead title="Privacy Policy" description="Read the Privacy Policy for Free AI Tools Hub. Learn how we handle your data and protect your privacy." />
    <div className="container py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: March 14, 2025</p>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
        <p>We do not collect personal information unless you voluntarily provide it through our contact form. We may collect anonymous usage data through analytics services to improve our website.</p>
        <h2 className="text-xl font-bold text-foreground">2. How We Use Information</h2>
        <p>Any information collected is used solely to improve our services, respond to inquiries, and analyze website traffic patterns.</p>
        <h2 className="text-xl font-bold text-foreground">3. Cookies</h2>
        <p>Our website may use cookies for analytics and advertising purposes. Third-party services like Google Analytics and Google AdSense may set their own cookies.</p>
        <h2 className="text-xl font-bold text-foreground">4. Third-Party Services</h2>
        <p>We use third-party services including Google Analytics for traffic analysis and Google AdSense for displaying advertisements. These services have their own privacy policies.</p>
        <h2 className="text-xl font-bold text-foreground">5. Data Security</h2>
        <p>We implement reasonable security measures to protect any information we collect. However, no internet transmission is 100% secure.</p>
        <h2 className="text-xl font-bold text-foreground">6. Children's Privacy</h2>
        <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children.</p>
        <h2 className="text-xl font-bold text-foreground">7. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.</p>
        <h2 className="text-xl font-bold text-foreground">8. Contact Us</h2>
        <p>If you have questions about this privacy policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
      </div>
    </div>
  </>
);

export default PrivacyPage;
