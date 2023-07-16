// Q44 - Sandwiches

function items(...items) {
  console.log("summary,\n\tItems on the sandwich: " + items.join(", ") + " (" + items.length + ")")
}

items("item 1", "item 2", "item 3")
items("item 1", "item 2", "item 3", "item 4", "item 5")
items("item 1", "item 2")
