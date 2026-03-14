import { useEffect, useRef } from "react";

const AdsterraBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    const conf = document.createElement("script");
    conf.text = `atOptions = { 'key': 'dfed6521baaacf121ac15c5303ba19b8', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} };`;
    containerRef.current.appendChild(conf);

    const invoke = document.createElement("script");
    invoke.src = "https://www.highperformanceformat.com/dfed6521baaacf121ac15c5303ba19b8/invoke.js";
    invoke.async = true;
    containerRef.current.appendChild(invoke);
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div ref={containerRef} />
    </div>
  );
};

export default AdsterraBanner;
