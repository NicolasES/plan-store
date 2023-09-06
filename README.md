# plan-store
Este é um projeto pessoal criado para praticar e estudar determinadas tecnologias e padrões de projeto.
O projeto está sempre em desenvolvimento e atualização, com a intenção de ter um local de consulta de técnicas e padrões que utilizo. 

Para ter um ponto de partida imaginei a construção de um e-commerce totalmente do zero. 

O **Back-end** está sendo desenvolvido com Typescript sem a utilização de grandes frameworks.
A arquitetura foi definida com base meus próprios estudo segindo conceitos de DDD e Clean Architecture conforme julguei o que seria correto e confortável para o desenvolvimento.

No **Front-end** está sendo utilizado VueJS mas não é foco desse projeto por enquanto, é apenas uma forma amigável de visualizar as funcionalidades e utilizá-las. 

## Como executar a API

* Baixar e instalar as dependências com o comando:
```
npm install
```
* Se necessário alterar a "port" onde o projeto será executado, alterar alinha `PORT=300` no arquivo `.env`
* Executar o projeto com comando:
```
npm run dev
```
* Para rodar os testes executar o comando:
```
npm run test
```
ou para rodar os testes e coletar a cobertura de código:
```
npm run test-coverage
```

### Algumas bibliotecas utilizadas na API:
- Typescript (https://www.typescriptlang.org/)
- express (https://expressjs.com/pt-br/) - para servidor http
- tsyringe (https://github.com/microsoft/tsyringe) - para injeção de dependências
- yup (https://github.com/jquense/yup) - para validação de dados de entrada
- dotenv (https://github.com/motdotla/dotenv) - para variáveis de ambiente 
- jest (https://jestjs.io/pt-BR/) para execução de testes
- redis (https://redis.io/) - cache de dados
- mongoose (https://mongoosejs.com/) - banco de dados não relacional
- winston (https://github.com/winstonjs/winston) - para criar logs
- winston-elasticsearch (https://github.com/vanthome/winston-elasticsearch) - enviar logs do winston diretamente para o elasticsearch
