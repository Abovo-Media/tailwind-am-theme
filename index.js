const plugin          = require("tailwindcss/plugin");
const themeFontFamily = require("./src/fontFamily");
const themeColors     = require("./src/colors");
const fonts           = require("./src/fonts");
const logos           = require("./src/logos");

module.exports = plugin(function({ addBase, addComponents }) {
   addBase(fonts);

   addComponents(logos);
}, {
   theme: {
      extend: {
         fontFamily: themeFontFamily,
         colors:     themeColors
      },
   }
});