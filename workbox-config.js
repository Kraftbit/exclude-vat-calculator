module.exports = {
  "globDirectory": "src/",
  "globPatterns": [
    "index.html",
    "**/*.{css,ico,png,svg,html,js,json}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "../workbox-config.js",
    "js/calculator.js",
    "css/tailwind.css"
  ]
};