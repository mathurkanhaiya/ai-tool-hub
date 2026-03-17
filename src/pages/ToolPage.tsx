import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Copy, Check, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ToolCard from "@/components/ToolCard";
import { getToolById, getRelatedTools, tools, categories } from "@/data/tools";

const ToolPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = getToolById(toolId || "");
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!tool) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
        <Link to="/tools" className="text-primary hover:underline">Browse all tools →</Link>
      </div>
    );
  }

  const related = getRelatedTools(tool.id, 6);
  const category = categories.find(c => c.id === tool.category);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setResults(tool.generate(input.trim()));
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  // Structured Data
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.metaDescription,
    url: `https://viralaitools.xyz/tool/${tool.id}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: {
      "@type": "Organization",
      name: "Free AI Tools Hub",
      url: "https://viralaitools.xyz",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://viralaitools.xyz/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://viralaitools.xyz/tools" },
      { "@type": "ListItem", position: 3, name: category?.name || "Tools", item: `https://viralaitools.xyz/tools#${tool.category}` },
      { "@type": "ListItem", position: 4, name: tool.name, item: `https://viralaitools.xyz/tool/${tool.id}` },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Use ${tool.name}`,
    description: `Step-by-step guide to using the free ${tool.name} at Free AI Tools Hub.`,
    step: [
      { "@type": "HowToStep", name: "Enter your topic", text: `Type your topic or idea in the input field. ${tool.inputPlaceholder}` },
      { "@type": "HowToStep", name: "Click Generate", text: "Click the Generate button to create AI-powered results instantly." },
      { "@type": "HowToStep", name: "Copy and use", text: "Review the generated results and click Copy to use them anywhere." },
    ],
  };

  // SEO keywords
  const keywords = `${tool.name.toLowerCase()}, free ${tool.name.toLowerCase()}, ${tool.category.replace("-", " ")} generator, ai ${tool.category.replace("-", " ")} tool, ${tool.name.toLowerCase()} online free`;

  return (
    <>
      <SEOHead
        title={`Free ${tool.name} - Generate Instantly | Free AI Tools Hub`}
        description={tool.metaDescription}
        canonical={`https://viralaitools.xyz/tool/${tool.id}`}
        keywords={keywords}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="hover:text-foreground transition-colors">{category?.name || "Tools"}</span>
          <span>/</span>
          <span className="text-foreground font-medium">{tool.name}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl p-3 bg-secondary rounded-xl">{tool.icon}</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Free {tool.name}</h1>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
          </div>

          {/* How to Use Section — rich programmatic SEO content */}
          <div className="bg-secondary/50 border rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold mb-3">How to Use {tool.name}</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li><strong>Enter your topic</strong> — Type your idea, keyword, or topic in the input field below. For example: "{tool.inputPlaceholder.replace("e.g., ", "")}"</li>
              <li><strong>Click Generate</strong> — Our AI will instantly create multiple high-quality results tailored to your input.</li>
              <li><strong>Copy & Use</strong> — Click the copy button on any result to use it immediately. No signup required!</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-3">
              This {tool.name.toLowerCase()} is 100% free with no registration needed. Use it as many times as you want — there are no limits.
            </p>
          </div>

          {/* Input */}
          <div className="bg-card border rounded-xl p-6 mb-8 shadow-sm">
            <label className="block font-semibold mb-2 text-sm">{tool.inputLabel}</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.inputPlaceholder}
              rows={3}
              className="w-full border rounded-xl px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              onClick={handleGenerate}
              className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
            >
              <Sparkles className="h-4 w-4" /> Generate
            </button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-4 mb-10">
              <h2 className="text-lg font-bold">Generated Results</h2>
              {results.map((r, i) => (
                <div
                  key={i}
                  className="bg-card border rounded-xl p-5 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <pre className="whitespace-pre-wrap text-sm text-card-foreground font-sans leading-relaxed">{r}</pre>
                  <button
                    onClick={() => handleCopy(r, i)}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {copied === i ? <><Check className="h-4 w-4" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy</>}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Why Use This Tool — programmatic SEO content */}
          <div className="mt-12 mb-12">
            <h2 className="text-xl font-bold mb-4">Why Use Our Free {tool.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "100% Free Forever", desc: `Our ${tool.name.toLowerCase()} is completely free with no hidden costs or premium tiers.` },
                { title: "No Signup Required", desc: "Start generating content immediately — no email, no account, no friction." },
                { title: "AI-Powered Quality", desc: `Get professional-quality ${tool.category.replace("-", " ")} content generated by advanced AI algorithms.` },
                { title: "Unlimited Generations", desc: "Generate as many results as you need. There are no daily limits or usage caps." },
              ].map((item, i) => (
                <div key={i} className="bg-card border rounded-xl p-4">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {tool.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">Frequently Asked Questions About {tool.name}</h2>
              <div className="space-y-3">
                {tool.faqs.map((faq, i) => (
                  <div key={i} className="border rounded-xl bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <h3 className="text-sm font-semibold">{faq.q}</h3>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internal Linking: Browse by Category */}
          <div className="mt-14 mb-8">
            <h2 className="text-lg font-bold mb-4">Browse AI Tools by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/tools`}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Tools — more internal links */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Related Free AI Tools</h2>
              <Link to="/tools" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                View all {tools.length} tools <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>

          {/* Bottom SEO content */}
          <div className="mt-14 text-sm text-muted-foreground leading-relaxed">
            <h2 className="text-lg font-bold text-foreground mb-3">About {tool.name}</h2>
            <p className="mb-3">
              The {tool.name} by Free AI Tools Hub is a free online tool designed to help creators, marketers, and businesses generate high-quality {tool.category.replace("-", " ")} content in seconds. Whether you're a YouTuber, social media manager, blogger, or entrepreneur, this tool saves you hours of brainstorming and writing.
            </p>
            <p className="mb-3">
              Unlike other tools that require expensive subscriptions or complicated signups, our {tool.name.toLowerCase()} is completely free with unlimited usage. Simply enter your topic, click generate, and get instant results you can copy and use anywhere.
            </p>
            <p>
              Looking for more tools? Check out our full collection of <Link to="/tools" className="text-primary hover:underline">{tools.length}+ free AI tools</Link> for content creation, SEO, marketing, and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolPage;
