function fibonacci(num) {
// your code here
if (num === 0) {
    return 0;//0th fib
  } else if (num === 1) {//1st fib
    return 0; // If you consider the sequence to start with 0, as per the example
  } else if (num === 2) {//2nd fib
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let fib = 0;//do swaping
    
    for (let i = 2; i < num; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
    
    return fib;
  }
}

module.exports = fibonacci;
