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
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "280f1a814d891ea9f623465286e65d46"
  },
  {
    "url": "css/style.css",
    "revision": "5b4f66b83d4f450e474166e6e2b080da"
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
    "url": "icons/logo.svg",
    "revision": "3499dbfcf6d03c1886e02d06ab9780d0"
  },
  {
    "url": "js/alpinejs.min.js",
    "revision": "91a3ef3967ee5f1f5b6d44d863688b29"
  },
  {
    "url": "js/calc.min.js",
    "revision": "e818ce160382be6f2a12452d68ff5dc0"
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

    workbox.routing.registerRoute(
        /(.*)articles(.*)\.(?:png|gif|jpg)/,
        workbox.strategies.cacheFirst({
            cacheName: 'images-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

    const articleHandler = workbox.strategies.networkFirst({
        cacheName: 'articles-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
            })
        ]
    });

    workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('pages/offline.html');
            } else if (response.status === 404) {
                return caches.match('pages/404.html');
            }
            return response;
        });
    });

    const postHandler = workbox.strategies.cacheFirst({
        cacheName: 'posts-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
            })
        ]
    });

    workbox.routing.registerRoute(/(.*)pages\/post(.*)\.html/, args => {
        return postHandler.handle(args).then(response => {
            if (response.status === 404) {
                return caches.match('pages/404.html');
            }
            return response;
        })
            .catch(function () {
                return caches.match('pages/offline.html');
            });
    });

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}