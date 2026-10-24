import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// SVG with rich branding: A lush sprouted seedling rising from rich soil,
// encircled in an organic emblem with the deep green and gold tones of Soma Annex Planters.
function createIconSvg(size, isMaskable = false) {
  // Safe zone for maskable icon is center 80% (radius 40% of size)
  const padding = isMaskable ? size * 0.22 : size * 0.12;
  const contentSize = size - padding * 2;
  const cx = size / 2;
  const cy = size / 2;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14532d"/>
      <stop offset="50%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#052e16"/>
    </linearGradient>
    <linearGradient id="leafGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#4ade80"/>
    </linearGradient>
    <linearGradient id="leafGradRight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#166534"/>
      <stop offset="50%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#86efac"/>
    </linearGradient>
    <linearGradient id="stemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="100%" stop-color="#4ade80"/>
    </linearGradient>
    <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#854d0e"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${size * 0.02}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${size}" height="${size}" rx="${isMaskable ? 0 : size * 0.22}" fill="url(#bgGrad)"/>

  <!-- Subtle golden border on standard icons -->
  ${isMaskable ? '' : `<rect x="${size * 0.02}" y="${size * 0.02}" width="${size * 0.96}" height="${size * 0.96}" rx="${size * 0.2}" fill="none" stroke="#22c55e" stroke-opacity="0.35" stroke-width="${size * 0.015}"/>`}

  <g transform="translate(${cx}, ${cy})">
    <!-- Inner soft backdrop circle -->
    <circle r="${contentSize * 0.44}" fill="#0f3d23" fill-opacity="0.5"/>
    
    <!-- Soil Mound / Foundation Pot base -->
    <ellipse cx="0" cy="${contentSize * 0.28}" rx="${contentSize * 0.32}" ry="${contentSize * 0.09}" fill="url(#soilGrad)" opacity="0.95"/>
    <ellipse cx="0" cy="${contentSize * 0.28}" rx="${contentSize * 0.26}" ry="${contentSize * 0.055}" fill="#451a03" opacity="0.5"/>

    <!-- Seedling Stem -->
    <path d="M 0,${contentSize * 0.27} C -${contentSize * 0.04},${contentSize * 0.08} -${contentSize * 0.02},-${contentSize * 0.08} 0,-${contentSize * 0.18}" 
          stroke="url(#stemGrad)" stroke-width="${contentSize * 0.055}" stroke-linecap="round" fill="none"/>

    <!-- Left Leaf (Flourishing Seedling) -->
    <path d="M -${contentSize * 0.015},${contentSize * 0.04} 
             C -${contentSize * 0.22},${contentSize * 0.04} -${contentSize * 0.34},-${contentSize * 0.15} -${contentSize * 0.32},-${contentSize * 0.26}
             C -${contentSize * 0.16},-${contentSize * 0.28} -${contentSize * 0.02},-${contentSize * 0.14} -${contentSize * 0.01},-${contentSize * 0.02} Z"
          fill="url(#leafGradLeft)" filter="url(#softGlow)"/>
    
    <!-- Leaf Spine Left -->
    <path d="M -${contentSize * 0.015},${contentSize * 0.04} C -${contentSize * 0.14},-${contentSize * 0.08} -${contentSize * 0.26},-${contentSize * 0.18} -${contentSize * 0.32},-${contentSize * 0.26}"
          stroke="#86efac" stroke-width="${contentSize * 0.015}" stroke-linecap="round" fill="none" opacity="0.8"/>

    <!-- Right Leaf (Sunlit Leaf) -->
    <path d="M 0,-${contentSize * 0.06} 
             C ${contentSize * 0.2},-${contentSize * 0.08} ${contentSize * 0.32},-${contentSize * 0.26} ${contentSize * 0.28},-${contentSize * 0.38}
             C ${contentSize * 0.12},-${contentSize * 0.37} 0,-${contentSize * 0.22} 0,-${contentSize * 0.06} Z"
          fill="url(#leafGradRight)"/>

    <!-- Leaf Spine Right -->
    <path d="M 0,-${contentSize * 0.06} C ${contentSize * 0.12},-${contentSize * 0.18} ${contentSize * 0.2},-${contentSize * 0.28} ${contentSize * 0.28},-${contentSize * 0.38}"
          stroke="#bbf7d0" stroke-width="${contentSize * 0.015}" stroke-linecap="round" fill="none" opacity="0.85"/>

    <!-- Small emerging top shoot sprout -->
    <path d="M 0,-${contentSize * 0.18} C ${contentSize * 0.04},-${contentSize * 0.28} ${contentSize * 0.02},-${contentSize * 0.36} 0,-${contentSize * 0.42} C -${contentSize * 0.03},-${contentSize * 0.35} -${contentSize * 0.02},-${contentSize * 0.25} 0,-${contentSize * 0.18} Z"
          fill="#86efac"/>
  </g>
</svg>
`;
}

async function run() {
  console.log('Generating PWA icons...');

  // 1. pwa-192x192.png
  const svg192 = Buffer.from(createIconSvg(192, false));
  await sharp(svg192).png().toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Created pwa-192x192.png');

  // 2. pwa-512x512.png
  const svg512 = Buffer.from(createIconSvg(512, false));
  await sharp(svg512).png().toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Created pwa-512x512.png');

  // 3. pwa-maskable-512x512.png (maskable safe zone)
  const svgMaskable = Buffer.from(createIconSvg(512, true));
  await sharp(svgMaskable).png().toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Created pwa-maskable-512x512.png');

  // 4. apple-touch-icon.png (180x180)
  const svgApple = Buffer.from(createIconSvg(180, false));
  await sharp(svgApple).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // 5. favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), createIconSvg(64, false));
  console.log('Created favicon.svg');

  // 6. favicon.ico (64x64 PNG inside standard ico or 48x48)
  const svg64 = Buffer.from(createIconSvg(64, false));
  await sharp(svg64).png().toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created favicon.ico');

  console.log('All icons generated successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
