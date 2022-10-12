<template>
    <div class="md:flex justify-center items-center h-screen px-4">
        <div class=" bg-white shadow-lg max-w-xl w-full rounded">
            <div class="py-4">
                <h1 class="bg-blue-200 p-2 px-4 font-bold text-blue-500">Tambah Barang</h1>
                <form action="" @submit.prevent="postBarang()">
                    <div class="flex flex-row items-center gap-4 py-4 px-4">
                        <div class="flex flex-col gap-8">
                            <label for="">Nama Barang</label>
                            <label for="">Harga Barang</label>
                            <label for="">Stok Barang</label>
                            <label for="">Supplier Barang</label>
                        </div>
                        <div class="flex flex-col gap-6 flex-1">
                            <input v-model="form.namaBarang"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                            <input v-model="form.harga"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                            <input v-model="form.stok"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                            <select v-model="form.supplier"
                                class="p-1 border border-blue-200 w-full rounded focus:outline-gray-300" type="text">
                                <option v-for="item in items" :key="item.id" :value="item.id">{{ item.namaSupplier }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="flex justify-between px-4">
                        <router-link to="/dashboard" class="bg-gray-500 p-1 px-2 rounded-sm font-semibold text-white">
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
import axios from "axios"
export default {
    data: () => {
        return {
            form: { namaBarang: '', harga: '', stok: '', supplier: '' },
            items: []
        }
    },
    created() {
        this.getSupplier()
    },
    methods: {
        async postBarang() {
            axios.post("http://159.223.57.121:8090/barang/create", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: this.form
            }).then(data => {
                console.log(data)
            })
        },
        async getSupplier() {
            const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                params: {
                    offset: 0,
                    limit: 100,
                }
            })
            this.items = await data.data
        },
    }

}
</script>