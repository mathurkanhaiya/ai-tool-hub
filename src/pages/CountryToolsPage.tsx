import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ToolCard from "@/components/ToolCard";
import { tools, categories } from "@/data/tools";
import { highCpmCountries } from "@/data/countries";
import { ArrowRight } from "lucide-react";

const CountryToolsPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const country = highCpmCountries.find((c) => c.code === countryCode);

  if (!country) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
        <Link to="/tools" className="text-primary hover:underline">Browse all tools →</Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Free AI Tools for ${country.name}`,
    description: country.description,
    url: `https://viralaitools.xyz/tools/${country.code}`,
    inLanguage: country.hreflang,
    provider: {
      "@type": "Organization",
      name: "Free AI Tools Hub",
      url: "https://viralaitools.xyz",
    },
  };

  const keywords = country.topKeywords.join(", ");

  return (
    <>
      <SEOHead
        title={`Free AI Tools for ${country.name} ${country.flag} - 100+ Tools`}
        description={country.description}
        canonical={`https://viralaitools.xyz/tools/${country.code}`}
        keywords={keywords}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{country.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {country.flag} Free AI Tools for {country.demonym} Creators & Marketers
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{country.description}</p>
        </div>

        {/* Why creators in this country use our tools */}
        <div className="bg-secondary/50 border rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">Why {country.demonym} Creators Choose Free AI Tools Hub</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "100% Free", desc: `No subscriptions or hidden fees — every tool is free for ${country.name} users.` },
              { title: "No Signup Required", desc: "Start generating content instantly. No email, no account, no friction." },
              { title: "100+ AI Tools", desc: `YouTube titles, Instagram captions, blog ideas, SEO tools, and much more.` },
              { title: "Unlimited Usage", desc: "Generate as many results as you need. No daily limits or usage caps." },
            ].map((item, i) => (
              <div key={i} className="bg-card border rounded-xl p-4">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools by Category */}
        {categories.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat.id).slice(0, 6);
          if (catTools.length === 0) return null;
          return (
            <div key={cat.id} className="mb-10">
              <h2 className="text-xl font-bold mb-4">{cat.icon} {cat.name} for {country.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Browse other countries */}
        <div className="mt-14 mb-8">
          <h2 className="text-xl font-bold mb-4">Free AI Tools Available Worldwide</h2>
          <div className="flex flex-wrap gap-2">
            {highCpmCountries
              .filter((c) => c.code !== country.code)
              .map((c) => (
                <Link
                  key={c.code}
                  to={`/tools/${c.code}`}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {c.flag} {c.name}
                </Link>
              ))}
          </div>
        </div>

        {/* Bottom SEO content */}
        <div className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          <h2 className="text-lg font-bold text-foreground mb-3">Best Free AI Tools in {country.name}</h2>
          <p className="mb-3">
            Free AI Tools Hub offers {country.demonym} creators, marketers, and businesses access to over 100 free AI-powered content generators. Whether you're a YouTuber in {country.name} looking for viral title ideas, a social media manager creating Instagram captions, or a blogger brainstorming topics — our tools help you create high-quality content in seconds.
          </p>
          <p className="mb-3">
            All our tools are completely free with no registration, no email required, and no usage limits. {country.demonym} users can generate YouTube titles, descriptions, tags, TikTok captions, hashtags, blog outlines, email copy, SEO meta descriptions, and much more.
          </p>
          <p>
            Explore our full collection of <Link to="/tools" className="text-primary hover:underline">{tools.length}+ free AI tools</Link> or browse tools by category above.
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryToolsPage;
