  /*const add = (...numbs) => {
    let sum = 0;
    for (let numb of numbs) {
      sum += numb;
    }
    return sum;
  }*/
  
function cachingDecoratorNew(func) {
  let cache = {}; 
  function wrapper(...args) {
    let result = func(...args);
    let hash = args.join(',');
    cache[hash] = result;

    for ( let hash in cache) {
      if ((Object.values(cache)).includes(hash)) { 
        return "Из кэша: " + cache[hash]
      }

      if (Object.keys(cache).length > 5) { 
        delete cache[hash];
        break;
      } 

    console.log(cache)
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
    }
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
      func(...args)
      isThrottled = true;
    }
  }
}
 
function debounceDecorator2(func) {
  let isThrottled = false;
  let timeout;
  function wrapper(...args) {
    wrapper.count++;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      console.log(wrapper.count);

    }, ms)
    if (!isThrottled) {
      func(...args);
      isThrottled = true;
    }
  };
  wrapper.count = 0;
  return wrapper;
}
