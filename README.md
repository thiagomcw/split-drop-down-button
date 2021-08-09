# Split Drop Down Button

## Dependências

- Docker: >= 20;
- Docker Compose: >= 1.29;

## Setup

<p>Após clonar o projeto, acesse a pasta do mesmo e execute o seguinte comando:</p>

- `docker-compose up --build`;

Aguarde o processo de build chegar até o fim.

- Acesse no navegador: [http://localhost:801](http://localhost:801);

## Testes

- Acesse o container da aplicação: `docker exec -it Split-Drop-Down-Node bash`;
- Execute os testes: `yarn test:unit`;
