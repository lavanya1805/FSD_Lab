function isFirstCharUpperCase(str) {
    return /^[A-Z]/.test(str);
  }
  
  console.log(isFirstCharUpperCase("Hello")); // Output: true
  console.log(isFirstCharUpperCase("world")); // Output: false
  