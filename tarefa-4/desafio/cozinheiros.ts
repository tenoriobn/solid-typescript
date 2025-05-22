interface ChefPratoPrincipal {
  fazerPratoPrincipal(): void;
}

interface ChefSobremesa {
  fazerSobremesa(): void;
}

class ChefMestreCozinha implements ChefPratoPrincipal, ChefSobremesa {
  fazerPratoPrincipal(): void {
    console.log("Salmão grelhado ao molho de limão siciliano com risoto de ervas frescas");
  }
  fazerSobremesa(): void {
    console.log("Tiramisù de frutas vermelhas com calda de framboesa");
  }
}

class ChefApenasDoces implements ChefSobremesa {
  fazerSobremesa(): void {
    console.log("Taça de morangos com chantilly e crocante de amêndoas");
  }
}

const chefMestreCozinha = new ChefMestreCozinha();
chefMestreCozinha.fazerPratoPrincipal();
chefMestreCozinha.fazerSobremesa();

const chefMestreConfeitaria = new ChefApenasDoces();
chefMestreConfeitaria.fazerSobremesa();