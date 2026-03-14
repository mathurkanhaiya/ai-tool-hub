import { Link } from "react-router-dom";
import type { Tool } from "@/data/tools";

const ToolCard = ({ tool }: { tool: Tool }) => (
  <Link
    to={`/tool/${tool.id}`}
    className="group block bg-card rounded-lg border p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
  >
    <div className="text-3xl mb-3">{tool.icon}</div>
    <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors mb-1">
      {tool.name}
    </h3>
    <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
  </Link>
);

export default ToolCard;
