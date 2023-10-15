import View from '../../../../util/view.js';
import ElementCreator from '../../../../util/element-creator.js';
import Modal from '../../../modal/modal.js';
import './time.scss';

export default class Time extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['header__timer'],
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
    this.timer = new ElementCreator({ tag: 'span', classNames: [], textContent: '00:00.0' });
    timerWrapper.append(this.timer.getElement());
  }

  setTextTime(time) {
    this.timer.getElement().textContent = `${time}`;
  }
}
