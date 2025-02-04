export const extractTitleFromMessagePrompt = (message: string) => `
Dado a mensagem abaixo extraia e retorne somente o título do filme que contém na mensagem.
A resposta deve estar em apenas uma linha.
Não inclua nenhuma outra informação além do título do filme.

${message}
`;
