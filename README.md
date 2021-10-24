# Test project use prisma and nestJS

Prisma 2 + NestJS with few APIs

## Contents

- [Scripts](#scripts)
- [What is used](#what-is-used)

## Scripts

#### Start dev server

```sh
npm start:dev
```
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

#### Build app

```sh
npm run build
```
Builds the app for production to the build folder - `/dist`

#### Lint code format

```sh
npm run prettier:check
```
Lint project with [prettier](https://prettier.io/) and his config

#### Lint project

```sh
npm run lint
```
Lint all the project with [ESlint](https://eslint.org/), [prettier](https://prettier.io/)


#### Fix code format

```sh
npm run prettier:fix
```
Fix code format on all the project with [prettier](https://prettier.io/) and his config

#### Fix all the project

```sh
npm run fix:all
```
Fix typing errors and code format

#### Run local build

```sh
npm run build && http-server
```
Before, you need install [http-server](https://github.com/http-party/http-server) globally - `npm install http-server -g`

## What is used

#### Base
- Prisma 2 - [prisma.io](https://www.prisma.io/)
- NestJS  - [nestjs.com](https://nestjs.com/)

#### Tools
- Prettier - [prettier.io](https://prettier.io/)
- ESLint - [eslint.org](https://eslint.org/)
