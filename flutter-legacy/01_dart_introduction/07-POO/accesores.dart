import 'dart:math' as math;

void main() {
  final cuadrado = new Cuadrado(10);

  print('area: ${cuadrado.calcularArea()}');

  print('lado: ${cuadrado.lado}');
  print('area getter: ${cuadrado.area}');

  cuadrado.area = 25;

  print('area: ${cuadrado.calcularArea()}');

  print('lado: ${cuadrado.lado}');
  print('area getter: ${cuadrado.area}');
}

class Cuadrado {
  double lado;

  // getter
  double get area {
    return this.lado * this.lado;
  }

  // setter
  set area(double value) {
    this.lado = math.sqrt(value);
    print('set: $value');
  }

  Cuadrado(double lado) : this.lado = lado;

  double calcularArea() {
    return this.lado * this.lado;
  }
}
