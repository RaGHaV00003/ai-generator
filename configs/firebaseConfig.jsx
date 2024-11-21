// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "tubeguruji-startups.firebaseapp.com",
  databaseURL: "https://tubeguruji-startups-default-rtdb.firebaseio.com",
  projectId: "tubeguruji-startups",
  storageBucket: "tubeguruji-startups.appspot.com",
  messagingSenderId: "706430327770",
  appId: "1:706430327770:web:94cca31791b042a6ad3ee3",
  measurementId: "G-VPL500680Q"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage=getStorage(app)
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "aiii-e60d4.firebaseapp.com",
//   projectId: "aiii-e60d4",
//   storageBucket: "aiii-e60d4.firebasestorage.app",
//   messagingSenderId: "460108947740",
//   appId: "1:460108947740:web:8f4f337fa338154991dad9",
//   measurementId: "G-LL4D228L4L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage=getStorage(app)