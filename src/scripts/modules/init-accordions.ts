import { Accordions } from '../vendor/accordions/accordions';

let accordions = null;

// eslint-disable-next-line no-undef
const accordionElements: NodeListOf<Element> = document.querySelectorAll(
  '[data-accordion="parent"]'
);

const initAccordions = (): void => {
  if (!accordionElements.length) {
    return;
  }

  accordions = new Accordions();
  Object.assign(window, { accordions });
};

export { initAccordions, accordions };
