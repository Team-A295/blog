<script type="module">
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCd9GcQX04cjhrXs1eLMD3OffTf3qdg_No",
  authDomain: "blog-9c949.firebaseapp.com",
  projectId: "blog-9c949",
  storageBucket: "blog-9c949.firebasestorage.app",
  messagingSenderId: "877817849185",
  appId: "1:877817849185:web:a5c341cefd15fb72335120"
};

    const app = initializeApp(firebaseConfig);
    window.auth = getAuth(app);
    window.db = getFirestore(app);
</script>
