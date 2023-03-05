<template>
  <main>
    <Navbar/>
    <RouterView/>
    <Footer/>
  </main>
</template>
<script setup>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer'

</script>
<style>
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
