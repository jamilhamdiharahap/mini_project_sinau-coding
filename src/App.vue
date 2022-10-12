<template>
  <header class="top-0 sticky  bg-blue-200">
    <Header />
  </header>
  <main>
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
  components: {
    Login,
    Footer,
    Header,
    Sidebar
  }
}
</script>