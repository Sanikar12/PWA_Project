// Service Worker File
var CACHE_NAME = 'my-grocery-store-cache-v1';

var urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  // Added from manifest.json
  '/images/image1.png', // Adjusted image paths
  '/media/images/image2.png', // Adjusted image paths
  '/media/images/image4.png', // Adjusted image paths
  '/script.js' // Adjusted path if your script is located at /js/myscript.js
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        // Modify error handling to provide feedback to the user
        var errorMessage = 'Failed to cache essential files. Please try again later.';
        console.error(errorMessage, error);
        // You can also show a notification or perform other actions here to inform the user
        // For example, you can use the Notification API to show a message to the user
        // Notification.requestPermission(function(permission) {
        //   if (permission === 'granted') {
        //     new Notification(errorMessage);
        //   }
        // });
      })
  );
});

// self.addEventListener("install", function (e) {
//     e.waitUntil(
//       caches.open(staticCacheName).then(function (cache) {
//         return cache.addAll(["/"]);
//       })
//     );
//   });
  

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         }
//         var fetchRequest = event.request.clone();
//         return fetch(fetchRequest)
//           .then(function(response) {
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }
//             var responseToCache = response.clone();
//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });
//             return response;
//           })
//           .catch(function(error) {
//             console.error('Fetch failed:', error);
//             throw error;
//           });
//       })
//   );
// });

// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           return cacheName.startsWith('my-grocery-store-cache-') && cacheName !== CACHE_NAME;
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });
