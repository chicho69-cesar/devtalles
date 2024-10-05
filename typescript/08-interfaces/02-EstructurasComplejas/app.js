"use strict";
(() => {
    const client1 = {
        name: 'Cesar',
        age: 21,
        address: {
            id: 123,
            zip: '47210',
            city: 'Villa Hidalgo'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Lizeth',
        age: 21,
        address: {
            id: 127,
            zip: '47200',
            city: 'Teocaltiche'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
