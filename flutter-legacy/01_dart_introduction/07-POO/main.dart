void main() {
  // final wolverine = new Hero(name: 'Logan', power: 'Regeneracion');
  
  /* wolverine.name = 'Logan';
  wolverine.power = 'Regeneracion'; */

  // print(wolverine);

  final rawJson = {
    'name': 'Tony Stark',
    // 'power': 'Dinero'
  };

  // final ironMan = new Hero(name: rawJson['name']!, power: rawJson['power']!);

  final ironMan = new Hero.fromJson(rawJson);

  print(ironMan);
}

class Hero {
  String name;
  String power;

  // Hero(this.name, this.power);

  /* Hero(String pName, String pPower) {
    this.name = pName;
    this.power = pPower;
  } */

  Hero({
    required this.name,
    required this.power
  });

  Hero.fromJson(Map<String, String> json):
    this.name = json['name']!,
    this.power = json['power'] ?? 'No tiene poder';

  @override 
  String toString() {
    /* Sino usamos llaves cuando usamos this, dart piensa que de lo que
    queremos acceder al valor es al objeto this */
    return 'Hero: nombre: ${ this.name }, poder: ${ this.power }';
  }
}