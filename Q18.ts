// Q18 - Seeing the World

let destinations = ["Endless Waterfall - New Zealand", "Chamonix - France", "Seljalandsfoss - Iceland", "Georgia", "Hunza Valley"]
// Print your array in its original order.
console.log(destinations)
// Print your array in alphabetical order without modifying the actual list.
let d_a = destinations.map((i) => {
  return i
})
console.log(d_a.sort())
// Show that your array is still in its original order by printing it.
console.log(destinations)
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(d_a.reverse())
// Show that your array is still in its original order by printing it again
console.log(destinations)
// Reverse the order of your list. Print the array to show that its order has changed.
destinations.reverse()
console.log(destinations)
// Reverse the order of your list again. Print the list to show it’s back to its original order.
destinations.reverse()
console.log(destinations)
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
destinations.sort()
console.log(destinations)
// ort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
destinations.reverse()
console.log(destinations)
