/** Definición de elemento de la barra de navegación */
export type NavbarItem = {
  /** Texto del enlace */
  text: string;

  /** URL del enlace */
  slug: string;

  /** Si el enlace es externo */
  external?: boolean;
};
