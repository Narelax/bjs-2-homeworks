// Задача №1. Форматтер чисел
function parseCount(value) {
  if (isNaN(Number.parseInt(value, 10))) {
    throw new Error('Невалидное значение')
  } else {
    return Number.parseInt(value);
  }  
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch(err) {
    //return (err.name + ": " + err.message);
    return (err)
  }
}
// Задача №2. Треугольник

class Triangle{
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    
    if (!(((this.sideA + this.sideB) > this.sideC) && ((this.sideA + this.sideC) > this.sideB) && ((this.sideC + this.sideB) > this.sideA))) {
      throw new Error('Треугольник с такими сторонами не существует')
    }
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  getArea() {
    let p = (this.sideA + this.sideB + this.sideC) / 2;
    return Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC)
  } catch (err) {
      return {
        getArea() {
          return 'Ошибка! Треугольник не существует'
        },
        getPerimeter() {
          return 'Ошибка! Треугольник не существует'
        }
      }
  }
}