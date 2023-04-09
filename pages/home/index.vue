<template>
  <HomeSlider />
  <HomeBanner />
  <ProductSlider title="New products" />
  <ProductSlider title="Best Sellers" />
  <ProductSlider title="Suggested Products" />
</template>


<script>
import HomeSlider from "@/components/home/slider.vue";
import HomeBanner from "@/components/home/homeBanner.vue";
import ProductSlider from "@/components/home/productSlider.vue";

export default {
  name: "HomePage",
  components: { HomeSlider, Layout, ProductSlider, HomeBanner },
};
</script>

