import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Copy, Check, ChevronDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ToolCard from "@/components/ToolCard";

import { getToolById, getRelatedTools } from "@/data/tools";

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

  const related = getRelatedTools(tool.id);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setResults(tool.generate(input.trim()));
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  // JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.metaDescription,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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

  return (
    <>
      <SEOHead title={tool.name} description={tool.metaDescription} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          {" / "}
          <Link to="/tools" className="hover:text-foreground">Tools</Link>
          {" / "}
          <span className="text-foreground">{tool.name}</span>
        </nav>

        <AdPlaceholder type="banner" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 mt-8">
          <div>
            <div className="text-5xl mb-4">{tool.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{tool.name}</h1>
            <p className="text-muted-foreground text-lg mb-8">{tool.description}</p>

            {/* Input */}
            <div className="bg-card border rounded-lg p-6 mb-8">
              <label className="block font-semibold mb-2">{tool.inputLabel}</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={tool.inputPlaceholder}
                rows={3}
                className="w-full border rounded-lg px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                onClick={handleGenerate}
                className="mt-4 w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate ✨
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="space-y-4 mb-8">
                <h2 className="text-xl font-bold">Generated Results</h2>
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="bg-card border rounded-lg p-4 animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <pre className="whitespace-pre-wrap text-sm text-card-foreground font-sans">{r}</pre>
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

            <AdPlaceholder type="in-content" />

            {/* FAQ */}
            {tool.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {tool.faqs.map((faq, i) => (
                    <div key={i} className="border rounded-lg">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left font-medium"
                      >
                        <h3 className="text-sm font-semibold">{faq.q}</h3>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Tools */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((t) => (
                  <ToolCard key={t.id} tool={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <AdPlaceholder type="sidebar" />
            <AdPlaceholder type="sidebar" />
          </aside>
        </div>
      </div>
    </>
  );
};

export default ToolPage;
