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

});
