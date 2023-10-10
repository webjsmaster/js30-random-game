import './wrapper.scss';
import View from '../util/view.js';
import Footer from './footer/footer.js';
import Header from './header/header.js';
import Main from './main/main.js';


export default class Wrapper extends View {
  constructor() {
    /**
     * @type {import('../../util/element-creator.js').ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['wrapper'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const wrapper = this.elementCreator.getElement();
    wrapper.append(new Header().getHtmlElement(), new Main().getHtmlElement(), new Footer().getHtmlElement());
  }
}
