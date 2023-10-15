import './main.scss';
import View from '../../util/view.js';
import Container from './container/container.js';
import Button from './button/button';

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
    // ======== > singleton < ======== //
    if (Main.exists) {
      return Main.instance;
    }
    Main.instance = this;
    Main.exists = true;
    // ======== > singleton < ======== //
    this.configureView();
  }

  configureView() {
    const main = this.elementCreator.getElement();
    main.append(new Container().getHtmlElement(), new Button().getHtmlElement());
  }

  newGameRender() {
    const main = this.elementCreator.getElement();
    main.replaceChildren();
    main.append(new Container().getHtmlElement(), new Button().getHtmlElement());
  }
}
