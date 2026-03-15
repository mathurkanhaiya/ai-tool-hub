import { useEffect, useRef } from "react";

const AdsterraNative = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    const invoke = document.createElement("script");
    invoke.src = "https://pl28920186.effectivegatecpm.com/65f78d2b1d2d5031eeb69949eac0b89f/invoke.js";
    invoke.async = true;
    invoke.setAttribute("data-cfasync", "false");
    containerRef.current.appendChild(invoke);
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div ref={containerRef}>
        <div id="container-65f78d2b1d2d5031eeb69949eac0b89f" />
      </div>
    </div>
  );
};

export default AdsterraNative;
