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
import {NetworkFirst} from 'workbox-strategies';

if (workbox) {

    const networkFirst = new networkFirst();
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "774c03d9a47232c79ad78693c0948ca8"
  },
  {
    "url": "css/style.css",
    "revision": "755e042d97de1c99d8251debfead5ce4"
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
    "revision": "298b2f4ba343d007ee33add7aaba09b1"
  },
  {
    "url": "js/calculator.js",
    "revision": "909b429cce3745fcab8eefbc0f47708c"
  },
  {
    "url": "js/service-worker.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/workbox-sw.js",
    "revision": "c39ab44e31cffb91e65ee5037d3ef8a5"
  },
  {
    "url": "manifest.json",
    "revision": "f657134148f295dbfb6cdaa12471efce"
  },
  {
    "url": "pages/404.html",
    "revision": "baa0ebf0b79f5abd6bd63e20339440d3"
  },
  {
    "url": "pages/offline.html",
    "revision": "3e68f0ab70f555f625425856980c7dde"
  },
  {
    "url": "sitemap.html",
    "revision": "a8b3549a8dfbf32afcb90ef570e15cff"
  }
]);

    const cacheHandler = new networkFirst({
            cacheName: 'index-cache',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                })
            ]
        });

    workbox.routing.registerRoute('', args => {
        return cacheHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('pages/offline.html');
            } else if (response.status === 404) {
                return caches.match('pages/404.html');
            }
            return response;
        });
    });

} else {
    console.log('Workbox didnt load 😬');
}