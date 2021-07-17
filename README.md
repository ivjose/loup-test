# Recipe App

This application build in React

## Boilerplate feature

- Installed `eslint` and `prettier` setup of greater development experience and follows Airbnb Style Guide
- Installed `redux` for global state management
- Used `Material UI` for faster and easier web development.
- Installed `husky` and `lint-stage` for lint check on initial commit and running test before push commit to have quality code checking
- Used `json-server` for creating local endpoint.

## Installation

1. Install all package dependencies

```bash
npm install
# or
yarn
```

2. Run the local `json-server` this will open [http://localhost:3030](http://localhost:3030)

```bash
npm run server
# or
yarn server
```

3. Run the client application and this will open [http://localhost:3000](http://localhost:3000)

```bash
npm start
# or
yarn start
```

## Unit test

- Run test in the interactive watch mode.

```bash
npm test
# or
yarn test
```

- Run test in the interactive watch mode with coverage.

```bash
npm run test:coverage
# or
yarn test:coverage
```

## Visual Studio Code local settings

This is for auto format and fixes all eslint on saving files.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
