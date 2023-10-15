import View from '../../../../util/view.js';
import ElementCreator from '../../../../util/element-creator.js';
import './sound.scss';
import iconOn from '../../../../public/sound-on.png';
import iconOff from '../../../../public/volume.png';
import StatusSound from '../../../../util/statusSound.js';

export default class Sound extends View {
  constructor() {
    /**
     * @type {ElementParams} params
     */
    const params = {
      tag: 'div',
      classNames: ['header__checkbox'],
    };
    super(params);
    this.configureView();
    this.sound = new StatusSound();
    this.sound.statusSound = true;
  }

  configureView() {
    const label = new ElementCreator({
      tag: 'label',
      classNames: ['toggle'],
      attribute: [{ id: 'for', value: 'uniqueID' }],
    }).getElement();
    const input = new ElementCreator({
      tag: 'input',
      classNames: ['toggle__input'],
      attribute: [{ id: 'id', value: 'uniqueID' }, { id: 'type', value: 'checkbox' }],
      callback: [{ event: 'change', callback: e => this.handleChange(e.target) }],
    }).getElement();

    const spanOut = new ElementCreator({
      tag: 'span',
      classNames: ['toggle-track'],
    }).getElement();
    const spanIn = new ElementCreator({
      tag: 'span',
      classNames: ['toggle-indicator'],
    }).getElement();

    this.spanIcon = new ElementCreator({
      tag: 'span',
      classNames: ['checkMark'],
    }).getElement();

    this.iconSoundOn = new ElementCreator({
      tag: 'img',
      classNames: [],
      attribute: [{ id: 'src', value: iconOn }],
    }).getElement();

    this.iconSoundOff = new ElementCreator({
      tag: 'img',
      classNames: [],
      attribute: [{ id: 'src', value: iconOff }],
    }).getElement();

    this.spanIcon.append(this.iconSoundOn);
    spanIn.append(this.spanIcon);
    spanOut.append(spanIn);
    label.append(input, spanOut);

    this.elementCreator.getElement().append(label);
  }

  handleChange(target) {
    this.spanIcon.replaceChildren();
    if (target.checked) {
      this.sound.statusSound = false;
      this.spanIcon.append(this.iconSoundOff);
    } else {
      this.sound.statusSound = true;
      this.spanIcon.append(this.iconSoundOn);
    }
  }
}
