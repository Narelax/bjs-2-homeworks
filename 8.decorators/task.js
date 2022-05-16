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
      let hash = args.join(',');
      if (hash in cache) {
        console.log("Из кэша: " + cache[hash]);
        return "Из кэша: " + cache[hash]
      } else {
        let result = func(...args);
        cache[hash] = result;
          if (Object.keys(cache).length > 5) { 
            delete cache[Object.keys(cache).shift()]
          }
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
  let timeout;
  function wrapper(...args) {
    wrapper.count++;
    clearTimeout(timeout);

    if (!timeout) {
      timeout = true;
      func(...args);
    }

    timeout = setTimeout(() => {
      func(...args);
      console.log(wrapper.count);

    }, ms)
  };
  wrapper.count = 0;
  return wrapper;
}
