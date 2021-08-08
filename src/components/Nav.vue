<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-ospoll">
        <div class="container-fluid px-5">
            <router-link class="navbar-brand" to="/">
                <img alt="Vue logo" src="../assets/logo.png" width="150" height="auto"/>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/surveys">Surveys</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                    <li class="nav-item" v-if="$auth.isAuthenticated" >
                        <router-link class="nav-link" to="/profile">Profile</router-link>
                    </li>
                    <li class="nav-item" v-if="!$auth.loading">
                        <!-- show login when not authenticated -->
                        <button class="btn btn-light" v-if="!$auth.isAuthenticated" @click="login">log in</button>
                        <!-- show logout when authenticated -->
                        <button class="btn btn-light" v-if="$auth.isAuthenticated" @click="logout">log out</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  methods: {
    // Log the user in
    login () {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>
<style lang="scss">

.bg-ospoll, .btn-gradient {
    background: linear-gradient(45deg, #530df8,#ac0cdd);
    color: #f8f9fa !important;
}
</style>
