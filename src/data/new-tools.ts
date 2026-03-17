import type { Tool } from "./tools";

const templates = (patterns: string[], input: string): string[] =>
  patterns.map((p) => p.replace(/\{input\}/g, input)).sort(() => Math.random() - 0.5);

const shuffleAndPick = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const additionalTools: Tool[] = [
  // ═══════════════════ YOUTUBE TOOLS (NEW) ═══════════════════
  {
    id: "youtube-thumbnail-idea-generator",
    name: "YouTube Thumbnail Idea Generator",
    description: "Get creative YouTube thumbnail ideas that maximize click-through rates. Our AI suggests eye-catching designs, text overlays, and color schemes.",
    metaDescription: "Free YouTube Thumbnail Idea Generator - Get creative thumbnail concepts with text overlay ideas, color schemes, and design tips to boost CTR.",
    category: "youtube",
    icon: "🖼️",
    inputLabel: "What is your video about?",
    inputPlaceholder: "e.g., 10 morning routine habits",
    faqs: [
      { q: "What makes a good YouTube thumbnail?", a: "Use bright colors, large readable text (3-5 words max), expressive faces, and high contrast. Keep it simple and eye-catching at small sizes." },
      { q: "What size should a YouTube thumbnail be?", a: "The ideal YouTube thumbnail size is 1280x720 pixels with a 16:9 aspect ratio and under 2MB." },
      { q: "Should I use faces in thumbnails?", a: "Yes! Thumbnails with expressive human faces get 38% higher CTR on average. Show strong emotions." },
    ],
    generate: (input) => [
      `🎨 Thumbnail Concept 1: "The Shocked Face"\n\n• Your face showing surprise/excitement about ${input}\n• Bold text overlay: "${input.split(" ").slice(0, 3).join(" ").toUpperCase()}?!"\n• Background: Bright yellow or red gradient\n• Add arrow pointing to key element\n• Font: Impact or Bebas Neue, white with black outline`,
      `🎨 Thumbnail Concept 2: "The Before/After Split"\n\n• Split screen showing transformation related to ${input}\n• Left side: dull/grey with ❌ icon\n• Right side: vibrant/colorful with ✅ icon\n• Text: "THIS changes everything"\n• Use contrasting colors for maximum impact`,
      `🎨 Thumbnail Concept 3: "The Numbered List"\n\n• Large number "10" or relevant count in bold 3D text\n• Your face reacting with curiosity about ${input}\n• Clean background with subtle gradient\n• Small text: "${input}" at bottom\n• Use complementary colors (blue + orange or purple + yellow)`,
    ],
  },
  {
    id: "youtube-intro-generator",
    name: "YouTube Intro Script Generator",
    description: "Generate attention-grabbing YouTube video intros that hook viewers in the first 10 seconds and reduce bounce rate.",
    metaDescription: "Free YouTube Intro Script Generator - Create hook-worthy video intros that keep viewers watching. Reduce audience drop-off instantly.",
    category: "youtube",
    icon: "🎬",
    inputLabel: "What is your video about?",
    inputPlaceholder: "e.g., beginner investing tips",
    faqs: [
      { q: "How long should a YouTube intro be?", a: "Keep your intro under 15 seconds. The first 5 seconds are critical — hook viewers immediately or they'll leave." },
      { q: "What makes viewers stop watching?", a: "Long intros, no clear value proposition, poor audio quality, and not delivering on the title promise are top reasons." },
    ],
    generate: (input) =>
      templates([
        `[HOOK - 0-3s] "If you want to master ${input}, you need to hear this."\n[PROOF - 3-7s] "I've spent 500+ hours researching ${input}, and I'm about to save you months of trial and error."\n[PROMISE - 7-12s] "By the end of this video, you'll have a complete ${input} strategy you can start using TODAY."\n[SUBSCRIBE - 12-15s] "Hit subscribe — 73% of you aren't subscribed yet!"`,
        `[QUESTION - 0-3s] "What if I told you everything you know about ${input} is wrong?"\n[TEASE - 3-8s] "I discovered 3 secrets about ${input} that completely changed my results — and secret #2 blew my mind."\n[PROMISE - 8-12s] "Stay until the end because I'm giving you my exact ${input} framework for free."`,
        `[SHOCK - 0-3s] "STOP making this ${input} mistake — it's costing you more than you think."\n[STORY - 3-10s] "Two years ago, I was struggling with ${input} just like you. Then I found a system that changed everything."\n[CTA - 10-15s] "I'm sharing that exact system in this video. Let's dive in."`,
      ], input),
  },
  {
    id: "youtube-community-post-generator",
    name: "YouTube Community Post Generator",
    description: "Create engaging YouTube community posts that boost channel engagement, polls, and subscriber interaction.",
    metaDescription: "Free YouTube Community Post Generator - Create engaging community tab posts, polls, and updates to boost YouTube channel engagement.",
    category: "youtube",
    icon: "📢",
    inputLabel: "What's your channel niche?",
    inputPlaceholder: "e.g., gaming, cooking, tech reviews",
    faqs: [
      { q: "How often should I post on Community tab?", a: "Post 2-3 times per week on your Community tab. Mix polls, questions, images, and updates." },
    ],
    generate: (input) =>
      templates([
        `📊 POLL POST:\n\nWhat type of ${input} content do you want to see next? 👇\n\n🔵 Beginner tutorial\n🟢 Advanced deep-dive\n🟡 Behind-the-scenes\n🔴 Q&A / AMA\n\nVote below! Most-voted topic = next video 🎬`,
        `💬 ENGAGEMENT POST:\n\nReal talk about ${input} 👇\n\nWhat's the ONE thing about ${input} you wish someone had told you earlier?\n\nDrop your answer in the comments — I'm reading EVERY single one and might feature the best answers in my next video! 🔥`,
        `🎉 UPDATE POST:\n\nBIG announcement for the ${input} community! 🚀\n\nI've been working on something special for you all. Can you guess what it is?\n\nHint: It involves ${input} and it's completely FREE.\n\nDrop your guesses below! Winner gets a shoutout 🏆`,
      ], input),
  },
  {
    id: "youtube-shorts-script-generator",
    name: "YouTube Shorts Script Generator",
    description: "Create viral YouTube Shorts scripts under 60 seconds. Optimized hooks, fast-paced content, and strong CTAs.",
    metaDescription: "Free YouTube Shorts Script Generator - Write viral short-form video scripts under 60 seconds. Perfect hooks and CTAs for Shorts.",
    category: "youtube",
    icon: "⚡",
    inputLabel: "What's your Short about?",
    inputPlaceholder: "e.g., quick Python tips",
    faqs: [
      { q: "How long should YouTube Shorts be?", a: "YouTube Shorts must be under 60 seconds. The sweet spot is 30-45 seconds for maximum retention." },
      { q: "How do I make Shorts go viral?", a: "Hook in first 2 seconds, deliver value fast, use trending audio, and post consistently at peak hours." },
    ],
    generate: (input) =>
      templates([
        `⚡ 30-SECOND SHORT:\n\n[HOOK 0-2s] "This ${input} trick saved me hours"\n[CONTENT 2-25s] "Here's what most people don't know about ${input}:\n→ Step 1: [Quick tip]\n→ Step 2: [Quick action]\n→ Step 3: [Surprising result]"\n[CTA 25-30s] "Follow for more ${input} tips! 🔥"`,
        `⚡ 45-SECOND SHORT:\n\n[HOOK 0-3s] "Why is nobody talking about this ${input} hack?"\n[PROBLEM 3-10s] "Most people waste time doing ${input} the hard way..."\n[SOLUTION 10-35s] "Instead, try this:\n1️⃣ [First step]\n2️⃣ [Second step]\n3️⃣ [Mind-blowing result]"\n[CTA 35-45s] "Save this for later ✅ Follow for more!"`,
      ], input),
  },
  {
    id: "youtube-end-screen-cta-generator",
    name: "YouTube End Screen CTA Generator",
    description: "Generate compelling end screen calls-to-action that boost watch time, subscriptions, and video recommendations.",
    metaDescription: "Free YouTube End Screen CTA Generator - Create compelling outros and end screen CTAs to boost subscribers and watch time.",
    category: "youtube",
    icon: "🔚",
    inputLabel: "What was your video about?",
    inputPlaceholder: "e.g., top 10 productivity apps",
    faqs: [
      { q: "When should the end screen start?", a: "YouTube end screens appear in the last 5-20 seconds. Script your outro CTA to start at least 20 seconds before the video ends." },
    ],
    generate: (input) =>
      templates([
        `🎬 END SCREEN SCRIPT:\n\n"And that's everything about ${input}! Now if you enjoyed this, you're gonna LOVE the video on screen right now — it goes even deeper into [related topic]. Click it before you forget!\n\nAnd if you haven't already, hit subscribe and the bell icon. I post new ${input} content every week. See you in the next one! ✌️"`,
        `🎬 END SCREEN SCRIPT (SHORT):\n\n"Alright, those were my top ${input} tips. But wait — there's one more thing I didn't mention. Check the video on screen to find out what it is. Trust me, you don't want to miss it.\n\nSubscribe if you're new, and I'll see you there! 👊"`,
      ], input),
  },

  // ═══════════════════ SOCIAL MEDIA TOOLS (NEW) ═══════════════════
  {
    id: "facebook-post-generator",
    name: "Facebook Post Generator",
    description: "Create engaging Facebook posts that drive likes, comments, shares, and organic reach for your page or profile.",
    metaDescription: "Free Facebook Post Generator - Create viral Facebook posts that boost engagement. Perfect for business pages and personal profiles.",
    category: "social-media",
    icon: "👍",
    inputLabel: "What do you want to post about?",
    inputPlaceholder: "e.g., launching a new product",
    faqs: [
      { q: "What's the best time to post on Facebook?", a: "Tuesday-Thursday between 9 AM-12 PM gets the highest engagement. Avoid posting after 5 PM on weekdays." },
      { q: "How long should a Facebook post be?", a: "Posts under 80 characters get 66% more engagement. But storytelling posts (500-1000 characters) also work well." },
    ],
    generate: (input) =>
      templates([
        `🎉 Big news about ${input}!\n\nWe've been working on something special, and we're finally ready to share it with you. Here's what makes it different:\n\n✅ [Benefit 1]\n✅ [Benefit 2]\n✅ [Benefit 3]\n\nDrop a 🔥 if you're excited!\n\n#${input.replace(/\s+/g, "")} #announcement #exciting`,
        `Real talk about ${input} 👇\n\nMost people overcomplicate this. Here's what actually works:\n\n1️⃣ Start simple\n2️⃣ Stay consistent\n3️⃣ Learn from every mistake\n4️⃣ Help others along the way\n\nWhat's YOUR best ${input} tip? Share below! 💬`,
      ], input),
  },
  {
    id: "pinterest-pin-description-generator",
    name: "Pinterest Pin Description Generator",
    description: "Write SEO-optimized Pinterest pin descriptions that drive clicks, saves, and traffic to your website.",
    metaDescription: "Free Pinterest Pin Description Generator - Create SEO-optimized pin descriptions that drive traffic. Boost saves and clicks on Pinterest.",
    category: "social-media",
    icon: "📌",
    inputLabel: "What is your pin about?",
    inputPlaceholder: "e.g., healthy meal prep ideas",
    faqs: [
      { q: "How long should a Pinterest description be?", a: "Use 200-300 characters. Include 2-3 relevant keywords naturally. Add a call-to-action at the end." },
    ],
    generate: (input) =>
      templates([
        `Looking for the best ${input}? This comprehensive guide covers everything you need to know. From beginner tips to advanced strategies, you'll find actionable advice you can use today. Save this pin for later and click through for the full guide! ✨ #${input.replace(/\s+/g, "")} #tips #guide`,
        `${input} made easy! 🌟 Whether you're just starting out or looking to level up, this pin has you covered. Discover proven tips, step-by-step instructions, and expert advice. Tap to read more → #${input.replace(/\s+/g, "")} #howto #inspiration`,
      ], input),
  },
  {
    id: "twitter-thread-generator",
    name: "Twitter/X Thread Generator",
    description: "Create viral Twitter/X threads that build authority, grow followers, and drive massive engagement.",
    metaDescription: "Free Twitter Thread Generator - Create viral X/Twitter threads that grow your following. Build authority with engaging thread content.",
    category: "social-media",
    icon: "🧵",
    inputLabel: "What topic should the thread cover?",
    inputPlaceholder: "e.g., lessons from building a startup",
    faqs: [
      { q: "How many tweets should a thread have?", a: "7-15 tweets is the sweet spot. Start with a killer hook, provide value in each tweet, and end with a CTA." },
    ],
    generate: (input) => [
      `🧵 THREAD: Everything I learned about ${input} (save this)\n\n1/ Most people get ${input} completely wrong. After years of experience, here are the lessons nobody teaches you.\n\nA thread 🧵👇\n\n2/ Lesson 1: Start before you're ready.\nPerfection is the enemy of progress. The best time to start ${input} was yesterday. The second best time is now.\n\n3/ Lesson 2: Consistency > Intensity\nShowing up daily for 30 minutes beats a 10-hour marathon once a month. Build the habit first.\n\n4/ Lesson 3: Learn from failures\nEvery failure in ${input} teaches you something. Document what went wrong and adjust.\n\n5/ Lesson 4: Build in public\nShare your ${input} journey. People love watching real progress.\n\n6/ Lesson 5: Network relentlessly\nThe people you know in ${input} matter more than what you know. Connect with 3 new people weekly.\n\n7/ Lesson 6: Systems beat goals\nDon't just set goals for ${input}. Build systems that make progress inevitable.\n\n8/ TL;DR:\n→ Start now\n→ Be consistent\n→ Learn from failure\n→ Share your journey\n→ Build connections\n→ Create systems\n\nRetweet tweet 1 to help others 🙏\nFollow me for more ${input} insights.`,
    ],
  },
  {
    id: "reddit-post-generator",
    name: "Reddit Post Generator",
    description: "Write Reddit posts that don't get downvoted. Create authentic, community-friendly content for any subreddit.",
    metaDescription: "Free Reddit Post Generator - Create engaging Reddit posts that drive upvotes and discussion. Write authentic content for any subreddit.",
    category: "social-media",
    icon: "🤖",
    inputLabel: "What subreddit topic are you posting about?",
    inputPlaceholder: "e.g., personal finance tips for college students",
    faqs: [
      { q: "How do I write a good Reddit post?", a: "Be authentic, provide genuine value, don't self-promote, use proper formatting, and engage with comments." },
    ],
    generate: (input) =>
      templates([
        `📝 Title: My experience with ${input} — what I wish I knew earlier\n\nBody:\nHey everyone,\n\nI've been deep into ${input} for about 2 years now, and I wanted to share some things I've learned the hard way.\n\n**What worked:**\n- [Tip 1 about ${input}]\n- [Tip 2 about ${input}]\n- [Tip 3 about ${input}]\n\n**What didn't work:**\n- [Common mistake 1]\n- [Common mistake 2]\n\n**My biggest takeaway:**\n[Key insight about ${input}]\n\nHappy to answer any questions! What's been your experience with ${input}?`,
        `📝 Title: [Guide] ${input} — a comprehensive breakdown for beginners\n\nBody:\nI see a lot of questions about ${input} on this sub, so I put together a quick guide based on my experience.\n\n**Step 1:** [Foundation]\n**Step 2:** [Building blocks]\n**Step 3:** [Advanced tactics]\n\n**Resources I recommend:**\n- [Resource 1]\n- [Resource 2]\n\nFeel free to add your own tips in the comments. Let's help each other out! 🙌`,
      ], input),
  },
  {
    id: "youtube-comment-reply-generator",
    name: "YouTube Comment Reply Generator",
    description: "Generate thoughtful YouTube comment replies that boost engagement and build community on your channel.",
    metaDescription: "Free YouTube Comment Reply Generator - Create engaging comment replies that boost interaction and build loyal community.",
    category: "social-media",
    icon: "💬",
    inputLabel: "What did the commenter say?",
    inputPlaceholder: "e.g., Great video! How do I get started?",
    faqs: [
      { q: "Why should I reply to YouTube comments?", a: "Replying boosts engagement metrics, builds community loyalty, and signals to YouTube's algorithm that your content is engaging." },
    ],
    generate: (input) =>
      templates([
        `Thank you so much for the kind words! 🙏 To answer your question about "{input}" — I actually covered this in detail in [related video]. But in short: start with the basics and build from there. Let me know if you need more help!`,
        `Wow, great question about "{input}"! 💡 Here's what I'd recommend:\n1. Start with [first step]\n2. Build on that with [second step]\n3. Practice consistently\n\nI might make a full video on this — would you watch it? 👀`,
        `Really appreciate you asking about "{input}"! 🔥 This is something a lot of people struggle with. My #1 tip: don't overcomplicate it. Start simple and iterate. Drop a 👍 if you want me to make a deep-dive video on this topic!`,
      ], input),
  },

  // ═══════════════════ WRITING TOOLS (NEW) ═══════════════════
  {
    id: "article-outline-generator",
    name: "Article Outline Generator",
    description: "Generate structured article outlines with headings, subheadings, and talking points for any topic.",
    metaDescription: "Free Article Outline Generator - Create structured outlines with H2s, H3s, and key points. Plan your content faster.",
    category: "writing",
    icon: "📋",
    inputLabel: "What's your article topic?",
    inputPlaceholder: "e.g., remote work productivity tips",
    faqs: [
      { q: "Why should I outline before writing?", a: "Outlines save time, improve structure, ensure you cover all key points, and make the writing process 3x faster." },
    ],
    generate: (input) => [
      `📋 Article Outline: "${input}"\n\n## H1: The Ultimate Guide to ${input}\n\n### Introduction\n- Hook: Surprising stat about ${input}\n- Why this matters in 2025\n- What the reader will learn\n\n### H2: What is ${input}?\n- Definition and context\n- Why it's important\n- Key statistics\n\n### H2: Top Benefits of ${input}\n- Benefit 1 (with example)\n- Benefit 2 (with data)\n- Benefit 3 (with case study)\n\n### H2: How to Get Started with ${input}\n- Step 1: [Foundation]\n- Step 2: [Setup]\n- Step 3: [Implementation]\n- Step 4: [Optimization]\n\n### H2: Common Mistakes to Avoid\n- Mistake 1 and how to fix it\n- Mistake 2 and the better approach\n- Mistake 3 and what to do instead\n\n### H2: Tools & Resources for ${input}\n- Tool 1 (free)\n- Tool 2 (paid)\n- Recommended reading\n\n### H2: Frequently Asked Questions\n- Q1 about ${input}\n- Q2 about ${input}\n- Q3 about ${input}\n\n### Conclusion\n- Key takeaways\n- Call to action\n- Next steps\n\n📝 Estimated word count: 2,000-2,500 words\n⏱️ Estimated read time: 8-10 minutes`,
    ],
  },
  {
    id: "press-release-generator",
    name: "Press Release Generator",
    description: "Write professional press releases for product launches, company news, and announcements.",
    metaDescription: "Free Press Release Generator - Create professional press releases for product launches and company announcements. AP style format.",
    category: "writing",
    icon: "📰",
    inputLabel: "What's the announcement?",
    inputPlaceholder: "e.g., launching a new SaaS product for small businesses",
    faqs: [
      { q: "How long should a press release be?", a: "400-600 words is ideal. Include who, what, when, where, why in the first paragraph." },
    ],
    generate: (input) => [
      `FOR IMMEDIATE RELEASE\n\n[Company Name] Announces ${input}\n\n[City, State] — [Date] — [Company Name] today announced ${input}, marking a significant milestone in [industry].\n\n"We're thrilled to bring ${input} to market," said [Name], [Title] at [Company Name]. "This represents months of development and directly addresses the needs of our customers."\n\nKey highlights:\n• [Feature/benefit 1]\n• [Feature/benefit 2]\n• [Feature/benefit 3]\n\n${input} is available starting [date] at [website/location].\n\nAbout [Company Name]\n[Company Name] is a [description]. Founded in [year], the company serves [target audience] with [value proposition].\n\nMedia Contact:\n[Name]\n[Email]\n[Phone]`,
    ],
  },
  {
    id: "resume-summary-generator",
    name: "Resume Summary Generator",
    description: "Generate powerful resume summaries and professional profiles that land interviews.",
    metaDescription: "Free Resume Summary Generator - Create compelling resume summaries that stand out to recruiters. Land more interviews.",
    category: "writing",
    icon: "📄",
    inputLabel: "Describe your role and experience",
    inputPlaceholder: "e.g., senior software engineer with 5 years experience in React",
    faqs: [
      { q: "How long should a resume summary be?", a: "Keep it to 2-4 sentences or 50-80 words. Focus on your top achievements and value proposition." },
    ],
    generate: (input) =>
      templates([
        `Results-driven professional with extensive experience in {input}. Proven track record of delivering high-impact projects and exceeding expectations. Skilled in leveraging data-driven strategies to optimize performance and drive growth. Passionate about continuous improvement and team collaboration.`,
        `Dynamic and detail-oriented {input} professional with a strong foundation in [key skills]. Adept at managing multiple priorities while maintaining the highest quality standards. Known for [key strength] and [key achievement]. Seeking to leverage expertise to drive results at [target company].`,
        `Accomplished {input} specialist with a demonstrated history of success in [industry]. Expertise spans [skill 1], [skill 2], and [skill 3]. Recognized for [notable achievement] and consistently delivering measurable results. Ready to bring innovative solutions to new challenges.`,
      ], input),
  },
  {
    id: "cover-letter-generator",
    name: "Cover Letter Generator",
    description: "Write compelling cover letters that get you noticed by hiring managers and recruiters.",
    metaDescription: "Free Cover Letter Generator - Create personalized cover letters that land interviews. Stand out from other applicants.",
    category: "writing",
    icon: "💌",
    inputLabel: "What position are you applying for?",
    inputPlaceholder: "e.g., marketing manager at a tech startup",
    faqs: [
      { q: "How long should a cover letter be?", a: "Keep it under one page — 250-400 words. Hiring managers spend 7 seconds on average reviewing each application." },
    ],
    generate: (input) => [
      `Dear Hiring Manager,\n\nI'm excited to apply for the ${input} position. With my background in [relevant experience] and passion for [industry], I'm confident I can make a meaningful contribution to your team.\n\nIn my previous role, I:\n• [Achievement 1 with metrics]\n• [Achievement 2 with impact]\n• [Achievement 3 with results]\n\nWhat excites me most about this ${input} opportunity is [specific reason related to company]. I'm particularly drawn to [company value/mission/product] and believe my experience in [relevant skill] aligns perfectly with your needs.\n\nI'd love the opportunity to discuss how my skills and experience can contribute to your team's success. I'm available for an interview at your convenience.\n\nThank you for considering my application.\n\nBest regards,\n[Your Name]`,
    ],
  },
  {
    id: "newsletter-generator",
    name: "Newsletter Content Generator",
    description: "Create engaging email newsletter content that keeps subscribers opening, reading, and clicking.",
    metaDescription: "Free Newsletter Content Generator - Write email newsletters that boost open rates and engagement. Templates for any niche.",
    category: "writing",
    icon: "📬",
    inputLabel: "What's your newsletter about this week?",
    inputPlaceholder: "e.g., latest AI trends and tools",
    faqs: [
      { q: "How often should I send newsletters?", a: "Weekly is the sweet spot for most niches. Consistency matters more than frequency." },
    ],
    generate: (input) => [
      `📬 Newsletter Template: ${input}\n\nSubject: This Week in ${input} — [Number] Things You Need to Know\nPreview text: Plus, a free resource you'll love 👇\n\n---\n\nHey [First Name],\n\nHappy [Day]! Here's your weekly dose of ${input} goodness:\n\n🔥 HIGHLIGHT OF THE WEEK\n[Main story about ${input} — 2-3 sentences with a link]\n\n📰 3 THINGS TO KNOW\n1. [News item 1 about ${input}] → [Link]\n2. [News item 2 about ${input}] → [Link]\n3. [News item 3 about ${input}] → [Link]\n\n💡 TIP OF THE WEEK\n[Actionable tip related to ${input} — 2-3 sentences]\n\n🎁 FREE RESOURCE\n[Description of freebie related to ${input}] → [Download link]\n\n---\n\nThat's a wrap! Hit reply and let me know what you thought.\n\nUntil next week,\n[Your Name]\n\nP.S. Know someone who'd love this? Forward this email! 📩`,
    ],
  },
  {
    id: "speech-generator",
    name: "Speech Writer Generator",
    description: "Write persuasive speeches for presentations, events, and public speaking occasions.",
    metaDescription: "Free Speech Writer Generator - Create compelling speeches for presentations, events, and public speaking. Professional speech templates.",
    category: "writing",
    icon: "🎤",
    inputLabel: "What's the speech about?",
    inputPlaceholder: "e.g., graduation speech about following your passion",
    faqs: [
      { q: "How long should a speech be?", a: "5-7 minutes (750-1,000 words) for most occasions. TED talks are 18 minutes max. Shorter is usually better." },
    ],
    generate: (input) => [
      `🎤 SPEECH: ${input}\n\n[OPENING - 30 seconds]\n"Good [morning/afternoon/evening] everyone. I want to start with a question: [thought-provoking question about ${input}]? Take a moment to think about that."\n\n[STORY - 2 minutes]\n"Let me share something personal. [Years ago / Recently], I had an experience with ${input} that completely changed my perspective. [Tell the story — what happened, what you felt, what you learned]."\n\n[KEY MESSAGE - 3 minutes]\n"Here's what I've come to understand about ${input}:\n\nFirst, [key point 1 with supporting example].\nSecond, [key point 2 with data or story].\nAnd finally, [key point 3 — the most impactful one].\n\nThis isn't just theory — it's something I've seen work again and again."\n\n[CALL TO ACTION - 1 minute]\n"So here's my challenge to each of you: [specific, actionable challenge related to ${input}]. Start today. Start small. But start."\n\n[CLOSING - 30 seconds]\n"Because at the end of the day, ${input} isn't about [common misconception]. It's about [deeper truth]. And that's something worth pursuing.\n\nThank you."`,
    ],
  },

  // ═══════════════════ MARKETING TOOLS (NEW) ═══════════════════
  {
    id: "google-ads-headline-generator",
    name: "Google Ads Headline Generator",
    description: "Generate high-converting Google Ads headlines that maximize Quality Score and click-through rates.",
    metaDescription: "Free Google Ads Headline Generator - Create high-CTR Google Ads headlines. Boost Quality Score with optimized ad copy.",
    category: "marketing",
    icon: "🔎",
    inputLabel: "What product or service are you advertising?",
    inputPlaceholder: "e.g., online accounting software",
    faqs: [
      { q: "How many characters can Google Ads headlines have?", a: "Each headline can be up to 30 characters. You can add up to 15 headlines per responsive search ad." },
      { q: "How many headlines should I write?", a: "Write at least 10-15 headline variations. Google will test combinations to find the highest performers." },
    ],
    generate: (input) => {
      const headlines = [
        `Best ${input} in 2025`, `${input} — Try Free`, `Top-Rated ${input}`,
        `Save 50% on ${input}`, `${input} Made Simple`, `#1 ${input} Platform`,
        `Free ${input} Trial`, `${input} for Business`, `Affordable ${input}`,
        `${input} That Works`, `Get ${input} Now`, `Premium ${input}`,
        `${input} Reviews 2025`, `Compare ${input}`, `${input} Solutions`,
      ];
      return [`📊 Google Ads Headlines (30 char max each):\n\n${headlines.map((h, i) => `${i + 1}. ${h} (${h.length} chars)`).join("\n")}\n\n💡 Tips:\n• Mix keyword-focused and benefit-focused headlines\n• Include numbers and years for freshness\n• Test urgency ("Limited Time") vs value ("Save 50%")\n• Always include a CTA headline`];
    },
  },
  {
    id: "landing-page-copy-generator",
    name: "Landing Page Copy Generator",
    description: "Generate high-converting landing page copy with headlines, subheadlines, benefits, and CTAs.",
    metaDescription: "Free Landing Page Copy Generator - Create conversion-optimized landing page copy. Headlines, benefits, CTAs, and more.",
    category: "marketing",
    icon: "🖥️",
    inputLabel: "What's your product or service?",
    inputPlaceholder: "e.g., AI-powered email marketing tool",
    faqs: [
      { q: "What should a landing page include?", a: "A compelling headline, clear value proposition, benefits (not features), social proof, and a strong CTA above the fold." },
    ],
    generate: (input) => [
      `🖥️ LANDING PAGE COPY: ${input}\n\n--- HERO SECTION ---\n\n📌 Headline: "The Smarter Way to ${input}"\n📌 Subheadline: "Join 10,000+ professionals who save hours every week with our ${input} solution."\n📌 CTA Button: "Start Free Trial →"\n📌 Trust badge: "No credit card required · Free forever plan"\n\n--- PROBLEM SECTION ---\n\n📌 Heading: "Tired of [common pain point]?"\n📌 Pain points:\n• "Spending hours on [manual task]"\n• "Losing [money/time/customers] to [inefficiency]"\n• "Struggling to [desired outcome]"\n\n--- SOLUTION SECTION ---\n\n📌 Heading: "Meet Your New Secret Weapon"\n📌 Benefits:\n✅ [Benefit 1] — Save 10+ hours per week\n✅ [Benefit 2] — Increase [metric] by 3x\n✅ [Benefit 3] — No learning curve\n\n--- SOCIAL PROOF ---\n\n📌 Heading: "Trusted by Industry Leaders"\n📌 Testimonial: "[Quote from happy customer about ${input}]"\n📌 Stats: "50,000+ users | 4.9/5 rating | 99.9% uptime"\n\n--- FINAL CTA ---\n\n📌 Heading: "Ready to Transform Your ${input}?"\n📌 Button: "Get Started Free"\n📌 Guarantee: "30-day money-back guarantee. Zero risk."`,
    ],
  },
  {
    id: "value-proposition-generator",
    name: "Value Proposition Generator",
    description: "Create clear, compelling value propositions that communicate why customers should choose you.",
    metaDescription: "Free Value Proposition Generator - Craft compelling value propositions that differentiate your brand. Convert more visitors to customers.",
    category: "marketing",
    icon: "💎",
    inputLabel: "Describe your product/service and target audience",
    inputPlaceholder: "e.g., project management app for remote teams",
    faqs: [
      { q: "What makes a strong value proposition?", a: "It clearly states who you help, what problem you solve, how you're different, and what specific result the customer gets." },
    ],
    generate: (input) =>
      templates([
        `We help [target audience] achieve [desired outcome] through ${input} — without [common pain point]. Unlike [competitor/alternative], we [key differentiator].`,
        `${input} that actually works. For [target audience] who are tired of [frustration], our solution delivers [specific benefit] in [timeframe]. No [common objection]. Just results.`,
        `The #1 ${input} solution for [target audience]. Get [specific result] in [timeframe] with zero [common barrier]. Trusted by [number]+ [customer type].`,
        `Stop wasting time on [old way]. ${input} gives you [benefit 1], [benefit 2], and [benefit 3] — all in one place. Start free today.`,
      ], input),
  },
  {
    id: "testimonial-generator",
    name: "Testimonial Request Generator",
    description: "Generate professional testimonial request emails and templates to collect social proof from happy customers.",
    metaDescription: "Free Testimonial Request Generator - Create emails and templates to collect powerful customer testimonials. Boost social proof.",
    category: "marketing",
    icon: "⭐",
    inputLabel: "What's your product or service?",
    inputPlaceholder: "e.g., web design agency",
    faqs: [
      { q: "When should I ask for testimonials?", a: "Ask right after a positive interaction, project completion, or when a customer shares positive feedback naturally." },
    ],
    generate: (input) => [
      `📧 Testimonial Request Email:\n\nSubject: Quick favor? (takes 2 minutes)\n\nHi [Name],\n\nI hope you're doing well! I noticed you've been using our ${input} for [timeframe] now, and I wanted to personally check in.\n\nIf you've had a positive experience, would you be willing to share a brief testimonial? It would mean the world to us and help others discover ${input}.\n\nHere are a few questions to guide you (pick any):\n\n1. What problem were you facing before using our ${input}?\n2. How has ${input} helped you?\n3. What results have you seen?\n4. Would you recommend us to others? Why?\n\nEven 2-3 sentences would be incredibly valuable. You can simply reply to this email!\n\nThank you so much,\n[Your Name]`,
    ],
  },
  {
    id: "elevator-pitch-generator",
    name: "Elevator Pitch Generator",
    description: "Craft a compelling 30-second elevator pitch that clearly communicates your business value.",
    metaDescription: "Free Elevator Pitch Generator - Create a compelling 30-second pitch for your business. Perfect for networking and investor meetings.",
    category: "marketing",
    icon: "🛗",
    inputLabel: "Describe your business or idea",
    inputPlaceholder: "e.g., an app that helps freelancers manage invoices",
    faqs: [
      { q: "How long should an elevator pitch be?", a: "30-60 seconds maximum. That's about 75-150 words. Practice until it sounds natural, not rehearsed." },
    ],
    generate: (input) =>
      templates([
        `"You know how [target audience] struggle with [pain point]? Well, we've built ${input} that [key solution]. Unlike [alternative], we [differentiator]. We've already helped [number] [customers/users] achieve [specific result]. We're looking for [ask — investment, partnership, customers]."`,
        `"[Staggering stat about the problem]. That's why we created ${input}. In just [timeframe], our users see [specific measurable result]. We're the only solution that [unique advantage], and we're growing [growth metric] month over month."`,
        `"Imagine if you could [desired outcome] without [pain point]. That's exactly what ${input} does. We take [complicated process] and make it [simple/fast/affordable]. Our early users are seeing [impressive metric], and we're just getting started."`,
      ], input),
  },

  // ═══════════════════ SEO TOOLS (NEW) ═══════════════════
  {
    id: "blog-post-seo-analyzer",
    name: "Blog Post SEO Checklist Generator",
    description: "Get a complete SEO checklist for your blog post. Ensure every article is fully optimized before publishing.",
    metaDescription: "Free Blog Post SEO Checklist Generator - Get a complete on-page SEO checklist. Never miss an optimization before publishing.",
    category: "seo",
    icon: "✅",
    inputLabel: "Enter your blog post title/topic",
    inputPlaceholder: "e.g., How to start a podcast in 2025",
    faqs: [
      { q: "What's the most important SEO factor for blog posts?", a: "Content quality and relevance. Google prioritizes comprehensive content that satisfies search intent over keyword stuffing." },
    ],
    generate: (input) => [
      `✅ SEO CHECKLIST for: "${input}"\n\n📝 CONTENT\n□ Title includes primary keyword "${input}"\n□ Title is under 60 characters\n□ Meta description includes keyword (under 160 chars)\n□ H1 tag matches/includes target keyword\n□ Keyword appears in first 100 words\n□ Content is 1,500+ words (aim for 2,500+)\n□ Uses H2/H3 subheadings with related keywords\n□ Includes LSI keywords and synonyms\n□ Answers "People Also Ask" questions\n□ Has a clear introduction and conclusion\n\n🔗 LINKS\n□ 3-5 internal links to relevant pages\n□ 2-3 external links to authoritative sources\n□ All links open correctly (no broken links)\n□ Anchor text is descriptive (not "click here")\n\n🖼️ MEDIA\n□ Images have descriptive alt text\n□ Images are compressed (under 100KB)\n□ At least 1 custom image or infographic\n□ Video embed (if applicable)\n\n⚙️ TECHNICAL\n□ URL is short and includes keyword\n□ Page loads in under 3 seconds\n□ Mobile-responsive layout\n□ Schema markup added (Article/FAQ)\n□ Canonical tag set\n□ No duplicate content issues\n\n📊 AFTER PUBLISHING\n□ Submit URL to Google Search Console\n□ Share on social media\n□ Internal link from 3+ existing posts\n□ Monitor rankings after 2-4 weeks`,
    ],
  },
  {
    id: "internal-linking-suggestion-generator",
    name: "Internal Linking Strategy Generator",
    description: "Generate internal linking strategies to boost SEO authority and improve site architecture.",
    metaDescription: "Free Internal Linking Strategy Generator - Create smart internal linking plans to boost SEO. Improve site architecture and rankings.",
    category: "seo",
    icon: "🔗",
    inputLabel: "Enter your website niche and main topics",
    inputPlaceholder: "e.g., digital marketing blog covering SEO, PPC, content marketing",
    faqs: [
      { q: "How many internal links should a page have?", a: "Aim for 3-5 contextual internal links per 1,000 words. Link to related content that adds value for the reader." },
    ],
    generate: (input) => [
      `🔗 Internal Linking Strategy for: ${input}\n\n📊 PILLAR-CLUSTER MODEL\n\n1. Create a Pillar Page:\n   → "The Complete Guide to ${input}" (3,000+ words)\n   → Covers ${input} broadly at a high level\n   → Links to all cluster content below\n\n2. Cluster Content (link back to pillar):\n   → "How to Get Started with ${input}"\n   → "Best ${input} Tools & Software"\n   → "${input} for Beginners"\n   → "Advanced ${input} Strategies"\n   → "${input} Case Studies"\n   → "${input} Statistics & Trends"\n   → "Common ${input} Mistakes"\n\n3. Supporting Content (link between clusters):\n   → "${input} vs [Alternative]" comparison posts\n   → "${input} Templates & Examples"\n   → "Expert ${input} Tips"\n\n📋 LINKING RULES:\n• Every new post links to 3+ existing posts\n• Update old posts to link to new content monthly\n• Use descriptive anchor text (not "click here")\n• Don't link the same page twice in one article\n• Prioritize linking to pages you want to rank higher`,
    ],
  },
  {
    id: "robots-txt-generator",
    name: "Robots.txt Generator",
    description: "Generate a properly configured robots.txt file to control search engine crawling of your website.",
    metaDescription: "Free Robots.txt Generator - Create a properly formatted robots.txt file. Control how search engines crawl your website.",
    category: "seo",
    icon: "🤖",
    inputLabel: "Enter your website URL",
    inputPlaceholder: "e.g., https://example.com",
    faqs: [
      { q: "What is robots.txt?", a: "Robots.txt is a text file that tells search engine bots which pages to crawl and which to skip. It's placed in your site's root directory." },
      { q: "Can robots.txt hurt my SEO?", a: "Yes, if misconfigured. Never block important pages. Use it to prevent crawling of admin areas, duplicate content, and low-value pages." },
    ],
    generate: (input) => {
      const domain = input.replace(/\/+$/, "");
      return [
        `🤖 robots.txt for ${domain}:\n\n# Allow all crawlers\nUser-agent: *\nAllow: /\n\n# Block admin and private areas\nDisallow: /admin/\nDisallow: /api/\nDisallow: /private/\nDisallow: /tmp/\n\n# Block query parameters (duplicate content)\nDisallow: /*?*\n\n# Allow important resources\nAllow: /css/\nAllow: /js/\nAllow: /images/\n\n# Sitemap location\nSitemap: ${domain}/sitemap.xml\n\n---\n\n📌 Place this file at: ${domain}/robots.txt\n\n💡 Tips:\n• Test with Google Search Console's robots.txt tester\n• Don't block CSS/JS files (Google needs to render pages)\n• Robots.txt is a suggestion, not a directive\n• Use noindex meta tags for pages you want hidden from results`,
      ];
    },
  },
  {
    id: "open-graph-generator",
    name: "Open Graph Meta Tag Generator",
    description: "Generate Open Graph meta tags for perfect social media previews on Facebook, Twitter, LinkedIn, and WhatsApp.",
    metaDescription: "Free Open Graph Generator - Create OG meta tags for beautiful social previews. Perfect sharing on Facebook, Twitter, LinkedIn.",
    category: "seo",
    icon: "🏷️",
    inputLabel: "Enter your page title and URL",
    inputPlaceholder: "e.g., Best Running Shoes Guide - https://example.com/running-shoes",
    faqs: [
      { q: "What are Open Graph tags?", a: "Open Graph tags control how your content appears when shared on social media. They define the title, description, image, and URL shown in previews." },
    ],
    generate: (input) => {
      const parts = input.split(" - ");
      const title = parts[0] || input;
      const url = parts[1] || "https://yoursite.com/page";
      return [
        `🏷️ Open Graph Meta Tags:\n\n<!-- Basic OG Tags -->\n<meta property="og:title" content="${title}" />\n<meta property="og:description" content="[Your page description under 160 chars]" />\n<meta property="og:type" content="website" />\n<meta property="og:url" content="${url}" />\n<meta property="og:image" content="${url}/og-image.jpg" />\n<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />\n<meta property="og:site_name" content="[Your Site Name]" />\n\n<!-- Twitter Card Tags -->\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="${title}" />\n<meta name="twitter:description" content="[Description]" />\n<meta name="twitter:image" content="${url}/og-image.jpg" />\n\n💡 Tips:\n• OG image should be 1200x630px\n• Keep title under 60 chars\n• Keep description under 160 chars\n• Test with Facebook Sharing Debugger\n• Test with Twitter Card Validator`,
      ];
    },
  },
  {
    id: "xml-sitemap-generator",
    name: "XML Sitemap Generator",
    description: "Generate XML sitemaps for your website to help search engines discover and index all your pages.",
    metaDescription: "Free XML Sitemap Generator - Create XML sitemaps to help Google discover all your pages. Improve crawling and indexing.",
    category: "seo",
    icon: "🗺️",
    inputLabel: "Enter your website pages (one per line or comma-separated)",
    inputPlaceholder: "e.g., https://example.com, https://example.com/about, https://example.com/blog",
    faqs: [
      { q: "Do I need a sitemap?", a: "Yes! Sitemaps help search engines discover pages, especially for new sites, large sites, or sites with poor internal linking." },
    ],
    generate: (input) => {
      const urls = input.split(/[,\n]/).map(u => u.trim()).filter(Boolean);
      const today = new Date().toISOString().split("T")[0];
      const entries = urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join("\n");
      return [
        `🗺️ XML Sitemap:\n\n<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n\n📌 Save as: sitemap.xml in your root directory\n📌 Add to robots.txt: Sitemap: https://yoursite.com/sitemap.xml\n📌 Submit to Google Search Console`,
      ];
    },
  },

  // ═══════════════════ AI & PRODUCTIVITY TOOLS (NEW CATEGORY) ═══════════════════
  {
    id: "ai-prompt-generator",
    name: "AI Prompt Generator",
    description: "Generate optimized prompts for ChatGPT, Claude, Midjourney, and other AI tools to get better results.",
    metaDescription: "Free AI Prompt Generator - Create optimized prompts for ChatGPT, Claude, and Midjourney. Get better AI outputs instantly.",
    category: "ai-productivity",
    icon: "🧠",
    inputLabel: "What do you want the AI to do?",
    inputPlaceholder: "e.g., write a marketing email for a SaaS product",
    faqs: [
      { q: "What makes a good AI prompt?", a: "Be specific, provide context, define the desired format, give examples, and specify the tone. The more detail, the better the output." },
      { q: "How do I get better results from ChatGPT?", a: "Use role-based prompts ('Act as a...'), provide examples, break complex tasks into steps, and iterate on responses." },
    ],
    generate: (input) => [
      `🧠 ChatGPT Prompt:\n\n"Act as an expert [role] with 10+ years of experience. I need you to ${input}.\n\nContext: [Add your specific context here]\n\nRequirements:\n- Tone: Professional but conversational\n- Length: [Specify word count]\n- Format: [Bullet points / Paragraphs / Table]\n- Include: [Specific elements you want]\n- Avoid: [Things to exclude]\n\nPlease provide 3 variations so I can choose the best one."`,
      `🎨 Midjourney Prompt:\n\n"${input}, professional quality, high detail, [art style], [lighting], [composition], [color palette], 8k resolution --ar 16:9 --v 6"\n\n💡 Prompt tips:\n• Add art style: photorealistic, watercolor, minimalist, cinematic\n• Add lighting: soft lighting, golden hour, dramatic shadows\n• Add mood: vibrant, moody, ethereal, nostalgic`,
      `📝 Claude Prompt:\n\n"I need help with ${input}. Here's what I'm looking for:\n\n1. **Background**: [Explain the context]\n2. **Goal**: [What you want to achieve]\n3. **Audience**: [Who this is for]\n4. **Constraints**: [Any limitations]\n5. **Examples**: [What good output looks like]\n\nPlease think step-by-step and explain your reasoning."`,
    ],
  },
  {
    id: "midjourney-prompt-generator",
    name: "Midjourney Prompt Generator",
    description: "Create detailed Midjourney prompts that generate stunning AI images. Includes styles, lighting, and parameters.",
    metaDescription: "Free Midjourney Prompt Generator - Create detailed image prompts for Midjourney AI. Get stunning results with optimized parameters.",
    category: "ai-productivity",
    icon: "🎨",
    inputLabel: "Describe the image you want to create",
    inputPlaceholder: "e.g., a cozy coffee shop interior with warm lighting",
    faqs: [
      { q: "How do I write good Midjourney prompts?", a: "Describe the subject, add style references, specify lighting and mood, include technical parameters like --ar and --v." },
    ],
    generate: (input) =>
      templates([
        `${input}, photorealistic, cinematic lighting, shot on Canon EOS R5, 85mm lens, shallow depth of field, golden hour, 8k resolution --ar 16:9 --v 6`,
        `${input}, digital illustration, Studio Ghibli style, soft pastel colors, whimsical atmosphere, detailed background, trending on ArtStation --ar 3:2 --v 6`,
        `${input}, minimalist flat design, clean lines, modern aesthetic, muted color palette, white space, vector art style --ar 1:1 --v 6`,
        `${input}, dramatic noir style, high contrast, moody shadows, rain-soaked streets, neon reflections, cyberpunk atmosphere --ar 21:9 --v 6`,
        `${input}, watercolor painting, loose brushstrokes, vibrant colors bleeding together, paper texture, artistic and dreamy --ar 4:5 --v 6`,
      ], input),
  },
  {
    id: "chatgpt-prompt-template-generator",
    name: "ChatGPT Prompt Template Generator",
    description: "Generate reusable ChatGPT prompt templates for business, marketing, coding, and creative writing tasks.",
    metaDescription: "Free ChatGPT Prompt Template Generator - Create reusable prompt templates for any task. Get better AI outputs consistently.",
    category: "ai-productivity",
    icon: "💬",
    inputLabel: "What type of task do you need a template for?",
    inputPlaceholder: "e.g., writing product descriptions for an ecommerce store",
    faqs: [
      { q: "What are prompt templates?", a: "Reusable prompt structures with variables you can fill in. They ensure consistent, high-quality AI outputs for repetitive tasks." },
    ],
    generate: (input) => [
      `📋 PROMPT TEMPLATE: ${input}\n\n---\n🔄 Reusable Template (copy & customize):\n---\n\nAct as an experienced professional specializing in ${input}.\n\nTASK: [Describe the specific task]\n\nCONTEXT:\n- Business/Brand: [Name]\n- Target audience: [Who]\n- Tone of voice: [Professional/Casual/Friendly/Authoritative]\n- Key message: [What to communicate]\n\nINPUT DETAILS:\n- [Variable 1]: [Value]\n- [Variable 2]: [Value]\n- [Variable 3]: [Value]\n\nOUTPUT FORMAT:\n- [Specify format: paragraphs, bullets, table, etc.]\n- Length: [Word count or size]\n- Include: [Specific elements]\n- Exclude: [Things to avoid]\n\nEXAMPLES OF GOOD OUTPUT:\n[Paste 1-2 examples here]\n\nPlease generate 3 options so I can choose the best one.\n\n---\n\n💡 How to use:\n1. Fill in the [brackets] with your info\n2. Add 1-2 examples for better results\n3. Iterate: ask for revisions if needed\n4. Save your best prompts for reuse`,
    ],
  },
  {
    id: "meeting-agenda-generator",
    name: "Meeting Agenda Generator",
    description: "Create structured meeting agendas that keep discussions on track and productive. Save time and improve outcomes.",
    metaDescription: "Free Meeting Agenda Generator - Create structured agendas that keep meetings productive. Templates for standups, reviews, and more.",
    category: "ai-productivity",
    icon: "📅",
    inputLabel: "What's the meeting about?",
    inputPlaceholder: "e.g., quarterly marketing review",
    faqs: [
      { q: "Why are meeting agendas important?", a: "Agendas keep meetings focused, ensure all topics are covered, respect everyone's time, and provide a record of what was discussed." },
    ],
    generate: (input) => [
      `📅 MEETING AGENDA: ${input}\n\nDate: [Date]\nTime: [Start Time] - [End Time]\nLocation: [Room/Zoom Link]\nAttendees: [Names]\n\n---\n\n1. ⏱️ Opening & Check-in (5 min)\n   - Welcome and introductions\n   - Quick wins / good news\n\n2. 📊 ${input} Review (15 min)\n   - Key metrics overview\n   - Progress vs. goals\n   - Highlights and wins\n\n3. 🚧 Challenges & Blockers (10 min)\n   - Current obstacles\n   - Resource needs\n   - Dependencies\n\n4. 💡 Ideas & Opportunities (10 min)\n   - New initiatives related to ${input}\n   - Innovation proposals\n   - Quick brainstorm\n\n5. ✅ Action Items & Next Steps (10 min)\n   - Assign owners and deadlines\n   - Follow-up schedule\n   - Key decisions summary\n\n6. 📝 Wrap-up (5 min)\n   - Parking lot items\n   - Next meeting date\n   - Final questions\n\n---\nTotal estimated time: 55 minutes\nNote-taker: [Name]`,
    ],
  },
  {
    id: "business-plan-outline-generator",
    name: "Business Plan Outline Generator",
    description: "Generate a comprehensive business plan outline for startups, investor pitches, and strategic planning.",
    metaDescription: "Free Business Plan Outline Generator - Create structured business plan outlines for startups and investors. Professional templates.",
    category: "ai-productivity",
    icon: "📊",
    inputLabel: "Describe your business idea",
    inputPlaceholder: "e.g., subscription-based meal prep delivery service",
    faqs: [
      { q: "How long should a business plan be?", a: "A lean business plan is 1-2 pages. A traditional plan is 15-25 pages. Start lean and expand based on audience (investors vs internal)." },
    ],
    generate: (input) => [
      `📊 BUSINESS PLAN OUTLINE: ${input}\n\n1. EXECUTIVE SUMMARY\n   - Business concept: ${input}\n   - Mission statement\n   - Key objectives (Year 1, Year 3)\n   - Funding requirements\n   - Revenue model overview\n\n2. COMPANY DESCRIPTION\n   - Legal structure (LLC, Corp, etc.)\n   - Location\n   - Team & founders\n   - Company history/stage\n\n3. MARKET ANALYSIS\n   - Industry overview & size\n   - Target market demographics\n   - Market trends (2025+)\n   - Competitor analysis (3-5 competitors)\n   - Competitive advantages\n\n4. PRODUCTS & SERVICES\n   - Core offering: ${input}\n   - Features & benefits\n   - Pricing strategy\n   - Product roadmap\n\n5. MARKETING STRATEGY\n   - Customer acquisition channels\n   - Brand positioning\n   - Content & social media strategy\n   - Partnerships & collaborations\n   - Budget allocation\n\n6. OPERATIONS PLAN\n   - Day-to-day operations\n   - Technology stack\n   - Key processes\n   - Suppliers/vendors\n\n7. FINANCIAL PROJECTIONS\n   - Revenue forecast (3 years)\n   - Expense breakdown\n   - Break-even analysis\n   - Cash flow projections\n   - Funding requirements & use of funds\n\n8. APPENDIX\n   - Supporting documents\n   - Market research data\n   - Team resumes`,
    ],
  },
  {
    id: "social-media-calendar-generator",
    name: "Social Media Content Calendar Generator",
    description: "Generate a weekly social media content calendar with post ideas, themes, and optimal posting times.",
    metaDescription: "Free Social Media Calendar Generator - Plan your weekly content with themed post ideas and optimal posting schedules.",
    category: "ai-productivity",
    icon: "🗓️",
    inputLabel: "What's your brand/niche?",
    inputPlaceholder: "e.g., fitness coaching for beginners",
    faqs: [
      { q: "How far in advance should I plan content?", a: "Plan at least 2 weeks ahead. Monthly planning is ideal. Leave room for trending topics and real-time engagement." },
    ],
    generate: (input) => [
      `🗓️ WEEKLY CONTENT CALENDAR: ${input}\n\n📌 MONDAY — Motivation\n• Instagram: Motivational quote + ${input} tip\n• Twitter: "Monday mindset" thread about ${input}\n• Best time: 8-10 AM\n\n📌 TUESDAY — Educational\n• Blog post: "How to [${input} topic]"\n• LinkedIn: Share blog with professional insight\n• TikTok: Quick tutorial clip\n• Best time: 10 AM - 12 PM\n\n📌 WEDNESDAY — Engagement\n• Instagram Stories: Poll/Question about ${input}\n• Twitter: Ask a question to followers\n• Facebook: Community discussion post\n• Best time: 12-2 PM\n\n📌 THURSDAY — Behind the Scenes\n• Instagram Reel: Day in the life of ${input}\n• TikTok: BTS content\n• Stories: Process/workspace tour\n• Best time: 11 AM - 1 PM\n\n📌 FRIDAY — Value Bomb\n• Carousel: "5 ${input} tips for the weekend"\n• Twitter thread: Weekly insights\n• YouTube Short: Quick tip\n• Best time: 9-11 AM\n\n📌 SATURDAY — User/Community\n• Repost user content about ${input}\n• Share a customer story/testimonial\n• Best time: 10 AM - 12 PM\n\n📌 SUNDAY — Reflection/Planning\n• Instagram: Weekly recap\n• Newsletter: Week in review + next week preview\n• Best time: 7-9 PM\n\n💡 Pro tips:\n• Batch create content on one day\n• Use scheduling tools (Buffer, Later, Hootsuite)\n• Repurpose: 1 blog post = 5+ social posts\n• Track what works and double down`,
    ],
  },
  {
    id: "podcast-name-generator",
    name: "Podcast Name Generator",
    description: "Generate catchy, memorable podcast names that attract listeners and rank in podcast directories.",
    metaDescription: "Free Podcast Name Generator - Create catchy podcast names that stand out on Apple Podcasts and Spotify. Memorable and searchable.",
    category: "ai-productivity",
    icon: "🎙️",
    inputLabel: "What is your podcast about?",
    inputPlaceholder: "e.g., entrepreneurship and startup stories",
    faqs: [
      { q: "What makes a good podcast name?", a: "Keep it short, descriptive, easy to spell, and searchable. Include a keyword that tells listeners what to expect." },
    ],
    generate: (input) => {
      const words = input.split(/\s+/).filter(w => w.length > 2);
      const patterns = [
        (w: string) => `The ${w} Show`,
        (w: string) => `${w} Unplugged`,
        (w: string) => `Beyond ${w}`,
        (w: string) => `The ${w} Blueprint`,
        (w: string) => `${w} Unfiltered`,
        (w: string) => `Real Talk: ${w}`,
        (w: string) => `The ${w} Effect`,
        (w: string) => `${w} Deep Dive`,
        (w: string) => `The Daily ${w}`,
        (w: string) => `${w} Matters`,
        (w: string) => `${w} Insider`,
        (w: string) => `Think ${w}`,
      ];
      const results: string[] = [];
      words.forEach(w => {
        const cap = w.charAt(0).toUpperCase() + w.slice(1);
        patterns.forEach(p => results.push(p(cap)));
      });
      return shuffleAndPick(results, 12);
    },
  },
  {
    id: "domain-name-generator",
    name: "Domain Name Generator",
    description: "Generate available, brandable domain names for your website or business. Includes extension suggestions.",
    metaDescription: "Free Domain Name Generator - Find creative, brandable domain names. Get .com, .io, and .co suggestions for your business.",
    category: "ai-productivity",
    icon: "🌐",
    inputLabel: "Enter keywords or your business idea",
    inputPlaceholder: "e.g., organic pet food delivery",
    faqs: [
      { q: "Should I use a .com domain?", a: ".com is still the gold standard for credibility. If unavailable, consider .io (tech), .co (startups), or .app (software)." },
    ],
    generate: (input) => {
      const words = input.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      const extensions = [".com", ".io", ".co", ".app", ".xyz", ".ai"];
      const results: string[] = [];
      // Single word combos
      words.forEach(w => extensions.slice(0, 3).forEach(ext => results.push(w + ext)));
      // Two word combos
      for (let i = 0; i < words.length - 1; i++) {
        results.push(words[i] + words[i + 1] + ".com");
        results.push("get" + words[i] + ".com");
        results.push(words[i] + "hub" + ".com");
        results.push("try" + words[i] + ".io");
        results.push(words[i] + "ly.com");
        results.push("my" + words[i] + ".co");
      }
      return [shuffleAndPick(results, 15).map((d, i) => `${i + 1}. ${d}`).join("\n")];
    },
  },
  {
    id: "apology-email-generator",
    name: "Apology Email Generator",
    description: "Write professional apology emails for business mistakes, service issues, and customer complaints.",
    metaDescription: "Free Apology Email Generator - Write professional apology emails for business mistakes. Maintain trust with proper communication.",
    category: "writing",
    icon: "🙏",
    inputLabel: "What happened that you need to apologize for?",
    inputPlaceholder: "e.g., delayed product shipment to customers",
    faqs: [
      { q: "How should I structure an apology email?", a: "Acknowledge the issue, take responsibility, explain (briefly), describe the fix, and offer compensation if appropriate." },
    ],
    generate: (input) => [
      `Subject: We're Sorry — Here's How We're Making It Right\n\nDear [Customer/Team],\n\nI'm writing to sincerely apologize for ${input}. We understand how frustrating this must be, and we take full responsibility.\n\nWhat happened:\n${input} occurred due to [brief explanation]. This is not the standard we hold ourselves to.\n\nWhat we're doing about it:\n• [Immediate action taken]\n• [Preventive measure for the future]\n• [Timeline for resolution]\n\nTo make it right, we'd like to offer [compensation/discount/extended service].\n\nYour trust means everything to us. If you have any questions or concerns, please don't hesitate to reach out directly at [email/phone].\n\nSincerely,\n[Your Name]\n[Title]`,
    ],
  },
  {
    id: "thank-you-note-generator",
    name: "Thank You Note Generator",
    description: "Generate heartfelt, professional thank you notes for business, personal, and networking occasions.",
    metaDescription: "Free Thank You Note Generator - Create heartfelt thank you messages for business and personal occasions. Professional templates.",
    category: "writing",
    icon: "🙏",
    inputLabel: "What are you thankful for?",
    inputPlaceholder: "e.g., a job interview at Google",
    faqs: [
      { q: "When should I send a thank you note?", a: "Within 24 hours of the event. For job interviews, send the same day. For gifts, within a week." },
    ],
    generate: (input) =>
      templates([
        `Dear [Name],\n\nI wanted to take a moment to express my sincere gratitude for {input}. Your [generosity/time/support] truly means the world to me.\n\n[Specific detail about what meant the most]\n\nI look forward to [next step/future interaction]. Thank you again for everything.\n\nWarmly,\n[Your Name]`,
        `Hi [Name],\n\nJust a quick note to say THANK YOU for {input}! 🙏\n\nIt really made a difference, and I'm truly grateful. [Specific detail about impact].\n\nHoping to return the favor soon!\n\nBest,\n[Your Name]`,
      ], input),
  },
  {
    id: "content-brief-generator",
    name: "Content Brief Generator",
    description: "Create detailed content briefs for writers with SEO guidelines, outlines, and key messaging.",
    metaDescription: "Free Content Brief Generator - Create detailed briefs for content writers. Include SEO guidelines, outlines, and requirements.",
    category: "writing",
    icon: "📑",
    inputLabel: "What's the content topic?",
    inputPlaceholder: "e.g., best CRM software for small businesses",
    faqs: [
      { q: "What should a content brief include?", a: "Target keyword, search intent, audience, outline, word count, tone, competitors to reference, and specific requirements." },
    ],
    generate: (input) => [
      `📑 CONTENT BRIEF: ${input}\n\n📌 OVERVIEW\n• Title: "The Complete Guide to ${input} [2025]"\n• Target keyword: "${input}"\n• Secondary keywords: "best ${input}", "${input} guide", "${input} tips"\n• Word count: 2,000-2,500 words\n• Tone: Professional, helpful, conversational\n• Target audience: [Define audience]\n\n🎯 SEARCH INTENT\n• Intent type: Informational / Commercial\n• What searchers want: [Specific answer/solution]\n• Content format: [Listicle / How-to / Guide / Review]\n\n📋 REQUIRED OUTLINE\n• H1: ${input}\n• H2: What is ${input}?\n• H2: Why ${input} Matters in 2025\n• H2: How to Choose the Best ${input}\n• H2: Top [Number] ${input} Options\n• H2: Tips for Success with ${input}\n• H2: Common Mistakes to Avoid\n• H2: FAQs about ${input}\n\n✅ REQUIREMENTS\n• Include 3-5 internal links\n• Include 2-3 external links to authoritative sources\n• Add at least 1 custom image/infographic\n• Include a comparison table (if applicable)\n• Add FAQ schema for 3+ questions\n• Meta description under 160 characters\n\n🏆 COMPETITORS TO BEAT\n• [URL 1] - note strengths/gaps\n• [URL 2] - note strengths/gaps\n• [URL 3] - note strengths/gaps\n\n📅 DEADLINE: [Date]`,
    ],
  },
];
