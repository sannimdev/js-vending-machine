/**
 *
 * @param {string} selector
 * @returns {HTMLElement}
 */
export const querySelector = (selector, parent = document) => parent.querySelector(selector);

/**
 *
 * @param {string} selector
 * @returns {HTMLElement[]}
 */
export const querySelectorAll = (selector, parent = document) => parent.querySelector(selector);

export const SELECTOR_MAP = {
  SECTION: {
    MANAGING_PRODUCT: '#section-managing-product',
    MANAGING_CHARGE: '#section-managing-charge',
  },
  SPAN: {
    CHARGE_AMOUNT: '#text-charge-amount',
    SPENDING_AMOUNT: '#text-spending-money',
  },
  BUTTON: {
    PRODUCT_ADD: '#product-add-button',
    CHARGE_AMOUNT: '#vending-machine-charge-button',
    INSERTION_FOR_MONEY: '#insertion-for-spending-money-button',
    RETURN_CHANGES_BUTTON: '#return-changes-button',
  },
  INPUT: {
    PRODUCT_NAME: '#product-name-input',
    PRODUCT_PRICE: '#product-price-input',
    PRODUCT_AMOUNT: '#product-amount-input',
    CHARGE_AMOUNT: '#charge-amount-input',
    SPENDING_MONEY_INPUT: '#spending-money-input',
  },
  TABLE: {
    VENDING_MACHINE_PRODUCT: '#vending-machine-products',
    VENDING_MACHINE_CHARGE_AMOUNT: '#vending-machine-charge-amount',
    VENDING_MACHINE_PURCHASABLE_PRODUCT: '#vending-machine-purchasable-products',
    VENDING_MACHINE_RETURN_CHANGES: '#vending-machine-return-changes',
  },
  TAB_BUTTON: {
    MANAGING_PRODUCT: '#product-manage-menu',
    MANAGING_CHARGE: '#vending-machine-manage-menu',
    PURCHASING_PRODUCT: '#product-purchasing-menu',
  },
  TABS: {
    MANAGING_PRODUCT: '#section-managing-product',
    MANAGING_CHARGE: '#section-managing-charge',
    PURCHASING_PRODUCT: '#section-purchasing-product',
  },
};
