import './main.scss';
import View from '../../util/view.js';
import Container from './container/container.js';

export default class Main extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'main',
      classNames: ['main'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const main = this.elementCreator.getElement();
    main.append(new Container().getHtmlElement());
  }
}
