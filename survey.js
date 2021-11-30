const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer1) => {
    rl.question('What is an activity you like doing? ', (answer2) => {
        rl.question('If you could have a conversation with 1 animal, which one would it be? and why? ', (answer3) => {
            console.log(`My name is ${answer1}. An activity i like doing is ${answer2}. I would speak to a ${answer3}.`);
            rl.close();
          });
      });
  });


