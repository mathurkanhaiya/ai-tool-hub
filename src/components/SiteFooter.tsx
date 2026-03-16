import { Link } from "react-router-dom";
import { tools } from "@/data/tools";

const SiteFooter = () => {
  const popularTools = tools.slice(0, 6);
  
  return (
    <footer className="bg-header text-header-foreground/70">
      <div className="container py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="https://i.ibb.co/Y4GzrkLh/C921394-F-ABA8-4-C2-C-A4-C0-7321-E9-E46-BDC.png" alt="Logo" className="h-9 w-9 rounded-lg object-contain" />
            <h3 className="text-header-foreground font-bold text-lg">Free AI Tools Hub</h3>
          </div>
          <p className="text-sm leading-relaxed mb-4">{tools.length}+ free AI tools for creators, marketers, and YouTubers. No signup required.</p>
          <p className="text-xs text-header-foreground/40">Trusted by 50,000+ creators worldwide</p>
        </div>
        <div>
          <h4 className="text-header-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-header-foreground transition-colors">Home</Link></li>
            <li><Link to="/tools" className="hover:text-header-foreground transition-colors">All Tools</Link></li>
            <li><Link to="/blog" className="hover:text-header-foreground transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-header-foreground transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-header-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Popular Tools</h4>
          <ul className="space-y-2.5 text-sm">
            {popularTools.map((t) => (
              <li key={t.id}>
                <Link to={`/tool/${t.id}`} className="hover:text-header-foreground transition-colors">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-header-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-header-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-header-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-header-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-header-foreground/10 py-6 text-center text-xs text-header-foreground/40">
        © {new Date().getFullYear()} Free AI Tools Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
