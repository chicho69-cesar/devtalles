void main() {
  /* En dart un Map es lo mismo que en otros lenguajes
  se conoce como objeto literal */
  Map person1 = {
    'name': 'Cesar',
    'lastname': 'Villalobos Olmos',
    'age': 20,
    'isMarried': false,
    true: false,
    1: 100,
    2: 200
  };

  print(person1);
  print(person1['name']); // Accedemos a una propiedad del objeto
  print(person1[true]);
  print(person1[2]);

  // Especificamos los tipos de datos clave - valor del objeto
  Map<String, dynamic> person2 = {
    'name': 'Liz',
    'age': 20
  };

  person2.addAll({ 'lastname': 'Sandoval Vallejo' }); // Agregamos propiedades al objeto

  print(person2);
}