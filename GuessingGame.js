//prompt displays 'Welcome! Enter your max number:'
//input is saved as maxNum variable
//next prompt displays 'enter your first guess:'
//input is saved as guessNum variable
//guess variable is compared to a random number made with Math.floor(rand(0..maxNum)) saved to randNum variable
//if guess !== randNum new prompt displays 'Too Low. Guess Again.'
//if guess === randNum program will break and console.log will show 'It took you X guesses'.
//if maxNum === 'q' game will quit

let maxNum = parseInt(prompt('Welcome! Enter your max number:'));
while (!maxNum) {
    maxNum = parseInt(prompt('Enter a valid number:'));
}

const randNum = Math.floor(Math.random() * maxNum) + 1;

let guessNum = parseInt(prompt('enter your first guess'));
let attempts = 1;

while (parseInt(guessNum) !== randNum) {
    if (guessNum === 'q') break;
    attempts++;
    if (guessNum > randNum) {
        guessNum = prompt('Too High. Guess Again.');
    } else {
        guessNum = prompt('Too Low. Guess Again.');
    }
}

if (guessNum === 'q') {
    console.log("OK you quit.")
} else {
    console.log("CONGRATS!!!")
    console.log(`It took you ${attempts} guesses.`)
}