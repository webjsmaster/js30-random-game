import './header.scss';
import View from '../../util/view.js';
import Container from './container/container.js';


export default class Header extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'header',
      classNames: ['header'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const header = this.elementCreator.getElement();
    header.append(new Container().getHtmlElement());
  }
}
