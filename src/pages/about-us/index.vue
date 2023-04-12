<template>
<div>
	<Layout>
	     <AboutUs />
	</Layout> 
  </div>
</template>


<script>
import AboutUs from "@/components/about/index.vue";
import Layout from "@/layouts/main/index.vue";

export default {
  name: "About Us",
  components: { AboutUs ,Layout },
};
</script>
