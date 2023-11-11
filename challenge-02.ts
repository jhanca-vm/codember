import 'console_write'

const response = await fetch('https://codember.dev/data/message_02.txt')
const text = await response.text()

let value = 0

for (const symbol of text) {
  switch (symbol) {
    case '#':
      value++
      break
    case '@':
      value--
      break
    case '*':
      value **= 2
      break
    case '&':
      console.write(value.toString())
  }
}

console.write('\n')
