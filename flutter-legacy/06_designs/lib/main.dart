import 'package:flutter/material.dart';

import 'package:designs/screens/basic_design.dart';
import 'package:designs/screens/home_screen.dart';
import 'package:designs/screens/scroll_design.dart';
import 'package:flutter/services.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light);

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Designs App',
      initialRoute: 'home_screen',
      theme: ThemeData.dark(),
      routes: {
        'home_screen'  : ( _ ) => const HomeScreen(),
        'basic_design' : ( _ ) => const BasicDesignScreen(),
        'scroll_design': ( _ ) => const ScrollScreen(),
      },
    );
  }
}
