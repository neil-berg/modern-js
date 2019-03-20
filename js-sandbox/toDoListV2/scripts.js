function uniqueID() {
  // Generate a random letter-num-letter-num ID
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const randomLetter1 = letters.split('')[
    Math.floor(Math.random() * letters.length)
  ];
  const randomLetter2 = letters.split('')[
    Math.floor(Math.random() * letters.length)
  ];
  const randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
  const randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
  const id = `${randomLetter1}${randomNumber1}${randomLetter2}${randomNumber2}`;
  return id.toUpperCase();
}

console.log(uniqueID());
