const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "company-app.firebaseapp.com",
  projectId: "company-app",
  storageBucket: "company-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
