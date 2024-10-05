const socketController = (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });

  // Server receive a event send-message
  socket.on('send-message', (payload, callback) => {
    const id = 123;
    callback(id);
    // Server emit a event send-message to all clients
    /* Cuando usamos broadcast, no se envía el mensaje
    a si mismo, sino que lo manda a todos los clientes conectados */
    socket.broadcast.emit('send-message', payload);
  });
}

module.exports = {
  socketController
}