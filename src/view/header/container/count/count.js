import View from '../../../../util/view.js';
import ElementCreator from '../../../../util/element-creator.js';
import './count.scss';

export default class Count extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['header__count'],
    };
    super(params);
    // ======== > singleton < ======== //
    if (Count.exists) {
      return Count.instance;
    }
    Count.instance = this;
    Count.exists = true;
    // ======== > singleton < ======== //
    this.configureView();
    this.currentCount = 0;
  }

  configureView() {
    const countWrapper = this.elementCreator.getElement();
    countWrapper.textContent = 'Count: ';
    this.count = new ElementCreator({ tag: 'span', classNames: [], textContent: '0' });
    countWrapper.append(this.count.getElement());
  }

  rerender() {
    this.count.getElement().textContent = this.currentCount;
  }

  incrementCount(increment) {
    this.currentCount += increment;
    this.rerender();
  }

  resetCount() {
    this.currentCount = 0;
    this.rerender();
  }

  decrementCount(decrement) {
    this.currentCount -= decrement;
    this.rerender();
  }

  getCount() {
    return this.currentCount;
  }
}
