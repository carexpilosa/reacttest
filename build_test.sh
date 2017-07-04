babel --presets react,es2015 public_html/js/source/ -d public_html/js/build
browserify public_html/js/build/test.js -o public_html/js/build/testjs.js
