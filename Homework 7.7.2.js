function calculate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) {
          return "Division by zero is not allowed";
        }
        return a / b;
      default:
        return "Invalid operator";
    }
  }
        
  const obj = {};
        
  const result = calculate.apply(obj, [2, 3, "+"]);
        
  console.log(result);
    
