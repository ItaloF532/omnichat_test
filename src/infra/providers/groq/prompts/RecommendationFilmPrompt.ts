export const recommendationFilmPrompt = (
  enhanced: string,
  description: string,
) => `
Sempre retorne as respostas em português. Nunca retorne as respostas em outro idioma que não seja o português.
Mesmo que o usuário te pergunte em outro idioma, a resposta deve ser, sem exceção, no idioma português. Nunca responda em inglês.

${enhanced}

Com as informações de filmes populares e mais bem availiados, retorne ao usuário os melhores filmes baseados na descrição abaixo.

${description}

Para cada filme que se encaixar na descrição, retorne o título do filme, um resumo da sinopse e a nota do filme.
`;
