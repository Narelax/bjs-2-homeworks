// ЗАДАЧА 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;  
  }

    fix() {
      this.state = this.state * 1.5; 
    }

    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;  
      } else {
        this._state = value;
      }
     }

    get state() {
      return this._state; 
    } 
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';   
  }   
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача №2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    } 
  }
  
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book
      } 
    }
    return null;
  }

  giveBookByName(bookName) {
    this.books.forEach((elem, index) => {
      if (elem === bookName) {
        this.books.splice(this.books[index], 1)
        return this.books[index]
      } else {
        return null;
      }
    })
  }
}

//Задача №3. Журнал успеваемости

class Student {
  constructor(name) {
    this.name = name;
    this.journal = {};
  }

  addMark(mark, subject) {
    try {
      if (mark > 0 && mark < 6 && mark % 1 === 0) {
        if (subject in this.journal) {
        this.journal[subject].push(mark)
      } else {
        this.journal[subject] = [mark]
      }
      //console.log(this.journal)
      } else {
        throw new Error
      }
    } catch(err) {
      //console.log(err + ": Ошибка, оценка должна быть числом от 1 до 5")
      return err + ": Ошибка, оценка должна быть числом от 1 до 5"
    }
  }

  getAverageBySubject(subject) {
    try {
      if (subject in this.journal) {
        let sum = 0
        this.journal[subject].forEach(mark => sum += mark)
        //console.log(sum / this.journal[subject].length)
        return sum / this.journal[subject].length
      } else {
        throw new Error
      }
    } catch(err) {
      //console.log(err + ": Несуществующий предмет")
      return err + ": Несуществующий предмет"
    }
  }
  
  getAverage() {
    let sumMarks = 0;
    let count = 0;
    Object.values((this.journal).forEach((elem) => {
      elem.forEach((mark) => {
        sumMarks += mark
        count++
    })}))
    return sumMarks / count;
  } 
}
/*
const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");*/