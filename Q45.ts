// Q45 - Cars

function cars(manufacturer, model, ...arg) {
  let obj = {
    manufacturer: manufacturer,
    model: model
  }
  for (let i = 0; i < arg.length; i + 2) {
    let key = arg[i]
    let value = arg[i + 1]
    obj[key] = value
  }
  console.log(obj)
}
cars("toyota", "Grande", "color", "silver", "sunroof", "Yes")
