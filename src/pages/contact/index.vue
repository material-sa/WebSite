<template>
<div>
	<Layout>
	    <contactUs />
	</Layout> 
  </div>
</template>


<script>
import contactUs from "@/components/contactus/index.vue";
import Layout from "@/layouts/main/index.vue";

export default {
  name: "contact Us",
  components: { contactUs , Layout},
};
</script>