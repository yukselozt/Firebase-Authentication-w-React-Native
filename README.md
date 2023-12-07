# Firebase-Authentication-w-React-Native

Bu repo, toplamda 2 ana sayfadan oluşan bir projedir. İlk olarak, Firebase ile kullanıcı kimlik doğrulaması ve kullanıcı oluşturma fonksiyonlarını içerir. Projeyi kullanmak için Firebase hesabınızın konfigürasyonunu güncellemeniz gerekmektedir.

## Nasıl Kullanılır

1. Firebase hesabınızdan yeni bir proje oluşturun.

2. Projenizin Firebase Console'una giderek "Authentication" bölümünde "Sign-in method" sekmesine geçin ve E-posta/Şifre kimlik doğrulamasını etkinleştirin.

3. Firebase Console'da "Proje ayarları" sayfasına gidin ve Firebase SDK başlatma konfigürasyon bilgilerini kopyalayın.

4. Projenizdeki `firebase.js` dosyasını açın ve kopyalanan konfigürasyon bilgilerini yapıştırın.

   ```javascript
   // firebase.js

   const firebaseConfig = {
     apiKey: 'your-api-key',
     authDomain: 'your-auth-domain',
     projectId: 'your-project-id',
     storageBucket: 'your-storage-bucket',
     messagingSenderId: 'your-messaging-sender-id',
     appId: 'your-app-id',
   };

