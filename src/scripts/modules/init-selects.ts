import { CustomSelect } from '../vendor/select/custom-select';
let customSelect = null;
// eslint-disable-next-line no-undef
const selectElements: NodeListOf<Element> =
  document.querySelectorAll('[data-select]');

const initSelects = (): void => {
  if (!selectElements.length) {
    return;
  }

  customSelect = new CustomSelect(selectElements);
  Object.assign(window, { customSelect });
};

export { initSelects, customSelect };
