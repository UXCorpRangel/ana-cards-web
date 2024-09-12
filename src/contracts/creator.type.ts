/** Icono de enlace a perfil de creador. */
export type CreatorIcon =
  | 'github'
  | 'website'
  | 'linkedin'
  | 'twitter'
  | 'twitch'
  | 'youtube'
  | 'instagram'
  | 'discord'
  | 'behance'
  | 'codepen';

/** Enlace a perfil de creador con icono. */
export type CreatorLink = {
  /** Icono a mostrar */
  icon: CreatorIcon;

  /** Enlace al perfil del creador */
  href: string;
};

/** Número del 1 al 9. */
type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Número de día del mes en formato `DD`.
 *
 * @example
 * '01' // 1
 * '31' // 31
 * '32' // Error
 */
export type MonthDayNumber =
  | `${0}${OneToNine}`
  | `${1}${0 | OneToNine}`
  | `${2}${0 | OneToNine}`
  | `${3}${0 | 1}`;

/**
 * Número de mes en formato `MM`.
 *
 * @example
 * '01' // Enero
 * '12' // Diciembre
 * '13' // Error
 */
export type MonthNumber = `${0}${OneToNine}` | `${1}${0 | 1 | 2}`;

/**
 * Fecha de nacimiento en formato `MM-DD`.
 *
 * @example
 * '01-01' // 1 de Enero
 * '12-31' // 31 de Diciembre
 * '13-12' // Error
 * '01-32' // Error
 */
export type Birthdate = `${MonthNumber}-${MonthDayNumber}`;

/** Datos del creador. */
export type Creator = {
  /** Avatar del creador */
  avatar: string;

  /** Nombre del creador */
  name: string;

  /** Descripción del creador */
  description: string;

  /** Enlaces del creador */
  links: CreatorLink[];

  /** Fecha de nacimiento del creado */
  birthdate: Birthdate;

  /** Indica si el creador debe ser destacado */
  isAmazing?: boolean;
};
