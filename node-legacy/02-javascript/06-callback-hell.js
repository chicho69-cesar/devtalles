const employees = [
  {
    id: 1,
    name: 'Cesar'
  }, {
    id: 2,
    name: 'Liz'
  }, {
    id: 3,
    name: 'Yare'
  }
];

const salaries = [
  {
    id: 1,
    salary: 1000
  }, {
    id: 2,
    salary: 1200
  }
];

const getEmployee = (id, callback) => {
  const employee = employees.find(emp => emp.id === id)?.name;

  if (employee) {
    callback(null, employee);
  } else {
    callback(`Empleado con id: ${id} no existe`); 
  }
}

const getSalary = (id, callback) => {
  const salary = salaries.find(sal => sal.id === id)?.salary;

  if (salary) {
    callback(null, salary);
  } else {
    callback(`El usuario especificado con el id: ${id} no tiene salario`)
  }
}

const id = 1;

// Funcion que manda llamar a un callback
getEmployee(id, (err, employee) => {
  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }

  // Callback ejecutandose dentro de otro callback
  getSalary(id, (err, salary) => {
    if (err) {
      console.log('ERROR!');
      return console.log(err);
    }
  
    console.log(`El salario del empleado ${employee} es $${salary}`);
  });
});

/* El callback hell hace referencia a cuando llegamos a la situacion de que
estamos haciendo uso de callbacks que mandan a llamar a otros callbacks,
y estos a otros y asi sucesivamente convirtiendose eso en un infierno de callbacks */
