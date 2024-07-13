import type { AnaCard } from './ux-card.type';

/** Representa un item del ranking */
export type RankingItem = {
  /** El lugar en el ranking del usuario */
  place: number;

  /** El nombre del usuario */
  username: string;

  /** Cantidad de cartas descubiertas */
  score: number;
};

/** Representa un usuario del ranking */
export type RankingUser = RankingItem & {
  cards: AnaCard[];
};
