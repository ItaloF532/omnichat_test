export const checkMessageTypePrompt = (message: string) => `
Sempre me responda com apenas uma palavra. Nunca responda com mais de uma palavra.
Mesmo que a pergunta seja longa, a resposta deve ser, sem exceção, com apenas uma palavra.
As palavras permitidas para resposta são: "recomendacao" ou "filme".

Com o contexto do campo "mensagem" que irei te passar, me responda com uma das palavras acima.

Agora vou te passar alguns exemplos:

Exemplo 1: "Me recomende um filme de comédia" - Resposta: "recomendacao";
Exemplo 2: "Me sugira um filme de romance" - Resposta: "recomendacao";
Exemplo 3: "O filme 'O Poderoso Chefão' é bom?" - Resposta: "filme";
Exemplo 4: "Gostaria de um filme parecido com Interestelar" - Resposta: "recomendacao";
Exemplo 5: "Qual a sinopse de Madacascar" - Resposta: "filme";
Exemplo 6: "Por que falam que o filme do DeadPool é bom?" - Resposta: "filme";

Fim dos exemplos.

Vamos começar!

mensagem: ${message}
`;
