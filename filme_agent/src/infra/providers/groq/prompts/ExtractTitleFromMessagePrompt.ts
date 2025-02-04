export const extractTitleFromMessagePrompt = (message: string) => `
Dado a mensagem abaixo extraia e retorne somente o título do filme que contém na mensagem.
A resposta deve estar em apenas uma linha.
Não inclua nenhuma outra informação além do título do filme.
Se não houve título de filme na mensagem responda "Nenhum".
Se houver mais de um título de filme na mensagem, retorne o primeiro título que encontrar.
Não inclua outras informações além das requisitadas acima.

${message}
`;
