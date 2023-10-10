import './app.scss';
import Wrapper from './view/wrapper.js';
import Modal from './view/modal/modal';


export default class App {
  constructor() {
    this.body = document.querySelector('#app');
    this.createHtmlElement();
  }

  createHtmlElement() {
    const content = new Wrapper();
    const modal = new Modal();
    this.body.append(content.getHtmlElement(), modal.getHtmlElement());
  }
}
