function isLeapYear(year) {
      year = parseInt(year);
      if (year === NaN) return false;
      if (year % 4) return false;
      if (!(year % 100)) {
            if (!(year % 400)) {
                  return year;
            } else {
                  return false;
            }
      }
      return year;
}
console.log(isLeapYear(2024))
console.log(isLeapYear(2028))