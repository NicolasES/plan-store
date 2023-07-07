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