const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// questions for the user
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter 3 characters or less for your logo: ',

  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color using a keyword or hexdecimal: ',
  },
  {
    type: 'list',
    name: 'shape',
    message: '{Pick a shape}:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color using a keyword or hexdicimal: ',
  }
];

// prompt the user for input
inquirer.prompt(questions).then(answers => {
    // creates the shape based on the user's input
    let shapeSVG;
    

    if (answers.shape === 'Circle') {
      shapeSVG = new Circle(answers.shapeColor);

    } else if (answers.shape === 'Triangle') {
      shapeSVG = new Triangle(answers.shapeColor);

    } else if (answers.shape === 'Square') {
      shapeSVG = new Square(answers.shapeColor);
    }
    
    // creates the SVG content
    const svgLogo = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG.render()}
    <text x="150" y="110" font-family="Arial" font-size="20" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
  </svg>
    `;
  
    // writes the SVG content to the file
    fs.writeFileSync('logo.svg', svgLogo);
    console.log('logo.svg has been created!');
  });