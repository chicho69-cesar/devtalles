
class Rectangulo {

  late int base;
  late int altura;
  late int area;
  late String tipo; // cuadrado base = altura, rectangulo base != altura

  factory Rectangulo(int base, int altura) {
    
    if ( base == altura ) {
      return Rectangulo.cuadrado(base);
    } else {
      return Rectangulo.rectangulo(base, altura);
    }

  }

  Rectangulo.cuadrado( int base ) {
    this.base   = base;
    this.altura = base;
    this.area   = base * base;
    this.tipo   = 'Cuadrado';
  }

  Rectangulo.rectangulo( int base, int altura ) {
    this.base   = base;
    this.altura = altura;
    this.area   = base * altura;
    this.tipo   = 'Rectángulo';
  }

  @override
  String toString() {
    return { 'base': base, 'altura': altura, 'area': area, 'tipo': tipo }.toString();
  }

}


main(List<String> args) {
  
  final figura = new Rectangulo(10, 15);

  print(figura);

}