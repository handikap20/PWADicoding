importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
 
if (workbox) 
{
  console.log(`Workbox berhasil dimuat`);
}else
{
  console.log(`Workbox gagal dimuat`);
} 

workbox.precaching.precacheAndRoute([
    { url : '/', revision : '1' },
    { url : '/liga.jpg', revision : '1' },
    { url : '/registrasi.js', revision : '1' },
    { url :'/manifest.json', revision : '1' },
    { url :'/nav.html', revision : '1' },
    { url :'/index.html', revision : '1' },
    { url :'/push.js', revision : '1' },
    { url :'/detailclub.html',  revision : '1' },
    { url :'/pages/home.html', revision : '1' },
    { url :'/pages/liga.html', revision : '1' },
    { url :'/pages/saved.html', revision : '1' },
    { url :'/pages/team.html', revision : '1' },
    { url :'/css/materialize.min.css', revision : '1' },
    { url :'/css/materialize.css', revision : '1' },
    { url :'/js/api.js', revision : '1' },
    { url :'/js/nav.js', revision : '1' },
    { url :'/js/dataapi.js', revision : '1' },
    { url :'/js/datacache.js', revision : '1' },
    { url :'/js/db.js', revision : '1' },
    { url :'/js/detail.js', revision : '1' },
    { url :'/js/idb.js', revision : '1' },
    { url :'/js/materialize.js', revision : '1' },
    { url :'/js/materialize.min.js', revision : '1' },
    { url :'/logo.png', revision : '1' },
    { url :'/logo192.png', revision : '1' },
    { url :'/club.svg', revision : '1' }
    ], {
    ignoreURLParametersMatching: [/.*/]
  });
  
  workbox.routing.registerRoute( 
    /^https:\/\/api\.football-data\.org\/v2\//,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'news',
      plugins:[
        new workbox.cacheableResponse.Plugin({statuses:[0,200]}),
        new workbox.expiration.Plugin({maxAgeSeconds: 60 * 30}),
      ]
    })
  );
  
  
  // self.addEventListener('push', (event) => {
  //   let body;
  //   if (event.data) {
  //     body = event.data.text();
  //   } else {
  //     body = 'Informasi mengenai liga champions';
  //   }
  //   const options = {
  //     body: body,
  //     icon: 'logo.png',
  //     badge: 'logo.png',
  //     vibrate: [100, 50, 100],
  //     data: {
  //       dateOfArrival: Date.now(),
  //       primaryKey: 1
  //     }
  //   };
  //   event.waitUntil(
  //     self.registration.showNotification('Halo selamat datang di apilkasi infofootball', options)
  //   );
  // });