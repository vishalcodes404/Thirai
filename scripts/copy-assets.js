const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Visha\\.gemini\\antigravity-ide\\brain\\c201e2af-6a5c-4063-bab4-bb223d311aaf';
const projectRoot = path.resolve(__dirname, '..');

const mappings = [
  ['hero_wedding_1790447890073.jpg', 'public/images/hero-wedding.jpg'],
  ['bride_portrait_1790447902015.jpg', 'public/images/gallery/bride-portrait.jpg'],
  ['wedding_ceremony_1790447914169.jpg', 'public/images/gallery/wedding-ceremony.jpg'],
  ['couple_udaipur_1790447936850.jpg', 'public/images/weddings/udaipur.jpg'],
  ['monsoon_wedding_1790447947246.jpg', 'public/images/weddings/monsoon.jpg'],
  ['goa_wedding_1790447957735.jpg', 'public/images/weddings/goa.jpg'],
  ['intimate_celebration_1790447982085.jpg', 'public/images/weddings/intimate.jpg'],
  ['photographer_portrait_1790447995577.jpg', 'public/images/team/photographer.jpg'],
  ['gallery_mehndi_1790448007215.jpg', 'public/images/gallery/mehndi.jpg'],
  ['gallery_sangeet_1790448030362.jpg', 'public/images/gallery/sangeet.jpg'],
  ['gallery_decor_1790448041529.jpg', 'public/images/gallery/decor.jpg'],
  ['film_thumbnail_1790448053868.jpg', 'public/images/films/film-thumbnail.jpg']
];

for (const [src, dest] of mappings) {
  const srcPath = path.join(brainDir, src);
  const destPath = path.join(projectRoot, dest);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  console.log('Copied ' + src + ' -> ' + dest);
}
console.log('Successfully copied all 12 photography images to public/images/');
