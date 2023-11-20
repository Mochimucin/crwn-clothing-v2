import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxyypgt55cyezPsuT92x_DpTkSUmGfluQ",
  authDomain: "crwn-clothing-db-42a95.firebaseapp.com",
  projectId: "crwn-clothing-db-42a95",
  storageBucket: "crwn-clothing-db-42a95.appspot.com",
  messagingSenderId: "139230743074",
  appId: "1:139230743074:web:c760a9fdd7be40690a187b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
