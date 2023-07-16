// Q17 - Shrinking Guest List
let guests = ["Afraz", "Javaid", "Haseeb", "Malik Hassan", "Aqib"]

console.log("\nDear " + guests[0] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[1] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[2] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[3] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")
console.log("Dear " + guests[4] + ",\n\nWe hope this message finds you well. We wanted to reach out and invite you to a small dinner gathering that we are hosting at our humble abode.\n\nDate: 12-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.\n")

console.log("\n\nDue to unforeseen circumstances, we have encountered a delay with the delivery of the new dinner table we had planned to accommodate additional guests\n\nWe have space for only two guests")
console.log("\n\nDear " + guests.shift() + ", We’re sorry you can’t invite them to dinner\n\n")
console.log("\n\nDear " + guests.pop() + ", We’re sorry you can’t invite them to dinner\n\n")
console.log("\n\nDear " + guests.pop() + ", We’re sorry you can’t invite them to dinner\n\n")
console.log("\n\nDear " + guests.pop() + ", We’re sorry you can’t invite them to dinner\n\n")
console.log("\n\nDear " + guests.pop() + ", We’re sorry you can’t invite them to dinner\n\n")
console.log("\n\nDear " + guests.pop() + ", We’re sorry you can’t invite them to dinner\n\n")
console.log(guests)
guests.forEach((i) => {
  console.log("\nDear " + i + ",\n\nAs you know, We have encountered a delay with the delivery of the new dinner table we had planned to accommodate additional guests\n\n You're Still Invited\n\nDate: 13-july-2023\nTime: 8:00 pm\nLocation: 7th sky Rooftop, 7th avanue Islamabad.")
})
guests.pop()
guests.pop()
console.log(guests)
