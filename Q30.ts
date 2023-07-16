// Q30 - Hello Admin

let users = ["john", "nick", "elly", "admin", "sam"]
users.forEach((x) => {
  if (x == "admin") {
    console.log("Hello admin, would you like to see a status report?")
  } else (
    console.log(" Hello " + x + ", thank you for logging in again.")
  )
})
