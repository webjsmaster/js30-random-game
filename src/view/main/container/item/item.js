import View from '../../../../util/view.js';
import ElementCreator from '../../../../util/element-creator.js';
import './items.scss';
import questions from '../../../../public/questions1.png';
import Count from '../../../header/container/count/count';
import Modal from '../../../modal/modal';
import Timer from '../../../../util/timer';

// eslint-disable-next-line no-unused-vars
let currentId = null;

export default class Item extends View {
  constructor(card) {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['main__item'],
      attribute: [{ id: 'id', value: card.id }],
      callback: [{
        event: 'click',
        callback: (e) => {
          e.stopPropagation();
          this.handlerClick(e.target.id);
        },
      }],
    };
    super(params);

    this.count = new Count();
    this.modal = new Modal();
    this.timerInstance = new Timer();
    this.configureView(card);
  }

  configureView({ img, id }) {
    const item = this.elementCreator.getElement();
    const imageContainerFront = new ElementCreator({ tag: 'div', classNames: ['main__image-front'] }).getElement();
    const imageContainerBack = new ElementCreator({ tag: 'div', classNames: ['main__image-back'] }).getElement();
    const image1 = new ElementCreator({
      tag: 'img',
      classNames: ['main__image'],
      attribute: [{ id: 'src', value: img }, { id: 'id', value: id }],
    }).getElement();
    const image2 = new ElementCreator({
      tag: 'img',
      classNames: ['main__image'],
      attribute: [{ id: 'src', value: questions }, { id: 'id', value: id }],
    }).getElement();
    imageContainerFront.append(image1);
    imageContainerBack.append(image2);
    item.append(imageContainerFront, imageContainerBack);
  }

  handlerClick(id) {
    this.timerInstance.start();
    const items = document.querySelectorAll('.main__item');
    const container = document.querySelector('.main__container');
    if (currentId) {
      container.classList.add('event');
      items.forEach((item) => {
        if (item.id === id && item.classList.contains('active')) {
          items.forEach((item1) => {
            if (item1.id === id) item1.classList.add('ended');
          });
          this.count.incrementCount(11);
        } else {
          setTimeout(() => {
            item.classList.remove('active');
            container.classList.remove('event');
          }, 1000);
        }
      });


      this.elementCreator.getElement().classList.add('active');
      this.count.decrementCount(3);
      currentId = null;
    } else {
      this.elementCreator.getElement().classList.add('active');
      currentId = id;
    }

    if (this.checkWin(items)) {
      this.timerInstance.stop();
      this.modal.showModal('message', `You won by score: ${this.count.getCount()} and in time: ${this.timerInstance.getTime()}`);
    }
  }

  checkWin(items) {
    let showCards = 0;
    items.forEach((item) => {
      if (item.classList.contains('ended')) {
        showCards += 1;
      }
    });
    console.log('[95] 🐬: ', showCards);
    return showCards === 2;
  }


  // items.forEach((item) => {
  //   if (item.id === id && item.classList.contains('active')) {
  //     items.forEach((item1) => {
  //       if (item1.id === id) item1.classList.add('ended');
  //     });
  //   } else if (item.classList.contains('active')) {
  //     items.forEach((item2) => {
  //       item2.disabled = true;
  //     });
  //     setTimeout(() => {
  //       item.classList.remove('active');
  //     }, 1000);
  //   }
  // });
  //
}
