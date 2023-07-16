// Q15 - Changing Guest list

let guests = ["Afraz", "Javaid", "Haseeb", "Malik Hassan", "Aqib"]
console.log("\nDear " + guests[0] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[1] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[2] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[3] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[4] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")

console.log("\n\nUnfortunately, we have received news that one of our guests Mr." + guests[3] + " won't be able to make it to the dinner\n\n")
guests[3] = "umer"
guests.forEach((i) => {
  console.log("\nDear " + i + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.")
})
