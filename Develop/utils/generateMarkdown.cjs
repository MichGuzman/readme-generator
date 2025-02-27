// Función que devuelve una insignia de licencia en función de la selección del usuario
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, "%20")}-blue.svg)`;
}

// Función que devuelve un enlace a la documentación de la licencia seleccionada
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'GPLv3': '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2.0': '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseLinks[license] || ''; // Si no hay licencia, retorna vacío
}

// Función que devuelve la sección de licencia en el README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## 📜 License

This project is licensed under the ${license} license.

For more information, see ${renderLicenseLink(license)}.

`;
}

// Función principal para generar el contenido del README.md
function generateMarkdown(data) {
  return `# ${data.title}

${data.license ? renderLicenseSection(data.license) : ""}

## 📌 Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.license !== 'None' ? '- [License](#license)' : ""}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${data.walkthrough ? `## 🎥 Walkthrough Video\n[Watch the video](${data.walkthrough})` : ""}

## 📥 Installation
\`\`\`
${data.installation}
\`\`\`

## 🚀 Usage
\`\`\`
${data.usage}
\`\`\`

${renderLicenseSection(data.license)}

## 🤝 Contributing
${data.contributing}

## 🧪 Tests
\`\`\`
${data.tests}
\`\`\`

## 📬 Questions
For any questions, reach out via:

🔗 GitHub: [${data.github}](https://github.com/${data.github})  
📧 Email: [${data.email}](mailto:${data.email})

`;
}

// Exportar la función para ser usada en index.js
module.exports = generateMarkdown;
