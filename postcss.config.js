const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    purgecss({
      content: ["./public/index.html"],
      css: ["./public/style.css"],
    }),
    cssnano({
      preset: "default",
    }),
  ],
};
