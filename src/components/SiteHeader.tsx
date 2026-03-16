import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/tools", label: "Tools" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-header text-header-foreground sticky top-0 z-50 border-b border-header-foreground/10 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
        >
          <img
            src="https://i.ibb.co/Y4GzrkLh/C921394-F-ABA8-4-C2-C-A4-C0-7321-E9-E46-BDC.png"
            alt="Viral AI Tools Logo"
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span>Free AI Tools Hub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-header-foreground/70 hover:text-header-foreground hover:bg-header-foreground/5 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/tools"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Sparkles className="h-3.5 w-3.5" /> Try Free
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-header-foreground/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-header-foreground/10 pb-4 bg-header">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-header-foreground/80 hover:text-header-foreground hover:bg-header-foreground/5"
            >
              {l.label}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <Link
              to="/tools"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg"
            >
              <Sparkles className="h-3.5 w-3.5" /> Try Free
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
