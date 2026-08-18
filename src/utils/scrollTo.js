/**
 * Smoothly scrolls to a section by its id.
 * Nav links display capitalized labels ("About") but section ids
 * are lowercase ("about"), so we normalize before looking it up.
 */
export const scrollTo = (id) => {
  const element = document.getElementById(id.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
