const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..', 'public');
const directories = ['gallery', 'games', 'images'];
for (const dir of directories) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const makeSvg = (title, subtitle = '', bg1 = '#0f172a', bg2 = '#22d3ee', accent = '#f8fafc') => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <circle cx="1020" cy="130" r="180" fill="rgba(255,255,255,0.08)"/>
  <circle cx="230" cy="620" r="220" fill="rgba(255,255,255,0.06)"/>
  <rect x="110" y="120" width="980" height="560" rx="42" fill="rgba(2,6,23,0.30)" stroke="rgba(255,255,255,0.22)"/>
  <text x="600" y="390" text-anchor="middle" font-size="86" font-weight="700" font-family="Arial, Helvetica, sans-serif" fill="${accent}">${escapeXml(title)}</text>
  <text x="600" y="470" text-anchor="middle" font-size="32" font-family="Arial, Helvetica, sans-serif" fill="rgba(255,255,255,0.8)">${escapeXml(subtitle)}</text>
</svg>`;

const files = [
  ['gallery/1.jpg', 'Elite Arena', 'PS5 & Racing Lounge', '#0f172a', '#0ea5e9'],
  ['gallery/2.jpg', 'Elite Arena', 'PS5 & Racing Lounge', '#111827', '#22d3ee'],
  ['gallery/3.jpg', 'Elite Arena', 'PS5 & Racing Lounge', '#020617', '#14b8a6'],
  ['gallery/4.jpg', 'Elite Arena', 'PS5 & Racing Lounge', '#111827', '#7c3aed'],
  ['gallery/5.jpg', 'Elite Arena', 'PS5 & Racing Lounge', '#0b1120', '#06b6d4'],
  ['gallery/6.jpg', 'Elite Arena', 'PS5 & Racing Lounge', '#0f172a', '#f97316'],
  ['gallery/tournament-1.jpg', 'Tournament Night', 'Community Events', '#0f172a', '#22d3ee'],
  ['gallery/tournament-2.jpg', 'Competitive Gaming', 'Live Battle Arena', '#111827', '#38bdf8'],
  ['gallery/tournament-3.jpg', 'Tournament Setup', 'High Energy Esports', '#0b1120', '#14b8a6'],
  ['gallery/tournament-4.jpg', 'Championship', 'Elite Finals', '#111827', '#c026d3'],
  ['gallery/tournament-5.jpg', 'Pro Stage', 'Big Screen Action', '#0f172a', '#f59e0b'],
  ['gallery/tournament-6.jpg', 'Team Matchup', 'Gameplay Showcase', '#020617', '#22d3ee'],
  ['games/tekken8.jpg', 'Tekken 8', 'Fighting', '#111827', '#0ea5e9'],
  ['games/fc26.jpg', 'EA FC 26', 'Sports', '#0f172a', '#22d3ee'],
  ['games/gta6.jpg', 'GTA VI', 'Action', '#111827', '#f59e0b'],
  ['games/spiderman2.jpg', 'Spider-Man 2', 'Adventure', '#111827', '#ef4444'],
  ['games/gt7.jpg', 'Gran Turismo 7', 'Racing', '#020617', '#06b6d4'],
  ['games/gow.jpg', 'God of War', 'Action', '#111827', '#f97316'],
  ['games/cricket26.jpg', 'Cricket 26', 'Sports', '#0f172a', '#16a34a'],
  ['images/about.jpg', 'About Us', 'Elite Gaming Hub', '#0f172a', '#0ea5e9'],
  ['images/hero.jpg', 'Elite Gaming Hub', 'Play. Compete. Win.', '#020617', '#0ea5e9'],
  ['og-image.jpg', 'Elite Gaming Hub', 'Gaming Cafe in Ahmedabad', '#0f172a', '#22d3ee'],
];

(async () => {
  for (const [relativePath, title, subtitle, bg1, bg2] of files) {
    const svg = Buffer.from(makeSvg(title, subtitle, bg1, bg2));
    const target = path.join(root, relativePath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await sharp(svg).jpeg({ quality: 92 }).toFile(target);
  }

  const faviconSvg = Buffer.from(makeSvg('EGH', 'Gaming Hub', '#020617', '#22d3ee'));
  const faviconPng = await sharp(faviconSvg).resize(64, 64).png().toBuffer();
  const appleIcon = await sharp(faviconSvg).resize(180, 180).png({ quality: 90 }).toBuffer();

  fs.writeFileSync(path.join(root, 'favicon.ico'), faviconPng);
  fs.writeFileSync(path.join(root, 'favicon.png'), faviconPng);
  fs.writeFileSync(path.join(root, 'apple-touch-icon.png'), appleIcon);

  console.log(`Generated ${files.length + 3} asset files in ${root}`);
})().catch((error) => {
  console.error('Asset generation failed:', error);
  process.exit(1);
});
