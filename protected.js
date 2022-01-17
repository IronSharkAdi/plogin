const firebaseConfig = {
    apiKey: "AIzaSyB9vsbUcpvJTJll3J1sIu3phH1V_6r59dE",
    authDomain: "viplevel-39303.firebaseapp.com",
    projectId: "viplevel-39303",
    storageBucket: "viplevel-39303.appspot.com",
    messagingSenderId: "664476424825",
    appId: "1:664476424825:web:e232b851db956a982f92a8",
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = '/';
    }
  });