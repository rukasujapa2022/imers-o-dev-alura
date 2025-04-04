age = prompt("Quantos anos você tem?");
if (age < 18) {
  alert("Você não está preparado para jogar Digimon Battle Attributes!");
}
if (age >= 18) {
  escolhaJogador = prompt("1-Virus, 2-Vacina ou 3-Data?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Virus, Computador Virus ---> empate!
  // Jogador Data, Computador Data ---> empate!
  // Jogador Vacina, Computador Vacina ---> empate!

  if (escolhaJogador == escolhaComputador) {
    alert("Empate!!!");
  }

  // Jogador Virus, Computador Data ---> Jogador Vence
  // Jogador Virus, Computador Vacina ---> Computador Vence

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("Jogador Virus, Computador Vacina ---> Computador Vence!");
    }
    if (escolhaComputador == 3) {
      alert("Jogador Virus, Computador Data ---> Jogador Vence!");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador Vacina, Computador Virus ---> Jogador vence
      alert("Jogador Vacina, Computador Virus ---> Jogador vence!!!");
    }
    if (escolhaJogador == 2) {
      if (escolhaComputador == 3) {
        // Jogador Vacina, Computador Data ---> Computador vence
        alert("Jogador Vacina, Computador Data ---> Computador vence!!!");
      }
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      // Jogador Data, Computador Vacina ---> Jogador vence
      alert("Jogador Data, Computador Vacina ---> Jogador vence!!!");
    }
    if (escolhaComputador == 2) {
      // Jogador Data, Computador Virus ---> Computador vence
      alert("Jogador Data, Computador Vacina ---> Computador vence!!!");
    }
  }

  alert("A escolha do computador foi:  " + escolhaComputador);
}
