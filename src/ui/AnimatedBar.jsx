import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";


const AnimatedBar = ({ level, color, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) setTimeout(() => setWidth(level), delay);
  }, [inView, level, delay]);
  return (
     <div ref={ref} className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width:      `${width}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow:  `0 0 8px ${color}66`,
        }}
      />
    </div>
  )
}

export default AnimatedBar