abstract class Animal { }

abstract class Mamifero extends Animal { }
abstract class Ave extends Animal { }
abstract class Pez extends Animal { }

abstract class Volador {
  void volar() => print('Estoy volando');
}

abstract class Caminante {
  void caminar() => print('Estoy caminando');
}

abstract class Nadador {
  void nadar() => print('Estoy nadando');
}

class Delfin extends Mamifero with Nadador { }

class Murcielago extends Mamifero with Caminante, Volador { }

class Gato extends Mamifero with Caminante { }

class Paloma extends Ave with Caminante, Volador { }

class Pato extends Ave with Caminante, Volador, Nadador { }

class Tiburon extends Pez with Nadador { }

class PezVolador extends Pez with Nadador, Volador { }

void main() {
  /* final flipper = new Delfin();
  flipper.nadar(); */

  /* final batman = new Murcielago();
  batman.caminar();
  batman.volar(); */

  /* final cat = new Gato();
  cat.caminar(); */

  /* final paloma = new Paloma();
  paloma.caminar();
  paloma.volar(); */

  /* final pato = new Pato();
  pato.caminar();
  pato.volar();
  pato.nadar(); */

  /* final shark = new Tiburon();
  shark.nadar(); */

  final flyingFish = new PezVolador();
  flyingFish.nadar();
  flyingFish.volar();
}