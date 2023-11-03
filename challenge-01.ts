const response = await fetch('https://codember.dev/data/message_01.txt')
const message = await response.text()
const map = new Map<string, number>()

for (const word of message.trimEnd().split(' ')) {
  const key = word.toLowerCase()
  const value = map.get(key)

  map.set(key, value ? value + 1 : 1)
}

console.log([...map].flat().join(''))
