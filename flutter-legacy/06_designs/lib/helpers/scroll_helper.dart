import 'package:flutter/material.dart';

class ScrollHelper {
  static BoxDecoration getBoxDecoration() {
    return const BoxDecoration(
      gradient: LinearGradient(
        // Especificamos el inicio y fin de nuestro gradiente
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        // Puntos donde comienza cada color que compone al gradiente
        stops: [0.5, 0.5],
        // Colores que usara el gradiente
        colors: [
          Color(0xff5EEBC5),
          Color(0xff30BAD6),
        ]
      )
    );
  }
}
