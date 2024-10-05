void main() async {
  print('Antes de la ejecucion');

  // Aqui print es igual a tener (data) => print(data)
  // print(getNombre('10').then(print));

  final nombre = await getNombre('10');
  print(nombre);

  final data = await httpGet('https://api.com/users');
  print(data);
  
  print('Despues de la ejecucion');
}

Future<String?> getNombre(String id) async {
  print('$id - Cesar');
}

Future<String> httpGet(String url) {
  return Future.delayed(
    new Duration(seconds: 3), () => 'Hello World!!!'
  );
}