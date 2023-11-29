// TokenRefresh.js

import React, { useEffect } from "react";
import { FIREBASE_AUTH } from "../firebase";

const TokenRefresh = () => {
  useEffect(() => {
    const refreshUserToken = async () => {
      try {
        const user = FIREBASE_AUTH.currentUser;
        if (user) {
          await user.getIdToken(true); // true parametresiyle token'ı yenileme işlemi yapılır
          console.log("Token refreshed successfully");
        }
      } catch (error) {
        console.error("Error refreshing user token:", error);
      }
    };

    const interval = setInterval(() => {
      // Belirli aralıklarla token'ı yenile
      refreshUserToken();
    }, 100 * 1000); // Örneğin, her 30 dakikada bir yenileme işlemi yapabilirsiniz

    // Komponent unmount olduğunda interval'i temizle
    return () => clearInterval(interval);
  }, []);

  return null; // Bu bir render fonksiyonu olduğu için null döndürüyoruz
};

export default TokenRefresh;
