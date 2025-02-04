export const specificFilmPrompt = (enhanced: string, search: string) => `
Sempre retorne as respostas em português. Nunca retorne as respostas em outro idioma que não seja o português.
Mesmo que o usuário te pergunte em outro idioma, a resposta deve ser, sem exceção, no idioma português. Nunca responda em inglês.

Contexto: ${enhanced}

Utilize o contexto abaixo para fornecer uma resposta que mais se encaixe na pesquisa do usuário.
Inclua informações como título, sinopse, nota, categorias e demais informações relacionadas ao filme.
Considere o primeiro filme do contexto como o principal.
Os outros filmes do contexto devem ser citadas como lista no final, contendo o nome e data de lançamento.
Se o contexto contiver apenas um filme, não é necessário citar a lista de filmes.

Pesquisa: "${search}"
`;
