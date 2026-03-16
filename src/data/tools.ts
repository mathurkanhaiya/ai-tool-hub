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

const shuffleAndPick = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const templates = (patterns: string[], input: string): string[] =>
  patterns.map((p) => p.replace(/\{input\}/g, input)).sort(() => Math.random() - 0.5);

export const tools: Tool[] = [
  // ═══════════════════ YOUTUBE TOOLS ═══════════════════
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
        input, `${input} tutorial`, `${input} 2025`, `how to ${input}`,
        `${input} for beginners`, `${input} tips`, `${input} guide`,
        `best ${input}`, `${input} tricks`, `${input} explained`,
        `learn ${input}`, `${input} step by step`, ...words,
        `${words[0]} tips`, `${words[0]} tutorial`,
      ];
      return [baseTags.join(", ")];
    },
  },
  {
    id: "youtube-script-generator",
    name: "YouTube Script Generator",
    description: "Generate professional video scripts with hooks, body, and CTAs. Save hours of writing time.",
    metaDescription: "Free YouTube Script Generator - Create engaging video scripts with hooks, body content, and calls to action. Perfect for YouTubers.",
    category: "youtube",
    icon: "🎙️",
    inputLabel: "What is your video about?",
    inputPlaceholder: "e.g., 5 productivity hacks for remote workers",
    faqs: [
      { q: "How long should a YouTube script be?", a: "For a 10-minute video, aim for 1,500-2,000 words. A good rule of thumb is 150 words per minute." },
      { q: "How do I write a good hook?", a: "Start with a bold claim, question, or surprising fact in the first 5-10 seconds to grab attention." },
    ],
    generate: (input) => [
      `🎬 HOOK (0:00-0:15)\n"If you've been struggling with ${input}, this video is going to change everything. I'm about to share the exact strategies that top performers use — and most people have no idea about number 3."\n\n📋 INTRO (0:15-1:00)\n"Hey everyone, welcome back to the channel. Today we're diving deep into ${input}. By the end of this video, you'll have a complete roadmap. Make sure to stick around until the end because I've got a bonus tip that alone is worth watching.\n\nBefore we start, hit that subscribe button — over 70% of my viewers aren't subscribed yet!"\n\n📌 MAIN CONTENT\n\nPoint 1: [Expand on first aspect of ${input}]\nPoint 2: [Add data or example]\nPoint 3: [Share personal experience]\nPoint 4: [Address common misconception]\nPoint 5: [Advanced strategy]\n\n🎯 CTA (End)\n"If you found this helpful, smash that like button and drop a comment below — what's your biggest challenge with ${input}? I read every single comment. See you in the next one!"`,
      `📝 SHORT-FORM SCRIPT (60 seconds)\n\n[HOOK - 3 sec]\n"Stop scrolling — this ${input} tip will blow your mind."\n\n[CONTEXT - 10 sec]\n"Most people get ${input} completely wrong. Here's what actually works..."\n\n[VALUE - 35 sec]\n"Step 1: [Key insight about ${input}]\nStep 2: [Practical action]\nStep 3: [Result they can expect]"\n\n[CTA - 10 sec]\n"Follow for more ${input} tips. Save this for later!"`,
    ],
  },
  {
    id: "youtube-channel-name-generator",
    name: "YouTube Channel Name Generator",
    description: "Find the perfect YouTube channel name that's memorable, brandable, and available.",
    metaDescription: "Free YouTube Channel Name Generator - Create unique, memorable channel names for YouTube. Find brandable names instantly.",
    category: "youtube",
    icon: "📺",
    inputLabel: "What is your channel about?",
    inputPlaceholder: "e.g., tech reviews and tutorials",
    faqs: [
      { q: "What makes a good YouTube channel name?", a: "Keep it short, memorable, easy to spell, and relevant to your niche. Avoid numbers and special characters." },
    ],
    generate: (input) => {
      const words = input.split(/\s+/).filter(w => w.length > 2);
      const prefixes = ["The", "Daily", "Simply", "Ultra", "Epic", "Pro", "Next", "True", "Real", "Top"];
      const suffixes = ["Hub", "Zone", "Academy", "Lab", "Studio", "Central", "HQ", "Nation", "World", "Insider"];
      const results: string[] = [];
      words.forEach(w => {
        const cap = w.charAt(0).toUpperCase() + w.slice(1);
        prefixes.forEach(p => results.push(`${p} ${cap}`));
        suffixes.forEach(s => results.push(`${cap} ${s}`));
      });
      return shuffleAndPick(results, 12);
    },
  },

  // ═══════════════════ SOCIAL MEDIA TOOLS ═══════════════════
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
          `Wait for the {input} part 😱 #fyp #viral #{input.replace(/\\s+/g, "")}`,
          `POV: when {input} hits different 🔥 #relatable #fyp`,
          `Day in my life: {input} edition ✨ #dayinmylife #{input.replace(/\\s+/g, "")}`,
          `The {input} hack nobody talks about 🤯 #lifehack #fyp`,
          `Replying to @comment about {input} 👀 #storytime #fyp`,
          `{input} but make it aesthetic ✨ #aesthetic #trending`,
          `Things that just make sense: {input} 💯 #facts #viral`,
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
  {
    id: "linkedin-post-generator",
    name: "LinkedIn Post Generator",
    description: "Create professional LinkedIn posts that build authority and drive engagement in your industry.",
    metaDescription: "Free LinkedIn Post Generator - Create professional posts that build your personal brand and drive engagement on LinkedIn.",
    category: "social-media",
    icon: "💼",
    inputLabel: "What topic do you want to post about?",
    inputPlaceholder: "e.g., leadership lessons from my career",
    faqs: [
      { q: "What's the ideal LinkedIn post length?", a: "Posts between 1,200-1,600 characters tend to perform best. Use line breaks for readability." },
      { q: "When should I post on LinkedIn?", a: "Tuesday through Thursday, 8-10 AM in your timezone, typically get the highest engagement." },
    ],
    generate: (input) =>
      templates(
        [
          "I spent 5 years learning about {input}.\n\nHere are 7 lessons that changed my career:\n\n1/ Start before you feel ready\n2/ Your network is your net worth\n3/ Consistency compounds\n4/ Failures are data points\n5/ Ask for help early\n6/ Document everything\n7/ Share your journey\n\nThe best time to start was yesterday.\nThe second best time is now.\n\n♻️ Repost if this resonates\n💬 What would you add to this list?",
          "Unpopular opinion about {input}:\n\nMost people overcomplicate it.\n\nHere's what actually matters:\n\n→ Show up consistently\n→ Provide genuine value\n→ Build real relationships\n→ Stay curious\n→ Be patient\n\nSuccess in {input} isn't about hacks.\nIt's about habits.\n\nAgree or disagree? 👇",
          "3 years ago, I knew nothing about {input}.\n\nToday, it's my strongest skill.\n\nHere's exactly what I did:\n\n📚 Month 1-3: Consumed everything\n🔨 Month 4-6: Built projects\n🤝 Month 7-9: Found mentors\n🚀 Month 10-12: Started teaching\n\nThe secret? I treated learning like a full-time job.\n\nWhat skill are you building right now?",
        ],
        input
      ),
  },
  {
    id: "instagram-bio-generator",
    name: "Instagram Bio Generator",
    description: "Create the perfect Instagram bio that converts profile visitors into followers.",
    metaDescription: "Free Instagram Bio Generator - Create catchy, conversion-optimized Instagram bios. Stand out with a professional bio.",
    category: "social-media",
    icon: "👤",
    inputLabel: "Describe yourself or your brand",
    inputPlaceholder: "e.g., fitness coach helping busy moms",
    faqs: [
      { q: "How long can an Instagram bio be?", a: "Instagram bios are limited to 150 characters. Make every word count!" },
    ],
    generate: (input) =>
      templates(
        [
          "✨ {input}\n📍 Worldwide\n🎯 Helping you level up\n💌 DM for collabs\n👇 Free resources below",
          "🚀 {input}\n💡 Tips & insights daily\n🏆 Featured in top publications\n📩 Let's connect ↓",
          "{input} 🌟\n📈 Growing together\n🎬 New content weekly\n🤝 Collabs → DM\n⬇️ Latest project",
          "Hey, I'm into {input} 👋\n🔥 Real talk, real results\n📚 Free guide in bio link\n💬 Ask me anything",
          "🎯 {input}\n✅ Proven strategies\n🌍 Global community\n📧 Business: hello@email.com\n👇 Start here",
        ],
        input
      ),
  },
  {
    id: "social-media-bio-generator",
    name: "Social Media Bio Generator",
    description: "Generate professional bios for any social platform — Twitter, TikTok, LinkedIn, and more.",
    metaDescription: "Free Social Media Bio Generator - Create optimized bios for Twitter, TikTok, LinkedIn and more. Professional bios in seconds.",
    category: "social-media",
    icon: "🌐",
    inputLabel: "Describe yourself or your brand",
    inputPlaceholder: "e.g., freelance graphic designer",
    faqs: [
      { q: "Should bios be different for each platform?", a: "Yes! Each platform has different character limits and audiences. Tailor your bio accordingly." },
    ],
    generate: (input) => [
      `🐦 Twitter Bio:\n${input} | Building in public 🚀 | Sharing lessons learned | DMs open\n\n💼 LinkedIn Headline:\n${input} → Helping brands grow through creative strategy | Open to opportunities\n\n🎵 TikTok Bio:\n${input} ✨ Daily tips & BTS 🎬 Link below 👇\n\n📌 Pinterest Bio:\nCurating the best of ${input} 📌 Boards for every occasion | Follow for daily inspo`,
    ],
  },

  // ═══════════════════ WRITING TOOLS ═══════════════════
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
    id: "paragraph-rewriter",
    name: "Paragraph Rewriter",
    description: "Rewrite any paragraph to improve clarity, tone, and readability. Perfect for polishing your content.",
    metaDescription: "Free Paragraph Rewriter - Rewrite and improve any paragraph instantly. Change tone, improve clarity, and enhance readability.",
    category: "writing",
    icon: "🔄",
    inputLabel: "Paste the paragraph you want to rewrite",
    inputPlaceholder: "e.g., Our company provides great services to customers worldwide...",
    faqs: [
      { q: "Will rewritten content be unique?", a: "Yes, the tool generates fresh variations while preserving the original meaning and key points." },
    ],
    generate: (input) => {
      const sentences = input.split(/[.!?]+/).filter(s => s.trim());
      const rewritten = sentences.map(s => {
        const t = s.trim();
        const variations = [
          `Moreover, ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
          `It's worth noting that ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
          `Importantly, ${t.charAt(0).toLowerCase()}${t.slice(1)}`,
        ];
        return variations[Math.floor(Math.random() * variations.length)];
      });
      return [
        `📝 Professional Version:\n${rewritten.join(". ")}.`,
        `✨ Concise Version:\n${sentences.slice(0, Math.ceil(sentences.length / 2)).map(s => s.trim()).join(". ")}.`,
        `🎯 Engaging Version:\nHere's the thing — ${sentences[0]?.trim().toLowerCase() || input}. ${sentences.slice(1).map(s => s.trim()).join(". ")}.`,
      ];
    },
  },
  {
    id: "email-writer",
    name: "Email Writer",
    description: "Generate professional emails for any occasion — business, follow-ups, cold outreach, and more.",
    metaDescription: "Free Email Writer - Generate professional emails instantly. Perfect for business communication, follow-ups, and cold outreach.",
    category: "writing",
    icon: "✉️",
    inputLabel: "What kind of email do you need?",
    inputPlaceholder: "e.g., follow-up after a job interview",
    faqs: [
      { q: "How do I write a professional email?", a: "Keep it concise, use a clear subject line, have a specific call to action, and proofread before sending." },
    ],
    generate: (input) => [
      `Subject: Following Up — ${input}\n\nHi [Name],\n\nI hope this message finds you well. I wanted to follow up regarding ${input}.\n\nI really enjoyed our conversation and remain very enthusiastic about the opportunity. I believe my experience in this area would allow me to make a meaningful contribution.\n\nWould you be available for a brief call this week to discuss next steps?\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]`,
      `Subject: Quick Question About ${input}\n\nHi [Name],\n\nI'll keep this brief — I know your time is valuable.\n\nI'm reaching out about ${input}. I have a few ideas that could help, and I'd love to share them with you.\n\nWould 15 minutes work sometime this week?\n\nCheers,\n[Your Name]`,
      `Subject: ${input} — Let's Connect\n\nDear [Name],\n\nI came across your work on ${input} and was truly impressed. I'm currently working on something similar and would love to exchange ideas.\n\nHere's what I can bring to the table:\n• Relevant experience in the field\n• Fresh perspectives and strategies\n• A collaborative mindset\n\nLet me know if you'd be open to a conversation.\n\nWarm regards,\n[Your Name]`,
    ],
  },
  {
    id: "story-idea-generator",
    name: "Story Idea Generator",
    description: "Generate creative story ideas, plot twists, and character concepts for writers and storytellers.",
    metaDescription: "Free Story Idea Generator - Get creative story ideas, plot twists, and character concepts. Perfect for writers and storytellers.",
    category: "writing",
    icon: "📖",
    inputLabel: "Enter a genre or theme",
    inputPlaceholder: "e.g., sci-fi romance, mystery thriller",
    faqs: [
      { q: "How do I overcome writer's block?", a: "Try using random prompts, changing your environment, freewriting for 10 minutes, or combining two unrelated ideas." },
    ],
    generate: (input) =>
      templates(
        [
          "A world where {input} has been outlawed, and one person discovers why it was banned in the first place. The truth changes everything they thought they knew.",
          "Two strangers meet at an airport during a storm. Both are running from something connected to {input}. They have 6 hours before the truth catches up.",
          "In the year 2087, {input} is the most valuable commodity on Earth. A heist crew plans to steal the last remaining supply from a fortress in the clouds.",
          "A therapist who specializes in {input}-related trauma begins receiving anonymous letters that reveal her own forgotten past.",
          "What if {input} was actually a cover-up for something far more significant? A journalist discovers the connection — and someone doesn't want the story told.",
          "Two timelines. One where {input} changed the world for better, one for worse. The protagonist exists in both simultaneously.",
        ],
        input
      ),
  },
  {
    id: "hook-generator",
    name: "Content Hook Generator",
    description: "Create irresistible opening hooks for articles, videos, and social posts that grab attention instantly.",
    metaDescription: "Free Content Hook Generator - Create attention-grabbing opening lines for articles, videos, and social media posts.",
    category: "writing",
    icon: "🪝",
    inputLabel: "What is your content about?",
    inputPlaceholder: "e.g., why most diets fail",
    faqs: [
      { q: "What makes a good content hook?", a: "A great hook creates curiosity, challenges assumptions, uses specific numbers, or taps into emotions within the first sentence." },
    ],
    generate: (input) =>
      templates(
        [
          "Most people get {input} completely wrong. Here's what nobody tells you.",
          "I wasted 3 years on {input} before I learned this one thing.",
          "Stop everything you're doing about {input}. This changes the game.",
          "97% of people fail at {input}. The other 3% all do this one thing differently.",
          "What if everything you believed about {input} was a lie?",
          "The {input} industry doesn't want you to know this.",
          "In 30 seconds, I'm going to completely change how you think about {input}.",
          "Here's a {input} truth bomb that might make you uncomfortable.",
        ],
        input
      ),
  },

  // ═══════════════════ MARKETING TOOLS ═══════════════════
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
    id: "call-to-action-generator",
    name: "Call-to-Action Generator",
    description: "Generate high-converting CTAs for landing pages, emails, and ads that drive clicks and conversions.",
    metaDescription: "Free Call-to-Action Generator - Create high-converting CTA buttons and text for websites, emails, and ads.",
    category: "marketing",
    icon: "🎯",
    inputLabel: "What action do you want users to take?",
    inputPlaceholder: "e.g., sign up for a free trial",
    faqs: [
      { q: "What makes a good CTA?", a: "Use action verbs, create urgency, be specific about the benefit, and keep it short (2-6 words)." },
    ],
    generate: (input) =>
      templates(
        [
          "🔘 Button: \"Start Your {input} Now\"\n📝 Supporting text: Join 50,000+ users who already made the switch.",
          "🔘 Button: \"Get {input} Free\"\n📝 Supporting text: No credit card required. Cancel anytime.",
          "🔘 Button: \"Claim Your {input}\"\n📝 Supporting text: Limited spots available — don't miss out!",
          "🔘 Button: \"Yes, I Want {input}!\"\n📝 Supporting text: 30-day money-back guarantee. Zero risk.",
          "🔘 Button: \"Try {input} Today\"\n📝 Supporting text: See results in 24 hours or your money back.",
          "🔘 Button: \"Unlock {input}\"\n📝 Supporting text: Used by industry leaders worldwide.",
        ],
        input
      ),
  },
  {
    id: "ad-copy-generator",
    name: "Ad Copy Generator",
    description: "Generate persuasive ad copy for Google Ads, Facebook Ads, and other advertising platforms.",
    metaDescription: "Free Ad Copy Generator - Create high-converting ad copy for Google, Facebook, and Instagram ads. Boost your ROAS.",
    category: "marketing",
    icon: "📣",
    inputLabel: "What are you advertising?",
    inputPlaceholder: "e.g., online fitness coaching program",
    faqs: [
      { q: "How do I write effective ad copy?", a: "Lead with benefits, use social proof, create urgency, and have a clear call to action. Test multiple variations." },
    ],
    generate: (input) => [
      `📱 Facebook/Instagram Ad:\n\nHeadline: Transform Your Life with ${input}\nPrimary Text: Tired of [pain point]? Our ${input} has helped 10,000+ people achieve real results. ✅ Proven methodology ✅ Expert support ✅ 30-day guarantee\nCTA: Sign Up Free →\nDescription: Join today and get 50% off your first month.`,
      `🔍 Google Search Ad:\n\nHeadline 1: ${input} — Start Today\nHeadline 2: Trusted by 10,000+ Customers\nHeadline 3: Limited Time: 50% Off\nDescription 1: Discover the #1 rated ${input}. Free trial available. No credit card required. Get started in 2 minutes.\nDescription 2: ★★★★★ 4.9/5 rating. See why thousands choose us for ${input}. Sign up now →`,
      `🎵 TikTok/Reels Ad Script:\n\n[Hook - 1 sec] "This ${input} hack changed everything for me"\n[Problem - 3 sec] "I used to struggle with [pain point]..."\n[Solution - 5 sec] "Then I discovered [your product/service]"\n[Result - 3 sec] "Now I [desired outcome] every single day"\n[CTA - 2 sec] "Link in bio — try it free today"`,
    ],
  },

  // ═══════════════════ SEO TOOLS ═══════════════════
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
    id: "seo-keyword-generator",
    name: "SEO Keyword Generator",
    description: "Generate long-tail keyword ideas for your content strategy. Find low-competition keywords that drive traffic.",
    metaDescription: "Free SEO Keyword Generator - Find long-tail keyword ideas for your niche. Discover low-competition keywords to drive organic traffic.",
    category: "seo",
    icon: "🗝️",
    inputLabel: "Enter your seed keyword or topic",
    inputPlaceholder: "e.g., vegan recipes",
    faqs: [
      { q: "What are long-tail keywords?", a: "Long-tail keywords are longer, more specific phrases (3-5 words) that have lower competition and higher conversion rates." },
      { q: "How do I find keywords to target?", a: "Start with a seed keyword, then expand into questions, comparisons, and specific variations your audience searches for." },
    ],
    generate: (input) => {
      const kws = [
        `best ${input} for beginners`, `${input} tips and tricks`, `how to ${input} at home`,
        `${input} guide 2025`, `${input} vs [alternative]`, `cheap ${input} options`,
        `${input} near me`, `${input} for small business`, `${input} step by step`,
        `top 10 ${input}`, `${input} mistakes to avoid`, `${input} benefits`,
        `${input} tools free`, `${input} examples`, `what is ${input}`,
        `${input} for dummies`, `${input} checklist`, `${input} tutorial`,
        `affordable ${input}`, `${input} pros and cons`,
      ];
      return [`🗝️ Keyword Ideas for "${input}":\n\n${kws.map((k, i) => `${i + 1}. ${k}`).join("\n")}`];
    },
  },
  {
    id: "page-title-generator",
    name: "SEO Page Title Generator",
    description: "Generate SEO-optimized page titles (title tags) that rank higher on Google and improve click-through rates.",
    metaDescription: "Free SEO Page Title Generator - Create optimized title tags for better Google rankings. Improve CTR with compelling page titles.",
    category: "seo",
    icon: "📑",
    inputLabel: "Enter your page topic",
    inputPlaceholder: "e.g., best project management software",
    faqs: [
      { q: "How long should a page title be?", a: "Keep it under 60 characters to prevent truncation in Google search results." },
    ],
    generate: (input) =>
      templates(
        [
          "{input} - Complete Guide [2025 Updated]",
          "Best {input}: Expert Picks & Reviews (2025)",
          "{input} — Tips, Tools & Strategies | Free Guide",
          "Top 10 {input} You Need to Try in 2025",
          "{input}: What You Need to Know Before Starting",
          "The #1 Guide to {input} | Free Resource",
          "{input} Explained Simply — Beginner's Guide",
          "How to {input}: Step-by-Step (With Examples)",
        ],
        input
      ),
  },
  {
    id: "alt-text-generator",
    name: "Image Alt Text Generator",
    description: "Generate SEO-friendly alt text for images that improves accessibility and search rankings.",
    metaDescription: "Free Image Alt Text Generator - Create descriptive, SEO-optimized alt text for your images. Improve accessibility and rankings.",
    category: "seo",
    icon: "🖼️",
    inputLabel: "Describe what's in the image",
    inputPlaceholder: "e.g., a woman working on a laptop in a coffee shop",
    faqs: [
      { q: "Why is alt text important?", a: "Alt text improves accessibility for screen readers, helps with image SEO, and provides context when images fail to load." },
      { q: "How long should alt text be?", a: "Keep it under 125 characters. Be descriptive but concise. Don't stuff keywords." },
    ],
    generate: (input) =>
      templates(
        [
          "{input} — high-quality photo for web and blog use",
          "Descriptive image showing {input} in a professional setting",
          "{input} — editorial-style photograph with natural lighting",
          "Close-up view of {input} captured in high resolution",
          "{input} — lifestyle image suitable for marketing materials",
        ],
        input
      ),
  },
  {
    id: "schema-markup-generator",
    name: "FAQ Schema Generator",
    description: "Generate FAQ schema markup (JSON-LD) for your website to get rich results on Google.",
    metaDescription: "Free FAQ Schema Generator - Create JSON-LD FAQ schema markup for Google rich results. Boost your SEO with structured data.",
    category: "seo",
    icon: "🏗️",
    inputLabel: "Enter FAQ question and answer (Q: ... A: ...)",
    inputPlaceholder: "Q: What is SEO? A: SEO stands for Search Engine Optimization...",
    faqs: [
      { q: "What is FAQ schema?", a: "FAQ schema is structured data markup that helps search engines display your FAQs directly in search results as rich snippets." },
    ],
    generate: (input) => {
      const parts = input.split(/A:|Answer:/i);
      const question = (parts[0] || "").replace(/Q:|Question:/i, "").trim() || input;
      const answer = (parts[1] || "").trim() || "Add your answer here.";
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        }],
      };
      return [`📋 FAQ Schema (JSON-LD):\n\nPaste this in your <head> tag:\n\n<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`];
    },
  },
];

export const getToolsByCategory = (categoryId: string) =>
  tools.filter((t) => t.category === categoryId);

export const getToolById = (id: string) => tools.find((t) => t.id === id);

export const getRelatedTools = (currentId: string, count = 4) =>
  tools.filter((t) => t.id !== currentId).sort(() => Math.random() - 0.5).slice(0, count);
