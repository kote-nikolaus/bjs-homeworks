'use strict';

//Задача 1

String.prototype.isPalindrome = isPalindrome;

function isPalindrome() {
  let symbols = this.toLowerCase().split("");

  while (symbols.includes(" ")) {
    symbols.splice(symbols.indexOf(" "), 1);
  }

  while (symbols.includes(",")) {
    symbols.splice(symbols.indexOf(","), 1);
  }

  return (symbols.join() === symbols.reverse().join());
}

//Задача 2

function getAverageMark(marks) {

  if (marks.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
  }
  let average = sum / marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage;
}

function getAverageScore(data) {

  let averageMarks = {};

    for (let subject in data) {
      let marks = data[subject];
      averageMarks[subject] = getAverageMark(marks);
      }

    averageMarks.average = getAverageMark(Object.values(averageMarks));

    return averageMarks;
  }

//Задача 3

function checkBirthday(birthday) {
  let now = Date.now();
  birthday = Number(new Date(birthday));

  const diff = now - birthday;

  const age = diff / (365.25 * 24 * 60 * 60 * 1000);

  return age >= 18;
}
