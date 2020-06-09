const  webpush = require('web-push');

const vapidKeys = {
    publicKey : 'BAtUtoAjDL4Bxf13wNjnWFM-9JJGQfpMYMK1nm1tsdlFUinAIOON9nJWr_dK-bXq8sEocRNj-rI7FjHUvHjjzj8',
    privateKey : 'TXuLRyO2G2PsqfIsBei8XObk6Yl9hMSGa5_alEDhnrY'
};
   

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dnPl-kKUPSI:APA91bHghdhS7-y3OxzBGOqtq1M_V9i_2aEoz4hOgWWf-yMxtB2X2yQCXp6xxk7GapMjuiT4C_fqrIttxNZo_duGkP15zxNIve7XQTq6prAEXUjnjE5sesYkNiFxmX-v0mPFdCJanWwq',
    keys: {
        p256dh: 'BHCUsCVpMpPINmNPjcYhRLUealZ+SjEjyirLaDdASVEcZCswSUrIwtlaJIyXydyZBclxoHdOsiK5EkF2VZpkC44=',
        auth: 'QXL/ya5EyhDt6cwSJ1xa0A=='
      }
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);


const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
const options = {
    gcmAPIKey: '39411291395',
    TTL: 60
};
   
  webpush.sendNotification(
    pushSubscription,
    payload,
    options
  );