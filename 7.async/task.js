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
    let alarmLengthAfter;
    console.log(alarmLength)
    this.alarmCollection = this.alarmCollection.filter((elem) => !(elem.id === id))
    alarmLengthAfter = this.alarmCollection.length;
    console.log(alarmLengthAfter)
    return alarmLength > alarmLengthAfter;
  }

  getCurrentFormattedTime() {
    let timeNow = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeNow
  } 

  start() {
    for (let elem of this.alarmCollection){
      function checkClock() {
        if (elem.time === getCurrentFormattedTime(elem.time)) {
          elem.time.callback(); 
      } 
      } 
      if (!elem.id) {
        this.timerId = setInterval(checkClock(elem), 1000)
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
  //setTimeout(clockTest.addClock, 2000, timeNowCheck(), () => console.log('второй'), 2)
  
  clockTest.addClock(timeNowCheck(), () => console.log('второй'), 2)
  clockTest.start()
 // clockTest.removeClock(2)
  clockTest.printAlarms();

  }
  testCase()