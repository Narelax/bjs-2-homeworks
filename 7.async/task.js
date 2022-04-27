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
    if (this.timerId === null) {
      setInterval(() => {
        this.alarmCollection.forEach((elem) => {
          if (elem.time === this.getCurrentFormattedTime()) {
            return elem.callback(); 
          }
        })
      }, 2000)
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
      console.log(elem.callback())
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}



const testCase = () => {
  clockTest = new AlarmClock();
  let timeNowCheck = clockTest.getCurrentFormattedTime
    clockTest.addClock(timeNowCheck(), () => console.log('первый пошел'), 1)
    clockTest.addClock(timeNowCheck(), () => console.log('второй'), 2);
    clockTest.addClock(timeNowCheck(), () => console.log('третий'), 3); 
    /*setTimeout(() => {  
      clockTest.addClock(timeNowCheck(), () => console.log('второй'), 2);
    }, 10000)
    clearTimeout(clockTest.timerId);*/
  clockTest.start()
  clockTest.printAlarms()
  clockTest.clearAlarms()
  console.log(`печать всех будильников в кол-ве: ${clockTest.alarmCollection.length}`);
  }
  testCase()