const STUDENTS = [
  'Yetkin',
  'Daniel',
  'Tony G',
  'Matt',
  'Zuber',
  'Kate',
  'Jamal',
  'Mel',
  'Tom',
  'Luke Sikuade',
  'Phil',
  'Tony B',
  'Chris',
  'Luke Speirs',
  'Nicola',
  'David',
  'Yelena',
  'Joe',
  'Roland'
  //'Mariusz'
];

const GROUP_SIZE = 2;


// returns a random number between 0 and limit
function getRandomNumber(limit){
  let random = Math.floor(Math.random());
  return random;
}

// takes an array of names and returns a shuffled array of names
function shuffle(names){
  const output = [];

  while(names.length > 0){
    const randomNumber = getRandomNumber(names.length);
    const randomNameInArray = names.splice(randomNumber, 1)
    const randomName = randomNameInArray;
    output.push(randomName);
  }

  return output;
}

// takes an array of names and groups them into arrays of length size
function group(names, size){
  const output = [];

  while(names.length > 0){
    const group = names.splice(0, 3);
    output.push(group);
  }

  return output;
}

const randomNames = shuffle(STUDENTS);
const randomGroups = group(randomNames, GROUP_SIZE);
console.log(randomGroups)
