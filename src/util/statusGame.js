export default class StatusGame {  constructor() {    // ======== > singleton < ======== //    if (StatusGame.exists) {      return StatusGame.instance;    }    StatusGame.instance = this;    StatusGame.exists = true;    // ======== > singleton < ======== //  }  _statusGame = false;  get statusGame() {    return this._statusGame  }  set statusGame(status) {    this._statusGame = status;  }}