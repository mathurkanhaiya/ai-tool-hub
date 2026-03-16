import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ToolCard from "@/components/ToolCard";
import { tools, categories, getToolsByCategory } from "@/data/tools";

const stats = [
  { icon: Sparkles, value: `${30}+`, label: "AI Tools" },
  { icon: Users, value: "500+", label: "Monthly Users" },
  { icon: Zap, value: "100%", label: "Free Forever" },
  { icon: Shield, value: "0", label: "Signup Required" },
];

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

  return (
    <>
      <SEOHead
        title="100+ Free AI Tools for Creators & Marketers"
        description="Free AI Tools Hub offers 100+ free AI content generators for YouTubers, marketers, and creators. Generate titles, captions, hashtags and more — no signup required."
      />

      {/* Hero */}
      <section className="relative bg-header text-header-foreground overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container relative text-center max-w-3xl py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-header-foreground/20 text-xs font-medium text-header-foreground/70 bg-header-foreground/5">
            <Sparkles className="h-3.5 w-3.5" />
            100% Free — No Signup Required
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Free AI Tools for{" "}
            <span className="text-gradient">Creators & Marketers</span>
          </h1>
          <p className="text-lg md:text-xl text-header-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate YouTube titles, Instagram captions, blog ideas, hashtags and more — all powered by AI. Trusted by 50,000+ creators worldwide.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools... (e.g., YouTube title, Instagram caption)"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card text-card-foreground text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {filtered.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-card border rounded-xl shadow-xl max-h-72 overflow-auto z-10">
                {filtered.map((t) => (
                  <Link
                    key={t.id}
                    to={`/tool/${t.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors first:rounded-t-xl last:rounded-b-xl"
                    onClick={() => setSearch("")}
                  >
                    <span className="text-xl">{t.icon}</span>
                    <div className="text-left">
                      <span className="text-sm font-semibold block">{t.name}</span>
                      <span className="text-xs text-muted-foreground line-clamp-1">{t.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Browse All Tools <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center px-7 py-3.5 bg-header-foreground/10 text-header-foreground font-semibold rounded-xl hover:bg-header-foreground/20 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b bg-card">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="p-2 rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">Most Popular</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured AI Tools</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Our most-used free AI content generators — picked by the community</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t) => (
            <ToolCard key={t.id} tool={t} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all {tools.length} tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat) => {
        const catTools = getToolsByCategory(cat.id);
        if (catTools.length === 0) return null;
        return (
          <section key={cat.id} className="container py-10 md:py-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                  <span className="text-2xl">{cat.icon}</span> {cat.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">{catTools.length} free tools available</p>
              </div>
              <Link to="/tools" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catTools.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90" />
        <div className="container relative text-center max-w-2xl py-20 text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Creating Amazing Content</h2>
          <p className="text-lg opacity-80 mb-8">All {tools.length} tools are 100% free. No registration needed. No limits.</p>
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-card text-card-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            Explore All Tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
