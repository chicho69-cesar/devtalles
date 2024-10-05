import 'package:flutter/material.dart';

class BasicDesignScreen extends StatelessWidget {
  const BasicDesignScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: const [
          // Landscape
          Image(
            image: AssetImage('assets/landscape.jpg')
          ),

          // Titulo de la pagina
          Title(),

          // Seccion de botones
          ButtonSection(),

          // Descripcion
          Description(),
        ],
      ),
    );
  }
}

class Title extends StatelessWidget {
  const Title({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
      child: Row (
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text(
                'Descinen Lake Campground',
                style: TextStyle(fontWeight: FontWeight.bold)
              ),
              Text(
                'Kandersteg, Switzerland',
                style: TextStyle(color: Colors.black45),
              ),
            ],
          ),

          Expanded(child: Container()),

          const Icon(Icons.star, color: Colors.red),
          const Text('41')
        ],
      ),
    );
  }
}

class ButtonSection extends StatelessWidget {
  const ButtonSection({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: const [
          CustomButton(
            icon: Icons.call,
            text: 'CALL',
          ),
          CustomButton(
            icon: Icons.send,
            text: 'SEND',
          ),
          CustomButton(
            icon: Icons.share,
            text: 'SHARE',
          ),
        ],
      ),
    );
  }
}

class CustomButton extends StatelessWidget {
  const CustomButton({
    Key? key, required this.icon, required this.text,
  }) : super(key: key);

  final IconData icon;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(icon, color: Colors.blue.shade600, size: 30),
        const SizedBox(height: 5),
        Text(text, style: TextStyle(color: Colors.blue.shade600)),
      ],
    );
  }
}

class Description extends StatelessWidget {
  const Description({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
      child: const Text(
        'Reprehenderit ad laboris do labore. Dolor dolore duis dolore incididunt do sint. Amet laboris dolor proident sit. Laborum qui non est culpa ullamco ea excepteur esse voluptate. Occaecat irure nulla ad esse elit reprehenderit incididunt quis veniam mollit cillum veniam dolor. Incididunt cillum sint ullamco ullamco aute. Irure duis quis fugiat veniam quis velit qui culpa duis laboris. Mollit ea do dolor veniam. Ut mollit in enim est nostrud et. Sint duis duis est aliquip aute Lorem consectetur mollit. Mollit ea magna occaecat velit. Velit laboris eu voluptate adipisicing laboris. Amet duis enim enim labore enim duis aliquip exercitation anim.'
      ),
    );
  }
}
