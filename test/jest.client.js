module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom',
  // before Jest is loaded
  // setupFiles: [],
  // after Jest is loaded
  setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 4,
      lines: 17,
      functions: 20,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      functions: 100,
    },
  },
};
