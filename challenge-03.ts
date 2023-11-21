const response = await fetch('https://codember.dev/data/encryption_policies.txt')
const list = await response.text()

const invalidPasswords = list.split('\n')
  .filter((item) => {
    const [policy, password] = item.split(': ')
    const [range, character] = policy.split(' ')
    const [min, max] = range.split('-').map((value) => Number(value))
    const occurrences = password.split('').filter((value) => value === character)
    const isNotInRange = occurrences.length < min || occurrences.length > max

    return isNotInRange
  })
  .map((item) => item.split(': ')[1])

console.log(invalidPasswords[41])
