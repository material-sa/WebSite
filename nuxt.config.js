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
      },
      {
        src: "/owl.carousel.js",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "/owl.carousel.min.css",
      },
    ],
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/style/style.css",
    ,
  ],
});
