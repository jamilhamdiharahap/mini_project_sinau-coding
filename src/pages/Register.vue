<template>
    <div class="md:flex justify-center h-screen items-center md:gap-10">
        <div class="p-4 md:max-w-md w-full">
            <div class="flex flex-col">
                <img src="../assets/logo_sinau.png">
                <div class="text-center">
                    <h1 class="text-blue-500 tracking-wider text-4xl font-bold py-2">
                        Selamat Datang
                    </h1>
                    <p class="text-lg tracking-wider text-blue-500  font-bold">MARKETPLACE Sinau Coding</p>
                </div>
            </div>
        </div>
        <div class="md:max-w-md w-full shadow-lg">
            <div class="bg-blue-400">
                <h1 class="p-2 text-center font-bold text-white">Register</h1>
            </div>
            <form @submit.prevent="register()" class="flex flex-col p-4 gap-4">
                <div class="bg-white border border-gray-500 rounded flex items-center">
                    <div class="p-1  bg-gray-500">
                        <IconUser />
                    </div>
                    <input v-model="form.profileName" required class="p-1 w-full rounded focus:outline-gray-300"
                        type="text">
                </div>
                <div class="bg-white border border-gray-500 rounded flex items-center">
                    <div class="p-1 bg-gray-500">
                        <IconLock />
                    </div>
                    <input v-model="form.username" required class="p-1 w-full rounded focus:outline-gray-300"
                        type="text">
                </div>
                <div class="bg-white border border-gray-500 rounded flex items-center">
                    <div class="p-1 bg-gray-500">
                        <IconLock />
                    </div>
                    <input v-model="form.password" required class="p-1 w-full rounded focus:outline-gray-300"
                        type="password">
                </div>
                <div class="flex flex-col items-center">
                    <button type="submit" class="bg-blue-500 px-2 py-1 shadow rounded text-white">Daftar</button>
                    <router-link to="/login" class="text-blue-400 border-b border-blue-500">Sudah Punya Akun
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import IconLock from '../components/icons/IconLock.vue';
import IconUser from '../components/icons/IconUser.vue';
import axios from 'axios'
export default {
    components: {
        IconLock,
        IconUser
    },
    data: () => {
        return { form: { profileName: '', username: '', password: '' } }
    },
    async created() {
    },
    methods: {
        async register() {
            await axios.post("http://159.223.57.121:8090/auth/register", this.form).
                then(data => {
                    if (data.data.message === "USERNAME IS REGISTERED") {
                        alert("data sudah terdaftar")
                    } else {
                        alert("register berhasil")
                        this.$router.push("/login")
                    }
                })
        }
    }
}
</script>