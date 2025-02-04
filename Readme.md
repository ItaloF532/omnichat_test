## Desafio: Construindo um Chatbot especialista em Cinema.

Como requisitado, foi criado um projeto que utiliza de frameworks para interagir com LLMs.
Foram utilizados os modelos: gemma2-9b-it e llama-3.3-70b-versatile

O gemma utilizei para efetuar consultas e extrair dados mais pontuais, como:

- Classificar a pergunta do usuário.
- Extrair o título do filme de um prompt do usuário.
- Pesquisar sobre apenas 1 filme

Utilize o Ollama Versatile devido a sua maior capacidade de input tokens, assim forneci um maior contexto para lhe dar com recomendações
de títulos populares, mais bem avaliados, e recomendações baseadas em nome e/ou categorias.

## Alguns disclaimers

### Sobre o RAG

Podería e pensei em tokenizar algumas das informações da api TheMovieDb e armazenar em uma vector database, entretando seria um overenginnering.
Já que eu poderia fazer as consultas na API e usar os dados como contexto para o LLM.

### Sobre o GuardRails

Não conhecia o conceito. Vi existem algumas ferramentas no mercado que são um "middleware" (no final das contas acaba sendo um middleware, só muda o nome)
entre o usuário e a LLM para evitar problemas relacionados a segurança e prompts indevidos.
Dados o fato de que não encontrei nenhum alternativa gratuita, utilizei o próprio LLM como um middleware para filtrar perguntas nesse sentido malicioso e manter as respostas
voltadas apenas para dados de filmes.

## Sobre o projeto

**Lembre-se de configurar as variaveis de ambiente em um documento _.env_ na pasta _film_agent_**

Configuei o projeto com ts e nodemon para melhor experiência no desenvolvimento.
Também deixei configurado um script para transpilar o projeto para JS.

Para rodar o projeto, com suas envs configuradas, basta rodar o seguinte comando em seu terminal:

```
npm start
```

O comando irá instalar as dependências do LLM e todar a aplicação.

## Sobre o micro serviço para executar as perguntas

Para executar as perguntas, com a aplicação rodando, em um novo terminal execute:

```
npm run test-llm-agent
```

O qual lhe dará algumas opções para executar as perguntas, seja uma por vez, ou todas de uma vez para o LLM.
