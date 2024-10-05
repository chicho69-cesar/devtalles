import 'dart:ui';

import 'package:flutter/material.dart';

class CardTable extends StatelessWidget {
  const CardTable({super.key});

  @override
  Widget build(BuildContext context) {
    return Table(
      children: const [
        TableRow(
          children: [
            _SingleCard(icon: Icons.border_all, color: Colors.blue, text: 'General',),
            _SingleCard(icon: Icons.car_rental, color: Colors.pinkAccent, text: 'Transport',),
          ],
        ),

        TableRow(
          children: [
            _SingleCard(icon: Icons.shop, color: Colors.purple, text: 'Shopping',),
            _SingleCard(icon: Icons.cloud, color: Colors.purpleAccent, text: 'Bill',),
          ],
        ),

        TableRow(
          children: [
            _SingleCard(icon: Icons.movie, color: Colors.deepPurple, text: 'Entertaiment',),
            _SingleCard(icon: Icons.food_bank_outlined, color: Colors.deepOrange, text: 'Grocery',),
          ],
        ),

        TableRow(
          children: [
            _SingleCard(icon: Icons.access_alarms_outlined, color: Colors.green, text: 'Time',),
            _SingleCard(icon: Icons.add_a_photo_outlined, color: Colors.blueAccent, text: 'Photos',),
          ],
        ),

        TableRow(
          children: [
            _SingleCard(icon: Icons.bar_chart_rounded, color: Colors.pinkAccent, text: 'Statistics',),
            _SingleCard(icon: Icons.cloud_download_rounded , color: Colors.purple, text: 'Download',),
          ],
        ),
      ],
    );
  }
}

class _SingleCard extends StatelessWidget {
  const _SingleCard({required this.icon, required this.color, required this.text});
  
  final IconData icon;
  final Color color;
  final String text;

  @override
  Widget build(BuildContext context) {
    return _CardBackground(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CircleAvatar(
            backgroundColor: color,
            radius: 30,
            child: Icon(icon, color: Colors.white,),
          ),
          const SizedBox(height: 10),
          Text(
            text,
            style: TextStyle(color: color, fontSize: 18),
          )
        ],
      ),
    );
  }
}

class _CardBackground extends StatelessWidget {
  const _CardBackground({required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(15),
      // El widget de ClipRRect es necesario para evitar que el blur se expanda de este widget
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: BackdropFilter(
          // Aplicamos un blur a nuestro widget
          filter: ImageFilter.blur( sigmaX: 5, sigmaY: 5),
          child: Container(
            height: 180,
            decoration: BoxDecoration(
              color: const Color.fromRGBO(62, 66, 107, 0.7),
              borderRadius: BorderRadius.circular(20)
            ),
            child: child,
          ),
        ),
      ),
    );
  }
}
