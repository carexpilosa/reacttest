babel --presets react,es2015 ../js/source/ -d ../js/build
browserify ../js/build/test.js -o ../js/build/testjs.js
