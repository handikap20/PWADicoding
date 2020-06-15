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
    { url : '/app.js', revision : '1'},
    { url : '/app-detail.js', revision : '1'},
    { url : '/src/image/liga.jpg', revision : '1' },
    { url : '/registrasi.js', revision : '1' },
    { url :'/manifest.json', revision : '1' },
    { url :'/nav.html', revision : '1' },
    { url :'/index.html', revision : '1' },
    { url :'/push.js', revision : '1' },
    { url :'/detailclub.html',  revision : '1' },
    { url :'/src/pages/home.html', revision : '1' },
    { url :'/src/pages/liga.html', revision : '1' },
    { url :'/src/pages/saved.html', revision : '1' },
    { url :'/src/pages/team.html', revision : '1' },
    { url :'/src/component/app-bar.js', revision : '1'},
    { url :'/src/component/btn.js', revision : '1'},
    { url :'/src/component/loader.js', revision : '1'},
    { url :'/src/component/loader-circle.js', revision : '1'},
    { url :'/src/css/materialize.css', revision : '1' },
    { url :'/src/js/api.js', revision : '1' },
    { url :'/src/js/nav.js', revision : '1' },
    { url :'/src/js/dataapi.js', revision : '1' },
    { url :'/src/js/datacache.js', revision : '1' },
    { url :'/src/js/db.js', revision : '1' },
    { url :'/src/js/detail.js', revision : '1' },
    { url :'/src/js/idb.js', revision : '1' },
    { url :'/src/js/materialize.js', revision : '1' },
    { url :'/src/image/logo.png', revision : '1' },
    { url :'/src/image/logo192.png', revision : '1' },
    { url :'/src/image/club.svg', revision : '1' }
    ], {
    ignoreURLParametersMatching: [/.*/]
  });
  
  workbox.routing.registerRoute( 
    /^https:\/\/api\.football-data\.org\/v2\//,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'footbal',
      plugins:[
        new workbox.cacheableResponse.Plugin({statuses:[0,200]}),
        new workbox.expiration.Plugin({maxAgeSeconds: 60 * 30}),
      ]
    })
  );