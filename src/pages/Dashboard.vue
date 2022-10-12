<template>
    <div class="md:flex flex-row px-4">
        <div class="px-8 py-2 max-w-xs w-full m-auto">
            <div class="shadow-xl py-2">
                <div class="flex flex-col rounded-sm">
                    <div class="p-8">
                        <img src="../assets/peson.png" alt="">
                    </div>
                    <div class="bg-blue-200 w-auto">
                        <h1 class="p-2 text-center text-white font-bold">Jamil Hamdi</h1>
                    </div>
                </div>
            </div>
            <div class="shadow-xl">
                <div>
                    <h1 class="bg-blue-200 p-2 text-center text-white font-semibold">MENU</h1>
                </div>
                <div class="p-1">
                    <router-link class="px-4 font-normal text-blue-400" to="/dashboard">Barang</router-link>
                </div>
                <div class="p-1">
                    <router-link class="px-4 font-normal text-blue-400" to="/supplier">Supplier</router-link>
                </div>
            </div>
            <div class="shadow-xl">
                <div>
                    <h1 class="bg-blue-200 p-2 text-center text-white font-semibold"><span
                            class="bg-lime-600 w-10"></span>
                        Online</h1>
                </div>
                <div class="p-1">
                    <span class="px-4 font-normal text-blue-400">Hari Online : 12/10/2022</span>
                </div>
                <div class="p-1">
                    <span class="px-4 font-normal text-blue-400">Waktu Online : 2 jam</span>
                </div>
            </div>
        </div>
        <div class="md:max-w-5xl md:w-full py-4 shadow-xl rounded-md flex flex-col">
            <div class="bg-blue-200">
                <h1 class="p-2 text-blue-500 font-medium">Dashboard</h1>
            </div>
            <div class="flex flex-row justify-between items-center px-3 py-2">
                <h1 class="font-bold">Barang</h1>
                <router-link class="bg-blue-500 p-2 text-white md:text-base text-sm font-semibold rounded"
                    to="/tambah-barang">Tambah
                    Barang
                </router-link>
            </div>
            <div class="px-3 py-2 overflow-x-auto md:overflow-hidden">
                <table class="p-2 w-full border-collapse border border-slate-500">
                    <thead>
                        <tr class="md:text-base text-sm">
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">No</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Nama Barang</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Stock</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2 ">Harga</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Nama Supplier</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Alamat Supplier</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">No Telp Supplier</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in result" :key="item.id" class="md:text-md">
                            <td class="border md:p-2 p-1 border-slate-700">{{index+1 }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.namaBarang }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.stok }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.harga }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.supplier?.namaSupplier }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.supplier?.alamat }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.supplier?.noTelp }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">
                                <div class="flex items-center justify-around">
                                    <button class="md:p-1 md:px-3 px-1 border border-red-500 rounded-sm"
                                        @click="`${barangId = item.id}${show = !show}`">
                                        <IconDelete />
                                    </button>
                                    <router-link class="md:p-1 md:px-3 px-1 border border-yellow-500 rounded-sm"
                                        :to="`/update-barang/${item.id}`">
                                        <IconEdit />
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="show"
                    class="bg-slate-800 bg-opacity-50 flex justify-center items-center  fixed top-0 right-0 bottom-0 left-0">
                    <div class="bg-white px-16 py-14 rounded-md text-center">
                        <h1 class="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
                        <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                            @click="show = !show">Cancel</button>
                        <button class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                            @click="deleteDataBarang(barangId)">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconEdit from '../components/icons/IconEdit.vue'
import axios from 'axios';

import IconDelete from '../components/icons/IconDelete.vue';
export default {
    components: {
        IconEdit,
        IconDelete
    },
    data: () => {
        return { result: [], show: false }
    },
    created() {
        this.getBarang()
    },

    methods: {
        async getBarang() {
            const { data } = await axios.get("http://159.223.57.121:8090/barang/find-all", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                params: {
                    offset: 0,
                    limit: 15,
                }
            })
            this.result = await data.data
        },
        async deleteDataBarang(id) {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            try {
                await axios.delete("http://159.223.57.121:8090/barang/delete/" + id, { headers })
                    .then(({ data }) => {
                        if (data.message !== "Data Berhasil di Hapus" && data.status !== "Ok") {
                            alert(data.message)
                        } else {
                            let item = this.result.map(data => data.id).indexOf(id);
                            this.result.splice(item, 1)
                            this.show = false
                            this.getBarang()
                        }
                    });
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>