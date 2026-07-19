import sharp from "sharp";

const W = 1200;
const H = 630;
const out = "assets/images/brand/evo-og-share.jpg";

const hero = await sharp("assets/images/hero/hero-social-marketing-1080.webp")
  .resize(W, H, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.55, saturation: 0.85 })
  .toBuffer();

const overlay = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1430" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#0b0a12" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="72" y="150" width="620" height="330" rx="28" fill="#ffffff" fill-opacity="0.95"/>
  <text x="100" y="240" font-family="Arial, sans-serif" font-size="44" font-weight="800" fill="#121018" letter-spacing="3">EVO DIGITAL</text>
  <text x="100" y="310" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#5a3d82">Digital marketing agency</text>
  <text x="100" y="360" font-family="Arial, sans-serif" font-size="28" font-weight="600" fill="#35c3ba">Performance rebuild demo</text>
  <text x="100" y="430" font-family="Arial, sans-serif" font-size="22" fill="#5a5668">vuichovanio1.github.io/evodigital</text>
</svg>`);

const logo = await sharp("assets/images/brand/logo-evodigital.png")
  .resize({ width: 150 })
  .toBuffer();

await sharp(hero)
  .composite([
    { input: overlay },
    { input: logo, top: 175, left: 520 },
  ])
  .jpeg({ quality: 86, progressive: true, mozjpeg: true })
  .toFile(out);

const meta = await sharp(out).metadata();
console.log("wrote", out, meta.width, "x", meta.height, meta.size, "bytes");
