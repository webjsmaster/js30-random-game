import View from '../../../util/view.js';
import './button.scss';
import ElementCreator from '../../../util/element-creator';
import Modal from '../../modal/modal';
import { localItem } from '../../../util/variables';

export default class Button extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['main__button'],
    };
    super(params);
    this.configureView();
    this.modal = new Modal();
  }

  configureView() {
    const button = new ElementCreator({
      tag: 'button',
      classNames: [],
      textContent: 'Show Results',
      callback: [{ event: 'click', callback: () => this.handleClick() }],
    }).getElement();
    this.elementCreator.getElement().append(button);
  }

  handleClick() {
    const content = JSON.parse(localStorage.getItem(localItem));
    if (content && content.length) {
      this.modal.showModal('showResult', content);
    } else {
      this.modal.showModal('message', 'No games have been played yet');
    }
  }
}
