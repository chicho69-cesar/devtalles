void main() {
  // Strings
  var name = 'Cesar';
  String lastname = 'Villalobos Olmos';
  final message1 = 'I\'m programmer'; // Esta es una constante
  final String message2 = 'Se mantiene igual en su momento de instanciacion';
  const message3 = 'Nunca cambia en tiempo de compilacion';

  print(name + " " + lastname);

  name = 'César';

  print('$name $lastname');
  print('$message1');
  print('$message2');
  print('$message3');


  // Numbers
  int number1 = 10; // Entero
  double number2 = 3.1416; // Double

  print(number1);
  print(number2);
}