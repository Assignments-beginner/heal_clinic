/* const firebaseConfig = {
  apiKey: "AIzaSyAkAdLUAUPSJs-HbvcM6hcuaVAwAiSxNM0",
  authDomain: "health-care-999.firebaseapp.com",
  projectId: "health-care-999",
  storageBucket: "health-care-999.appspot.com",
  messagingSenderId: "689909597088",
  appId: "1:689909597088:web:55dffc0664142e2b0c1ac5",
}; */
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
