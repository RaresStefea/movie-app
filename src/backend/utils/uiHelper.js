export function formatRating(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return "";
  return num.toFixed(1);
}

export function ariaLabelForCard({ title, genre, rating }) {
  const r = formatRating(rating);
  const g = genre ? `, ${genre}` : "";
  const rv = r ? `, rating ${r}` : "";
  return `${title}${g}${rv}`;
}

export function isActivationKey(e) {
  return e.key === "Enter" || e.key === " ";
}

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}
