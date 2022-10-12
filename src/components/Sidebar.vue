<template>
    <div class="px-8 py-2 max-w-xs w-full static">
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
            <div class="bg-blue-500 p-1">
                <router-link class="px-4 font-normal" to="/barang">Barang</router-link>
            </div>
            <div class="p-1">
                <router-link class="px-4 font-normal" to="/barang">Supplier</router-link>
            </div>
        </div>
    </div>
</template>