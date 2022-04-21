class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(id, time, callback) {
    if (!id) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан')
    } else if (this.alarmCollection.some((elem) => elem.id === id)) {
        console.error('такой звонок уже есть');
    } else {
      this.alarmCollection.push({
      id,
      time,
      callback
    });
    }  
  }
  
  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((elem) => elem.id === id)
  }

  getCurrentFormattedTime() {
    let date = new Date()
    let minutes;
    let hours;
    if (date.getMinutes() < 10) {
      minutes =  `0${date.getMinutes()}`;
    } else {
      minutes = `${date.getMinutes()}`;
    }
    if (date.getHours() < 10) {
      hours =  `0${date.getHours()}`;
    } else {
      hours = `${date.getHours()}`;
    }
    return this.time = (`${hours}:${minutes}`)
  } 

  start() {
    let checkClock = () => {
      if (this.time === this.time.getCurrentFormattedTime()) {
        this.time.callback();
      }
      if (!this.timerId) {
        this.timerId = setInterval(this.alarmCollection.forEach((elem) => elem.checkClock()));  
      }
    }  
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = null;
  }

  printAlarms() {
    this.alarmCollection.forEach((elem) => {
      console.log(`id= ${elem.id} time= ${elem.time}`)
    })
  }                             

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;
  }
}


let clock = new AlarmClock();
const testCase = () => {
  console.log(clock.addClock("00:04", () => console.log('первый пошел'), 1))
  setInterval(testCase, 1000);
  console.log(clock.addClock("00:04", () => {console.log('второй пошел'), 2; clock.removeClock(2)})) 
;
 }
/*setInterval(clock.addClock("16:45", () => console.log('первый пошел'), 1)));
console.log(clock.getCurrentFormattedTime())
console.log(clock.start())*/
