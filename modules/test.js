const zp = v => (v < 10) ? '0' + v : v;
const greeting = name => `Hello ${name}`;

module.exports = { zp, greeting };