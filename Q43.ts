// Q43 - Unchanged Magicians
function show_magicians(names_array) {
  names_array.forEach((x) => {
    console.log(x)
  })
}
let magicians = ["magician 1", "magician 2", "magician 3", "magician 4", "magician 5"]
let copy_magicians = magicians.map((i) => {
  return i
})
function make_great(magicians) {
  magicians.forEach((x, i) => {
    magicians[i] = "the Great " + magicians[i]
  })
}
make_great(copy_magicians)
show_magicians(magicians)
show_magicians(copy_magicians)
