<template>
    <div class="md:flex justify-center items-center h-screen px-4">
        <div class=" bg-white shadow-lg max-w-xl w-full rounded">
            <div class="py-4">
                <h1 class="bg-blue-200 p-2 px-4 font-bold text-blue-500">Tambah Supplier</h1>
                <form action="" @submit.prevent="postSupplier()">
                    <div class="flex flex-row items-center gap-4 py-4 px-4">
                        <div class="flex flex-col gap-8">
                            <label for="">Nama Supplier</label>
                            <label for="">Alamat Supplier</label>
                            <label for="">No Telp Supplier</label>
                        </div>
                        <div class="flex flex-col gap-6 flex-1">
                            <input v-model="form.namaSupplier"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                            <input v-model="form.alamat"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                            <input v-model="form.noTelp"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                        </div>
                    </div>
                    <div class="flex justify-between px-4">
                        <router-link to="/supplier" class="bg-gray-500 p-1 px-2 rounded-sm font-semibold text-white">
                            Kembali
                        </router-link>
                        <button type="submit"
                            class="bg-blue-500 p-1 px-2 rounded-sm font-semibold text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => {
        return {
            form: { namaSupplier: '', alamat: '', noTelp: '' }
        }
    },
    created() {
        // this.postSupplier()
    },
    methods: {
        postSupplier() {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            axios.post("http://159.223.57.121:8090/supplier/create", this.form, { headers }).
                then(data => {
                    console.log(data)
                })
        }

    }

}
</script>