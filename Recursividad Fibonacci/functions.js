const fibonacci = (n) => {
  let initial = 0;
  let temp = 1;
  let result = 0;
  let num = [initial, temp];
  for (i = 2; result < n; i++) {
    result = temp + initial;
    result < n ? num.push(result) : null;
    initial = temp;
    temp = result;
  }
  console.log(JSON.stringify(num));
};

fibonacci(15);

const fibonacciR = (n, a = 0, b = 1, fibList = []) => {
  if (a <= n) {
    fibList.push(a);
    fibonacciR(n, b, a + b, fibList);
  }
  return fibList;
};

console.log(fibonacciR(15));
