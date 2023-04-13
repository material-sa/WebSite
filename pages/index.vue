<template>
  <div>
    <HomeSlider />
    <HomeBanner />
    <ProductSlider :title="$t('main_page.new_products')" />
    <ProductSlider :title="$t('main_page.best_sellers')" />
    <ProductSlider :title="$t('main_page.suggested_products')" />
  </div>
</template>


<script>
import HomeSlider from '@/components/home/slider.vue'
import HomeBanner from '@/components/home/homeBanner.vue'
import ProductSlider from '@/components/home/productSlider.vue'

export default {
  name: 'HomePage',
  components: { HomeSlider, ProductSlider, HomeBanner },
  created(){
	this.$axios.get('product/dynamic-home-listing').then(res=>{
		console.log("result : ", res.data)
	})
  }
}
</script>

