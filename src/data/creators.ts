import type { Creator } from '@contracts';

const getContributors = await fetch(
  'https://api.github.com/repos/UXCorpRangel/ana-cards-web/contributors'
);

const getContributorsData = await getContributors.json();

const getAnaRangelAvatar = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/30361612?v=4'
  }
];

const mergeAvatars = [...getContributorsData, ...getAnaRangelAvatar];

const getAvatars = mergeAvatars.map(({ avatar_url }) => avatar_url);

export const creators: Creator[] = [
  {
    avatar: getAvatars[3],
    name: 'Ana Rangel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti incidunt nihil dolore qui magni deserunt placeat beatae minus, quas, accusamus nobis tenetur saepe, error dignissimos excepturi cupiditate vitae quis!',
    links: [
      { href: 'https://anarangel.github.io/', icon: 'website' },
      { href: 'https://github.com/AnaRangel/', icon: 'github' },
      {
        href: 'https://www.linkedin.com/in/ux-ana-rangel',
        icon: 'linkedin'
      },
      { href: 'https://www.twitch.tv/uxanarangel', icon: 'twitch' },
      { href: 'https://www.youtube.com/channel/UC2gxu8X4t7hQ14q8t81PFlQ', icon: 'youtube' }
    ]
  },
  {
    avatar: getAvatars[2],
    name: 'Ricardo Cuauro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti incidunt nihil dolore qui magni deserunt placeat beatae minus, quas, accusamus nobis tenetur saepe, error dignissimos excepturi cupiditate vitae quis!',
    links: [
      { href: '#', icon: 'website' },
      { href: 'https://github.com/odracirdev/', icon: 'github' },
      { href: 'https://linkedin.com/in/RicardoCuauro', icon: 'linkedin' },
      { href: 'https://twitch.tv/odracirdev', icon: 'twitch' },
      { href: 'https://www.youtube.com/@RicardCuauro', icon: 'youtube' }
    ]
  },
  {
    avatar: getAvatars[0],
    name: 'Jaime Gutiérrez',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti incidunt nihil dolore qui magni deserunt placeat beatae minus, quas, accusamus nobis tenetur saepe, error dignissimos excepturi cupiditate vitae quis!',
    links: [
      { href: '#', icon: 'website' },
      { href: 'https://github.com/jagcruz/', icon: 'github' },
      { href: 'https://www.linkedin.com/in/jagcruz/', icon: 'linkedin' }
    ]
  },
  {
    avatar: getAvatars[1],
    name: 'Felix Icaza',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti incidunt nihil dolore qui magni deserunt placeat beatae minus, quas, accusamus nobis tenetur saepe, error dignissimos excepturi cupiditate vitae quis!',
    links: [
      { href: 'https://felixicaza.com/', icon: 'website' },
      { href: 'https://github.com/felixicaza/', icon: 'github' },
      { href: 'https://www.linkedin.com/in/felixicaza/', icon: 'linkedin' }
    ]
  }
];
