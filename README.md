# Firebase-Authentication-w-React-Native

This repository consists of a project with a total of 2 main pages. It includes a Firebase configuration for user authentication and user creation functions. To use the project, you need to update the configuration with your Firebase account details.

## How to Use

1. Create a new project on your Firebase account.

2. Go to the "Authentication" section in the Firebase Console, navigate to the "Sign-in method" tab, and enable Email/Password authentication.

3. Go to the "Project settings" page in the Firebase Console, and copy the Firebase SDK initialization configuration.

4. Open the `firebase.js` file in your project and paste the copied configuration.

   ```javascript
   // firebase.js

   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';

   const firebaseConfig = {
     apiKey: 'your-api-key',
     authDomain: 'your-auth-domain',
     projectId: 'your-project-id',
     storageBucket: 'your-storage-bucket',
     messagingSenderId: 'your-messaging-sender-id',
     appId: 'your-app-id',
   };

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   export { auth };

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

