// Q42 - Great Magicians
function show_magicians(names_array) {
  names_array.forEach((x) => {
    console.log(x)
  })
}
let magicians = ["magician 1", "magician 2", "magician 3", "magician 4", "magician 5"]
function make_great(magicians){
  magicians.forEach((x, i)=>{
    magicians[i] = "the Great " + magicians[i]
  })
}
make_great(magicians)
show_magicians(magicians)
