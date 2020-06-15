const  webpush = require('web-push');

const vapidKeys = {
    publicKey : 'BAtUtoAjDL4Bxf13wNjnWFM-9JJGQfpMYMK1nm1tsdlFUinAIOON9nJWr_dK-bXq8sEocRNj-rI7FjHUvHjjzj8',
    privateKey : 'TXuLRyO2G2PsqfIsBei8XObk6Yl9hMSGa5_alEDhnrY'
};
   

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cbo6gKjRTag:APA91bGJAapar_F0T7toiAfu-btcuvzfURKC6LGTG9M5UdIPsfCygyogZEwWJKvVQgKBP4VNKeYmDBpd5KJe-UE9BUA4lt1SOy95gtRJ8AFW-h8nWIRkxm8eGwvF_ShUvQ8LGHSGSbQl',
    keys: {
        p256dh: 'BMqirVX5IDvztFygJW2ZnviIBG6m2ov6JAohCeNw4qZFqyG0Cobrnv8A8qNQBbfTiifKQfk0Q7eMrztwvbHjyWs=',
        auth: 'U/mtbMlNRZQrBiPWcnX9VA=='
      }
}

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