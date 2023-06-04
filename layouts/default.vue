<template>
  <div :style="$i18n.locale == 'en' ? 'direction: ltr' : 'direction: rtl'">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'

export default {
  name: 'Layout',
  components: { Header, Footer },
  beforeCreate() {
    //setting the api token
    this.$axios.defaults.headers.common.Authorization = process.env.api_token
    this.$axios.defaults.headers.common.Lang = this.$i18n.locale
  },
  mounted() {},
}
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4135220810342891"
     crossorigin="anonymous"></script>
<style>
@font-face {
  font-family: 'cairo';
  src: url('../assets/fonts/Cairo-Regular.ttf');
}
#app {
  font-family: cairo !important;
}
</style>
