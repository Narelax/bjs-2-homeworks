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
      return this.state;  
    }

    set state(value) {
      if (value < 0) {
        this.state = 0;   
      } 
      if (value > 100) {
        this.state = 100;  
      }
      this._state = value;
    }

    get state() {
      return this._state; 
    } 
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, 'magazine');
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, 'book');
    this.author = author;   
  }   
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state, 'novel');
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state, 'fantastic');
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state, 'detective');
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
    for (let book in this.books) {
      if (this.books[type] === value) {
        return book
      } else {
        return null;
      }
    }
  }

  giveBookByName(bookName) {
    this.books.forEach((elem, index) {
      if (elem === bookName) {
        this.books.splice(index, this.books[index])
        return this.books[index]
      } else {
        return null;
      }
    })
  }
}