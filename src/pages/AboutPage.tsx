import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <>
    <SEOHead
      title="About Us"
      description="Learn about Free AI Tools Hub — our mission to provide 100+ free AI tools for creators, marketers, and YouTubers worldwide."
    />

    <div className="container py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <div className="space-y-4 text-muted-foreground leading-relaxed">

        <p>
          Welcome to{" "}
          <strong className="text-foreground">
            Free AI Tools Hub
          </strong>{" "}
          — your go-to destination for free AI-powered content creation tools.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Our Mission
        </h2>

        <p>
          We believe every creator, marketer, and entrepreneur deserves
          access to powerful content tools — without paying a dime.
          Our mission is to democratize AI content creation by offering
          100+ free tools that help you create better content faster.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          What We Offer
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground">YouTube Tools</strong> — Title generators, description writers, tag generators
          </li>

          <li>
            <strong className="text-foreground">Social Media Tools</strong> — Caption generators for Instagram, TikTok, Twitter
          </li>

          <li>
            <strong className="text-foreground">Writing Tools</strong> — Blog title and idea generators
          </li>

          <li>
            <strong className="text-foreground">Marketing Tools</strong> — Brand name, slogan, and email subject line generators
          </li>

          <li>
            <strong className="text-foreground">SEO Tools</strong> — Meta description generators and more
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Why Choose Us?
        </h2>

        <p>
          ✅ 100% Free — No hidden fees, no subscriptions <br />
          ✅ No Signup Required — Start using tools instantly <br />
          ✅ Mobile Friendly — Works on any device <br />
          ✅ Fast & Lightweight — No bloated pages
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Contact Us
        </h2>

        <p>
          Have questions or suggestions? We'd love to hear from you.
          Visit our{" "}
          <Link
            to="/contact"
            className="text-primary hover:underline"
          >
            contact page
          </Link>{" "}
          to get in touch.
        </p>

      </div>
    </div>
  </>
);

export default AboutPage;