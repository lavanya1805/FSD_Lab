function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  console.log(isLeapYear(2020)); // Output: 2020 is a leap year.
  console.log(isLeapYear(2021)); // Output: 2021 is not a leap year.
  