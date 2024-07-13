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
  TOOLS = 'tools'
}

/** Mapa de categorías de las cartas */
type CategoryMap = Record<CardCategory, string>;

/** Etiquetas de las categorías de las cartas */
export const cardCategoryLabels: CategoryMap = {
  [CardCategory.DESIGN]: 'Diseño',
  [CardCategory.DEVELOPMENT]: 'Desarrollo',
  [CardCategory.HARLEY]: 'Harley',
  [CardCategory.LORE]: 'Lore',
  [CardCategory.TROLL]: 'Troll',
  [CardCategory.TOOLS]: 'Herramientas'
};

/** Colores de las categorías de las cartas */
export const cardCategoryColors: CategoryMap = {
  [CardCategory.DESIGN]: 'var(--design-color)',
  [CardCategory.DEVELOPMENT]: 'var(--development-color)',
  [CardCategory.HARLEY]: 'var(--harley-color)',
  [CardCategory.LORE]: 'var(--lore-color)',
  [CardCategory.TROLL]: 'var(--troll-color)',
  [CardCategory.TOOLS]: 'var(--tools-color)'
};
