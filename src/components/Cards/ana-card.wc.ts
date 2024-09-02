import { CardCategory } from '@contracts';
import { stringifyCardNumber } from '@utils';
import { demoCategoryIcons } from '@data/demo-categories';

const ICONS: Record<CardCategory, string> = {
  [CardCategory.DESIGN]: `<svg width="24" height="24" viewBox="0 0 24 24">${demoCategoryIcons[CardCategory.DESIGN]}</svg>`,
  [CardCategory.DEVELOPMENT]: `<svg width="24" height="24" viewBox="0 0 24 24">${demoCategoryIcons[CardCategory.DEVELOPMENT]}</svg>`,
  [CardCategory.HARLEY]: `<svg width="24" height="24" viewBox="0 0 24 24">${demoCategoryIcons[CardCategory.HARLEY]}</svg>`,
  [CardCategory.LORE]: `<svg width="24" height="24" viewBox="0 0 24 24">${demoCategoryIcons[CardCategory.LORE]}</svg>`,
  [CardCategory.SPECIAL]: `<svg width="24" height="24" viewBox="0 0 58 38">${demoCategoryIcons[CardCategory.SPECIAL]}</svg>`,
  [CardCategory.TOOLS]: `<svg width="24" height="24" viewBox="0 0 24 24">${demoCategoryIcons[CardCategory.TOOLS]}</svg>`,
  [CardCategory.TROLL]: `<svg width="24" height="24" viewBox="0 0 24 24">${demoCategoryIcons[CardCategory.TROLL]}</svg>`
};

export class AnaCard extends HTMLElement {
  private cardId: number;
  private cardName: string;
  private cardDescription: string;
  private cardImage: string;
  private cardCategory: CardCategory;
  private cardLevel: number;

