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

const getEmployee = id => {
  return new Promise((resolve, reject) => {
    const employee = employees.find(emp => emp.id === id)?.name;
    
    employee 
      ? resolve(employee) 
      : reject(`No existe el empleado con id ${id}`);
  });
}

const getSalary = id => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find(sal => sal.id === id)?.salary;
    
    salary
      ? resolve(salary)
      : reject(`No existe el salario para el empleado con id ${id}`);
  });
}

const id = 1;
let name;

getEmployee(id)
  .then((employee) => {
    name = employee;
    return getSalary(id);
  })
  .then(salary => console.log(`El salario del empleado ${name} es de ${salary}`))
  .catch(err => console.log(err));