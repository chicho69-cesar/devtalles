void main() {
  saludar1(); // Mandamos llamar la funcion
  saludar2('Cesar');
  saludar3('Liz');
  saludar4(message: 'Hola Mundo', name: 'Lucy'); // Nombramos los parametros
  saludar4(message: 'Hello World', name: 'Thaily');
}

// Creamos la funcion
void saludar1() {
  print('Hello World!!!');
}

// Funcion con parametros
void saludar2(String name) {
  print('Hello $name');
}

// Funcion con parametros por default
void saludar3(String name, [ String message = 'Valor por default' ]) {
  print('Hello $name, \n $message');
}

// Funcion con parametros nombrados
void saludar4({ String? name, String? message }) {
  print('$name $message');
}

// Funcion con parametros requeridos
void saludar5({ required String name, required String message }) {
  print('$name $message');
}