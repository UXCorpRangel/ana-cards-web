import type { CardCategory } from './card-category.type';

/** Definición del tipo de las cartas */
export type AnaCard = {
  /** Identificador de la carta. Representa el número de carta. */
  id: number;

  /** Nombre de la carta */
  name: string;

  /** Descripción de la carta */
  description: string;

  /** Nombre de la imagen de la carta */
  image: string;

  /** Categoría de la carta */
  category: CardCategory;

  /** Nivel de la carta. Por defecto es `1`. */
  level?: number;
};
