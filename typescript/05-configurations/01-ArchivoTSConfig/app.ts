(() => {
  // creamos un tipo de dato
  type Student = {
    name: string;
    age: number;
    email: string;
    control: string;
    average: number;
  };

  // instanciamos un objeto de tipo Student
  let cesar: Student = {
    name: 'Cesar',
    age: 21,
    email: 'cesar@gmail.com',
    control: '20151608',
    average: 98.3,
  };

  // Log
  console.log('Holi');

  let danna: Student = {
    name: 'Danna',
    age: 20,
    email: 'danna@gmail.com',
    control: '20151731',
    average: 95.3,
  };

  console.log({ cesar });
  console.log({ danna });
})();