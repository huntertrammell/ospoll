<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&family=Roboto&display=swap');

html, body, #app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f9fa;
  background-color: #082032;
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Heebo', sans-serif;
}
.btn {
  border-radius: .15rem !important;
  padding: .5rem 3rem !important;
  text-transform: uppercase;
  font-weight: 700 !important;
  font-family: 'Heebo', sans-serif;
  letter-spacing: .15rem;
  &-light {
    background-color: rgba($color: #f8f9fa, $alpha: .7) !important;
    border: none !important;
    &:hover {
       background-color: rgba($color: #f8f9fa, $alpha: 1) !important;
    }
  }
}
</style>
