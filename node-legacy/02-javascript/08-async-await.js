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

const getInfoEmployee = async (id) => {
  try {
    const employee = await getEmployee(id);
    const salary = await getSalary(id);
    return `El salario del empleado ${employee} es de ${salary}`
  } catch (error) {
    throw error;
  }
}

const id = 1;

getInfoEmployee(id)
  .then(msg => {
    console.log('TODO BIEN! 👍');
    console.log(msg);
  })
  .catch(err => {
    console.log('TODO MAL! 😞');
    console.log(err);
  });
