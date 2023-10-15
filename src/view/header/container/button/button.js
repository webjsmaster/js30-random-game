import View from '../../../../util/view.js';
import ElementCreator from '../../../../util/element-creator.js';
import './button.scss';
import Main from '../../../main/main.js';
import Timer from '../../../../util/timer.js';
import Time from '../time/time.js';
import Count from '../count/count.js';
import StatusGame from '../../../../util/statusGame.js';
import CurrentId from '../../../../util/currentId.js';
import Modal from '../../../modal/modal.js';
import { saveLocalStorage } from '../../../../util/saveLocalStorage.js';
import StatusSound from '../../../../util/statusSound';

export default class Button extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['header__button'],
    };
    super(params);
    this.configureView();
    this.modal = new Modal();
    this.statusGame = new StatusGame();
    this.sound = new StatusSound();
  }

  configureView() {
    const button = new ElementCreator({
      tag: 'button',
      classNames: [],
      textContent: 'New game',
      callback: [{ event: 'click', callback: () => this.handleClick() }],
    }).getElement();
    this.elementCreator.getElement().append(button);
  }

  handleClick() {
    if (this.statusGame.statusGame) {
      this.modal.showModal('newGame', this.setLossLocalStorage.bind(this));
    } else {
      if (this.sound.statusSound) {
        this.sound.playSound('click');
      }
      this.setNewGame();
    }
  }

  setLossLocalStorage() {
    saveLocalStorage({ time: 'LOSS', score: 'LOSS' });
    if (this.sound.statusSound) {
      this.sound.playSound('loss');
    }
    this.setNewGame();
  }

  setNewGame() {
    new Main().newGameRender();
    new Timer().stop();
    new Timer().resetTimer();
    new Count().resetCount();
    new CurrentId().currentId = null;
    new Time().setTextTime('00:00.0');
    new StatusGame().statusGame = false;
  }
}
