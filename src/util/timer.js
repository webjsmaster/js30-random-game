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
      this.timeElement.setTextTime(this.msToTime(this.time));
    }, 100);
  }

  msToTime(duration) {
    const milliseconds = Math.floor(duration % 10);
    let seconds = Math.floor((duration / 10) % 60);
    let minutes = Math.floor((duration / (10 * 60)) % 60);
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}.${milliseconds}`;
  }

  stop() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.time = 0;
    this.timer = null;
  }

  getTime() {
    return this.msToTime(this.time);
  }
}
