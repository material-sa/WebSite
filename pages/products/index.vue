<template>
<div>
	 
	    <Products />
	 
  </div>
</template>


<script>
import Products from "@/components/products/index.vue";
import Layout from "@/layouts/main/index.vue";

export default {
  name: "About Us",
  components: { Products ,Layout},
};
</script>
