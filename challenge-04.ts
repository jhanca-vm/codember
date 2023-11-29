const response = await fetch('https://codember.dev/data/files_quarantine.txt')
const list = await response.text()

const realFiles = list.split('\n')
  .filter((item) => {
    const [filename, checksum] = item.split('-')

    function getOccurrences(character: string) {
      return filename.split('').filter((value) => value === character).length
    }

    for (let index = 0; index < checksum.length; index++) {
      const currentValue = checksum[index]

      if (index > 0) {
        const previousValue = checksum[index - 1]

        if (filename.indexOf(currentValue) < filename.indexOf(previousValue)) {
          return false
        }
      }

      const occurrences = getOccurrences(currentValue)

      return occurrences === 1
    }
  })
  .map((item) => item.split('-')[1])

console.log(realFiles[32])
