<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
        <a class="navbar-brand" href="#">Auth İşlemleri</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <nuxt-link active-class="active" exact to="/" class="nav-item" tag="li">
                    <a class="nav-link" href="#">Anasayfa</a>
                </nuxt-link>
                <nuxt-link active-class="active" to="/about" class="nav-item" tag="li">
                    <a class="nav-link" href="#">Hakkımda</a>
                </nuxt-link>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item">
                    <a @click.prevent="logout()" class="nav-link" href="/auth">Çıkış Yap</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "TheHeader",
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style scoped>

</style>