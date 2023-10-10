import View from '../../../util/view.js';
import School from './school/school.js';
import Profile from './profile/profile.js';
import Year from './year/year.js';


export default class Container extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['footer__container'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const profile = this.elementCreator.getElement();
    profile.append(new School().getHtmlElement(), new Year().getHtmlElement(), new Profile().getHtmlElement());
  }
}
