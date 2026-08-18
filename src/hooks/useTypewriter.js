import { useEffect, useState } from "react";

export function useTypewriter(texts, typeSpeed = 80, deleteSpeed = 40, pauseMs = 2000) {
  const [idx, setIdx]           = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIdx((idx + 1) % texts.length);
      }, typeSpeed);
      return () => clearTimeout(t);
    }
  }, [displayed, deleting, idx, texts, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
