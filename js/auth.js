import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.register = function () {
    const email = regEmail.value;
    const password = regPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Registration Successful");
            window.location.href = "index.html";
        })
        .catch(err => alert(err.message));
};

window.login = function () {
    const email = loginEmail.value;
    const password = loginPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "blog.html";
        })
        .catch(err => alert(err.message));
};
