'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (typeof percent === 'string') {
    percent = Number(percent);
  }

  if (typeof percent !== 'number' || Number.isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  }

  if (typeof contribution === 'string') {
    contribution = Number(contribution);
  }

  if (typeof contribution !== 'number' || Number.isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  }

  if (typeof amount === 'string') {
    amount = Number(amount);
  }

  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    return `Параметр "Общая сумма" содержит неправильное значение ${amount}`;
  }

  let principal = amount - contribution;
  let months = (date.getFullYear() - new Date().getFullYear()) * 12;
  let P = percent / 100 / 12;
  let monthlyPayment = principal * (P + P / (((1 + P) ** months) - 1));

  let totalAmount = monthlyPayment * months;

  return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {

  if (Boolean(name) === false) {
    name = 'Аноним';
  }

  return `Привет, мир! Меня зовут ${name}`;
}
