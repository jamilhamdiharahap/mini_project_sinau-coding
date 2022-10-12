<template>
    <nav class="flex justify-between items-center md:px-4 opacity-95 md:p-0 p-2">
        <div class="flex p-2 items-center gap-5 md:px-8">
            <h1 class="text-blue-600 font-bold z-1 md:text-base text-sm md:flex hidden">MARKETPLACE</h1>
            <img src="../assets/sinau.png" class="md:w-40 w-24" alt="">
        </div>
        <div class="border p-2 rounded">
            <IconMenu />
        </div>
    </nav>
</template>

<script>
import IconMenu from './icons/IconMenu.vue';
export default {
    components: {
        IconMenu
    }
}
</script>