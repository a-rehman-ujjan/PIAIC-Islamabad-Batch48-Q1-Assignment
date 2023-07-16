// Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person = "Ujjan";
console.log(person.toLowerCase())
console.log(person.toUpperCase())
function titleCase(txt: any) {
  let txttostring = txt.toString().toLowerCase()
  txt = txttostring.charAt(0).toUpperCase() + txttostring.slice(1)
  console.log(txt)
}
titleCase(person)
