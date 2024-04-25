import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDvfHX8tdxZ4t3gGsJiVeKJ0nlKTyLPs5Y",
    authDomain: "myweb0627.firebaseapp.com",
    databaseURL: "https://myweb0627-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myweb0627",
    storageBucket: "myweb0627.appspot.com",
    messagingSenderId: "255543068090",
    appId: "1:255543068090:web:32458f89cdb3b1baeb8983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// database
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

/*輸入帳密後比對是否正確*/
var UserId = localStorage.getItem("UserId");
const account = document.getElementById("ACCOUNT");
const password = document.getElementById("PASSWORD");
const warning = document.getElementById("WARNING");
const button_login = document.getElementById("LOGIN");
warning.style.display = "none";
button_login.addEventListener("click", (e) => {
    e.preventDefault();
    if (account.value == null || account.value == "" || password.value == null || password.value == "") {
        warning.style.display = "block";
    } else {
        Login_User(UserId);
    }
});


//登入檢查
function Login_User(userId) {
    const db = getDatabase();
    const dbref = ref(db, "users");
    get(child(dbref, `${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            localStorage.setItem("UserAccount", snapshot.val().Account);
            localStorage.setItem("UserPassword", snapshot.val().Password);
            localStorage.setItem("UserName", snapshot.val().Name);
            if ((account.value != localStorage.getItem("UserAccount")) || (password.value != localStorage.getItem("UserPassword"))) {
                warning.style.display = "block";
            } else {
                alert("登入成功");
                window.location.href = 'home.html';
            }
        } else {
            alert("資料庫錯誤，請通知相關人員協助");
        }
    }).catch((error) => {
        alert(error);
    });
}