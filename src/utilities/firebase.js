// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";

import * as firebase from "firebase/app";
import "firebase/auth";

// const analytics = getAnalytics(app);
const firebaseConfig = {
    apiKey: "AIzaSyCzIG-WYroI_dV1V_3oJwaRlLpIiVtzRdE",
    authDomain: "vue-full-course-576cf.firebaseapp.com",
    projectId: "vue-full-course-576cf",
    storageBucket: "vue-full-course-576cf.appspot.com",
    messagingSenderId: "72007955941",
    appId: "1:72007955941:web:2adabef61b52ebad536b0c",
    measurementId: "G-XV3PZS6RDL"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;