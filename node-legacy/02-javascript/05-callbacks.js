/* Un callback es una función que se pasa como parametro a otra funcion, para 
luego ser ejecutada en la funcion que la recibe */
setTimeout(() => {
  console.log('Hola Mundo');
}, 1000);

// Recibimos un callback
const getUserById = (id, callback) => {
  const user = {
    id,
    name: 'Cesar'
  };

  setTimeout(() => {
    callback(user); // Se ejecuta el callback
  }, 1500);
}

// Mandamos el callback como argumento
getUserById(10, (user) => {
  console.log(user);
});
