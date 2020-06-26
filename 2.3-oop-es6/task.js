'use strict';

//Задание 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
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

//Задание 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(property, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][property] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

//Задание 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade < 1 || grade > 5 || typeof grade !== 'number') {
      console.log(`Вы попытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
    } else if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(grade);
    return subject.length;
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.marks[subject].length; i++) {
      sum += this.marks[subject][i];
    }
    return sum / this.marks[subject].length;
  }

  getTotalAverage() {
    if (Object.values(this.marks).length === 0) {
      return 0;
    }
    let sum = 0;
    for (let subject in this.marks) {
      sum += this.getAverageBySubject(subject);
    }
    return sum / Object.values(this.marks).length;
  }
}
