import { generate } from 'random-words'

const symbols = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
]

const randomBoolean = (probability: number = 0.5): boolean =>
  Math.random() > 1 - probability

const randomNumber = (): string => {
  return Math.floor(Math.random() * 10000).toString()
}

const randomSymbol = (): string => {
  const index = Math.floor(Math.random() * symbols.length)

  return symbols[index]
}

const generateText = (setting: AppSetting): string => {
  const words = generate({
    exactly: 50,
    minLength: 3,
    maxLength: 10,
    formatter: word => {
      let resultWord = word

      if (setting.enableUpperCase && randomBoolean()) {
        resultWord = randomBoolean()
          ? word.toUpperCase()
          : word.slice(0, 1).toUpperCase().concat(word.slice(1))
      }

      if (setting.enableNumbers && randomBoolean(0.3)) {
        resultWord += ` ${randomNumber()}`
      }

      if (setting.enableSymbols && randomBoolean(0.4)) {
        resultWord += `${randomSymbol()}`
      }

      return resultWord
    },
  }) as string[]

  let text = words.join(' ')

  return text
}

export default generateText
