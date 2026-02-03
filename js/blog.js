import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, user => {
    if (!user) window.location.href = "index.html";
});

window.logout = function () {
    signOut(auth).then(() => window.location.href = "index.html");
};

window.addPost = async function () {
    await addDoc(collection(db, "posts"), {
        title: title.value,
        content: content.value,
        date: new Date().toLocaleString()
    });
    loadPosts();
};

async function loadPosts() {
    posts.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(doc => {
        posts.innerHTML += `
    <div class="post">
        <h3>${doc.data().title}</h3>
        <p>${doc.data().content}</p>
        <small>${doc.data().date}</small>
    </div>`;
    });
}

loadPosts();
