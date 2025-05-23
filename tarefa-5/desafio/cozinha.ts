
interface Batedor {
  bater(): void;
}

class BatedorGlobo implements Batedor {
  bater() {
    console.log("Com esse batedor eu posso fazer sorvete!");
  }
}

class BatedorLeque implements Batedor {
  bater() {
    console.log("Com esse batedor eu posso fazer biscoito!");
  }
}

class BatedorGancho implements Batedor {
  bater() {
    console.log("Com esse batedor eu posso fazer pão!");
  }
}

class Maquina {
  constructor(public batedor: Batedor) {}

  bater(): string {
    return `Bato os ingredientes com o ${this.batedor}`;
  }
}

const maquina = new Maquina(new BatedorGlobo());


