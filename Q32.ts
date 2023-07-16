// Q32 - Checking Usernames

let current_users = ["john", "nick", "Willi", "sam", "UJJAN"]
let new_users = ["john008", "nick11", "willi", "sam77", "Ujjan"]

let c_users_lower = current_users.map((i) => {
  return i.toLowerCase()
})

new_users.forEach((x) => {
  if (c_users_lower.indexOf(x.toLowerCase()) != -1) {
    console.log("the person will need to enter a new username, " + x + " is already taken.")
  }
  else (
    console.log("username (" + x + ") is available")
  )
})
