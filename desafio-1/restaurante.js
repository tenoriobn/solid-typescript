var AuxiliarLimpeza = /** @class */ (function () {
    function AuxiliarLimpeza() {
    }
    AuxiliarLimpeza.prototype.limpar = function () {
        console.log("Limpando o local...");
    };
    return AuxiliarLimpeza;
}());
var Recepcionista = /** @class */ (function () {
    function Recepcionista() {
    }
    Recepcionista.prototype.organizarMesas = function () {
        console.log("Organizando as mesas...");
    };
    return Recepcionista;
}());
var Garcom = /** @class */ (function () {
    function Garcom() {
    }
    Garcom.prototype.anotarPedido = function () {
        console.log("Anotando o pedido...");
    };
    return Garcom;
}());
var Cumin = /** @class */ (function () {
    function Cumin() {
    }
    Cumin.prototype.servirBebidas = function () {
        console.log("Servindo as bebidas...");
    };
    return Cumin;
}());
var ChefCozinha = /** @class */ (function () {
    function ChefCozinha() {
    }
    ChefCozinha.prototype.cozinharPratoPrincipal = function () {
        console.log("Preparando o prato principal");
    };
    return ChefCozinha;
}());
var ChefConfeitaria = /** @class */ (function () {
    function ChefConfeitaria() {
    }
    ChefConfeitaria.prototype.prepararSobremesa = function () {
        console.log("Fazendo as sobremesas...");
    };
    return ChefConfeitaria;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante() {
        this.auxiliarLimpeza = new AuxiliarLimpeza();
        this.recepcionista = new Recepcionista();
        this.garcom = new Garcom();
        this.cumin = new Cumin();
        this.chefCozinha = new ChefCozinha();
        this.chefConfeitaria = new ChefConfeitaria();
    }
    Restaurante.prototype.iniciar = function () {
        this.auxiliarLimpeza.limpar();
        this.recepcionista.organizarMesas();
        this.garcom.anotarPedido();
        this.cumin.servirBebidas();
        this.chefCozinha.cozinharPratoPrincipal();
        this.chefConfeitaria.prepararSobremesa();
    };
    return Restaurante;
}());
var restaurante = new Restaurante();
restaurante.iniciar();
