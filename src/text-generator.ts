import { faker } from '@faker-js/faker'

interface TextGeneratorOptions {

}

const MAX_LENGTH = 100

const generateText = (options: TextGeneratorOptions): string => {
  let text = ''

  while (text.length < MAX_LENGTH) {
    text += ' ' + faker.lorem.word()
  }
  return text
}

export default generateText
