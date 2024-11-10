const nome = "Mathezito";
const idade = 21;

function realizarAtaque(classe) {
  let ataque;

  if (classe === "guerreiro") {
    ataque = "espada";
  } else if (classe === "mago") {
    ataque = "magia";
  } else if (classe === "monge") {
    ataque = "artes marciais";
  } else if (classe === "ninja") {
    ataque = "shuriken";
  }

  console.log(`O ${classe} atacou usando ${ataque}.`);
}

realizarAtaque("ninja");