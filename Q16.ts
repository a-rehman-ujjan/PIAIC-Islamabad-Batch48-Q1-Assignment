// Q16 - More Guests
let guests = ["Afraz", "Javaid", "Haseeb", "Malik Hassan", "Aqib"]
console.log("\nDear " + guests[0] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[1] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[2] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[3] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[4] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")

console.log("\n\nAfter some fortunate circumstances, we have managed to acquire a bigger dinner table, allowing us to accommodate more guests than we initially anticipated\n\n")
guests.unshift("Hassan ali")
guests.splice(3, 0, "Rehan")
guests.push("Faizan")
console.log(guests)

guests.forEach((i) => {
  console.log("\nDear " + i + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.")
})
