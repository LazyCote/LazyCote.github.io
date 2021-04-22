const firebaseConfig = {
  apiKey: "AIzaSyAeZscH7TTLXoIbY2upywzwZNHm5Sxiep0",
  authDomain: "test-2c342.firebaseapp.com",
  databaseURL: "https://test-2c342-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-2c342",
  storageBucket: "test-2c342.appspot.com",
  messagingSenderId: "1058859254391",
  appId: "1:1058859254391:web:a348e5e3baadb3799d3c72",
  measurementId: "G-61P7KYY8VY"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const rt = firebase.database();
const fs = firebase.storage();

db.settings({timestampsInSnapshots:true});
