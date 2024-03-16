const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  }
];

