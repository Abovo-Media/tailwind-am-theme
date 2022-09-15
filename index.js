const plugin          = require("tailwindcss/plugin");
const themeFontFamily = require("./src/fontFamily");
const themeColors     = require("./src/colors");
const fonts           = require("./src/fonts");
const logos           = require("./src/logos");

module.exports = {
   theme: {
      extend: {
         fontFamily: themeFontFamily,
         colors:     themeColors
      },
   },
   plugins: [
      plugin(function({ addBase, addComponents }) {
         addBase(fonts);

         addComponents(logos);
      })
   ]
}