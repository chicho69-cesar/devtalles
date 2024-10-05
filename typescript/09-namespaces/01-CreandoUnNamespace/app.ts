namespace Validations {
  /* Para poder usar las propiedades y los metodos dentro de un namespace
  debemos de exportarla, ya que si no hacemos esto no podremos acceder a ellos */
  export const validateText = (text: string): boolean => 
    (text.length > 3);
  export const validateDate = (myDate: Date): boolean => 
    !isNaN(myDate.valueOf());
}

console.log(Validations.validateText('Cesar'));
console.log(Validations.validateDate(new Date()));