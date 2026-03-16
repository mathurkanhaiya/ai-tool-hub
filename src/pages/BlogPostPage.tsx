import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";


const posts: Record<string, { title: string; meta: string; content: string }> = {
  "viral-youtube-title-ideas": {
    title: "100 Viral YouTube Title Ideas to Boost Your Views in 2025",
    meta: "Get 100 viral YouTube title ideas and formulas that top creators use to get millions of views. Free templates you can copy today.",
    content: `Coming up with the perfect YouTube title can make or break your video. Here are 100 proven title formulas organized by category.

## How-To Titles
1. How to [Topic] in [Time Period]
2. How I [Achievement] (And You Can Too)
3. How to [Topic] Without [Common Obstacle]
4. How to [Topic] Like a Pro
5. How to [Topic] Step by Step

## List Titles
6. Top 10 [Topic] You Need to Know
7. 15 [Topic] Mistakes Beginners Make
8. 7 [Topic] Hacks That Actually Work
9. 5 [Topic] Tips Nobody Tells You
10. 20 [Topic] Ideas for 2025

## Challenge/Story Titles
11. I Tried [Topic] for 30 Days
12. I Spent $1000 on [Topic] - Here's What Happened
13. Living Like [Person] for a Week
14. I Tested [Topic] So You Don't Have To
15. What Happens When You [Action]

## Question Titles
16. Is [Topic] Worth It in 2025?
17. Why Is Everyone Talking About [Topic]?
18. What They Don't Tell You About [Topic]
19. Can You Really [Action]?
20. Why [Topic] Is Harder Than You Think

These are just the first 20 — apply these formulas to your niche and watch your CTR improve!

## Tips for Writing Great YouTube Titles
- Keep titles under 60 characters
- Include your main keyword
- Use numbers when possible
- Create curiosity without clickbait
- Test different title formats
- Update old video titles

## Conclusion
The best YouTube title is one that accurately represents your content while creating enough curiosity to earn a click. Use these 100 formulas as starting points and customize them for your niche.`,
  },
  "instagram-caption-ideas": {
    title: "200 Instagram Caption Ideas for Every Occasion",
    meta: "Get 200 Instagram caption ideas for selfies, travel, food, fitness, and more. Copy-paste ready captions with emojis and hashtags.",
    content: `Never struggle with Instagram captions again. Here are 200 ready-to-use captions organized by category.

## Selfie Captions
1. Confidence level: Selfie with no filter ✨
2. Be yourself — there is no one better 💫
3. Smile big, laugh often 😊
4. Living my best life, one selfie at a time

## Travel Captions
5. Wanderlust and city dust ✈️
6. Collect moments, not things 🌍
7. Adventure awaits — go find it 🗺️
8. Not all who wander are lost

## Food Captions
9. Eat well, travel often 🍕
10. Good food, good mood 😋
11. Life is short, eat dessert first 🍰

## Motivational Captions
12. Dream big, work hard 💪
13. Your only limit is you
14. Progress, not perfection
15. Stay focused and never give up

Use these as starting points and add your personal touch. The best captions are authentic and reflect your personality!`,
  },
  "startup-name-ideas": {
    title: "50 Creative Startup Name Ideas for 2025",
    meta: "Looking for a startup name? Browse 50 creative, brandable startup name ideas organized by industry. Get inspired today.",
    content: `Finding the right startup name is one of the most important decisions you'll make. Here are 50 creative ideas.

## Tech Startups
1. NovaByte
2. CloudPeak
3. PixelForge
4. DataStream
5. CodeCraft

## Health & Wellness
6. VitalFlow
7. PureBalance
8. ZenWell
9. MindBloom
10. FreshStart

## Finance
11. WealthBridge
12. CoinSmart
13. TrustVault
14. PaySwift
15. FundWise

## Tips for Choosing a Startup Name
- Keep it short (1-2 words)
- Make it easy to spell and pronounce
- Check domain availability
- Ensure social media handles are available
- Consider international appeal`,
  },
  "blog-seo-tips": {
    title: "15 Blog SEO Tips to Rank on Google in 2025",
    meta: "Learn 15 actionable blog SEO tips to rank higher on Google in 2025. From keyword research to link building strategies.",
    content: `Want to rank your blog on Google? Here are 15 proven SEO tips.

## On-Page SEO
1. Target one primary keyword per post
2. Include your keyword in the title, URL, and first paragraph
3. Use H2 and H3 headings with related keywords
4. Write meta descriptions under 160 characters
5. Optimize images with alt text

## Content Quality
6. Write comprehensive, long-form content (1,500+ words)
7. Answer related questions in your content
8. Update old content regularly
9. Use original research and data
10. Add internal and external links

## Technical SEO
11. Improve page load speed
12. Make your site mobile-friendly
13. Use schema markup
14. Create an XML sitemap
15. Fix broken links regularly

These SEO fundamentals haven't changed — execution and consistency are what separate successful blogs from the rest.`,
  },
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts[slug || ""];

  if (!post) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline">Back to blog →</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={post.title} description={post.meta} />
      <article className="container py-12 max-w-3xl">
        <Link to="/blog" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="mt-8 prose prose-lg max-w-none">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{block.replace("## ", "")}</h2>;
            if (/^\d+\./.test(block)) {
              const items = block.split("\n").filter(Boolean);
              return <ul key={i} className="list-disc pl-6 space-y-1 text-muted-foreground">{items.map((item, j) => <li key={j}>{item.replace(/^\d+\.\s*/, "")}</li>)}</ul>;
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter(Boolean);
              return <ul key={i} className="list-disc pl-6 space-y-1 text-muted-foreground">{items.map((item, j) => <li key={j}>{item.replace(/^-\s*/, "")}</li>)}</ul>;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed">{block}</p>;
          })}
        </div>
        
      </article>
    </>
  );
};

export default BlogPostPage;
