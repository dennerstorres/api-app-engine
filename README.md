# node-express-typescript-ci-cd

This is a starter Node.js API server project built on Express. (With TypeScript Support)

This was initially built for a Google Cloud Run project, but it could be used anywhere.

## Prerequisite

- Node 18

## Nice to have

- [NVM](https://github.com/nvm-sh/nvm)
- [VS Code](https://code.visualstudio.com/)
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Getting started

- Install dependencies

```
cd <project_name>
yarn install
```

- Run local development server

```
yarn run start-dev
```

- Using postman, curl, or your browser

```

GET http://localhost:8080
GET http://localhost:8080/ping
GET http://localhost:8080/articles
GET http://localhost:8080/articles/test

```

## ENV variables

The project uses [dotenv](https://github.com/motdotla/dotenv) to parse environment variables. To add environment variables to your project, simply, create a `.env` file in the root folder of the project. You can then reference it using `process.env.VAR_NAME`. For example, to change Node.js mode, simply add `NODE_ENV=production` or `NODE_ENV=development` to your `.env` file to change Node.js mode to production or development accordingly.

Remeber: it's not a good idea to push .env files to your repo!

## Project structure

```

node-express-typescript-ci-cd
├─ .editorconfig
├─ .eslintrc.json
├─ .github
│ └─ workflows
│ └─ build-test.yml
├─ .gitignore
├─ .nvmrc
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ Dockerfile
├─ LICENSE
├─ README.md
├─ error.log
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ src
│ ├─ common
│ │ ├─ http-exception.ts
│ │ └─ logger.ts
│ ├─ controllers
│ │ └─ articles.controller.ts
│ ├─ index.ts
│ ├─ middleware
│ │ ├─ error.middleware.ts
│ │ ├─ http-logger.middleware.ts
│ │ ├─ index.ts
│ │ └─ not-found.middleware.ts
│ ├─ routers
│ │ └─ articles.router.ts
│ └─ services
│ └─ articles.service.ts
├─ tests
│ └─ articles.test.ts
├─ tsconfig.json
└─ types
├─ articles.d.ts
└─ service-response.d.ts
```
