/** Categorías de las cartas */
export enum CardCategory {
  /** Categoría de diseño */
  DESIGN = 'design',
  /** Categoría de desarrollo */
  DEVELOPMENT = 'dev',
  /** Categoría de Harley */
  HARLEY = 'harley',
  /** Categoría de lore */
  LORE = 'lore',
  /** Categoría de troll */
  TROLL = 'troll',
  /** Categoría de herramientas */
  TOOLS = 'tools',
  /** Categoría especial */
  SPECIAL = 'special'
}

/** Mapa de categorías de las cartas */
type CategoryMap = Record<CardCategory, string>;

/** Etiquetas de las categorías de las cartas */
export const cardCategoryLabels: CategoryMap = {
  [CardCategory.DESIGN]: 'Design',
  [CardCategory.DEVELOPMENT]: 'Development',
  [CardCategory.HARLEY]: 'Harley',
  [CardCategory.LORE]: 'Lore',
  [CardCategory.TROLL]: 'Troll',
  [CardCategory.TOOLS]: 'Tools',
  [CardCategory.SPECIAL]: 'Special'
};

/** Colores de las categorías de las cartas */
export const cardCategoryColors: CategoryMap = {
  [CardCategory.DESIGN]: 'var(--design-color)',
  [CardCategory.DEVELOPMENT]: 'var(--development-color)',
  [CardCategory.HARLEY]: 'var(--harley-color)',
  [CardCategory.LORE]: 'var(--lore-color)',
  [CardCategory.TROLL]: 'var(--troll-color)',
  [CardCategory.TOOLS]: 'var(--tools-color)',
  [CardCategory.SPECIAL]:
    'linear-gradient(153deg, var(--design-color) 0%, var(--harley-color) 20%, var(--development-color) 41.86%, var(--lore-color) 59.84%, var(--troll-color) 75.37%, var(--tools-color) 100%)'
};
