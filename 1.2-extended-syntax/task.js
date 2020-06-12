"use strict";

function getResult(a,b,c) {
  let x = [];
  let resultOne;
  let resultTwo;

  let D = b ** 2 - 4 * a * c;

  if (D === 0) {
    resultOne = -b / (2 * a);
    x.push(resultOne);
  }
  else if (D > 0) {
    resultOne = (-b + Math.sqrt(D)) / (2 * a);
    resultTwo = (-b - Math.sqrt(D)) / (2 * a);
    x.push(resultOne, resultTwo);
  }

  return x;
}

function getAverageMark(marks) {
    let averageMark = 0;
    let sum = 0;

    if (marks.length === 0) {
      return 0;
    }

    if (marks.length > 5) {
      marks = marks.slice(0, 5);
    }

    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }

    averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
   let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
   let result;

   if (age >= 18) {
     result = `Не желаете ли олд-фэшн, ${name}?`;
   } else {
     result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
   }

    return result;
}
