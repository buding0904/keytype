import randWord from 'random-words'

interface TextGeneratorOptions {

}

const MAX_LENGTH = 100

const generateText = (options: TextGeneratorOptions): string => {
  let text = ''

  while (text.length < MAX_LENGTH) {
    if (text !== '') {
      text += ' '
    }
    text += randWord(1)
  }
  return text
}

export default generateText