  constructor() {
    super();

    const {
      id = 0,
      name = 'Card Name',
      description = 'Card Description',
      image = '',
      category = CardCategory.DESIGN,
      level = 1
    } = this.dataset;

    this.cardId = +id;
    this.cardName = name;
    this.cardDescription = description;
    this.cardImage = image;
    this.cardCategory = category as CardCategory;
    this.cardLevel = +level;

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  getCategorySVG() {
    return ICONS[this.cardCategory] || '';
  }

  getLevelDots() {
    return this.shadowRoot?.querySelector('.card-level-dots');
  }

  getImageURL() {
    return `/ana-cards-web/assets/images/cards/${this.cardImage}`;
  }

  render() {
    this.shadowRoot!.innerHTML = /* html */ `
      <style>${AnaCard.styles}</style>
      <div class="card" data-card-id="${this.cardId}" data-card-level="${this.cardLevel}">
        <h1 class="card-title">${this.cardName}</h1>

        <div class="card-image">
          <img src="${this.getImageURL()}" loading="lazy" />
        </div>

        <p class="card-content">${this.cardDescription}</p>

        <span class="card-footer">${stringifyCardNumber(this.cardId)}</span>

        <div class="card-category">${this.getCategorySVG()}</div>

        <div class="card-level-dots">
          ${Array.from({ length: this.cardLevel }, () => '<span class="card-level-dot"></span>')
            .slice(0, 50)
            .join('')}
        </div>

        <div class="card-shine"></div>
      </div>
      `;
  }

  static get styles() {
    return /* css */ `
      :host {
        overflow: hidden;
        cursor: zoom-in;
        position: relative;
        aspect-ratio: 15 / 23;
        width: var(--size, var(--default-size));
        container: card / inline-size;
        box-sizing: border-box;
        border-radius: var(--border-radius);
      }

      .card {
        --z-image-border: -1;
        --z-image: 1;
        --z-shine: 2;
        --z-footer: 3;

        aspect-ratio: 15 / 23;
        width: var(--size, var(--default-size));
        box-sizing: border-box;
        content-visibility: auto;

        position: absolute;
        inset: 0;

        opacity: 1;
        display: flex;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        flex-direction: column;

        color: var(--text-color);
        background-color: var(--bgcolor);

        border-radius: var(--border-radius);
        border: var(--border-size) solid var(--border-color);
        box-shadow: 0 0 1.5rem 0.1rem rgb(from var(--category-color) r g b / 0.4);


        @media (prefers-reduced-motion: no-preference) {
          transition: opacity 0.6s ease-in, display 0.6s ease-in;
          transition-behavior: allow-discrete;
        }

        @starting-style {
          opacity: 0;
        }

        &::after {
          content: '';
          position: absolute;
          pointer-events: none;
          inset: 0;
          z-index: 1;
          opacity: 0.25;
          display: block;
          mix-blend-mode: overlay;
          background-blend-mode: overlay, overlay;
          background-clip: padding-box, padding-box;
          background-image: var(--noise), var(--paper);
        }

        & .card-title {
          margin: 0;
          font-size: 7.9cqi;
          font-weight: 400;
          font-family: var(--font-family-primary);
          padding: 1.5cqi 2.7cqi 0;
        }

        & .card-category {
          overflow: hidden;
          position: absolute;
          top: 0;
          right: 0;

          width: 21cqi;
          height: 39cqi;
          display: flex;
          align-items: start;
          justify-content: end;
          padding: 0.3cqi 2cqi;

          color: var(--bgcolor);
          background: var(--category-color);
          clip-path: polygon(0 0, 100% 0, 100% 100%);

          & svg {
            margin-inline-end: 3cqi;
            padding-block-start: 0.3cqi;
            width: calc(var(--size, var(--default-size)) / 9.3);
            height: calc(var(--size, var(--default-size)) / 9.3);
          }
        }

        & .card-image {
          --cover-radius: 2.7cqi;
          --cover-border: 1cqi;

          z-index: var(--z-image);
          height: 93cqi;
          width: auto;
          margin: 0 3%;

          overflow: hidden;
          border-radius: var(--cover-radius);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          &::before {
            content: '';
            z-index: var(--z-image-border);
            position: absolute;
            inset: 0;
            background: var(--rainbow-gradient);
          }

          & img {
            z-index: var(--z-image);
            padding: var(--cover-border);
            width: calc(100% - (var(--cover-border) * 2));
            height: calc(100% - (var(--cover-border) * 2));
            border-radius: var(--cover-radius);
            object-fit: cover;
          }
        }

        & .card-content {
          margin: 0;
          font-size: 4.07cqi;
          font-weight: 600;
          text-wrap: pretty;
          text-align: center;
          font-family: var(--font-family-secondary);

          overflow: hidden;
          height: 33.6cqi;
          padding: 3cqi 4.2cqi;
        }

        & .card-footer {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 3.3cqi;
          font-weight: 800;
          font-family: var(--font-family-extra);
          text-align: center;
          text-transform: uppercase;
          color: var(--category-color, var(--card-text-color));

          z-index: var(--z-footer);
          height: 2.1cqi;
          padding: 1.2cqi 3cqi;
          position: absolute;
          inset-block-end: 0;
          inset-inline-start: 50%;
          transform: translateX(-50%);

          border-start-end-radius: 3cqi;
          border-start-start-radius: 3cqi;
          background-color: var(--border-color);
        }

        & .card-level-dots {
          position: absolute;
          inset-block-start: 15.9cqi;
          inset-inline-start: 0.6cqi;
          padding-block-end: 1cqi;

          gap: 1cqi;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          & .card-level-dot {
            width: 1.5cqi;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            background: var(--category-color);

            &:nth-child(5n) {
              background: #d22222;
            }
          }
        }

        & .card-shine {
          --shine-tex-size: 50%;
          --shine-tex-pos: center;
          --shine-tex-blend: exclusion;

          --shine-g1-pos: 0% var(--shine-pos-y, 50%);
          --shine-g1-blend: hue;

          --shine-g2-pos: var(--shine-pos-x) var(--shine-pos-y);
          --shine-g2-blend: hard-light;

          --shine-radial-size: 200%;
          --shine-radial-pos: var(--shine-pos-x) var(--shine-pos-y);
          --shine-radial-blend: exclusion;

          width: 100%;
          height: 100%;
          z-index: var(--z-shine);
          position: absolute;
          inset: 0;
          transition: 0.3s ease;
          mix-blend-mode: color-dodge;

          background-image: var(--shine-texture, none), var(--shine-gradient-1, none),
            var(--shine-gradient-2, none), var(--shine-radial-gradient, none);

          background-size:
            var(--shine-tex-size),
            200% 700%,
            300%,
            var(--shine-radial-size);

          background-position:
            var(--shine-tex-pos),
            var(--shine-g1-pos),
            var(--shine-pos-x, 50%) var(--shine-pos-y, 50%),
            var(--shine-radial-pos);

          background-blend-mode: var(--shine-tex-blend), var(--shine-g1-blend), var(--shine-g2-blend),
            var(--shine-radial-blend);

          filter: brightness(calc((var(--hyperspace, 0) * 0.3) + 0.5)) contrast(2) saturate(1.5);

          &::after {
            content: '';
            width: 100%;
            height: 100%;
            z-index: var(--z-shine);
            position: absolute;
            inset: 0;
            mix-blend-mode: exclusion;

            background-image: var(--shine-texture, none), var(--shine-gradient-1, none),
              var(--shine-gradient-2, none), var(--shine-radial-gradient, none);

            background-size:
              var(--shine-tex-size),
              200% 400%,
              195%,
              var(--shine-radial-size);

            background-position:
              var(--shine-tex-pos),
              var(--shine-g1-pos),
              calc(var(--shine-pos-x, 50%) * -1) calc(var(--shine-pos-y, 50%) * -1),
              var(--shine-radial-pos);

            background-blend-mode: var(--shine-tex-blend), var(--shine-g1-blend),
              var(--shine-g2-blend), var(--shine-radial-blend);

            filter: brightness(calc((var(--hyperspace) * 0.5) + 0.8)) contrast(1.6) saturate(1.4);
          }

          .card[data-card-level] & {
            --shine-texture: url('/ana-cards-web/assets/images/textures/diamonds.webp');

            --shine-gradient-1: repeating-linear-gradient(
              0deg,
              #ff7773 calc(5% * 1),
              #ffed5f calc(5% * 2),
              #a8ff5f calc(5% * 3),
              #83fff7 calc(5% * 4),
              #7894ff calc(5% * 5),
              #d875ff calc(5% * 6),
              #ff7773 calc(5% * 7)
            );

            --shine-gradient-2: repeating-linear-gradient(
              133deg,
              #0e152e 0%,
              #8fa3a3 3.8%,
              #8fc1c1 4.5%,
              #8fa3a3 5.2%,
              #0e152e 10%,
              #0e152e 12%
            );

            --shine-radial-gradient: radial-gradient(
              farthest-corner circle at var(--shine-margin-x, 50%) var(--shine-margin-y, 50%),
              rgb(0 0 0 / 0.1) 12%,
              rgb(0 0 0 / 0.15) 20%,
              rgb(0 0 0 / 0.25) 120%
            );
          }

          .card[data-card-level='1'] & {
            --shine-texture: none;
            --shine-gradient-1: none;
            --shine-gradient-2: none;
            --shine-radial-gradient: none;

            display: none;
          }

          .card[data-card-level='2'] & {
            --shine-texture: url('/ana-cards-web/assets/images/textures/metal.webp');
          }

          .card[data-card-level='3'] & {
            --shine-texture: url('/ana-cards-web/assets/images/textures/crossover.webp');
          }

          .card[data-card-level='4'] & {
            --shine-texture: url('/ana-cards-web/assets/images/textures/wave.webp');
          }

          .card[data-card-level='5'] & {
            --shine-texture: url('/ana-cards-web/assets/images/textures/stamp.webp');
          }
        }
      }
      `;
  }

  static get componentName() {
    return 'ana-card';
  }
}
