<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Github-author-JuanCamilo97-stack] (https://github.com/JuanCamilo97-stack/library.git) feat/develop

## Installation
empezar con el proyecto 
primer comando  
npm i -g  @nestjs/cli
verificar nest --version

crear proyecto
nes new nombre de proyecto

una vez creado solo dejamos en el src el app.module.ts y el main.ts

"nest g mo users" para crear el modulo
"nest g s users/service/users -- flat " para crear el service
"nest g co users/controllers/users -- flat

```bash
$ yarn install
$ npm install

crear docker-compose.yml= New-Item -ItemType File -Name "docker-compose.yml"
# crear carpeta db con init.sql 

# 1) New-Item -ItemType Directory -Name "db"
# 2) New-Item -ItemType File -Path "db\init.sql"

Una vez conectado el docker debes subir el servcio con el comando 
docker-compose up (en caso tal de haber varios servicios y solo querer definir uno solo pones el nombre que le pusiste )


demas dependencias a instalar 
npm install --save @nestjs/typeorm typeorm pg (el pg se debe a instalar el postgres)

```

```docker

## Running docker-compose
$ docker-compose exec postgres bash
$ docker-compose up  name del proyecto(-d postgres )
para ingresar al docker desde la terminal 
docker-compose exec postgres_sql bas ---  despues de exec el nombre del archivo
una vez hecho esto entramos a la base de datos de docker para crear la tabla
con ls se ve la estructura 
luego agregamos el comando ( psql -h localhost -d (nombre de la base de datos (my_db) -U (nombre usuario(juandevlop) ))) psql -h localhost -d my_db -U juandevlop, con esto entras a la base de datos si te pide algo mas es la contraseña
asi ya estas en postgres
lueog debes instalar el orm

recuerde agregar las migraciones en el package.json
    "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
    "migrations:generate": "npm run typeorm -- migration:generate -n",
    "migrations:run": "npm run typeorm -- migration:run",
    "migrations:show": "npm run typeorm -- migration:show"
    

    para correr la migracion 
    npm run migrations:generate --init



```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
