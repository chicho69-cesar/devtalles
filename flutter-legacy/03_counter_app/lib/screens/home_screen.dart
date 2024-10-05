import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    /* BuildContext como su nombre lo indica hace referencia al contexto de construccion
    de nuestra aplicacion, cuando llega aqui mantiene la referencia a todos los 
    elementos que han sido construidos en nuestra app hasta este punto, es decir,
    conoce el contexto global de toda nuestra app */

    const fontSize = TextStyle(fontSize: 30);

    return Scaffold(
      /* En Flutter practicamente todos los widgets para declarar sus elementos 
      hijos una propiedad child o childreen, a excepcion de Scaffol que lo que
      tiene es un body */

      //backgroundColor: Colors.indigo,

      // agregamos un appbar a nuestra aplicacion
      appBar: AppBar(
        title: const Text('Home Screen'),
        elevation: 10.0, // elevacion de nuestra appbar
      ),
      // renderizamos el body del scaffold
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const <Widget>[
            Text('Número de clicks: ', style: fontSize),
            Text('5', style: fontSize),
          ],
        ),
      ),
      // floatingActionButtonLocation: FloatingActionButtonLocation.miniStartFloat,
      floatingActionButton: FloatingActionButton(
        child: const Icon(
          Icons.add
        ),
        onPressed: () {
          print('Hola');
        },
      ),
    );
  }
}
