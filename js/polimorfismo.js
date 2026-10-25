
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  get nombre() {
    return this.#nombre;
  }

  get area() {
    return 0;
  }

  get perimetro() {
    return 0;
  }
}

class Rectangulo extends Figura {
  #base;
  #altura;

  constructor(base, altura) {
    super("Rectangulo");
    this.#base = base;
    this.#altura = altura;
  }

  get area() {
    return this.#base * this.#altura;
  }

  get perimetro() {
    return 2 * (this.#base + this.#altura);
  }
}

class Circulo extends Figura {
  #radio;

  constructor(radio) {
    super("Circulo");
    this.#radio = parseFloat(radio);
  }

  get area() {
    return Math.PI * this.#radio ** 2;
  }

  get perimetro() {
    return 2 * Math.PI * this.#radio;
  }
}

class Triangulo extends Figura {
  #base;
  #altura;
  #lado1;
  #lado2;
  #lado3;

  constructor(base, altura, lado1, lado2, lado3) {
    super("Triangulo");
    this.#base = base;
    this.#altura = altura;
    this.#lado1 = lado1;
    this.#lado2 = lado2;
    this.#lado3 = lado3;
  }

  get area() {
    return (this.#base * this.#altura) / 2;
  }

  get perimetro() {
    return this.#lado1 + this.#lado2 + this.#lado3;
  }
}


let r = new Rectangulo(5, 3);
let c = new Circulo(4);
let t = new Triangulo(6, 4, 5, 5, 6);

let figuras = [r, c, t];

let resultado = document.getElementById("resultado");

figuras.forEach(function (figura) {
  resultado.innerHTML += `
        <h2>${figura.nombre}</h2>
        <p>Área: ${figura.area.toFixed(2)}</p>
        <p>Perímetro: ${figura.perimetro.toFixed(2)}</p>
        <hr>
    `;
});
