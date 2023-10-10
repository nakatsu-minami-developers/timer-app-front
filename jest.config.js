module.exports = {
  "testEnvironment": "jsdom",
  "testEnvironmentOptions": {
    "customExportConditions": [
      "node",
      "node-addons"
    ]
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    ".*\\.(vue)$": "@vue/vue3-jest",
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}