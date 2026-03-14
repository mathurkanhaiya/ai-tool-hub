import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileAdsterraBanner = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!isMobile || loaded.current || !containerRef.current) return;
    loaded.current = true;

    const conf = document.createElement("script");
    conf.text = `atOptions = { 'key': 'f9a2b3df8309360edfa657a6f9d71267', 'format': 'iframe', 'height': 50, 'width': 320, 'params': {} };`;
    containerRef.current.appendChild(conf);

    const invoke = document.createElement("script");
    invoke.src = "https://www.highperformanceformat.com/f9a2b3df8309360edfa657a6f9d71267/invoke.js";
    invoke.async = true;
    containerRef.current.appendChild(invoke);
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div className="flex justify-center my-4">
      <div ref={containerRef} />
    </div>
  );
};

export default MobileAdsterraBanner;
