import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const blogPosts = [
  {
    slug: "viral-youtube-title-ideas",
    title: "100 Viral YouTube Title Ideas to Boost Your Views in 2025",
    excerpt: "Struggling with YouTube titles? Here are 100 proven title formulas that top creators use to get millions of views.",
    category: "YouTube",
    date: "March 10, 2025",
  },
  {
    slug: "instagram-caption-ideas",
    title: "200 Instagram Caption Ideas for Every Occasion",
    excerpt: "Never run out of Instagram captions again. From funny to inspirational, here are 200 ready-to-use captions.",
    category: "Social Media",
    date: "March 8, 2025",
  },
  {
    slug: "startup-name-ideas",
    title: "50 Creative Startup Name Ideas for 2025",
    excerpt: "Looking for the perfect startup name? Here are 50 creative, brandable names organized by industry.",
    category: "Marketing",
    date: "March 5, 2025",
  },
  {
    slug: "blog-seo-tips",
    title: "15 Blog SEO Tips to Rank on Google in 2025",
    excerpt: "Learn the latest blog SEO strategies that actually work. From keyword research to on-page optimization.",
    category: "SEO",
    date: "March 1, 2025",
  },
];

const BlogPage = () => (
  <>
    <SEOHead
      title="Blog - AI Tools Tips & Guides"
      description="Read our latest guides on YouTube growth, Instagram marketing, SEO, and AI content creation. Free tips and strategies for creators."
    />
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-10">Tips, guides, and ideas for creators and marketers</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <span className="text-xs font-semibold text-primary">{post.category}</span>
            <h2 className="text-xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default BlogPage;
