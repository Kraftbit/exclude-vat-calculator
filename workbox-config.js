module.exports = {
  "globDirectory": "src/",
  "globPatterns": [
    "index.html",
    "**/*.{css,ico,png,svg,html,js}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};