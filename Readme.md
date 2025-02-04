## Desafio: Construindo um Chatbot especialista em Cinema.

Como requisitado, foi criado um projeto que utiliza de frameworks para interagir com LLMs.
Foram utilizados os modelos: gemma2-9b-it e mixtral-8x7b-32768

O gemma utilizei para efetuar consultas e extrair dados mais pontuais, como:

- Classificar a pergunta do usuário.
- Extrair o título do filme de um prompt do usuário.
- Pesquisar sobre apenas 1 filme

Enquanto o mixtral, devido a sua maior capacidade de input tokens utilizei para lhe dar com recomendações
de títulos populares e mais bem avaliados.

## Alguns disclaimers

### Sobre o Agente

O controller do projeto agiu como um agente. E/ou se preferir a aplicação toda poderia ser um agente.

### Sobre o RAG

Podería e pensei em tokenizar algumas das informações da api TheMovieDb e armazenar em uma vector database, entretando seria um overenginnering.
Já que eu poderia fazer as consultas na API e usar os dados como contexto para o LLM.

### Sobre o GuardRails

Não conhecia o conceito. Vi existem algumas ferramentas no mercado que são um "middleware" (no final das contas acaba sendo um middleware, só muda o nome)
entre o usuário e a LLM para evitar problemas relacionados a segurança e prompts indevidos.
Dados o fato de que não encontrei nenhum alternativa gratuita, utilizei o próprio LLM como um middleware para filtrar perguntas nesse sentido malicioso e manter as respostas
voltadas apenas para dados de filmes.

## Sobre o projeto

Configuei o projeto com ts e nodemon para melhor experiência no desenvolvimento.
Também deixei configurado um script para transpilar o projeto para JS.

Para rodar o projeto, , com suas envs configuradas, basta rodar o seguinte comando em seu terminal:

```
npm i && npm start
```

## Sobre o micro serviço para executar as perguntas

Para executar as perguntas, deixei tanto
