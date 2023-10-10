import View from '../../../../util/view.js';
import ElementCreator from '../../../../util/element-creator';
import Modal from '../../../modal/modal.js';

export default class Time extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['header__live'],
    };
    super(params);
    // ======== > singleton < ======== //
    if (Time.exists) {
      return Time.instance;
    }
    Time.instance = this;
    Time.exists = true;
    // ======== > singleton < ======== //
    this.modal = new Modal();
    this.configureView();
  }

  configureView() {
    const timerWrapper = this.elementCreator.getElement();
    timerWrapper.textContent = 'Time: ';
    this.timer = new ElementCreator({ tag: 'span', classNames: [], textContent: '0' });
    this.button = new ElementCreator({
      tag: 'button', classNames: [], textContent: 'Click', callback: [{ event: 'click', callback: () => this.handleButton() }],
    });
    timerWrapper.append(this.timer.getElement(), this.button.getElement());
  }

  handleButton() {
    this.modal.setStatus(!this.modal.getStatus());
  }

  setTextTime(time) {
    this.timer.getElement().textContent = `${time}`;
  }
}
