const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

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

