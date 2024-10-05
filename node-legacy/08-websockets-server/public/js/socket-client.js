// DOM Elements
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend    = document.querySelector('#btnSend');

// Cliente de socket.io
const socket = io();

socket.on('connect', () => {
  // console.log('Conectado al servidor');
  
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  // console.log('Desconectado del servidor');

  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
});

socket.on('send-message', (payload) => {
  console.log(payload);
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: '123ABC',
    date: new Date().getTime()
  };

  socket.emit('send-message', payload, (id) => {
    console.log(`From the server: ${id}`);
  });
});
