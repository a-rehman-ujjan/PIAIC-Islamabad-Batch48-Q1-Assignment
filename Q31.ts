// Q31 - No Users
users = []
if (users.length == 0) {
  console.log("We need to find some users!")
} else {
  users.forEach((x) => {
    if (x == "admin") {
      console.log("Hello admin, would you like to see a status report?")
    } else (
      console.log(" Hello " + x + ", thank you for logging in again.")
    )
  })
}
