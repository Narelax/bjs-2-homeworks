class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id,) {
    if (!id) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан')
    } else if (this.alarmCollection.some((elem) => elem.id === id)) {
      console.error('такой звонок уже есть');
    } else {
      this.alarmCollection.push({
        time,
        callback,
        id
      });
    }
  }

  removeClock(id) {
    let alarmLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((elem) => !(elem.id === id))
    let  alarmLengthAfter = this.alarmCollection.length;
    return alarmLength > alarmLengthAfter;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (!this.timerId) {
      console.log(this.timerId)
      return this.alarmCollection[0].callback();     
    } else {
    this.alarmCollection.id = setInterval(() => {
      this.alarmCollection.forEach((elem) => {
        function checkClock(elem) {
          if (elem.time === getCurrentFormattedTime()) {
          return elem.callback(); 
        }
        }
      })
    }, 2000)
   }
    /*for (let elem of this.alarmCollection) {
      function checkClock() {
        if (elem.time === getCurrentFormattedTime(elem.time)) {
          elem.time.callback();
        }
      }
      if (!elem.id) {
        this.timerId = setInterval(checkClock, 1000)
      }
    }*/
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
      console.log(elem.callback())
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}



/*const testCase = () => {
  clockTest = new AlarmClock();
  let timeNowCheck = clockTest.getCurrentFormattedTime
  clockTest.addClock(timeNowCheck(), () => console.log('первый пошел'), 1)
  //setTimeout(clockTest.addClock, 2000, timeNowCheck(), () => console.log('второй'), 2)
  
  clockTest.addClock(timeNowCheck(), () => console.log('второй'), 2)
  clockTest.start()
 // clockTest.removeClock(2)
  clockTest.printAlarms();

  }
  testCase()*/

  let clock = new AlarmClock();
console.log(clock.getCurrentFormattedTime())

clock.addClock("16:45", f => f, 1);
clock.addClock("16:45", f => f, 2);
console.log(clock.timerId)
console.log(clock.start())