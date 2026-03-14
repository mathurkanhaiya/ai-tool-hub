import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="bg-header text-header-foreground sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
          🤖 Free AI Tools Hub
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-header-foreground/80 hover:text-header-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-header-foreground/10 pb-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-header-foreground/80 hover:text-header-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
