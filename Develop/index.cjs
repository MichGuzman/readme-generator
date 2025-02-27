// Importar paquetes necesarios
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.cjs'); // Importa el módulo de generación de README

// Preguntas para el usuario
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?'
  },
  {
    type: 'list',
    name: 'programmingLanguage',
    message: 'Choose a programming language for your project:',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node', 'TypeScript']
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  },
  {
    type: 'input',
    name: 'walkthrough',
    message: 'Enter the walkthrough video URL (if available):'
  },  
];

// Función para escribir el archivo README
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log('✅ README.md has been generated successfully!');
}

// Función para inicializar la aplicación
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Llamada a la función para inicializar la aplicación
init();
