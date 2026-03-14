import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-header text-header-foreground/70 mt-16">
    <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-header-foreground font-bold text-lg mb-3">🤖 Free AI Tools Hub</h3>
        <p className="text-sm leading-relaxed">100+ free AI tools for creators, marketers, and YouTubers. No signup required.</p>
      </div>
      <div>
        <h4 className="text-header-foreground font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-header-foreground transition-colors">Home</Link></li>
          <li><Link to="/tools" className="hover:text-header-foreground transition-colors">All Tools</Link></li>
          <li><Link to="/blog" className="hover:text-header-foreground transition-colors">Blog</Link></li>
          <li><Link to="/about" className="hover:text-header-foreground transition-colors">About Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-header-foreground font-semibold mb-3">Popular Tools</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/tool/youtube-title-generator" className="hover:text-header-foreground transition-colors">YouTube Title Generator</Link></li>
          <li><Link to="/tool/instagram-caption-generator" className="hover:text-header-foreground transition-colors">Instagram Caption Generator</Link></li>
          <li><Link to="/tool/blog-title-generator" className="hover:text-header-foreground transition-colors">Blog Title Generator</Link></li>
          <li><Link to="/tool/hashtag-generator" className="hover:text-header-foreground transition-colors">Hashtag Generator</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-header-foreground font-semibold mb-3">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/privacy-policy" className="hover:text-header-foreground transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-header-foreground transition-colors">Terms & Conditions</Link></li>
          <li><Link to="/contact" className="hover:text-header-foreground transition-colors">Contact</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-header-foreground/10 py-6 text-center text-sm">
      © {new Date().getFullYear()} Free AI Tools Hub. All rights reserved.
    </div>
  </footer>
);

export default SiteFooter;
