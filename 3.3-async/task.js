class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {

    function idInCollection(alarm) {
      return alarm.id === id;
    }

    if (typeof id === 'undefined') {
      throw new Error ('Неправильное действие');
    }
    let foundAlarm = this.alarmCollection.find(idInCollection);
    if (typeof foundAlarm === 'undefined') {
      this.alarmCollection.push(new Clock(time, callback, id));
    } else {
      console.error('Такой будильник уже существует');
    }
  }

  removeClock(id) {

     function idInCollection(alarm) {
      return alarm.id === id;
    }

    let foundAlarm = this.alarmCollection.find(idInCollection);
    if (typeof foundAlarm === 'undefined') {
      return false;
    } else {
      this.alarmCollection.splice(foundAlarm, 1);
      return true;
    }
  }

  getCurrentFormattedTime() {
    let hours = new Date().getHours();
    let hh = (`0${hours}`).slice(-2);
    let minutes = new Date().getMinutes();
    let mm = (`0${minutes}`).slice(-2);
    return `${hh}:${mm}`;
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval(checkClockForEachAlarm, 1000, this);
    }

    function checkClockForEachAlarm(alarms) {
        alarms.alarmCollection.forEach(checkClock, alarms);
    }

    function checkClock(alarm) {
      if (this.getCurrentFormattedTime() === alarm.time) {
        alarm.callback();
      }
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    function printTimeAndID(alarm) {
      console.log(alarm.time, alarm.id);
    }
    return this.alarmCollection.forEach(printTimeAndID);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function Clock(time, callback, id) {
  this.time = time;
  this.callback = callback;
  this.id = id;
}

function testCase() {
  let alarms = new AlarmClock();

  alarms.addClock('07:48', () => {console.log('Просыпайся!'); alarms.printAlarms()}, 1);
  alarms.addClock('07:49', () => {console.log('Пора на работу!'); alarms.removeClock(2); alarms.printAlarms()}, 2);
  alarms.addClock('07:50', () => {console.log('Вставай!'); alarms.clearAlarms(); alarms.printAlarms()}, 3);

  alarms.start();
}
