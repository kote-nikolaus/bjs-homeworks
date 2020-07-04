function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.every((element, index) => element === arr2[index]);
  }
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function memorize(fn, limit) {
  let memory = [];

  function mSum(...args) {
    function argsInMemory(entry) {
      return compareArrays(args, entry.args);
    }
    let foundEntry = memory.find(argsInMemory);
    if (typeof foundEntry === 'undefined') {
      let result = fn(...args);
      let entry = new Entry(args, result);
      if (memory.length >= limit) {
        memory.shift();
      }
      memory.push(entry);
      return result;
    } else {
      return foundEntry.result;
    }
  }
  return mSum;
}

function Entry(args, result) {
  this.args = args;
  this.result = result;
}
