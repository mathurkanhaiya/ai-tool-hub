import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

export const blogPosts = [
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
  {
    slug: "best-ai-tools-for-content-creators",
    title: "25 Best Free AI Tools for Content Creators in 2025",
    excerpt: "Discover the best free AI tools that help content creators save time and produce better content. From writing to design.",
    category: "AI Tools",
    date: "March 12, 2025",
  },
  {
    slug: "how-to-grow-youtube-channel-fast",
    title: "How to Grow Your YouTube Channel Fast: 20 Proven Strategies",
    excerpt: "Want more YouTube subscribers? These 20 growth strategies are used by channels that went from 0 to 100K subscribers.",
    category: "YouTube",
    date: "March 14, 2025",
  },
  {
    slug: "tiktok-marketing-guide-2025",
    title: "TikTok Marketing Guide: How to Go Viral in 2025",
    excerpt: "Master TikTok marketing with proven strategies for organic growth, content creation, and audience engagement.",
    category: "Social Media",
    date: "March 15, 2025",
  },
  {
    slug: "email-marketing-tips-for-beginners",
    title: "Email Marketing for Beginners: 15 Tips to Get Started",
    excerpt: "New to email marketing? Learn how to build your list, write compelling emails, and increase open rates from day one.",
    category: "Marketing",
    date: "March 16, 2025",
  },
  {
    slug: "chatgpt-prompts-for-marketing",
    title: "50 Best ChatGPT Prompts for Marketing in 2025",
    excerpt: "Supercharge your marketing with these 50 ChatGPT prompts for social media, email, ads, SEO, and content creation.",
    category: "AI Tools",
    date: "March 17, 2025",
  },
  {
    slug: "how-to-write-meta-descriptions-that-rank",
    title: "How to Write Meta Descriptions That Rank and Get Clicks",
    excerpt: "Learn the art of writing meta descriptions that improve CTR and help your pages rank higher on Google search results.",
    category: "SEO",
    date: "February 28, 2025",
  },
];

const BlogPage = () => (
  <>
    <SEOHead
      title="Blog - AI Tools Tips, Guides & Strategies"
      description="Free guides on YouTube growth, Instagram marketing, SEO, AI tools, and content creation. Actionable tips and strategies for creators and marketers."
      keywords="ai tools blog, content creation tips, youtube growth, instagram marketing, seo guide, digital marketing blog"
    />
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-10">Tips, guides, and strategies for creators and marketers</p>

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
