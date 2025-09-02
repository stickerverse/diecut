
import { Material, StickerShape, StickerSize, QuantityOption, FaqItem, GalleryImage, OtherProduct } from './types';

export const shapes: StickerShape[] = [
  { name: 'Contour Cut', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_contourcut.svg' },
  { name: 'Square', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_square.svg' },
  { name: 'Circle', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_circle.svg' },
  { name: 'Rounded Corners', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_round-corners.svg' },
];

export const materials: Material[] = [
  { name: 'Vinyl', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/06/08/4d0ae46e9e164daa9171d70e51cd46c7acaa2419.png' },
  { name: 'Holographic', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/48e2c5c8c6ab57d013675b3b245daa2136e0c7cf.png' },
  { name: 'Transparent', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/2d46e2873ec899b83a152c2f2ad52c1368398333.png' },
  { name: 'Glitter', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/8d48777356c014861f8e174949f2a382778c0a7e.png' },
  { name: 'Mirror', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/c5e0f009dbf3aec33b2e8d0caac5ebcd1a10348f.png' },
  { name: 'Pixie Dust', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/08/23/46dac2bd418951b1412d4225cbdaad579aed03e4.png' },
  { name: 'Prismatic', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/0912457c4dccf212c92e0802fd36545d90f2bfd6.png' },
];

export const finishes: string[] = ['Glossy', 'Matte', 'Cracked Ice'];

export const sizes: StickerSize[] = [
  { name: '2" x 2"' },
  { name: '3" x 3"' },
  { name: '4" x 4"' },
  { name: '5" x 5"' },
  { name: '6" x 6"' },
];

export const quantities: QuantityOption[] = [
  { amount: 55, price: 26 },
  { amount: 100, price: 47 },
  { amount: 200, price: 64, discount: 32 },
  { amount: 300, price: 96, discount: 32 },
  { amount: 500, price: 114, discount: 52 },
  { amount: 600, price: 136, discount: 52 },
  { amount: 900, price: 175, discount: 59 },
  { amount: 1200, price: 201, discount: 65 },
];

export const galleryImages: GalleryImage[] = [
    { src: 'https://stickerapp.com/media/2000x2000/cb074be4de/pixiedust-stickers-howdy-2000x2000.png/m/2400x0/filters:quality(60)', alt: 'Howdy sticker with pixie dust effect' },
    { src: 'https://stickerapp.com/media/2000x1600/d800bf7ff2/sushi-bot-vinyl-paiheme-social-4-5-2000x1600.png/m/2400x0/filters:quality(60)', alt: 'A hand holding a vinyl sticker of an astronaut eating ramen' },
    { src: 'https://stickerapp.com/media/2000x1600/f851506b47/die-cut-clear-sticker-dealwithit-2000x1600.jpg/m/2400x0/filters:quality(60)', alt: 'Transparent die cut sticker of a masked person' },
    { src: 'https://stickerapp.com/media/2000x1600/ec4957fdd8/die-cut-pixie-sticker-girl-2000x1600.jpg/m/1200x0/filters:quality(60)', alt: 'Die cut Sticker of a woman with red afro' },
    { src: 'https://stickerapp.com/media/2001x1600/d124ba2dfa/die-cut-vinyl-sticker-head-2000x1600.jpg/m/1200x0/filters:quality(60)', alt: 'Stack of die cut stickers featuring a stylized human head' },
];

export const faqs: FaqItem[] = [
    { question: 'How do I set up my file for custom stickers?', answer: 'Upload your design and leave a comment indicating cutlines, or use design software like Adobe Illustrator to set cutlines. Our team will optimize your files for printing.' },
    { question: 'How to make your own cutlines?', answer: 'Open your artwork in Adobe Illustrator, create your path for the cutline, and make a new swatch named "die cut" with the spot color set to 100% magenta for the cutline. Include 2 mm bleed and a 2 mm margin between the cut line and important elements in the design.' },
    { question: 'What is the difference between Die Cut and Kiss Cut stickers?', answer: 'Die-cut stickers are cut through both the vinyl and the backing, matching the exact shape of your design, while kiss-cut stickers are only cut through the sticker layer, leaving a backing for easier handling.' },
    { question: 'Can I mix different materials in the same sticker design?', answer: 'Currently, we print each sticker design on a single material. This means that mixing different materials within the same sticker design is not possible.' },
];

export const otherProducts: OtherProduct[] = [
    { category: 'Back Paper Print', name: 'Paper with a purpose', description: 'Add text and designs to the back paper of your sticker.', image: 'https://stickerapp.com/media/768x512/51c667c59b/bpp-backpaper-diecut-vinyl-single-in-hand-triangle-busy-bg-768x512.png/m/1200x0/filters:quality(60)' },
    { category: 'Kiss Cut', name: 'Extra padding', description: 'Easy peel stickers with larger back paper.', image: 'https://stickerapp.com/media/750x750/6f054177a6/kiss-cut-materials-several-stacked-logos-black-bg-750x750.jpg/m/1200x0/filters:quality(60)' },
    { category: 'Sticker Sheets', name: 'Customize the whole sheet', description: 'Multiple designs on one sheet.', image: 'https://stickerapp.com/media/750x750/737799028b/sticker-sheets-several-stacked-materials-black-bg-750x750.jpg/m/1200x0/filters:quality(60)' },
];
