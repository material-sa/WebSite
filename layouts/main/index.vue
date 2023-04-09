<template>
  <Header />
  <div class="main-content">
     <NuxtPage />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/layout/header.vue";
import Footer from "@/components/layout/footer.vue";

export default {
  name: "Layout",
  components: { Header, Footer },
};
</script>