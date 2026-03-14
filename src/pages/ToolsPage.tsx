import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ToolCard from "@/components/ToolCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { tools, categories } from "@/data/tools";

const ToolsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all" ? tools : tools.filter((t) => t.category === activeCategory);

  return (
    <>
      <SEOHead
        title="All Free AI Tools"
        description="Browse our complete collection of 100+ free AI tools for content creation, marketing, SEO, YouTube, Instagram, and more."
      />
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">All Free AI Tools</h1>
        <p className="text-muted-foreground mb-8">Browse our complete collection of AI-powered content generators</p>

        <AdPlaceholder type="banner" />

        <div className="flex flex-wrap gap-2 my-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All Tools
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t) => (
            <ToolCard key={t.id} tool={t} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
