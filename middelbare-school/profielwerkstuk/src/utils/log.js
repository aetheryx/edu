/**
 * Dit is een simpele log functie waarmee we dingen kunnen printen in de console.
 */

/* eslint-disable no-console */
const { inspect } = require('util');

const colors = {
  'error': '\u001b[31m',
  'info': '\u001b[32m',
  'warn': '\u001b[33m',
  'reset': '\u001b[39m'
};

module.exports = function log (message, type = 'info') {
  const datePrefix = Date().toString().split(' ').slice(1, 5).join(' ');
  console.log(`${colors[type]}[${datePrefix}, ${type.toUpperCase()}]${colors['reset']} ${typeof message === 'string' ? message : inspect(message)}`);
};
