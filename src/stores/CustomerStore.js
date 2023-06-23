import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
    state: () => ({
        customers: [
            {id: 1, name: "Toko Besi ABC", address: "Ngaliyan Semarang Barat", creditLimit: 100000000},
            {id:2, name: "Indomaret Anjasmoro", address: "Puri Anjasmoro Semarang Timur", creditLimit: 20000000},
        ],
        name: "Customer Store"
    }),
    actions: {
        add(name, address, creditLimit) {
            const id = Math.floor(Date.now() / 1000);
            this.customers.push({
                id: id,
                name: name, 
                address: address,
                creditLimit: creditLimit,
            })
        },
        remove(id){
            this.customers = this.customers.filter((item) => item.id != id)

            console.log(id)
            console.log("CustomerStore remove")

            console.log(this.customers)
        },
        edit(id, newName, newAddress, newCreditLimit) {
            const index = this.customers.findIndex(item => item.id === id)

            if (index !== -1) {
                this.customers[index].name = newName
                this.customers[index].address = newAddress
                this.customers[index].creditLimit = newCreditLimit
            }
        }
    }
})