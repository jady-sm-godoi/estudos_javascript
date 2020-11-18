//Welcome - Quer jogar?
let letsPlay = confirm("Bem vindo ao jogo\nGuess a Number!\nQuer jogar");

// estrutura do jogo
if (letsPlay){
    vamosJogar();
} else {
    alert("ok. Bye!");
}

function vamosJogar() {
    let computerNumber = getRandomIntInclusive(1, 10);
    let partida = game(computerNumber);

    if (partida) {
        alert(`você venceu!\nO número certo é: ${computerNumber}`);
    } else {
        alert(`você perdeu!\nO número certo é: ${computerNumber}`);
    }

    let replay = confirm("Quer jogar novamente?");
    
    if (replay){
        vamosJogar();
    } else {
        alert("ok. Bye!");
    }
}

//função do jogo
function game(number) {
    let tries = 5;
    let win = false

    while (tries > 0) {
        let guess = Number(prompt(`Você tem ${tries} tentativas.\nEscolha um número:`));
        if (guess === number){
            win = true;
            break;
        }
        if (number > guess) {
            alert('é maior');
        } else {
            alert('é menor');
        }
        tries--;
    }
    return win;
}

// função gera número inteiro aleatório
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }