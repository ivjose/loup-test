module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', 'jest', 'prettier', 'testing-library'],
  extends: [
    'react-app', // eslint-config-react-app
    'react-app/jest',
    'airbnb', // eslint-config-airbnb
    'prettier', // eslint-config-prettier
    'plugin:testing-library/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },

  // overrides: [
  //   {
  //     // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
  //     files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  //     extends: ['plugin:testing-library/react'],
  //   },
  // ],
}
