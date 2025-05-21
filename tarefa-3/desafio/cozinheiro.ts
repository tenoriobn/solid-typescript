class CozinheiroPai {
  fazerLanche(): string {
    return "X-Burguer simples";
  }
}

class CozinheiraFilha extends CozinheiroPai {
  fazerLanche(): string {
    // Aqui herdo do pai a sabedoria de fazer lanche e acrescento algo a mais no conhecimento adquirido.
    return super.fazerLanche() + ", adicionando bacon, ovo, frango e mais!";
  }
  fazerSuco(): string {
    return "Preparando um suco bem refrescante";
  }
}

const cozinheiroPai = new CozinheiroPai();
console.log(cozinheiroPai.fazerLanche());

const cozinheiraFilha = new CozinheiraFilha();
console.log(cozinheiraFilha.fazerLanche());
console.log(cozinheiraFilha.fazerSuco());