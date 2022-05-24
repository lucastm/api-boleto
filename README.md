# Api Boleto

## Descrição

Api para obter informações e validação de um boleto a partir do seu código numérico.

## Pré-requisitos

- Node versão 16 ou mais recente
- Npm versão 8 ou mais recente

## Instalação

```bash
$ npm install
```

## Executar localmente a API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Acessar localmente a API

```bash

Deverá ser utilizado apenas o método GET e o path deve ser configurado como
"http://localhost:8080/boleto/xxxxxx".
Exemplo de resquest
GET/ http://localhost:8080/boleto/21290001192110001210904475617405975870000002000

```

## Executar suites de teste

```bash
# unit tests
$ npm run test
```
