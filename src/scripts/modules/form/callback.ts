import { tabs } from '../init-tabs.ts';
import { modals } from '../init-modals.ts';

const baseSuccessCallback = (event) => {
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
};

const applicationSuccessCallback = (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const tabsParent = form.closest('[data-tabs="parent"]');
  const tabsControls = tabsParent.querySelectorAll('[data-tabs="control"]');

  // Отправляем запрос на сервер
  fetch('https://iamwey.ru/send-opna/', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        tabs.openTab(tabsControls[1]);
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(JSON.stringify(errorData));
        });
      }
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Error submitting form:', error);
    });
};

const legalSuccessCallback = (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const tabsParent = form.closest('[data-tabs="parent"]');
  const tabsControls = tabsParent.querySelectorAll('[data-tabs="control"]');

  // Отправляем запрос на сервер
  fetch('https://iamwey.ru/send-fleet/', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        tabs.openTab(tabsControls[1]);
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(JSON.stringify(errorData));
        });
      }
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Error submitting form:', error);
    });
};

const testDriveSuccessCallback = (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const tabsParent = form.closest('[data-tabs="parent"]');
  const tabsControls = tabsParent.querySelectorAll('[data-tabs="control"]');
  // Отправляем запрос на сервер
  fetch('https://iamwey.ru/send-opna/', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        tabs.openTab(tabsControls[1]);
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(JSON.stringify(errorData));
        });
      }
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Error submitting form:', error);
    });
};

const tradeInSuccessCallback = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  // Отправляем запрос на сервер
  fetch('https://iamwey.ru/send-opna/', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        modals.open('trade-in-success');
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(JSON.stringify(errorData));
        });
      }
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Error submitting form:', error);
    });
};

const offerSuccessCallback = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  // Отправляем запрос на сервер
  fetch('https://iamwey.ru/send-opna/', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        modals.open('offer-success');
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(JSON.stringify(errorData));
        });
      }
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Error submitting form:', error);
    });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  'base': {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback
  },
  'application': {
    reset: true,
    resetTimeout: 500,
    successCallback: applicationSuccessCallback,
    errorCallback: baseErrorCallback
  },
  'trade-in': {
    reset: true,
    resetTimeout: 500,
    successCallback: tradeInSuccessCallback,
    errorCallback: baseErrorCallback
  },
  'offer': {
    reset: true,
    resetTimeout: 500,
    successCallback: offerSuccessCallback,
    errorCallback: baseErrorCallback
  },
  'test-drive': {
    reset: true,
    resetTimeout: 500,
    successCallback: testDriveSuccessCallback,
    errorCallback: baseErrorCallback
  },
  'legal-entities': {
    reset: true,
    resetTimeout: 500,
    successCallback: legalSuccessCallback,
    errorCallback: baseErrorCallback
  }
};
