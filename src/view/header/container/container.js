import View from '../../../util/view.js';
import Count from './count/count.js';
import Time from './time/time.js';
import Button from './button/button.js';
import Sound from './sound/sound.js';

export default class Container extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['header__container'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const profile = this.elementCreator.getElement();
    profile.append(new Count().getHtmlElement(), new Button().getHtmlElement(), new Time().getHtmlElement(), new Sound().getHtmlElement());
  }
}
