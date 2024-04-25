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

/*Index輸入ID後進行database比對*/
const userID = document.getElementById("userID");
const warning = document.getElementById("warning");
const button_continue = document.getElementById("continue");
warning.style.display = "none";
button_continue.addEventListener("click", (e) => {
    e.preventDefault();
    if (userID.value == null || userID.value == "") {
        school_num.style.display = "block";
    } else {
        Check_User(userID.value);
    }
    
});


//副函式區
function Check_User(userId){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        localStorage.setItem("UserId", userId);
        localStorage.setItem("UserAccount", "");
        localStorage.setItem("UserPassword", "");
        if (snapshot.exists()) { //存在該使用者
            alert("點擊確認跳轉登入畫面")
            window.location.href = 'login.html';
        } else {
            alert("新登錄使用者請先註冊")
            window.location.href = 'register.html';
        }
    }).catch((error) => {
        console.error(error);
    });
}

