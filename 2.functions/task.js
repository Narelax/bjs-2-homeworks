// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    };
    if (arr[i] < min) {
      min = arr[i]
    };
    sum += arr[i];
  }
    avg = Number((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
 for (i = 0; i < arr.length; i++) {
  sum += arr[i];
 };
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (item of arrOfArr) {
    const resulrWorker = func(item);
    if (max < resulrWorker) {
      max = resulrWorker; 
    }  
  };
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  min = arr[0];
  max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    };
    if (arr[i] < min) {
      min = arr[i]
    };
  }
  return Math.abs(max - min);
}
//console.log(makeWork([[14,21,36],[15,26,39]],worker2))
