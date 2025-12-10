function getGreeting(name) {
  if (name) {
    return `Hello ${name}`;
  }
  return 'Hello';
}

module.exports = { getGreeting };
