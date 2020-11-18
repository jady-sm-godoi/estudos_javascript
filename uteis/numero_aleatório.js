// Gera numero aleatório entre 0 e 1(exclusivo)

function getRandom(){
    return Math.random();
}

console.log(getRandom())

// gera numero aleatório entre dois valores

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

console.log(getRandomArbitrary(1, 10))

  // gera número inteiro aleatório entre dois valores

function getRandomInt(min, max) {
  min = Math.ceil(min); // transforma float em int arredondando para mais
  max = Math.floor(max); // transforma float em int arredondando para menos
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 10))

// gera número inteiro aleatório entre dois valores, inclusive

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(1, 10))
