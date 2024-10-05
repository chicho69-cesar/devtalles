/* En dart una future es una operacion asyncrona, es decir, es parecido
a una promesa en JavaScript o un Task en C# */

void main() {
  print('Antes de la ejecucion');
  
  /* httpGet('https://api.com/users')
    .then((data) {
      print(data);
    }); */

  httpGet1('https://api.com/users')
    .then((data) {
      print(data.toUpperCase());
    });
  
  print('Despues de la ejecucion');
}

/* Definimos nuestra operacion asincronas */
Future httpGet(String url) {
  return Future.delayed(Duration(seconds: 3), () {
    return 'Hola Mundo - 3 segundos';
  });
}

/* Future con tipo de dato */
Future<String> httpGet1(String url) {
  return Future.delayed(
    new Duration(seconds: 3), () => 'Hello World!!!'
  );
}