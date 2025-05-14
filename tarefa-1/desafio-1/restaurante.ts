class AuxiliarLimpeza {
  limpar () {
    console.log("Limpando o local...");
  }
}

class Recepcionista {
  organizarMesas () {
    console.log("Organizando as mesas...");
  }
}

class Garcom {
  anotarPedido() {
    console.log("Anotando o pedido...");
  }
}

class Cumin {
  servirBebidas() {
    console.log("Servindo as bebidas...");
  }
}

class ChefCozinha {
  cozinharPratoPrincipal() {
    console.log("Preparando o prato principal");
  }
}

class ChefConfeitaria {
  prepararSobremesa() {
    console.log("Fazendo as sobremesas...");
  }
}

class Restaurante {
  private auxiliarLimpeza: AuxiliarLimpeza;
  private recepcionista: Recepcionista;
  private garcom: Garcom;
  private cumin: Cumin;
  private chefCozinha: ChefCozinha;
  private chefConfeitaria: ChefConfeitaria;
  
  constructor() {
    this.auxiliarLimpeza = new AuxiliarLimpeza();
    this.recepcionista = new Recepcionista();
    this.garcom = new Garcom();
    this.cumin = new Cumin();
    this.chefCozinha = new ChefCozinha();
    this.chefConfeitaria = new ChefConfeitaria();
  }

  iniciar() {
    this.auxiliarLimpeza.limpar();
    this.recepcionista.organizarMesas();
    this.garcom.anotarPedido();
    this.cumin.servirBebidas();
    this.chefCozinha.cozinharPratoPrincipal();
    this.chefConfeitaria.prepararSobremesa();
  }
}

const restaurante = new Restaurante();
restaurante.iniciar();