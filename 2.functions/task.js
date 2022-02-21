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
    avg = Number((sum / arr.length).toFixed(2));
  }
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
  for (item of arrOfArr) {
    const resulrWorker = func(item);
    max = func(item[0]);
    if (max < resulrWorker) {
      max = resulrWorker;   
    }  
  };
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, resWorker2;
  min = arr[0];
  max = arr[0];
  resWorker2 = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    };
    if (arr[i] < min) {
      min = arr[i]
    };
    resWorker2 = Math.abs(Math.abs(max) - Math.abs(min));
  }
    //console.log(` разница макс и мин ${resWorker2}`);
    return resWorker2; 
    //console.log(` разница макс и мин ${resWorker2}`);
}
