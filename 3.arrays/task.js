function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length) {
    result = arr1.every((elem, index) => elem === arr2[index])
  } else {
    result = false;
  }
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((elem) => elem > 0).filter((elem) => elem % 3 === 0).map((elem) => elem * 10);

  return resultArr; // array
}
