"use strict";
(() => {
    /* Las enumeraciones nos sirven para almacenar diferentes valores
    posibles o permitidos que puede tomar una variable, esto para que
    las variables tengan un sentido semantico */
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max"; // 2
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    // Le podemos asignar los valores directamente
    let Shiness;
    (function (Shiness) {
        Shiness[Shiness["min"] = 25] = "min";
        Shiness[Shiness["med"] = 50] = "med";
        Shiness[Shiness["max"] = 100] = "max";
    })(Shiness || (Shiness = {}));
    let currentShiness = Shiness.med;
    console.log(currentShiness);
    console.log(Shiness);
})();
