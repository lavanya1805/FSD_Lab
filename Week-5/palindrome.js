function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  console.log(isPalindrome("Madam")); // Output: true
  console.log(isPalindrome("Hello")); // Output: false
  