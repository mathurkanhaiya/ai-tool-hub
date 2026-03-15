import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const AdsterraBanner728 = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (isMobile || loaded.current || !containerRef.current) return;
    loaded.current = true;

    const conf = document.createElement("script");
    conf.text = `atOptions = { 'key': '7bdd3f39b6a95c6c920533bff0ed950c', 'format': 'iframe', 'height': 90, 'width': 728, 'params': {} };`;
    containerRef.current.appendChild(conf);

    const invoke = document.createElement("script");
    invoke.src = "https://www.highperformanceformat.com/7bdd3f39b6a95c6c920533bff0ed950c/invoke.js";
    invoke.async = true;
    containerRef.current.appendChild(invoke);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="flex justify-center my-6">
      <div ref={containerRef} />
    </div>
  );
};

export default AdsterraBanner728;
