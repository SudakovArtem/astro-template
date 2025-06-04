import { mobileVhFix } from './utils/mobile-vh-fix';
import { initTabs } from './modules/init-tabs';
import { initFormValidate } from './modules/form/init-form-validate';
import { initAccordions } from './modules/init-accordions';
import { initSelects } from './modules/init-selects';
import { initModals } from './modules/init-modals';

mobileVhFix();
document.addEventListener(
  'DOMContentLoaded',
  () => {
    initModals();
    initTabs();
    initFormValidate();
    initAccordions();
    initSelects();
  },
  true
);
