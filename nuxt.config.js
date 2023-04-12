// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
  head: {
    script: [
      {
        src: "/jquery-3.5.1.slim.min.js",
      },
      {
        src: "/popper.min.js",
      },
      {
        src: "/bootstrap.min.js",
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/bootstrap.min.css",
      }
    ],
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/style/style.css",
  ],
	plugins: [
		{src: '~/plugins/vue-carousel.js',mode:'client'} // Only works on client side
	],
	modules: [
		'@nuxtjs/i18n',
	  ],i18n: {
		    lazy: true,
			langDir: 'locales/',
			strategy:"prefix_except_default",
			locales: [
				{
				  code: 'en-US',
				  iso: 'en-US',
				  file: 'en-US.json',
				  name: 'English',
				},
				{
				  code: 'ar-SA',
				  iso: 'ar-SA',
				  file: 'ar-SA.json',
				  name: 'Arabic',
				},
			  ],vueI18n: {
				fallbackLocale: 'en-US',
			  },defaultLocale: 'en-US',
          },

});
