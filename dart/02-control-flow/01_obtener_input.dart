import 'dart:io';

main() {

  // imprimir en terminal o cmd
  stdout.writeln('¿Cuál es tu nombre?');

  // Leer información
  String? nombre = stdin.readLineSync(); // '10'

  stdout.writeln('Tu nombre es: $nombre');

  
}