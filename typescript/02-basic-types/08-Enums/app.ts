(() => {
  /* Las enumeraciones nos sirven para almacenar diferentes valores
  posibles o permitidos que puede tomar una variable, esto para que
  las variables tengan un sentido semantico */
  enum AudioLevel {
    min, // 0
    medium, // 1
    max // 2
  }

  let currentAudio: AudioLevel = AudioLevel.max;
  console.log(currentAudio);
  console.log(AudioLevel);

  // Le podemos asignar los valores directamente
  enum Shiness {
    min = 25,
    med = 50,
    max = 100
  }

  let currentShiness: Shiness = Shiness.med;
  console.log(currentShiness);
  console.log(Shiness);
})();