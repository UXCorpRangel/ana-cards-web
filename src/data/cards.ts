import { CardCategory, type AnaCard } from '@contracts';

const DUMMY_DESCRIPTION =
  'Larga descripcion de la tarjeta, con detalles y todo lo que se nos ocurra. Siempre y cuando no se salga del contenedor que la contiene. Esta descripcion complementará la imagen de la tarjeta siempre buscando sacar sonrisas a los usuarios.';

const IMAGES = [
  'dummy-1.webp',
  'dummy-2.webp',
  'dummy-3.webp',
  'dummy-4.webp',
  'dummy-5.webp',
  'dummy-6.webp',
  'dummy-7.webp'
];

const CATEGORIES: CardCategory[] = [
  CardCategory.DESIGN,
  CardCategory.DEVELOPMENT,
  CardCategory.HARLEY,
  CardCategory.LORE,
  CardCategory.TOOLS,
  CardCategory.TROLL,
  CardCategory.SPECIAL
];

function randomize(max: number): number {
  return ~~(Math.random() * max);
}

export const cards: AnaCard[] = [
  {
    id: 1,
    name: 'Increible Titulo #1',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-1.webp',
    category: CardCategory.DEVELOPMENT,
    level: 1
  },
  {
    id: 2,
    name: 'Increible Titulo #2',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-2.webp',
    category: CardCategory.DESIGN,
    level: 2
  },
  {
    id: 3,
    name: 'Increible Titulo #3',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-3.webp',
    category: CardCategory.HARLEY,
    level: 3
  },
  {
    id: 4,
    name: 'Increible Titulo #4',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-4.webp',
    category: CardCategory.LORE,
    level: 4
  },
  {
    id: 6,
    name: 'Increible Titulo #5',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-5.webp',
    category: CardCategory.TROLL,
    level: 5
  },
  {
    id: 5,
    name: 'Increible Titulo #6',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-6.webp',
    category: CardCategory.TOOLS,
    level: 6
  },
  {
    id: 7,
    name: 'Increible Titulo #7',
    description: DUMMY_DESCRIPTION,
    image: 'dummy-7.webp',
    category: CardCategory.SPECIAL,
    level: 50
  }
];

for (let i = 8; i <= 103; i++) {
  cards.push({
    id: i,
    name: `Increible Titulo #${i}`,
    description: DUMMY_DESCRIPTION,
    image: IMAGES[randomize(IMAGES.length)],
    category: CATEGORIES[randomize(CATEGORIES.length)],
    level: randomize(5) + 1
  });
}
