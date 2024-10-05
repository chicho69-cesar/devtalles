import 'package:flutter/material.dart';

import 'package:counter_app/screens/counter_screen.dart';

void main() {
  // Ejecutamos nuestra app
  runApp(const MyApp());
}

// Creamos nuestro widget el cual va a ser un widget sin estado
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key); // Este constructor es obligatorio

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      // quitamos el banner de debug
      debugShowCheckedModeBanner: false,
      // home nos ayuda a decir cual va a ser el widget que se va a renderizar en este
      home: CounterScreen()
    );
  }
}
