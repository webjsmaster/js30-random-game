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
    this.wrapperBtn = new ElementCreator({ tag: 'div', classNames: ['modal__wrapper-btn'] }).getElement();
    const button = new ElementCreator({
      tag: 'button',
      classNames: ['modal__cls-btn'],
      callback: [{ event: 'click', callback: () => this.handleClick() }],
      textContent: 'Close',
    });
    this.wrapperBtn.append(button.getElement());
    content.append(this.wrapperBtn);
  }

  handleClick() {
    this.modal.setStatus(!this.modal.getStatus());
  }

  setContent(text) {
    this.removeContent();
    const message = new ElementCreator({ tag: 'div', textContent: text, classNames: ['modal__message'] });
    this.elementCreator.getElement().prepend(message.getElement());
  }

  setResult(data) {
    this.removeContent();
    const title = new ElementCreator({ tag: 'li', classNames: ['modal__list-item'] }).getElement();
    const id = new ElementCreator({ tag: 'div', classNames: ['modal__item'], textContent: 'N/n' }).getElement();
    const date = new ElementCreator({ tag: 'div', classNames: ['modal__item-date'], textContent: 'Date' }).getElement();
    const score = new ElementCreator({ tag: 'div', classNames: ['modal__item'], textContent: 'Score' }).getElement();
    const time = new ElementCreator({ tag: 'div', classNames: ['modal__item'], textContent: 'Time' }).getElement();
    title.append(id, date, score, time);

    const result = new ElementCreator({ tag: 'ul', classNames: ['modal__result-list'] }).getElement();
    result.append(title);
    if (data.length) {
      data.map((d, i) => result.append(this.createItemList(d, i)));
    }
    this.elementCreator.getElement().prepend(result);
  }

  createItemList(itemData, index) {
    const item = new ElementCreator({ tag: 'li', classNames: ['modal__list-item', itemData.score === 'LOSS' ? 'loss' : 'win'] }).getElement();
    const id = new ElementCreator({ tag: 'div', classNames: ['modal__item'], textContent: `${index + 1}.` }).getElement();
    const date = new ElementCreator({ tag: 'div', classNames: ['modal__item-date'], textContent: itemData.dateToday }).getElement();
    const score = new ElementCreator({ tag: 'div', classNames: ['modal__item'], textContent: itemData.score }).getElement();
    const time = new ElementCreator({ tag: 'div', classNames: ['modal__item'], textContent: itemData.time }).getElement();
    item.append(id, date, score, time);
    return item;
  }

  setNewGame(callback) {
    this.removeContent();
    const message = new ElementCreator({ tag: 'div', textContent: 'If you start a new game you will be counted as a loss, should you start?', classNames: ['modal__message'] });
    const button = new ElementCreator({
      tag: 'button',
      classNames: ['modal__ok-btn'],
      textContent: 'Ok',
      callback: [{ event: 'click', callback: () => this.handleClickOk(callback) }],
    });
    this.wrapperBtn.append(button.getElement());
    this.elementCreator.getElement().prepend(message.getElement());
  }

  handleClickOk(callback) {
    callback();
    this.modal.setStatus(false);
  }

  removeContent() {
    const checkChildNode = this.elementCreator.getElement().querySelector('.modal__result-list');
    const checkChildNode1 = this.elementCreator.getElement().querySelector('.modal__ok-btn');
    const checkChildNode2 = this.elementCreator.getElement().querySelector('.modal__message');
    if (this.elementCreator.getElement().contains(checkChildNode)) {
      this.elementCreator.getElement().removeChild(checkChildNode);
    }

    if (this.wrapperBtn.contains(checkChildNode1)) {
      this.wrapperBtn.removeChild(checkChildNode1);
    }

    if (this.elementCreator.getElement().contains(checkChildNode2)) {
      this.elementCreator.getElement().removeChild(checkChildNode2);
    }
  }

  // removeAllContent() {
  //   this.elementCreator.getElement().replaceAll();
  // }
}
