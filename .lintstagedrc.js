const escape = require('shell-quote').quote
const isWin = process.platform === 'win32'

module.exports = {
  '**/*.{js,ts,tsx}': filenames => {
    const escapedFileNames = filenames.map(filename => `"${isWin ? filename : escape([filename])}"`).join(' ')
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint ${filenames.map(f => `"${f}"`).join(' ')}`,
      `stylelint ${filenames.map(f => `"${f}"`).join(' ')}`,
      `git add ${escapedFileNames}`
    ]
  },
  '**/*.{json,html,md,mdx}': filenames => {
    const escapedFileNames = filenames.map(filename => `"${isWin ? filename : escape([filename])}"`).join(' ')
    return [`prettier --write ${escapedFileNames}`, `git add ${escapedFileNames}`]
  }
}
