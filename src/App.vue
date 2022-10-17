<template>
  <header class="top-0 sticky  bg-blue-200">
    <Header />
  </header>
  <div v-if="token" class="md:flex lg:flex-row md:flex-col px-4 md:px-8">
    <div class="py-4 lg:max-w-xs md:max-w-auto w-full">
      <div class="lg:fixed lg:letf-0 lg:top-20 ">
        <div class="shadow-xl py-2">
          <div class="flex flex-col rounded-sm justify-center">
            <div class="p-2  m-auto">
              <img src="./assets/peson.png" alt="">
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
          <div :class="active ? 'bg-blue-400 text-white' : 'text-blue-400'" class="p-1">
            <router-link class="px-4 font-bold" to="/dashboard" @click="active=true">Barang</router-link>
          </div>
          <div :class="!active ? 'bg-blue-400 text-white': 'text-blue-400'" class="p-1">
            <router-link class="px-4 font-bold " to="/supplier" @click=" active=false">Supplier</router-link>
          </div>
        </div>
        <div class="shadow-xl">
          <div class="bg-blue-200 text-center flex justify-center items-center">
            <div class="bg-lime-600 w-3 h-3 rounded-full"></div>
            <h1 class="p-2  text-white font-semibold">
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
    </div>
    <router-view />
  </div>
  <main v-else>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Login from './pages/Login.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
export default {
  data() {
    return {
      active: true,
      token: ''
    }
  },
  components: {
    Login,
    Footer,
    Header,
    Sidebar
  },

  created() {
    this.token = localStorage.getItem('token');
  }
}
</script>