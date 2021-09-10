// Code your solutions in this file

//Code from example: note to self, gifts.length=3 but loop runs 3 times because i starts at 0. 
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/


const messages = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
    console.log (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    debugger;
    }
    return messages;
}

const countLog = [];
function countDown(number) {
    for (let i = number; i >= 0; i--) {
    console.log (i);
    countLog[i] = i;
    debugger;
    }
}