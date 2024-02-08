import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "input",
            name: "nome",
            message: "Qual é o seu nome?",
        },
        {
            type: "list",
            name: "idade",
            message: "Qual é a sua idade?",
            choices: ["29 a 39", "40 a 50", "50+"],
        },
    ])
    .then((answers) => {
        console.log(
            "Oi " + answers.nome + " com " + answers.idade + " anos de vida!"
        );
    });
