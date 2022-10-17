<template>

    <div class="md:max-w-5xl md:w-full py-4 shadow-xl rounded-md flex flex-col">
        <div class="bg-blue-200">
            <h1 class="p-2 text-blue-500 font-medium">Dashboard</h1>
        </div>
        <div class="flex flex-row justify-between items-center px-3 py-2">
            <h1 class="font-bold">Supplier</h1>
            <div class="flex items-center gap-2">
                <form @submit.prevent="" class="flex border border-blue-200 rounded">
                    <input type="text" class="p-1 w-full rounded focus:outline-gray-300">
                    <button type="submit" class="px-1 bg-lime-700">
                        <IconSearch />
                    </button>
                </form>
                <router-link class="bg-blue-500 p-1 text-white md:text-base text-sm font-semibold rounded"
                    to="/tambah-supplier">Tambah
                    Supplier
                </router-link>
            </div>

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
                                    @click="`${supplierId = item.id}${show = !show}`">
                                    <IconDelete />
                                </button>
                                <router-link class="md:p-1 md:px-3 px-1 border border-yellow-500 rounded-sm"
                                    :to="`/update-supplier/${item.id}`">
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
                    <h1 class="text-xl mb-4 font-bold text-slate-500">Apakah Yakin Ingin Menghapus ?</h1>
                    <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                        @click="show = !show">Cancel</button>
                    <button class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                        @click="deleteDataSupplier(supplierId)">Ok</button>
                </div>
            </div>
            <div class="flex items-center justify-end py-2 space-x-4">
                <button class="bg-gray-200 rounded-md hover:bg-blue-400 p-2" @click="prev()">
                    <IconPrev />
                </button>
                <span class="bg-blue-600 p-2 px-3 rounded-md text-bold text-white">{{ offset }}</span>
                <button class="bg-gray-200 rounded-md hover:bg-blue-400 p-2" @click="next()">
                    <IconNext />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import IconEdit from '../components/icons/IconEdit.vue'
import IconDelete from '../components/icons/IconDelete.vue';
import IconPrev from '../components/icons/IconPrev.vue';
import IconSearch from '../components/icons/IconSearch.vue'
import IconNext from '../components/icons/IconNext.vue';
import axios from 'axios'
export default {
    components: {
        IconEdit,
        IconDelete,
        IconPrev,
        IconNext,
        IconSearch
    },
    data: () => {
        return { offset: 1, data: [], show: false, supplierId: '' }
    },
    created() {
        this.getSupplier()
    },

    methods: {
        next() {
            this.offset++;
            this.getSupplier()
        },
        prev() {
            if (this.offset <= 1) {
                this.offset = 1;
            } else {
                this.offset--;
                this.getSupplier()
            }
        },

        async getSupplier() {
            const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                params: {
                    offset: this.offset,
                    limit: 15,
                }
            })

            this.data = await data.data
        },

        async deleteDataSupplier(id) {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
            await axios.delete(`http://159.223.57.121:8090/supplier/delete/${id}`, { headers })
                .then(({ data }) => {
                    if (data.message !== "Data Berhasil di Hapus" && data.status !== "Ok") {
                        alert(data.message)
                    }
                    else {
                        let item = this.data.map(data => data.id).indexOf(id);
                        this.data.splice(item, 1)
                        this.show = false
                        this.getSupplier()
                    }
                })
        },
    }
}
</script>