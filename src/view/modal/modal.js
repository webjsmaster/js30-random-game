import './modal.scss';
import View from '../../util/view.js';
import Content from './content/content';

export default class Modal extends View {
  constructor() {
    /**
     * @type {import('../../util/element-creator.js').ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['modal'],
    };
    super(params);
    // ======== > singleton < ======== //
    if (Modal.exists) {
      return Modal.instance;
    }
    Modal.instance = this;
    Modal.exists = true;
    // ======== > singleton < ======== //
    // this.configureView();
    this.show = false;
    this.configureView();
  }

  configureView() {
    const modal = this.elementCreator.getElement();
    this.content = new Content();
    modal.append(this.content.getHtmlElement());
  }

  render() {
    const modal = this.elementCreator.getElement();
    const wrapper = document.querySelector('.wrapper');

    if (this.getStatus()) {
      wrapper.classList.add('show-modal');
      modal.classList.add('active');
    } else {
      wrapper.classList.add('close');
      modal.classList.add('close');
      setTimeout(() => {
        wrapper.classList.remove('show-modal');
        modal.classList.remove('active');
        wrapper.classList.remove('close');
        modal.classList.remove('close');
      }, 300);
    }
  }


  setStatus(status) {
    this.show = status;
    this.render();
  }

  getStatus() {
    return this.show;
  }

  showModal(type, content) {
    if (type === 'message') {
      this.setStatus(true);
      this.content.setContent(content);
    }
  }
}
