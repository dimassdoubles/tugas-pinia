<template>
    <!-- heading -->
    <h1>{{ TITlE }}</h1>
    <div class="input-container">
        <font-awesome-icon icon="magnifying-glass" />
        <input style="border: none; outline: none;" class="input-field" type="text" placeholder="Cari Pelanggan"
            v-model="inputSearch">
    </div>
    <br>
    <br>

    <!-- table -->
    <div class="container">
        <div class="left-align">
            <div>Daftar Pelanggan</div>
        </div>
        <div class="right-align">
            <router-link to="/add">
                <button class="right-align">Tambah Baru</button>
            </router-link>
        </div>
    </div>
    <br>
    <div class="customer-list">
        <table>
            <thead>
                <tr>
                    <th class="left-align">Aksi</th>
                    <th class="left-align">Nama</th>
                    <th class="left-align">Alamat</th>
                    <th class="right-align">Limit Kredit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in searchCustomer()" :key="customer.id">
                    <td>
                        <font-awesome-icon @click="showRemoveModal(customer)" icon="trash" />
                        <span class="spacer"></span>
                        <button @click="showEditModal(customer)">Edit</button>
                    </td>
                    <td>
                        {{ customer.name }}
                    </td>
                    <td>
                        {{ customer.address }}
                    </td>
                    <td class="right-align">
                        {{ formatIdr(customer.creditLimit) }}
                    </td>
                </tr>
            </tbody>

        </table>
    </div>

    <!-- remove modal -->
    <Modal :title="REMOVE_MODAL_TITLE" @submit="removeCustomer" @close="closeRemoveModal" :modal-active="modalRemoveActive"
        :submitLabel="REMOVE_LABEL">
        <div class="modal-content" style="margin-left:35%; margin-right:35%; width:30%; text-align: center">
            <p>Hapus pelanggan berikut?</p>
            <h3>{{ selectedCustomer.name }}</h3>
            <p>Alamat: {{ selectedCustomer.address }}</p>
        </div>
    </Modal>

    <!-- edit modal -->
    <Modal :title="EDIT_MODAL_TITLE" @submit="editCustomer" @close="closeEditModal" :modal-active="modalEditActive">
        <div class="modal-content">
            <table style="margin-left: 35%; margin-right: 35%; width: 30%;">
                <!-- input -->
                <!-- - input_name_pelanggan -->
                <!-- - input_alamat -->
                <!-- - input_limit_kredit -->

                <!-- input_name_pelanggan -->
                <tr>
                    <td class="no-border left-align">Nama Pelanggan</td>
                </tr>
                <tr>
                    <td class=" no-border" colspan="2">
                        <input v-model="editValue.name" type="text" style="width: 100%">
                    </td>
                </tr>

                <!-- input_alamat -->
                <tr>
                    <td class="no-border left-align">Alamat</td>
                </tr>
                <tr>
                    <td class=" no-border" colspan="2">
                        <textarea v-model="editValue.address" rows="4" style="width: 100%;">
                        </textarea>
                    </td>
                </tr>

                <!-- input_limit_kredit -->
                <tr>
                    <td class="no-border left-align">Limit Kredit</td>
                </tr>
                <tr>
                    <td class="no-border" colspan="2">
                        <input v-model="editValue.creditLimit" type="number" style="width: 100%;">
                    </td>
                </tr>
            </table>
        </div>
    </Modal>
</template>
  
<script setup>
import { useCustomerStore } from '../stores/CustomerStore'
import { ref } from 'vue'
import { RouterLink } from "vue-router"
import Modal from '../components/Modal.vue'

// _variables
// _functions

// _variables
const TITlE = "Master / Pelanggan"
const REMOVE_LABEL = "Hapus"
const EDIT_MODAL_TITLE = "Edit Pelanggan"
const REMOVE_MODAL_TITLE = "Hapus Pelanggan"

const customerStore = useCustomerStore()
let inputSearch = ref("")
const modalRemoveActive = ref(false)
var selectedCustomer = ref({
    id: -99,
    name: "",
    address: "",
    creditLimit: 0,
})
var editValue = {
    id: -99,
    name: "",
    address: "",
    creditLimit: 0,
}
const modalEditActive = ref(false)



// _functions
// - formatIdr
// - searchCustomer
// - removeCustomer
// - showRemoveModal
// - closeRemoveModal
// - showEditModal
// - closeEditModal
// - editCustomer


// formatIdr
function formatIdr(amount) {
    return amount.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
}

// searchCustomer
function searchCustomer() {
    console.log("searchCustomer")
    return customerStore.customers.filter((customer) => customer.name.toLowerCase().includes(inputSearch.value.toLowerCase()) || customer.address.toLowerCase().includes(inputSearch.value.toLowerCase()))
}

// removeCustomer
function removeCustomer() {
    customerStore.remove(selectedCustomer.value.id)
    modalRemoveActive.value = false
}

// showRemoveModal
function showRemoveModal(customer) {
    selectedCustomer.value = customer
    modalRemoveActive.value = true
}

// closeRemoveModal
function closeRemoveModal() {
    modalRemoveActive.value = false
}

// showEditModal
function showEditModal(customer) {
    editValue.id = customer.id
    editValue.name = customer.name
    editValue.address = customer.address
    editValue.creditLimit = customer.creditLimit
    modalEditActive.value = true
}

// closeEditModal
function closeEditModal() {
    modalEditActive.value = false
}

// editCustomer
function editCustomer() {
    customerStore.edit(
        editValue.id,
        editValue.name,
        editValue.address,
        editValue.creditLimit,
    )
    closeEditModal()
}

</script>
  
<style>
table {
    border-collapse: collapse;
    /* Combine borders between cells */
    width: 100%;
}

th,
td {
    border: 1px solid #d0d2d4;
    /* Add a solid black border to table cells */
    padding: 8px;
}

.no-border {
    border: none
}

.left-align {
    text-align: left;
}

.right-align {
    text-align: right;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.spacer {
    margin-right: 10px;
    /* Adjust the value to set the desired horizontal spacing */
}

.input-container {
    padding: 4px;
    position: relative;
    display: inline-block;
    border: solid 1px black;
}
</style>
  