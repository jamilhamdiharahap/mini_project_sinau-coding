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
            <div class="shadow-xl py-2">
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
            <div class="shadow-xl py-2">
                <div class="flex justify-center items-center shadow-2xl bg-blue-200">
                    <div class="bg-lime-600 w-3 h-3 rounded-full"></div>

                    <h1 class="p-2 text-center text-white font-semibold">
                        Online
                    </h1>
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
                <h1 class="font-bold">Supplier</h1>
                <router-link class="bg-blue-500 p-2 text-white md:text-base text-sm font-semibold rounded"
                    to="/tambah-supplier">Tambah
                    Supplier
                </router-link>
            </div>
            <div class="px-3 py-2 overflow-x-auto md:overflow-hidden">
                <table class="p-2 w-full border-collapse border border-slate-500">
                    <thead>
                        <tr class="md:text-base text-sm">
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">No</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Nama Supplier</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Alamat</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2 ">No Telp</th>
                            <th class="border bg-gray-100 border-slate-600 p-1 px-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in data" :key="item.id" class="md:text-md">
                            <td class="border md:p-2 p-1 border-slate-700 text-xs">{{ index+1 }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.namaSupplier }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.alamat }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">{{ item.noTelp }}</td>
                            <td class="border md:p-2 p-1 border-slate-700">
                                <div class="flex items-center justify-around">
                                    <button class="md:p-1 md:px-3 px-1 border border-red-500 rounded-sm"
                                        @click="deleteDataSupplier(item.id)">
                                        <IconDelete />
                                    </button>
                                    <router-link class="md:p-1 md:px-3 px-1 border border-yellow-500 rounded-sm"
                                        to="/update-supplier">
                                        <IconEdit />
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import IconEdit from '../components/icons/IconEdit.vue'
import IconDelete from '../components/icons/IconDelete.vue';
import axios from 'axios'
export default {
    components: {
        IconEdit,
        IconDelete
    },
    data: () => {
        return { data: [] }
    },
    created() {
        this.getSupplier()
    },

    methods: {
        async getSupplier() {
            const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                params: {
                    offset: 0,
                    limit: 10,
                }
            })
            this.data = await data.data
        },

        async deleteDataSupplier(id) {
            await axios.delete("http://159.223.57.121:8090/supplier/delete" + id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}
</script>