'use strict';

//Задача 1

function getSolutions(a, b, c) {
  const D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return {
      D,
      roots: []
    };
  }

  if (D === 0) {
    let x1 = -b / (2 * a);
    return {
      D,
      roots: [x1]
    };
  }

  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);
  return {
    D,
    roots: [x1, x2]
  };
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2 + ${b}x + ${c} = 0`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X\u2081 = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
  }
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
  return average;
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

function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  }
  if (secret === 1) {
    return 'Эмильо';
  }
}

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  }
}
