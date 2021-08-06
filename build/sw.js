/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('js/workbox-sw.js');

if (workbox) {
    console.log('Yay! Workbox is loaded 🎉');

    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "94c26821ce1b5272c4bae6f5c8ccf8a4"
  },
  {
    "url": "css/style.css",
    "revision": "e12144fd59cea8f30fd463a741f2aa52"
  },
  {
    "url": "css/tailwind.css",
    "revision": "0bb10aff42ed37906c48dd673e280020"
  },
  {
    "url": "favicon.ico",
    "revision": "9d1a4e391c9d834b19cd49b10a9d3ad3"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "52e3160622f86b13e4b3ab11b517a804"
  },
  {
    "url": "icons/Icon-100.png",
    "revision": "177bc49fc9b01971e01423d3cd65491f"
  },
  {
    "url": "icons/Icon-1024.png",
    "revision": "3d0cbf3e780ec330cb6d8f98c6e88321"
  },
  {
    "url": "icons/Icon-114.png",
    "revision": "0d89777f3439bb8852082d4c3e62ac02"
  },
  {
    "url": "icons/Icon-128.png",
    "revision": "8e0d066363c5ab1793027da5aab007fc"
  },
  {
    "url": "icons/Icon-144.png",
    "revision": "e7a3e2acb8b7a215b435e8a43c2b4370"
  },
  {
    "url": "icons/Icon-152.png",
    "revision": "4dfacee1cd9a76b893095472c1650245"
  },
  {
    "url": "icons/Icon-16.png",
    "revision": "0ec4cc976ea3c871ee7fda87afd45b7e"
  },
  {
    "url": "icons/Icon-172.png",
    "revision": "6aaee30f87a661d14a9f154fc415c2ba"
  },
  {
    "url": "icons/Icon-192.png",
    "revision": "8ff9bd31bdf2066a47182f2a586fd56a"
  },
  {
    "url": "icons/Icon-196.png",
    "revision": "098067a20baee6418a530cc039fd4c02"
  },
  {
    "url": "icons/Icon-20.png",
    "revision": "2c43b5285cace952020f92d0318aec23"
  },
  {
    "url": "icons/Icon-256.png",
    "revision": "49022dc86863429e7f16f73f39791532"
  },
  {
    "url": "icons/Icon-32.png",
    "revision": "752ce86e0fa877f7f14fd6c40e22e3f5"
  },
  {
    "url": "icons/Icon-40.png",
    "revision": "f2b69bd9b3284fbc4cc91f5aa865a12a"
  },
  {
    "url": "icons/Icon-48.png",
    "revision": "bd5f97322ee85e8ebfbf41c44bee7295"
  },
  {
    "url": "icons/Icon-512.png",
    "revision": "beab1feeb7c5d29fcc51d68e324da7f2"
  },
  {
    "url": "icons/Icon-64.png",
    "revision": "6f9bc70e2504d9b6d65ce0eb729b7f30"
  },
  {
    "url": "icons/Icon-72.png",
    "revision": "b375365156f519e4b7911839bc5db80d"
  },
  {
    "url": "icons/Icon-96.png",
    "revision": "bc9d6cff27304c43bc2eb3a828c2275d"
  },
  {
    "url": "icons/logo.svg",
    "revision": "3499dbfcf6d03c1886e02d06ab9780d0"
  },
  {
    "url": "js/alpinejs.min.js",
    "revision": "91a3ef3967ee5f1f5b6d44d863688b29"
  },
  {
    "url": "js/calc.min.js",
    "revision": "b032dd53c35879ff42b5f4005cec1653"
  },
  {
    "url": "js/calculator.js",
    "revision": "4fa60164741b08126a435601470dd65b"
  },
  {
    "url": "js/workbox-sw.js",
    "revision": "c39ab44e31cffb91e65ee5037d3ef8a5"
  },
  {
    "url": "pages/404.html",
    "revision": "4c5aca6b03f04023fe44939f770c2144"
  },
  {
    "url": "pages/offline.html",
    "revision": "7b8d2e38d8aa60e9ebe9383beb0dd703"
  }
]);

    /*
    workbox.routing.registerRoute(
        /(.*)articles(.*)\.(?:png|gif|jpg)/,
        workbox.strategies.cacheFirst({
            cacheName: 'images-cache',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );
   

    const articleHandler = workbox.strategies.networkFirst({
        cacheName: 'index-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
            })
        ]
    });
     */

    //     workbox.routing.registerRoute(/(.*)index(.*)\.html/, args => {

    workbox.routing.registerRoute('', args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('pages/offline.html');
            } else if (response.status === 404) {
                return caches.match('pages/404.html');
            }
            return response;
        });
    });

} else {
    console.log('Boo! Workbox didnt load 😬');
}