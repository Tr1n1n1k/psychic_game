alert('Are You Ready To Play The Psychic Game?');
var name = prompt('What Is Your Name?');

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

var cpuChoices = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

document.onkeyup = function(event) {
  var userGuess = event.key;

  var cpuGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];

  var options = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  if (options.indexOf(userGuess) > -1) {
    if (userGuess === cpuGuess) {
      wins++;
      numGuesses = 9;
      guessChoices = [];
      alert('Pure Luck!');
    }

    if (userGuess != cpuGuess) {
      numGuesses--;
      guessChoices.push(userGuess);
    }

    if (numGuesses === 0) {
      numGuesses = 9;
      losses++;
      guessChoices = [];
      alert('You Suck!');
    }

    var html =
      '<h1> The Psychic Game </h1>' +
      "<h3>Guess what letter I'm thinking of!</h3>" +
      '<h3>Wins: ' +
      wins +
      '</h3>' +
      '<h3>Losses: ' +
      losses +
      '</h3>' +
      '<h3>Guesses Left: ' +
      numGuesses +
      '</h3>' +
      '<h3>Your Guesses so far: ' +
      guessChoices.join(', ') +
      '</h3>';

    document.querySelector('#game').innerHTML = html;
  }
};
