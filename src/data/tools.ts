export interface Tool {
  id: string;
  name: string;
  description: string;
  metaDescription: string;
  category: string;
  icon: string;
  inputLabel: string;
  inputPlaceholder: string;
  faqs: { q: string; a: string }[];
  generate: (input: string) => string[];
}

const categories = [
  { id: "youtube", name: "YouTube Tools", icon: "🎬" },
  { id: "social-media", name: "Social Media Tools", icon: "📱" },
  { id: "writing", name: "Writing Tools", icon: "✍️" },
  { id: "marketing", name: "Marketing Tools", icon: "📈" },
  { id: "seo", name: "SEO Tools", icon: "🔍" },
];

export { categories };

// Helper generators
const shuffleAndPick = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const templates = (patterns: string[], input: string): string[] =>
  patterns.map((p) => p.replace(/\{input\}/g, input)).sort(() => Math.random() - 0.5);

export const tools: Tool[] = [
  {
    id: "youtube-title-generator",
    name: "YouTube Title Generator",
    description: "Generate click-worthy YouTube titles that boost views and engagement. Our AI creates compelling titles optimized for YouTube search and CTR.",
    metaDescription: "Free YouTube Title Generator - Create viral, SEO-optimized YouTube video titles instantly. Boost views with click-worthy titles for your channel.",
    category: "youtube",
    icon: "🎬",
    inputLabel: "What is your video about?",
    inputPlaceholder: "e.g., How to start a business in 2025",
    faqs: [
      { q: "How do I write a good YouTube title?", a: "A good YouTube title is under 60 characters, includes your main keyword, creates curiosity, and accurately represents your content." },
      { q: "Should I use numbers in YouTube titles?", a: "Yes! Titles with numbers tend to get higher click-through rates. Try formats like 'Top 10', '5 Ways', or '7 Secrets'." },
      { q: "How important is the YouTube title for SEO?", a: "The title is one of the most important ranking factors on YouTube. Include your target keyword naturally in the title." },
    ],
    generate: (input) =>
      templates(
        [
          "{input} - The Complete Guide (2025)",
          "How to {input} (Step by Step Tutorial)",
          "{input}: 10 Things Nobody Tells You",
          "I Tried {input} for 30 Days - Here's What Happened",
          "The TRUTH About {input} (Must Watch)",
          "{input} | Beginner's Guide 2025",
          "Stop Making This {input} Mistake!",
          "Why {input} Will Change Everything",
          "{input} in 10 Minutes (Easy Tutorial)",
          "5 Secrets About {input} You Need to Know",
          "{input} - What the Pros Don't Tell You",
          "How I Mastered {input} (And You Can Too)",
        ],
        input
      ),
  },
  {
    id: "youtube-description-generator",
    name: "YouTube Description Generator",
    description: "Create SEO-optimized YouTube video descriptions that help your videos rank higher and get more views.",
    metaDescription: "Free YouTube Description Generator - Create optimized video descriptions with timestamps, links, and keywords to boost your YouTube SEO.",
    category: "youtube",
    icon: "📝",
    inputLabel: "Describe your video topic",
    inputPlaceholder: "e.g., A tutorial about React hooks",
    faqs: [
      { q: "How long should a YouTube description be?", a: "Aim for 200-350 words. The first 2-3 lines are most important as they appear before the 'Show More' button." },
      { q: "What should I include in my description?", a: "Include a summary, timestamps, relevant links, social media links, and relevant keywords naturally." },
    ],
    generate: (input) => [
      `In this video, I'm going to show you everything you need to know about ${input}. Whether you're a complete beginner or have some experience, this guide will help you master the topic.\n\n📌 What you'll learn:\n- The fundamentals of ${input}\n- Advanced tips and tricks\n- Common mistakes to avoid\n- Real-world examples\n\n⏰ Timestamps:\n0:00 - Introduction\n1:30 - Getting Started\n5:00 - Key Concepts\n10:00 - Practical Examples\n15:00 - Summary\n\n🔗 Resources mentioned in this video:\n[Add your links here]\n\n👍 If you found this helpful, please like, comment, and subscribe!\n\n#${input.replace(/\s+/g, "")} #tutorial #2025`,
      `🚀 ${input} - Complete Guide\n\nReady to level up? In this video, I break down ${input} into simple, actionable steps that anyone can follow.\n\n📋 Video Outline:\n• Why ${input} matters in 2025\n• Step-by-step walkthrough\n• Pro tips for better results\n• Bonus resources\n\n💡 Don't forget to subscribe and hit the bell icon!\n\n#${input.replace(/\s+/g, "")} #howto #guide`,
      `Everything about ${input} explained simply! 🎯\n\nThis is the most comprehensive guide on ${input} you'll find on YouTube. I've spent weeks researching and testing to bring you the best information.\n\n🔥 In this video:\n✅ What is ${input}\n✅ Why it's important\n✅ How to get started\n✅ Expert-level strategies\n✅ Tools and resources\n\n📧 Business inquiries: [your email]\n\n© 2025 - All rights reserved`,
    ],
  },
  {
    id: "youtube-tag-generator",
    name: "YouTube Tag Generator",
    description: "Generate relevant YouTube tags to improve your video discoverability and search rankings.",
    metaDescription: "Free YouTube Tag Generator - Create optimized tags for your YouTube videos. Improve discoverability and rank higher in YouTube search.",
    category: "youtube",
    icon: "🏷️",
    inputLabel: "Enter your video topic",
    inputPlaceholder: "e.g., cooking healthy meals",
    faqs: [
      { q: "How many tags should I use on YouTube?", a: "YouTube allows up to 500 characters for tags. Use 5-15 relevant tags that accurately describe your content." },
      { q: "Do YouTube tags still matter?", a: "While less important than titles and descriptions, tags still help YouTube understand your content and can improve discoverability." },
    ],
    generate: (input) => {
      const words = input.toLowerCase().split(/\s+/);
      const baseTags = [
        input,
        `${input} tutorial`,
        `${input} 2025`,
        `how to ${input}`,
        `${input} for beginners`,
        `${input} tips`,
        `${input} guide`,
        `best ${input}`,
        `${input} tricks`,
        `${input} explained`,
        `learn ${input}`,
        `${input} step by step`,
        ...words,
        `${words[0]} tips`,
        `${words[0]} tutorial`,
      ];
      return [baseTags.join(", ")];
    },
  },
  {
    id: "instagram-caption-generator",
    name: "Instagram Caption Generator",
    description: "Create engaging Instagram captions that drive likes, comments, and followers. Perfect for influencers and brands.",
    metaDescription: "Free Instagram Caption Generator - Create viral Instagram captions with emojis and hashtags. Perfect for influencers, brands, and content creators.",
    category: "social-media",
    icon: "📸",
    inputLabel: "What is your post about?",
    inputPlaceholder: "e.g., sunset at the beach",
    faqs: [
      { q: "How long should an Instagram caption be?", a: "The ideal length is 138-150 characters for engagement, but longer storytelling captions (up to 2,200 characters) can also work well." },
      { q: "Should I use hashtags in captions?", a: "Yes! Use 5-15 relevant hashtags. You can place them at the end of your caption or in the first comment." },
    ],
    generate: (input) =>
      templates(
        [
          `✨ {input} vibes only ✨\n\nLife is better when you embrace moments like these. Double tap if you agree! 💕\n\n#${input.replace(/\s+/g, "")} #vibes #lifestyle #instagood #blessed`,
          `POV: You're experiencing {input} for the first time 🌟\n\nSome moments are just meant to be lived, not explained.\n\n#${input.replace(/\s+/g, "")} #pov #aesthetic #mood`,
          `Note to self: More {input}, less stress 💫\n\nWhat's your favorite way to unwind? Tell me below! 👇\n\n#${input.replace(/\s+/g, "")} #selfcare #mindfulness #positivevibes`,
          `{input} >> everything else 🔥\n\nThis is your sign to prioritize what makes you happy.\n\n#${input.replace(/\s+/g, "")} #motivation #happiness #livingmybestlife`,
          `Can we talk about {input}? 😍\n\nBecause this is everything I needed today and more.\n\n#${input.replace(/\s+/g, "")} #love #grateful #photooftheday`,
        ],
        input
      ),
  },
  {
    id: "tiktok-caption-generator",
    name: "TikTok Caption Generator",
    description: "Generate catchy TikTok captions that increase engagement and help your videos go viral.",
    metaDescription: "Free TikTok Caption Generator - Create viral TikTok captions and hooks. Boost engagement with trending caption styles.",
    category: "social-media",
    icon: "🎵",
    inputLabel: "What is your TikTok about?",
    inputPlaceholder: "e.g., morning routine",
    faqs: [
      { q: "How long should a TikTok caption be?", a: "Keep it short - under 150 characters works best. Focus on hooks that make people watch." },
    ],
    generate: (input) =>
      templates(
        [
          `Wait for the {input} part 😱 #fyp #viral #{input.replace(/\s+/g, "")}`,
          `POV: when {input} hits different 🔥 #relatable #fyp`,
          `Day in my life: {input} edition ✨ #dayinmylife #{input.replace(/\s+/g, "")}`,
          `The {input} hack nobody talks about 🤯 #lifehack #fyp`,
          `Replying to @comment about {input} 👀 #storytime #fyp`,
          `{input} but make it aesthetic ✨ #aesthetic #trending`,
          `Things that just make sense: {input} 💯 #facts #viral`,
        ],
        input
      ),
  },
  {
    id: "blog-title-generator",
    name: "Blog Title Generator",
    description: "Create compelling blog post titles that attract readers and rank on Google. SEO-optimized headline ideas.",
    metaDescription: "Free Blog Title Generator - Create SEO-optimized blog post titles that drive traffic. Generate click-worthy headlines instantly.",
    category: "writing",
    icon: "📰",
    inputLabel: "Enter your blog topic",
    inputPlaceholder: "e.g., email marketing strategies",
    faqs: [
      { q: "What makes a good blog title?", a: "A good blog title is specific, includes a keyword, promises value, and is under 60 characters for SEO." },
    ],
    generate: (input) =>
      templates(
        [
          "The Ultimate Guide to {input} in 2025",
          "10 Proven {input} Strategies That Actually Work",
          "{input}: Everything You Need to Know",
          "How to Master {input} (Complete Guide)",
          "7 {input} Mistakes You're Probably Making",
          "Why {input} Matters More Than Ever in 2025",
          "{input} 101: A Beginner's Complete Guide",
          "The Science Behind {input}: What Experts Say",
          "15 {input} Tips From Industry Leaders",
          "{input} vs Traditional Methods: Which Is Better?",
        ],
        input
      ),
  },
  {
    id: "blog-idea-generator",
    name: "Blog Idea Generator",
    description: "Never run out of blog post ideas. Generate unique, trending content ideas for your niche.",
    metaDescription: "Free Blog Idea Generator - Get unlimited blog post ideas for any niche. Beat writer's block with AI-powered content suggestions.",
    category: "writing",
    icon: "💡",
    inputLabel: "Enter your niche or topic",
    inputPlaceholder: "e.g., personal finance",
    faqs: [
      { q: "How do I find blog topics that rank?", a: "Focus on long-tail keywords, answer common questions in your niche, and check what competitors are writing about." },
    ],
    generate: (input) =>
      templates(
        [
          "How-to guide: Getting started with {input}",
          "Case study: How a business grew using {input}",
          "Comparison post: Top {input} tools reviewed",
          "List post: 25 {input} tips for beginners",
          "Expert roundup: Professionals share {input} advice",
          "Myth-busting: Common {input} misconceptions",
          "Trend analysis: The future of {input}",
          "Behind the scenes: A day in {input}",
          "Resource list: Best {input} books and courses",
          "FAQ post: Answering top {input} questions",
        ],
        input
      ),
  },
  {
    id: "startup-name-generator",
    name: "Startup Name Generator",
    description: "Generate creative, memorable startup names for your business. Find the perfect brand name instantly.",
    metaDescription: "Free Startup Name Generator - Create unique, catchy startup names for your business. Generate brandable company names instantly.",
    category: "marketing",
    icon: "🚀",
    inputLabel: "Describe your startup/industry",
    inputPlaceholder: "e.g., food delivery app",
    faqs: [
      { q: "What makes a good startup name?", a: "A good startup name is short (1-2 words), easy to spell and pronounce, memorable, and has an available domain." },
    ],
    generate: (input) => {
      const words = input.split(/\s+/);
      const prefixes = ["Nova", "Zen", "Flux", "Aero", "Vibe", "Pixel", "Swift", "Glow", "Peak", "Bolt"];
      const suffixes = ["ify", "ly", "io", "hub", "lab", "base", "stack", "flow", "mind", "spark"];
      const results: string[] = [];
      prefixes.forEach((p) => {
        if (words[0]) results.push(p + words[0].charAt(0).toUpperCase() + words[0].slice(1));
      });
      words.forEach((w) => {
        suffixes.forEach((s) => results.push(w.charAt(0).toUpperCase() + w.slice(1) + s));
      });
      return shuffleAndPick(results, 12);
    },
  },
  {
    id: "brand-name-generator",
    name: "Brand Name Generator",
    description: "Create unique brand names that stand out. Perfect for new businesses, products, and projects.",
    metaDescription: "Free Brand Name Generator - Generate creative, unique brand names for your business or product. Find memorable names instantly.",
    category: "marketing",
    icon: "✨",
    inputLabel: "Describe your brand or product",
    inputPlaceholder: "e.g., luxury skincare for men",
    faqs: [
      { q: "How do I choose a brand name?", a: "Consider your target audience, ensure it's easy to remember and spell, check domain availability, and make sure it reflects your brand values." },
    ],
    generate: (input) => {
      const words = input.split(/\s+/).filter((w) => w.length > 3);
      const styles = [
        (w: string) => w.charAt(0).toUpperCase() + w.slice(1) + "era",
        (w: string) => "The " + w.charAt(0).toUpperCase() + w.slice(1) + " Co.",
        (w: string) => w.charAt(0).toUpperCase() + w.slice(1) + " & Co.",
        (w: string) => "House of " + w.charAt(0).toUpperCase() + w.slice(1),
        (w: string) => w.charAt(0).toUpperCase() + w.slice(1) + "ology",
        (w: string) => "Pure" + w.charAt(0).toUpperCase() + w.slice(1),
        (w: string) => w.charAt(0).toUpperCase() + w.slice(1) + "craft",
        (w: string) => "Beyond " + w.charAt(0).toUpperCase() + w.slice(1),
      ];
      const results: string[] = [];
      words.forEach((w) => styles.forEach((s) => results.push(s(w))));
      return shuffleAndPick(results, 10);
    },
  },
  {
    id: "slogan-generator",
    name: "Slogan Generator",
    description: "Generate catchy slogans and taglines for your brand. Create memorable phrases that stick.",
    metaDescription: "Free Slogan Generator - Create catchy taglines and slogans for your brand. Generate memorable marketing phrases instantly.",
    category: "marketing",
    icon: "💬",
    inputLabel: "Enter your brand or product name",
    inputPlaceholder: "e.g., EcoWater",
    faqs: [
      { q: "What makes a great slogan?", a: "A great slogan is short (3-7 words), memorable, communicates your unique value, and evokes emotion." },
    ],
    generate: (input) =>
      templates(
        [
          "{input}. Think Different.",
          "{input} - Because You Deserve Better",
          "The Future is {input}",
          "{input}: Reimagined for You",
          "Experience the {input} Difference",
          "{input}. Simply Better.",
          "Where Quality Meets {input}",
          "{input} - Your Journey Starts Here",
          "Elevate Everything with {input}",
          "{input}. Beyond Expectations.",
        ],
        input
      ),
  },
  {
    id: "meta-description-generator",
    name: "Meta Description Generator",
    description: "Create SEO-optimized meta descriptions that improve click-through rates from Google search results.",
    metaDescription: "Free Meta Description Generator - Create SEO-optimized meta descriptions for better Google rankings and higher CTR.",
    category: "seo",
    icon: "🔍",
    inputLabel: "Enter your page topic/title",
    inputPlaceholder: "e.g., Best running shoes for beginners",
    faqs: [
      { q: "How long should a meta description be?", a: "Keep it between 150-160 characters. Google truncates longer descriptions in search results." },
      { q: "Do meta descriptions affect SEO?", a: "While not a direct ranking factor, good meta descriptions improve CTR which indirectly helps SEO." },
    ],
    generate: (input) =>
      templates(
        [
          "Discover the best {input} in 2025. Expert-reviewed guide with tips, comparisons, and recommendations. Read now! ✓",
          "Looking for {input}? Our comprehensive guide covers everything you need to know. Updated for 2025. Learn more →",
          "{input} made simple. Get expert insights, actionable tips, and proven strategies. Start your journey today!",
          "The ultimate resource for {input}. Trusted by 10,000+ readers. Free guide with step-by-step instructions.",
          "Master {input} with our detailed guide. Expert tips, real examples, and practical advice. Updated weekly.",
        ],
        input
      ),
  },
  {
    id: "email-subject-generator",
    name: "Email Subject Line Generator",
    description: "Generate email subject lines that boost open rates. Perfect for newsletters and marketing campaigns.",
    metaDescription: "Free Email Subject Line Generator - Create high-converting email subjects that boost open rates. Perfect for email marketing campaigns.",
    category: "marketing",
    icon: "📧",
    inputLabel: "What is your email about?",
    inputPlaceholder: "e.g., summer sale announcement",
    faqs: [
      { q: "How long should email subject lines be?", a: "Keep them under 50 characters. Mobile devices show even fewer characters, so front-load important words." },
    ],
    generate: (input) =>
      templates(
        [
          "🔥 Don't miss out: {input}",
          "You're invited: {input}",
          "[URGENT] {input} - Limited time only",
          "Here's your {input} update",
          "Quick question about {input}...",
          "The {input} you've been waiting for",
          "{input} (+ a special surprise inside)",
          "🎉 Big news: {input}",
          "3 things about {input} you should know",
          "This {input} changes everything",
        ],
        input
      ),
  },
  {
    id: "hashtag-generator",
    name: "Hashtag Generator",
    description: "Generate relevant hashtags for Instagram, Twitter, TikTok, and other social media platforms.",
    metaDescription: "Free Hashtag Generator - Generate trending hashtags for Instagram, Twitter, and TikTok. Boost reach and engagement with relevant hashtags.",
    category: "social-media",
    icon: "#️⃣",
    inputLabel: "Enter your topic or niche",
    inputPlaceholder: "e.g., fitness motivation",
    faqs: [
      { q: "How many hashtags should I use?", a: "Instagram: 5-15, Twitter: 2-3, TikTok: 3-5. Quality over quantity - use relevant hashtags." },
    ],
    generate: (input) => {
      const words = input.toLowerCase().split(/\s+/);
      const joined = words.join("");
      const tags = [
        `#${joined}`, `#${words[0]}`, `#${joined}2025`, `#${words[0]}life`,
        `#${joined}tips`, `#${words[0]}goals`, `#${joined}community`,
        `#${words[0]}daily`, `#${joined}lover`, `#best${joined}`,
        `#${joined}motivation`, `#${words[0]}vibes`, `#${joined}inspo`,
        `#${words[0]}oftheday`, `#${joined}blog`, `#love${joined}`,
        "#instagood", "#trending", "#viral", "#fyp", "#explore",
      ];
      return [tags.join(" ")];
    },
  },
  {
    id: "product-description-generator",
    name: "Product Description Generator",
    description: "Write compelling product descriptions that convert. Perfect for ecommerce stores and Amazon listings.",
    metaDescription: "Free Product Description Generator - Create persuasive product descriptions for your online store. Boost conversions with compelling copy.",
    category: "marketing",
    icon: "🛍️",
    inputLabel: "Describe your product",
    inputPlaceholder: "e.g., wireless noise-canceling headphones",
    faqs: [
      { q: "What makes a good product description?", a: "Focus on benefits over features, use sensory words, address pain points, and include a clear call to action." },
    ],
    generate: (input) =>
      templates(
        [
          `Introducing our premium ${input} - designed for those who demand the best. Crafted with meticulous attention to detail, this product delivers unmatched quality and performance.\n\n✅ Premium quality materials\n✅ Designed for everyday use\n✅ 30-day money-back guarantee\n✅ Free shipping worldwide\n\nUpgrade your experience today. Order now and see the difference!`,
          `Tired of settling for less? Our ${input} is the solution you've been looking for. Built with cutting-edge technology and designed for maximum comfort.\n\n🌟 Why customers love it:\n• Superior performance\n• Sleek, modern design\n• Built to last\n• Exceptional value\n\n⭐⭐⭐⭐⭐ Rated 4.9/5 by 2,000+ happy customers`,
          `Meet your new favorite ${input}. We've reimagined what's possible to create something truly special.\n\nKey Features:\n→ Innovative design\n→ Premium craftsmanship\n→ Eco-friendly materials\n→ Unbeatable price\n\nJoin thousands of satisfied customers. Add to cart now!`,
        ],
        input
      ),
  },
  {
    id: "tweet-generator",
    name: "Tweet Generator",
    description: "Generate engaging tweets that get likes, retweets, and followers. Create viral Twitter content instantly.",
    metaDescription: "Free Tweet Generator - Create engaging, viral tweets instantly. Generate Twitter content that boosts engagement and followers.",
    category: "social-media",
    icon: "🐦",
    inputLabel: "What do you want to tweet about?",
    inputPlaceholder: "e.g., productivity tips",
    faqs: [
      { q: "What makes a tweet go viral?", a: "Viral tweets are relatable, evoke emotion, provide value, or present a unique perspective. Timing also matters." },
    ],
    generate: (input) =>
      templates(
        [
          "Hot take: {input} is the most underrated skill of 2025.\n\nHere's why 🧵👇",
          "5 {input} lessons I wish I learned sooner:\n\n1. Start before you're ready\n2. Consistency beats intensity\n3. Learn from failures\n4. Network matters\n5. Never stop learning\n\nBookmark this. 🔖",
          "The best {input} advice I ever received:\n\n\"Don't wait for perfect conditions. Start now and improve along the way.\"\n\nRetweet if you agree ♻️",
          "{input} cheat sheet:\n\n→ Set clear goals\n→ Track your progress\n→ Learn daily\n→ Share your journey\n→ Help others\n\nFollow for more tips 💪",
          "People who master {input} have one thing in common:\n\nThey show up every single day.\n\nNo shortcuts. No hacks. Just consistency.\n\n❤️ if this resonates.",
          "Unpopular opinion:\n\nYou don't need to be an expert in {input} to start sharing what you know.\n\nYour experience is valuable. Share it.",
        ],
        input
      ),
  },
];

export const getToolsByCategory = (categoryId: string) =>
  tools.filter((t) => t.category === categoryId);

export const getToolById = (id: string) => tools.find((t) => t.id === id);

export const getRelatedTools = (currentId: string, count = 4) =>
  tools.filter((t) => t.id !== currentId).sort(() => Math.random() - 0.5).slice(0, count);
