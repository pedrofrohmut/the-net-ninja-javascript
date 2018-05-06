const items = document.getElementsByTagName('li')
document.addEventListener('DOMContentLoaded', e => {
  //### CONSTANTS ###
  const PI = 3.142
  const calcArea = r => PI * r * r
  console.log("the area is: " + calcArea(5))

  //### LET KEYWORD - Lexical Scope ###
  let x = 10
  if (x > 5) {
    let x = 4
    console.log('inside if x: ' + x)
  }
  console.log('outside if x: ' + x)

  // var doens't have loop block scope
  for (var i = 0; i < items.length; i++)
    items[i].onclick = () => console.log(i)
  console.log(i)

  // the "let j" variable is only valid inside the for loop block
  for (let j = 0; j < items.length; j++)
    items[j].onclick = () => console.log(j)
  // console.log(j) // doesnt create a global scope variable

  //### DEFAULT PARAMETERS ###
  const log = (val = "Hello World!") => console.log(val)
  log('hello')
  log()

  const logNinja = (name = "Ryu", belt = "Red", age = 25) =>
    console.log(
      "My name is " + name +
      " and my belt colour is " + belt +
      " and my age is " + age)
  logNinja("Pedro Frohmut", "Blue", 40)
  logNinja()
  logNinja("Pedro Frohmut")

  //### SPREAD_OPERATOR ###
  let meats = ['Ham', 'Salami', 'Bacon']
  console.log(...meats)

  let nums1 = [1,2,3]
  let nums2 = [4,5,6]
  console.log(nums2)
  let nums3 = [...nums1, ...nums2]
  console.log(nums3)

  const addNums = (a,b,c) => console.log(a+b+c)
  addNums(...nums1)
  addNums(...nums2)

  //### TEMPLATE_STRINGS ###
  let temp =`hello,
my name is ryu`
  console.log(temp)

  const logNinja2 = (name, age) => console.log(
    "My name is " + name + " and my age is " + age
  )
  logNinja2("Ryu", 24)
  const logNinja3 = (name, age) => console.log(
    `My name is ${name} and my age is ${age}`
  )
  logNinja3("Ken", 32)

  //### OBJECT_LITERALS ###
  let name = "Crystal"
  let belt = "Black"
  // ES5
  let ninja = {
    name: name,
    belt: belt
  }
  console.log(ninja)
  // ES6
  let ninja2 = {
    name,
    belt,
    chop: x => `You chopped the enemy ${x} times`
  }
  console.log(ninja2)
  console.log(ninja2.chop(15))

  //### NEW_STRING_METHODS ####
  // string.repeat(count)
  let str = 'graaaavy '
  console.log(str.repeat(3))

  // string.startsWith(searchString [, position ])
  str = 'goodbye'
  console.log(str.startsWith('good'))

  let youSay = 'goodbye'
  let iSay
  if (youSay.startsWith('goodbye'))
    iSay = 'hello'
  console.log(`you say ${youSay} and I say ${iSay}`)

  // string.endsWith(searchString [, length])
  console.log(str.endsWith('good', str.length - 3))

  // string.includes(searchString [, position])
  let test = "My name is Ryu"
  console.log(test.includes("names"))

  //### ARROWS_FUNCTIONS ####
  // ES5
  var ninjaGreetingOld = function() {
    console.log("Hiiiiyah!!");
  };
  // ES6
  const ninjaGreeting = name =>
    console.log(`${name} says Hiiiiyah!!`)
  ninjaGreeting("Ryu")

  let ninjaObj = {
    name: "Ryu",
    chop(x) {
      window.setInterval(() => {
        if (x > 0) {
          console.log(this.name + " chopped the enemy")
          x--
        }
      }, 1000)
    }
  }

  // ninjaObj.chop(6)

  //### SETS ####
  let names = new Set()
  names
    .add('Shaun')
    .add('Ryu')
    .add('Crystal')
    .add('Test')
  console.log(names, names.size)
  names.delete('Test')
  console.log(names, names.size)
  console.log(names.has('Ryu'))
  console.log(names.has('Test'))
  names.clear()
  console.log(names, names.size)

  let ninjas = ['Shaun' , 'Crystal', 'Yoshi', 'Ryu', 'Yoshi', 'Ryu']
  var refinedNinjas = new Set(ninjas)
  console.log(refinedNinjas)

  ninjas = [...refinedNinjas]
  console.log('ninjas: ', ninjas)

  //### Generators ####
  // creates an interator
  function* gen() {
    let x = yield 'pear'
    let y = yield 'banana'
    let z = yield 'apple'
    return x + y + z//'All done.'
  }
  let myGen = gen()
  console.log(myGen.next())
  console.log(myGen.next(10))
  console.log(myGen.next(5))
  console.log(myGen.next(3))


})
