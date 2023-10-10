import View from '../../../util/view.js';
import './container.scss';
import { generateArr } from '../../../util/generate.js';
import Item from './item/item.js';
import { cards } from '../../../util/variables.js';


export default class Container extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['main__container'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const container = this.elementCreator.getElement();
    generateArr(28).forEach((el) => {
      const card = cards.find(c => c.id === el);
      container.append(new Item(card).getHtmlElement());
    });
  }
}
