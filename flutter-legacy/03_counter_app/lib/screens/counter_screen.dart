import 'package:flutter/material.dart';

class CounterScreen extends StatefulWidget {
  const CounterScreen({Key? key}) : super(key: key);

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int counter = 0;

  void increase() {
    setState(() => counter++);
  }

  void reset() {
    setState(() => counter = 0);
  }

  void decrease() {
    setState(() => counter--);
  }

  @override
  Widget build(BuildContext context) {
    const fontSize = TextStyle(fontSize: 30);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Counter Screen'),
        elevation: 10.0,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Número de clicks: ', style: fontSize),
            Text('$counter', style: fontSize),
          ],
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.miniCenterFloat,
      floatingActionButton: CustomFloatingActions(
        increaseFunction: increase,
        resetFunction: reset,
        decreaseFunction: decrease,
      ),
    );
  }
}

class CustomFloatingActions extends StatelessWidget {
  final Function increaseFunction;
  final Function resetFunction;
  final Function decreaseFunction;

  const CustomFloatingActions({
    Key? key, 
    required this.increaseFunction, 
    required this.resetFunction, 
    required this.decreaseFunction,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        FloatingActionButton(
          onPressed: () => increaseFunction(),
          child: const Icon(Icons.add),
        ),
        FloatingActionButton(
          onPressed: () => resetFunction(),
          child: const Icon(Icons.restart_alt),
        ),
        FloatingActionButton(
          onPressed: () => decreaseFunction(),
          child: const Icon(Icons.remove),
        ),
      ],
    );
  }
}
