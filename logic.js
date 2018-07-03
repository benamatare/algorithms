// Test variables to use and/or reference for
const arr = [1,2,3,4,5];
const str = "wHO dO YOU THinK YOu ArE?";

// --Remove Duplicates from an array-- //
removeDuplicates = arr => {
  const store = [];

  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1]) {
      store.push(arr[i]);
    }
  }
  return store;
}

removeDuplicates2 = arr => {
  const store = [];

  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1] || arr[i] == arr[i-1]) {
      store.push(arr[i]);
    }
  }
  return store;
}

removeDuplicates3 = arr => {

  const store = [];
  arr.sort();
  // Sort the array (smallest to largest)
  for (let i = 0; i < arr.length; i++) {
    arr[i] == arr[i+1] ? store.push(arr[i]) : null
  }
  return store;
}

removeDuplicates5 = arr => {
  return arr.filter((el, index, arr) => {
     return index == arr.indexOf(el)
  })
}

// --Reverse a string-- //
reverse = str => {
  str.split('').reverse().join('');
}

reverse2 = str => {
  const arr = str.split('');
  const store = [];
   for (i = arr.length; i--;) {
     store.push(arr[i])
   }
  return store.join('')
}

// --Palindrome-- //
palindrome = str => {
  return str === str.split('').reverse().join('') ?
  true : false;
}

// --Capitalize-- //
capitalize = str => {
  const store = [];
  const data = str.split('');
  store.push(data[0].toUpperCase());

  for (let i = 1; i < data.length; i++) {
    if (data[i - 1] == ' ') {
      store.push(data[i].toUpperCase())
    } else if (data[i - 1] != ' ') {
      store.push(data[i]);
    }
  }
  return store.join('')
}

// Jason Lim's thought provoking solution, since I keep neglecting MAP
capitalize = str => {
  let data = str.split(' ').map(el => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return data.split(' ');
}



// --FizzBuzz-- //

fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
};

fizzBuzz = num => {
  let i = 1;
  while (i < num) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
    i++
  }
}


// --Chunk an Array-- //
chunk = (arr, chunk) => {
  const store = [];
  while (arr.length) {
    store.push(arr.splice(0, chunk))
  }
  return store;
}


// --Reverse a Int-- //
reverse = int => {
  const arr = Array.from(int.toString());
  const newInt = arr.reverse().join('')
  return parseInt(newInt) * Math.sign(int);
}

// --Sum of n length integer-- //
sum = int => {
  const arr = Array.from(int.toString());
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    count += parseInt(arr[i])
  }
  return count
}

sum = int => {
  const arr = Array.from(int.toString());
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    let val = parseInt(arr[i]);
    !val ? null : count += parseInt(arr[i]);
  }
  return count * Math.sign(int)
}


// --Fiboncci-- //

// Iterative
fib = int => {
  const result = [0,1];
  for (let i = 2; i <= int; i++) {
    const a = result[i - 1]; // 1 | 1
    const b = result[i - 2]; // 0 | 1
    result.push(a + b); // 0 + 1 | 2
  }
  return result[int] // [0,1,1] -> [4]
}

// Recursive
fib2 = int => {
 if (int < 2) {
   return int;
 }
 return fib2(int-1) + fib(int-2);
}
