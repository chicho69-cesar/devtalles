(() => {
  /* Las interfaces usualmente se acomdan hacia abajo dependiendo del 
  nivel de identacion que este debe tener */
  interface Client {
    name: string;
    age: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client1: Client = {
    name: 'Cesar',
    age: 21,
    address: {
      id: 123,
      zip: '47210',
      city: 'Villa Hidalgo'
    },
    getFullAddress(id: string): string {
      return this.address.city;
    }
  };

  const client2: Client = {
    name: 'Lizeth',
    age: 21,
    address: {
      id: 127,
      zip: '47200',
      city: 'Teocaltiche'
    },
    getFullAddress(id: string): string {
      return this.address.city;
    }
  };
})();