"use strict";
var Validations;
(function (Validations) {
    /* Para poder usar las propiedades y los metodos dentro de un namespace
    debemos de exportarla, ya que si no hacemos esto no podremos acceder a ellos */
    Validations.validateText = (text) => (text.length > 3);
    Validations.validateDate = (myDate) => !isNaN(myDate.valueOf());
})(Validations || (Validations = {}));
console.log(Validations.validateText('Cesar'));
console.log(Validations.validateDate(new Date()));
