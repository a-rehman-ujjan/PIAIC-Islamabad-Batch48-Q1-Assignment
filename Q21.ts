// Q21 - think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

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

console.log(Javascript)
console.log(Python)
console.log(PHP)
