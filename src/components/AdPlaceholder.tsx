interface AdPlaceholderProps {
  type: "banner" | "sidebar" | "in-content" | "sticky-mobile";
}

const sizes: Record<string, string> = {
  banner: "w-full h-24",
  sidebar: "w-full h-64",
  "in-content": "w-full h-20 my-6",
  "sticky-mobile": "fixed bottom-0 left-0 right-0 h-14 md:hidden z-40",
};

const AdPlaceholder = ({ type }: AdPlaceholderProps) => (
  <div className={`ad-placeholder ${sizes[type]}`}>
    <span className="text-xs">Ad Space — {type}</span>
  </div>
);

export default AdPlaceholder;
