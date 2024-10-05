// DOM Elements
const lblDesktop = document.querySelector('h1');
const btnAttend = document.querySelector('button');
const lblTicket = document.querySelector('small');
const divAlert = document.querySelector('.alert');
const lblPending = document.querySelector('#lblPendientes');

const searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('No escritorio provided');
}

const desk = searchParams.get('escritorio');
lblDesktop.innerText = desk;
divAlert.style.display = 'none';

const socket = io();

socket.on('connect', () => {
  btnAttend.disabled = false;
});

socket.on('disconnect', () => {
  btnAttend.disabled = true;
});

socket.on('pending-tickets', (tickets) => {
  lblPending.innerText = tickets;
});

btnAttend.addEventListener('click', () => {
  socket.emit('attend-ticket', { desktop: desk }, ({ ok, ticket, msg }) => {
    if (!ok) {
      lblTicket.innerText = 'Nadie';
      return divAlert.style.display = '';
    }

    lblTicket.innerText = `Ticket ${ticket.number}`;
  });
});
