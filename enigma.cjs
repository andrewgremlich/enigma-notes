const enigmajs = require("enigma");

const rotorI = new enigmajs.Rotor("JKMFLGDQVZNTOWYHXUSPAIBRCE", "Q");
const rotorIII = new enigmajs.Rotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", "V");
const rotorIV = new enigmajs.Rotor("ESOVPZJAYQUIRHXLNFTGKDCMWB", "J");
const reflector = new enigmajs.Reflector("YRUHQSLDPXNGOKMIEBFZCWVJAT");
const plugboard = new enigmajs.Plugboard("AD CN ET FL GI JV KZ PU QY WX");
const entryWheel = new enigmajs.EntryWheel("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const enigma = new enigmajs.Enigma(
  [rotorI, rotorIV, rotorIII],
  reflector,
  plugboard,
  entryWheel
);

console.log(enigma.string("EXAMPLEMESSAGE"));
