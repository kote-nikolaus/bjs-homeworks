'use strict';

//Задание 1

function parseCount(stringToParse) {
  if (isNaN(Number.parseInt(stringToParse))) {
    const parsingError = new Error('Невалидное значение');
    throw parsingError;
  }
  return Number.parseInt(stringToParse);
}

function validateCount(stringToParse) {
  try {
    return parseCount(stringToParse);
  } catch(error) {
    return error;
  }
}

//Задание 2

class Triangle {
  constructor(sideA, sideB, sideC) {
    if ((sideA + sideB) < sideC || (sideA + sideC) < sideB || (sideB + sideC) < sideA) {
      const triangleError = new Error('Треугольник с такими сторонами не существует');
      throw triangleError;
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getPerimeter() {
    return Number((this.sideA + this.sideB + this.sideC).toFixed(3));
  }

  getArea() {
    let p = (this.getPerimeter() / 2);
    return Number((Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3));
  }
}

class ErrorTriangle {
  getPerimeter() {
    return 'Ошибка! Треугольник не существует';
  }

  getArea() {
    return 'Ошибка! Треугольник не существует';
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    let triangle = new Triangle(sideA, sideB, sideC);
    return triangle;
  } catch {
    return new ErrorTriangle;
  }
}
