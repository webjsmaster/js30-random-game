import View from '../../../util/view.js';
import './content.scss';
import ElementCreator from '../../../util/element-creator';
import Modal from '../modal';

export default class Content extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['modal__content'],
    };
    super(params);
    this.configureView();

    this.modal = new Modal();
  }

  configureView() {
    const content = this.elementCreator.getElement();
    const button = new ElementCreator({
      tag: 'button',
      classNames: ['modal__cls-btn'],
      callback: [{ event: 'click', callback: () => this.handleClick() }],
      textContent: 'Close',
    });
    content.append(button.getElement());
  }

  handleClick() {
    this.modal.setStatus(!this.modal.getStatus());
  }

  setContent(text) {
    const checkChildNode = this.elementCreator.getElement().querySelector('.modal__message');
    if (this.elementCreator.getElement().contains(checkChildNode)) {
      this.elementCreator.getElement().removeChild(checkChildNode);
    }
    const message = new ElementCreator({ tag: 'div', textContent: text, classNames: ['modal__message'] });
    this.elementCreator.getElement().prepend(message.getElement());
  }
}
