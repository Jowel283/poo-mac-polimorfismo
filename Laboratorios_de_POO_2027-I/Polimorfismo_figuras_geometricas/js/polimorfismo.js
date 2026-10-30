// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {
  #radio;

  constructor(radio) {
    super("Círculo");
    this.#radio = radio;
  }

  calcularArea() {
    return Math.PI * this.#radio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.#radio;
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #base;
  #altura;

  constructor(base, altura) {
    super("Rectángulo");
    this.#base = base;
    this.#altura = altura;
  }

  calcularArea() {
    return this.#base * this.#altura;
  }

  calcularPerimetro() {
    return 2 * (this.#base + this.#altura);
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  #cateto1;
  #cateto2;

  constructor(cateto1, cateto2) {
    super("Triángulo Rectángulo");
    this.#cateto1 = cateto1;
    this.#cateto2 = cateto2;
  }

  calcularArea() {
    return (this.#cateto1 * this.#cateto2) / 2;
  }

  calcularPerimetro() {
    const hipotenusa = Math.hypot(this.#cateto1, this.#cateto2);
    return this.#cateto1 + this.#cateto2 + hipotenusa;
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================
const figuras = [
  new Circulo(5),
  new Rectangulo(4, 6),
  new TrianguloRectangulo(3, 4),
];

for (const figura of figuras) {
  console.log(`--- ${figura.getNombre()} ---`);
  console.log(`Área: ${figura.calcularArea().toFixed(2)}`);
  console.log(`Perímetro: ${figura.calcularPerimetro().toFixed(2)}`);
}