const response = await fetch('https://codember.dev/data/database_attacked.txt')
const list = await response.text()

const message = list.split('\n')
  .filter((item) => {
    const [id, username, email, age] = item.split(',')
    const alphanumeric = new RegExp('^[a-zA-Z0-9]+$')

    return (
      (!id || !username || !email) ||
      (
        !alphanumeric.test(username) ||
        !alphanumeric.test(id) ||
        !/^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$/.test(email)
      ) ||
      (age && isNaN(Number(age)))
    )
  })
  .reduce((accumulator, currentValue) => {
    const [, username] = currentValue.split(',')

    return accumulator + username[0]
  }, '')

console.log(message)
