export namespace Catalog {
  export interface Price {
    old?: string;
    crossed?: boolean;
    current: string;
    discount: string;
    tooltip?: string;
    mod?: string;
  }

  export interface Tag {
    text: string;
    icon?: string;
    mod?: string;
  }

  export interface CharacteristicsItem {
    name: string;
    value: string;
    icon: string;
    color?: string;
  }

  export interface Card {
    name: string;
    equipment: string;
    price: Price;
    tags: Tag[];
    characteristics: CharacteristicsItem[][];
    images: string[];
  }

  export interface Tab {
    label: string;
    name: string;
    value: string;
    hint?: string;
    checked?: boolean;
    attributes?: { [key: string]: string };
  }
}
