import { Modals } from '../vendor/modals/modals';

interface BrowserWindow extends Window {
  lenis?: any;
}

let modals = null;

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    resetScrollPos: false,
    eventTimeout: 400,
    openCallback: () => {
      (window as BrowserWindow).lenis?.stop();
    },
    closeCallback: () => {
      (window as BrowserWindow).lenis?.start();
    }
  },
  // modal-1, modal-6 добавлен исключительно для примера при добавлении на проект ключ и обект записанный в нём нужно удалить
  'modal-1': {
    // openCallback: () => console.log('Я отработаю при открытии modal-1'),
    // closeCallback: () => console.log('Я отработаю при закрытии modal-1'),
  }
};

// eslint-disable-next-line no-undef
const modalElements: NodeListOf<Element> = document.querySelectorAll('.modal');

const initModals = (): void => {
  if (!modalElements.length) {
    return;
  }

  modalElements.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
  });

  modals = new Modals(settings);
  Object.assign(window, { modals });
};

export { initModals, modals };
