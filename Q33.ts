// Q33 - Ordinal Numbers

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums.forEach((x) => {
  if (x == 1) {
    console.log(x + "st")
  }
  else if (x == 2) {
    console.log(x + "nd")
  }
  else if (x == 3) {
    console.log(x + "rd")
  }
  else if (x > 3) {
    console.log(x + "th")
  }
})
