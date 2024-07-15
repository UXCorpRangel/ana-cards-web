export type CreatorIcon = 'github' | 'website' | 'linkedin' | 'twitter' | 'twitch' | 'youtube';

export type CreatorLink = {
  /** Icono a mostrar */
  icon: CreatorIcon;

  /** Enlace al perfil del creador */
  href: string;
};

export type Creator = {
  /** Avatar del creador */
  avatar: string;

  /** Nombre del creador */
  name: string;

  /** Descripción del creador */
  description: string;

  /** Enlaces del creador */
  links: CreatorLink[];
};
