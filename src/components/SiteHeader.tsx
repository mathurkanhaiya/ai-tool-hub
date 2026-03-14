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
    <header className="bg-header text-header-foreground sticky top-0 z-50 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-display text-xl font-bold tracking-tight"
        >
          <img
            src="https://i.ibb.co/Y4GzrkLh/C921394-F-ABA8-4-C2-C-A4-C0-7321-E9-E46-BDC.png"
            alt="Viral AI Tools Logo"
            className="h-10 w-10 rounded-md object-contain"
          />
          <span>Free AI Tools Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-header-foreground/80 hover:text-header-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden border-t border-white/10 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-header-foreground/80 hover:text-header-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;