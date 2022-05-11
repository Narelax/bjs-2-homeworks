  /*const add = (...numbs) => {
    let sum = 0;
    for (let numb of numbs) {
      sum += numb;
    }
    return sum;
  }*/
  
function cachingDecoratorNew(func) {
let cache = []; 
  function wrapper(...args) {
    const hash =  args.join(',');
    console.log("hash" + hash)
    console.log(cache)
    let idx = cache.findIndex((item) => Object.keys(item)[0] === hash)  
    
    if (idx !== -1 ) {
      console.log("Из кэша: " + cache[idx][hash]);
      return "Из кэша: " + cache[idx][hash];
    }
    
    let result = func(...args); 
    cache.push({[hash]: result});
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}
  
function debounceDecoratorNew(func, ms) {
  let isThrottled = false;
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args)
    }, ms)
    if (!isThrottled) {
      isThrottled = true;
    }
  }
}
 
function debounceDecorator2(func) {
  let isThrottled = false;
  let timeout;
  function wrapper(...args) {
    let count = 0;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      count++;
    }, ms)
    if (!isThrottled) {
      isThrottled = true;
    }
  };
return wrapper;
}
