import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVRi301uS3GcOl718lf9RT5x68-Yfmsiw",
  authDomain: "keepalive-development.firebaseapp.com",
  projectId: "keepalive-development",
  storageBucket: "keepalive-development.appspot.com",
  messagingSenderId: "442722670139",
  appId: "1:442722670139:web:114815a76a084b7d6f6e1e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
