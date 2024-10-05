/* En dart las listas son lo que en otros lenguajes conocemos
como arreglos */

void main() {
  List numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  numbers.add(11); // Agregamos un elemento

  print(numbers);
  print(numbers[0]);

  numbers.add('Cesar'); // En dart el tipado de los elementos de las listas por default es dynamic

  print(numbers);

  List<int> numbersInts = [ 1, 2, 3 ]; // Lista con tipado estricto

  final moreNumbers = List.generate(100, (int index) => index);

  print(moreNumbers);
}