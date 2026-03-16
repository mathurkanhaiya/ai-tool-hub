import { Link } from "react-router-dom";
import type { Tool } from "@/data/tools";
import { ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  youtube: "bg-destructive/10 text-destructive",
  "social-media": "bg-accent/10 text-accent",
  writing: "bg-success/10 text-success",
  marketing: "bg-primary/10 text-primary",
  seo: "bg-muted-foreground/10 text-muted-foreground",
};

const ToolCard = ({ tool }: { tool: Tool }) => (
  <Link
    to={`/tool/${tool.id}`}
    className="group relative block bg-card rounded-xl border p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300 card-shine"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="text-3xl p-2 bg-secondary rounded-lg">{tool.icon}</div>
      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${categoryColors[tool.category] || "bg-secondary text-secondary-foreground"}`}>
        {tool.category.replace("-", " ")}
      </span>
    </div>
    <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors mb-2 text-base">
      {tool.name}
    </h3>
    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{tool.description}</p>
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
      Try it free <ArrowRight className="h-3 w-3" />
    </span>
  </Link>
);

export default ToolCard;
