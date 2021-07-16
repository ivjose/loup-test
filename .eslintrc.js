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
  plugins: ['react', 'jest', 'prettier', 'testing-library'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
}
