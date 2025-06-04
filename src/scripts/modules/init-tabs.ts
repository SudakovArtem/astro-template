import { Tabs } from '../vendor/tabs/tabs';

let tabs = null;

// eslint-disable-next-line no-undef
const tabElements: NodeListOf<Element> = document.querySelectorAll(
  '[data-tabs="parent"]'
);

const initTabs = (): void => {
  if (!tabElements.length) {
    return;
  }

  tabs = new Tabs(tabElements);
  Object.assign(window, { tabs });
};

export { initTabs, tabs };
