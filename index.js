// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array =[]

  for (var i = 0; i < 4; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts() {
  var newfacts = []
  var x = 0;
  while (x < facts.length) {
    newfacts[x] = facts[x] + "!!!"
    x = x + 1;
  }
  return newfacts
}
