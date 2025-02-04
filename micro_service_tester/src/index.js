const inquirer = require("inquirer");

const q1 = "Qual é o elenco do filme Matrix 1?";
const q2 = "Qual é a sinopse do filme O jogo da imitação?";
const q3 = "Qual é a avaliação do filme Interestelar?";
const q4 = "Quais são os filmes populares no momento?";
const q5 = "Quero um filme similar ao 'Vingadores: Guerra Civil'";
const q6 =
  "Dê-me uma recomendação de filme com base no meu gosto por ação e aventura.";

const questions = [q1, q2, q3, q4, q5, q6];

async function sendMessageToLlm(message) {
  return (
    await (await fetch(`http://localhost:8080/chat?message=${message}`)).json()
  ).response;
}

async function startGui() {
  let keepRuning = false;

  const prompt = {
    type: "rawlist",
    name: "Question selector prompt",
    message: "Choose a question to ask to the agent",
    choices: [q1, q2, q3, q4, q5, q6, "Executar todas as perguntas", "Sair"],
    default: "Classic",
  };

  do {
    const answers = await inquirer.default.prompt(prompt);

    if (answers["Question selector prompt"] === "Sair") {
      keepRuning = false;
    } else if (
      answers["Question selector prompt"] === "Executar todas as perguntas"
    ) {
      for (let i = 0; i < questions.length; i++) {
        const response = await sendMessageToLlm(questions[i]);
        console.log(
          `\nPergunta: ${questions[i]}\n---------------------------------- \nResposta: ${response} \n`
        );
      }

      keepRuning = true;
    } else {
      const response = await sendMessageToLlm(
        answers["Question selector prompt"]
      );
      console.log(`Resposta: ${response} \n`);
      keepRuning = true;
    }
  } while (keepRuning);
}

startGui();
