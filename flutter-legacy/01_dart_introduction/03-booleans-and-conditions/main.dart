void main() {
  // bools
  bool isActive = true;

  if (isActive) {
    print('Esta activa');
  } else {
    print('NO esta activa');
  }

  // Null savething
  bool? couldHaveNull = null;

  if (couldHaveNull == null) {
    print('Tiene un valor null');
  } else {
    print('No tiene un valor null');
  }
}