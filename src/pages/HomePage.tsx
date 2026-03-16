import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ToolCard from "@/components/ToolCard";
import { tools, categories, getToolsByCategory } from "@/data/tools";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return tools.filter(
      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    );
  }, [search]);

  const featured = tools.slice(0, 6);
  const allCategories = categories;

  return (
    <>
      <SEOHead
        title="100+ Free AI Tools for Creators & Marketers"
        description="Free AI Tools Hub offers 100+ free AI content generators for YouTubers, marketers, and creators. Generate titles, captions, hashtags and more — no signup required."
      />

      {/* Hero */}
      <section className="bg-header text-header-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            100+ Free AI Tools for Creators & Marketers
          </h1>
          <p className="text-lg md:text-xl text-header-foreground/70 mb-8 max-w-2xl mx-auto">
            Generate YouTube titles, Instagram captions, blog ideas, hashtags and more — all powered by AI. No signup required.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-card text-card-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {filtered.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-card border rounded-lg shadow-lg max-h-72 overflow-auto z-10">
                {filtered.map((t) => (
                  <Link
                    key={t.id}
                    to={`/tool/${t.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                    onClick={() => setSearch("")}
                  >
                    <span className="text-xl">{t.icon}</span>
                    <span className="text-sm font-medium">{t.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/tools" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Browse All Tools
            </Link>
            <Link to="/blog" className="inline-flex items-center px-6 py-3 bg-header-foreground/10 text-header-foreground font-semibold rounded-lg hover:bg-header-foreground/20 transition-colors">
              Read Blog
            </Link>
          </div>
        </div>
      </section>


      {/* Featured Tools */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Featured AI Tools</h2>
        <p className="text-center text-muted-foreground mb-10">Our most popular free AI content generators</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t) => (
            <ToolCard key={t.id} tool={t} />
          ))}
        </div>
      </section>

      {/* Ad #2: 300x250 after featured tools */}
      <AdsterraBanner />

      {/* Category Sections with Native Ad inserted in the middle */}
      {allCategories.map((cat, index) => {
        const catTools = getToolsByCategory(cat.id);
        if (catTools.length === 0) return null;
        const midPoint = Math.floor(allCategories.length / 2);
        return (
          <div key={cat.id}>
            <section className="container py-10">
              <h2 className="text-2xl font-bold mb-6">
                {cat.icon} {cat.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catTools.map((t) => (
                  <ToolCard key={t.id} tool={t} />
                ))}
              </div>
            </section>
            {/* Ad #3: Native ad in the middle of categories */}
            {index === midPoint && <AdsterraNative />}
          </div>
        );
      })}

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Start Creating Amazing Content</h2>
          <p className="text-lg opacity-90 mb-8">All tools are 100% free. No registration needed. No limits.</p>
          <Link to="/tools" className="inline-flex px-8 py-3 bg-card text-card-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Explore All Tools →
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
