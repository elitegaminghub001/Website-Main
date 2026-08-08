const createPosterDataUri = (
  title: string,
  subtitle = "Elite Gaming Hub",
  from = "#0f172a",
  to = "#22d3ee",
  accent = "#f8fafc"
) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)"/>
      <circle cx="1020" cy="130" r="180" fill="rgba(255,255,255,0.08)"/>
      <circle cx="230" cy="620" r="220" fill="rgba(255,255,255,0.06)"/>
      <rect x="110" y="120" width="980" height="560" rx="42" fill="rgba(2,6,23,0.30)" stroke="rgba(255,255,255,0.22)"/>
      <text x="600" y="390" text-anchor="middle" font-size="84" font-weight="700" font-family="Arial, Helvetica, sans-serif" fill="${accent}">${title}</text>
      <text x="600" y="470" text-anchor="middle" font-size="30" font-family="Arial, Helvetica, sans-serif" fill="rgba(255,255,255,0.8)">${subtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const heroArt = createPosterDataUri(
  "Elite Gaming Hub",
  "Play. Compete. Win.",
  "#020617",
  "#0ea5e9"
);

export const aboutArt = createPosterDataUri(
  "About Us",
  "Premium PS5 Gaming Cafe",
  "#0f172a",
  "#0ea5e9"
);

export const featuredGameArt = {
  tekken8: createPosterDataUri("Tekken 8", "Fighting", "#111827", "#0ea5e9"),
  fc26: createPosterDataUri("EA FC 26", "Sports", "#0f172a", "#22d3ee"),
  gta6: createPosterDataUri("GTA VI", "Action", "#111827", "#f59e0b"),
  spiderman2: createPosterDataUri("Spider-Man 2", "Adventure", "#111827", "#ef4444"),
  gt7: createPosterDataUri("Gran Turismo 7", "Racing", "#020617", "#06b6d4"),
  gow: createPosterDataUri("God of War", "Action", "#111827", "#f97316"),
  cricket26: createPosterDataUri("Cricket 26", "Sports", "#0f172a", "#16a34a"),
};

export const galleryArt = [
  createPosterDataUri("Elite Arena", "PS5 & Racing Lounge", "#0f172a", "#0ea5e9"),
  createPosterDataUri("Elite Arena", "PS5 & Racing Lounge", "#111827", "#22d3ee"),
  createPosterDataUri("Elite Arena", "PS5 & Racing Lounge", "#020617", "#14b8a6"),
  createPosterDataUri("Elite Arena", "PS5 & Racing Lounge", "#111827", "#7c3aed"),
  createPosterDataUri("Elite Arena", "PS5 & Racing Lounge", "#0b1120", "#06b6d4"),
  createPosterDataUri("Elite Arena", "PS5 & Racing Lounge", "#0f172a", "#f97316"),
  createPosterDataUri("Tournament Night", "Community Events", "#0f172a", "#22d3ee"),
  createPosterDataUri("Competitive Gaming", "Live Battle Arena", "#111827", "#38bdf8"),
  createPosterDataUri("Tournament Setup", "High Energy Esports", "#0b1120", "#14b8a6"),
  createPosterDataUri("Championship", "Elite Finals", "#111827", "#c026d3"),
  createPosterDataUri("Pro Stage", "Big Screen Action", "#0f172a", "#f59e0b"),
  createPosterDataUri("Team Matchup", "Gameplay Showcase", "#020617", "#22d3ee"),
];
