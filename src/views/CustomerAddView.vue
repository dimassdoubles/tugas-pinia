<template>
    <h1>{{ TITLE }}</h1>

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
                <input v-model="customerName" type="text" style="width: 100%">
            </td>
        </tr>

        <!-- input_alamat -->
        <tr>
            <td class="no-border left-align">Alamat</td>
        </tr>
        <tr>
            <td class=" no-border" colspan="2">
                <textarea v-model="customerAddress" rows="4" style="width: 100%;">
                </textarea>
            </td>
        </tr>

        <!-- input_limit_kredit -->
        <tr>
            <td class="no-border left-align">Limit Kredit</td>
        </tr>
        <tr>
            <td class=" no-border" colspan="2">
                <input v-model="customerCreditLimit" type="number" style="width: 100%;">
            </td>
        </tr>

        <!-- button -->
        <tr>
            <td class="no-border left-align">
                <Button @click="router.go(-1)" style="width: 150px">Batal</Button>
            </td>
            <td class="no-border right-align" style="padding-right: 0">
                <Button @click="addCustomer" style="width: 150px">Tambah</Button>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useCustomerStore } from '../stores/CustomerStore'

// _variables
// _functions

// _variables
const TITLE = "Master / Pelanggan / Tambah Baru"
const customerStore = useCustomerStore()
const router = useRouter()

var customerName = ""
var customerAddress = ""
var customerCreditLimit = 0

// _functions
// - addCustomer

// addCustomer
function addCustomer() {
    customerStore.add(customerName, customerAddress, customerCreditLimit)
    router.go(-1)
}


</script>

<style>
.align-center {
    text-align: center;
}
</style>