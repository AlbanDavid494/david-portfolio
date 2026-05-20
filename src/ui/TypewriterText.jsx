import { useTypewriter } from "../hooks/useTypewriter";


const TypewriterText = ({ texts}) => {
  const displayed = useTypewriter(texts);

  return (
    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #22d3ee)" }}>
      {displayed}<span className="animate-pulse">|</span>
    </span>
  )
}

export default TypewriterText