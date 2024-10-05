void main() {
  final rambo = new Perro();
  rambo.emitirSonido();

  final michi = new Gato();
  michi.emitirSonido();

  sonidoAnimal(rambo);
  sonidoAnimal(michi);
}

void sonidoAnimal(Animal animal) {
  animal.emitirSonido();
}

abstract class Animal {
  int? patas;
  void emitirSonido();
}

class Perro implements Animal {
  int? patas;

  void emitirSonido() => 
    print('Guauuuuu');
}

class Gato implements Animal {
  int? patas;
  int? cola;

  void emitirSonido() => 
    print('Miauuuuu');
}