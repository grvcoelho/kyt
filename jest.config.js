module.exports = {
  collectCoverageFrom: [
    './components/**/*.{js,jsx}',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/script/setupTests.js',
  testMatch: [
    '<rootDir>/./**/?(*.)(spec|test).js?(x)',
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
}
