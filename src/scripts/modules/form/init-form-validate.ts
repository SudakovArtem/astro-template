import { Form } from '../../vendor/form-validate/form';
import { callbacks } from './callback';
let form = null;

// eslint-disable-next-line no-undef
const validateParents: NodeListOf<Element> = document.querySelectorAll(
  '[data-form-validate]'
);

const initFormValidate = () => {
  if (!validateParents.length) {
    return;
  }

  form = new Form(validateParents, callbacks);
  Object.assign(window, { form });
};

export { initFormValidate, form };
