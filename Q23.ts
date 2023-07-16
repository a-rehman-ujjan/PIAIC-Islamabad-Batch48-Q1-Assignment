// Q23 - Conditional Tests

//i used some code from Q22
type programminglanguage = {
  year: number,
  creator: string,
  objectoriented: boolean,
}

const Javascript: programminglanguage = {
  year: 1995,
  creator: "Brendan Eich",
  objectoriented: true,
}
const Python: programminglanguage = {
  year: 1991,
  creator: "Guido van Rossum",
  objectoriented: true,
}
const PHP: programminglanguage = {
  year: 1995,
  creator: "Rasmus Lerdorf",
  objectoriented: true,
}

console.log("is guests.length  == 8? | i predict true")
console.log(guests.length == 8)

console.log("is guests.length  == 9? | i predict false")
console.log(guests.length == 8)

console.log("is 48*65  == 811? | i predict false")
console.log(48 * 65 == 811)

console.log("is typeof javascript  == typeof PHP? | i predict true")
console.log(typeof Javascript == typeof PHP)

console.log("is Javascript.year  == PHP.year? | i predict true")
console.log(Javascript.year == PHP.year)

console.log("is PHP.year  == Python.year? | i predict false")
console.log(PHP.year == Python.year)

console.log("is 89 > 89? | i predict false")
console.log(89 > 89)

console.log("is Python.creator  == number? | i predict false")
console.log(Python.creator == "pakistani")

console.log("is Javacript.creator.length  == 0? | i predict false")
console.log(Javascript.creator.length == 12)

console.log("is person.length < 0 ? | i predict false")
console.log(person0.length < 0)
