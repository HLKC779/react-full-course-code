import square, { add } from './math.js'
// 1. const, let and template strings
const name = 'Sara'
let score = 10
score = score + 5
console.log(`${name} has ${score} points`)

// 2. arrow functions
const double = (n) => n * 2
const greet = (who) => {
  return `Hello, ${who}!`
}
console.log(double(4), greet('Omar'))

// 3. destructuring
const user = { id: 1, city: 'Lahore', age: 28 }
const { city, age } = user
const colors = ['red', 'green', 'blue']
const [first, second] = colors
console.log(city, age, first, second)
const player = { name, score }
console.log(player)

// 4. spread
const more = [...colors, 'purple']
const older = { ...user, age: 29 }
console.log(more, older, user.age)

// 5. map, filter and the ternary
const prices = [5, 12, 8, 20]
const doubled = prices.map((p) => p * 2)
const big = prices.filter((p) => p > 10)
const label = score > 10 ? 'high' : 'low'
const total = prices.reduce((sum, p) => sum + p, 0)
console.log(doubled, big, label, total)

// 6. modules
console.log(add(2, 3), square(4))

// 7. promises and async/await
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function main() {
  console.log('waiting...')
  await wait(1000)
  console.log('done after one second')
}

main()

// 8. find, optional chaining and ??
const people = [{ id: 1, name: 'Sara' }, { id: 2, name: 'Omar' }]
const omar = people.find((p) => p.id === 2)
const nobody = people.find((p) => p.id === 9)
console.log(omar.name, nobody?.name ?? 'not found')
