'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let rootOne, rootTwo;
  
  if (d > 0) {
    rootOne = (-b + Math.sqrt(d))/(2*a);
    rootTwo = (-b - Math.sqrt(d))/(2*a);
    arr.push(rootOne);
    arr.push(rootTwo);
  } else if (d === 0) { 
      rootOne = -b/(2*a);
      arr.push(rootOne);
    } else {
    arr = [];
  };
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let now = new Date();
  let months = ((date.getFullYear() - now.getFullYear()) * 12 + date.getMonth() - now.getMonth());
  const numberPercent = Number(percent);
  const numberContribution = Number(contribution);
  const numberAmount = Number(amount);
  if (Number.isNaN(numberPercent)) {
    return(`Параметр "Процентная ставка" содержит неправильное значение ${percent}`)
  };
  if (Number.isNaN(numberContribution)) {
    return(`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`)
  };
  if (Number.isNaN(numberAmount)) {
    return(`Параметр "сумма кредита" содержит неправильное значение ${amount}`)
  };
  const credit = numberAmount - numberContribution;
  const p = 1 / 1200 * numberPercent;
  const payment =  credit * (p + (p / (((1 + p) ** months) - 1)));
  totalAmount = Number((payment * months).toFixed(2));
  return totalAmount;
}
