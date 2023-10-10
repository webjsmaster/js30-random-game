import './year.scss';
import View from '../../../../util/view.js';

export default class Year extends View {
  constructor() {
    super({ tag: 'div', classNames: ['footer__year'], textContent: '2023' });
  }
}
