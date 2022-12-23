import ValidationError from '../service/ValidationError.js';
import { vendingMachine } from '../service/VendingMachine.js';
import { querySelector } from './selector.js';
import { removeSpace } from '../util/string.js';

/**
 *
 * @param {string} selector
 * @param {function} callback
 * @returns
 */
export const setClickEventListenerWithVendingMachine = (selector, callback) =>
  querySelector(selector).addEventListener('click', () => {
    try {
      callback(vendingMachine);
    } catch (error) {
      if (error instanceof ValidationError) {
        alert(error.message);
        return;
      }
      console.error(error);
    }
  });

/**
 *
 * @param {string} selector
 * @param {function} callback
 * @returns
 */
export const setEnterEventListener = (selector, callback) =>
  querySelector(selector).addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      callback(vendingMachine);
      event.preventDefault();
    }
  });

export const setChangeRemovingSpaceListener = (selector) => {
  querySelector(selector).addEventListener('change', function (event) {
    this.value = removeSpace(event.target.value);
  });
};
