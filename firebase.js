<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8SPfL8464z2V1dPxC552Up4LxlSKCMvA",
    authDomain: "serverdatamoney.firebaseapp.com",
    databaseURL: "https://serverdatamoney-default-rtdb.firebaseio.com",
    projectId: "serverdatamoney",
    storageBucket: "serverdatamoney.appspot.com",
    messagingSenderId: "626275651972",
    appId: "1:626275651972:web:55f60f2dc285c7f1524dd1",
    measurementId: "G-8D3K9DR7CG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
