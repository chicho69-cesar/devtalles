const bAdd: HTMLButtonElement = document.querySelector("#bAdd") as HTMLButtonElement;
const inputTitle: HTMLInputElement = document.querySelector("#title") as HTMLInputElement;
const inputCost: HTMLInputElement = <HTMLInputElement>document.querySelector("#cost");
const inputCurrency: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#currency");

const expenses = new Expenses('USD');

loadAPI();

bAdd!.addEventListener('click', e => {
  if (inputTitle!.value != '' && inputCost!.value != '' && !isNaN(parseFloat(inputCost!.value))) {
    const title: string = inputTitle!.value;
    const cost: number = parseFloat(inputCost!.value);
    const currency: Currency = <Currency>inputCurrency!.value;

    expenses.add({ 
      title: title, 
      cost: { 
        number: cost, 
        currency: currency 
      } 
    });

    render();
  } else {
    alert('Completa los campos correctamente');
  }
});

function loadAPI(){
  fetch('api/api.json')
  .then(res => res.json())
  .then(json => {
    const items: ExpenseItem[] = json.items;

    items.forEach((item: ExpenseItem) => {
      expenses.add(item);
    });

    render();
  });
}

function render() {
  let html = '';

  expenses.getItems().forEach(item => {
    const { id, title, cost } = item;
    const { number, currency } = cost;

    html += `
      <div class="item">
        <div><span class="currency">${currency}</span> ${number}</div>
        <div>${title}</div>
        <div><button class="bEliminar" data-id="${id}">Eliminar</button></div>
      </div>
    `;
  });

  $('#items').innerHTML = html;
  $('#display').textContent = expenses.getTotal();

  $$('.bEliminar').forEach(bEliminar => {
    bEliminar.addEventListener('click', e => {
      const id: string = (e.target as HTMLButtonElement).getAttribute('data-id') as string;
      expenses.remove(parseInt(id));
      render();
    });
  });
}

function $(selector: string): HTMLElement {
  return document.querySelector(selector) as HTMLElement;
}

function $$(selector: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
}
