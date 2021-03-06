const prompts = require('prompts')
let canceled = false

module.exports = async () => {
  const { pkg } = await prompts([
    {
      type: 'select',
      name: 'pkg',
      message: 'Default package manager:',
      choices: [
        { title: 'YARN', value: 'yarn' },
        { title: 'NPM', value: 'npm' }
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

  return { pkg, canceled }
}
