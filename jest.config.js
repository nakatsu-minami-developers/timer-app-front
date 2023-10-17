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
    "vee-validate/dist/rules": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  ]
}