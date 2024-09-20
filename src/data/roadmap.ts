import { StatusValue, type RoadmapItem } from '@contracts';

export const roadmap: RoadmapItem[] = [
  {
    title: 'PRIMER COMMIT Y CREACIÓN DEL DISEÑO EN FIGMA',
    date: 'JUNIO 2024',
    status: StatusValue.COMPLETE,
    description:
      'Una noche de partidas de Fortnite, en medio de la matanza, Ana le comenta a la comunidad que siempre quiso crea cartas de unicornio pero con temáticas de diseño y desarrollo; estas cartas son inspiradas por el gran Dios de CSS ManzDev, y el estilo de unicornios es inspirado por el juego de cartas Unstable Unicorns. A la comunidad le gustó tanto la idea que decidieron alentarla y mejorarla añadiendo más ideas, por ejemplo, que Harley (la verdadera streamer) tuviera una categoría dentro de las cartas. No sabíamos que ese sería el inicio de este increíble proyecto...'
  },
  {
    title: 'CREACIÓN DE HARLEYBOT',
    date: 'JUNIO 2024',
    status: StatusValue.COMPLETE,
    description:
      'Omar decide crear el bot de Harley con diferentes comandos para interactuar con el chat de Twitch pensando que en el futuro este bot servirá para entregar de las cartas a los suscriptores del canal. Actualmente puedes interactuar con el bot durante las transmisiones en vivo. *woof*'
  },
  {
    title: 'CREACIÓN DE SECCIONES INTERNAS',
    date: 'JULIO 2024',
    status: StatusValue.COMPLETE,
    description:
      'Se diseñaron y desarrollaron las secciones internas de la página web, aparte de crear algunas de las cartas de las categorías de Harley, Diseño y Desarrollo. Adicionalmente se añadieron easter eggs en el footer, y el efecto de scroll en el roadmap.'
  },
  {
    title: 'FEATURES, FEATURES Y MÁS FEATURES',
    date: 'AGOSTO 2024',
    status: StatusValue.COMPLETE,
    description:
      'Creamos distintos features como la categoría Especial, los botones de compartir, cerrar y descargar las cartas del ranking, además de un estupendo 404. También se añadieron efectos interactivos en la sección de inicio y el hover sobre la carta que el usuario quiera ver con un bonito blur sobre las otras cartas.'
  },
  {
    title: 'RESPONSIVE',
    date: 'SEPTIEMBRE 2024',
    status: StatusValue.DEVELOP,
    description: 'Estamos trabajando en ello 🏗️🚧'
  },
  {
    title: 'CREACIÓN DE LAS CARTAS',
    date: 'OCTUBRE 2024',
    status: StatusValue.WAIT,
    description: 'Próximamente 🦄 Se crearán las cartas de todas las categorías.'
  },
  {
    title: 'IMPLEMENTACIÓN DEL BACKEND',
    date: 'OCTUBRE 2024',
    status: StatusValue.WAIT,
    description:
      'Próximamente 🦄 Integraremos el HarleyBot con todo el backend para comenzar con la pruebas en un entorno de desarrollo.'
  },
  {
    title: '¡CUMPLEAÑOS DEL CANAL Y LANZAMIENTO!',
    date: '2 NOVIEMBRE 2024',
    status: StatusValue.WAIT,
    description:
      'Es la gala de lanzamiento de las cartas por el primer aniversario del canal, será un día especial y se entregarán las primeras cartas a miembros de la comunidad. ¡No te lo puedes perder!'
  },
  {
    title: 'CUMPLEAÑOS DE ANA',
    date: '21 DICIEMBRE 2024',
    status: StatusValue.WAIT,
    description: 'Tenemos que hacer algo pero no sabemos qué. Ve pensando en algunas sugerencias.'
  },
  {
    title: 'HORÓSCOPO UNICORN',
    date: '2025',
    status: StatusValue.WAIT,
    description: 'Próximamente 🦄'
  },
  {
    title: 'PIXEL HARLEY',
    date: '2025',
    status: StatusValue.WAIT,
    description: 'Próximamente 🦄'
  },
  {
    title: 'SECCIÓN DE CONTRIBUCIONES DE LA COMUNIDAD',
    date: '2025',
    status: StatusValue.WAIT,
    description: 'Próximamente 🦄'
  }
];
