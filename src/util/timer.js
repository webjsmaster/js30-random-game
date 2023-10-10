import Time from '../view/header/container/time/time.js';

export default class Timer {
  constructor() {
    // ======== > singleton < ======== //
    if (Timer.exists) {
      return Timer.instance;
    }
    Timer.instance = this;
    Timer.exists = true;
    // ======== > singleton < ======== //
    this.time = 0;
    this.timeElement = new Time();
  }

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.time += 1;
      this.timeElement.setTextTime(this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  getTime() {
    return this.time;
  }
}
