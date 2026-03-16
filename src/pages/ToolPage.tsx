import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Copy, Check, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
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

      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-1.5">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{tool.name}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl p-3 bg-secondary rounded-xl">{tool.icon}</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{tool.name}</h1>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
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

          {/* FAQ */}
          {tool.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
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

          {/* Related Tools */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Related Tools</h2>
              <Link to="/tools" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolPage;
