let nomeDoHeroi = "Lucas";
let xp = 3500;
let cassificacao;

switch (true) {
    case (xp < 1000):
      cassificacao = "Ferro";
      break;
    case (xp < 2000):
      cassificacao = "Bronze";
      break;
    case (xp < 5000):
      cassificacao = "Prata";
      break;
    case (xp < 7000):
      cassificacao = "Ouro";
      break;
    case (xp < 8000):
      cassificacao = "Platina";
      break;
    case (xp < 9000):
      cassificacao = "Ascendente";
      break;
    case (xp < 10000):
      cassificacao = "Imortal";
      break;
    default:
      cassificacao = "Radiante";
      break;
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${cassificacao}`);
