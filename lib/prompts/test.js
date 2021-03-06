const prompts = require('prompts')
let canceled = false

module.exports = async () => {
  const { test } = await prompts([
    {
      type: 'select',
      name: 'test',
      message: 'Testing utility:',
      choices: [
        { title: 'Ava', value: 'ava' },
        { title: 'Jest', value: 'jest' }
      ],
      initial: 0
    }
  ], {
    onCancel: prompt => {
      console.log('The generator process has been terminated. Please try again.')
      canceled = true
      return false
    }
  })

  return { test, canceled }
}
