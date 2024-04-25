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
import { getDatabase, ref, child, update, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
const database = getDatabase();
var RootRef = ref(database, "users")

/*Register填寫完畢後寫入database*/
var UserId = localStorage.getItem("UserId");
var UserAccount = localStorage.getItem("UserAccount");
var UserPassword = localStorage.getItem("UserPassword");
const name = document.getElementById("NAME");
const birth = document.getElementById("BIRTH");
const identification = document.getElementById("IDENTIFICATION");
const gender = document.getElementById("GENDER");
const account = document.getElementById("ACCOUNT");
const password = document.getElementById("PASSWORD");
const register = document.getElementById("register");

//改變按鈕文字
if ((UserAccount == "") || (UserPassword == "")) {
    register.textContent = "註冊資訊";
} else {
    register.textContent = "修改資訊";
    Auto_Fill(UserId);
}


register.addEventListener("click", (e) => {
    e.preventDefault();
    if ((name.value == null || name.value == "") || (birth.value == null || birth.value == "") || (identification.value == null || identification.value == "") || (gender.value == null || gender.value == "") || (account.value == null || account.value == "") || (password.value == null || password.value == "")) {
        alert("請確認填妥所有必填項目");
    } else {
        if ((UserAccount == "") || (UserPassword == "")) {
            alert("資料註冊成功，點擊確認跳轉至主頁");
        } else {
            alert("資料修改成功，點擊確認跳轉至主頁");
        }
        writeNewPost(UserId, name.value, birth.value, identification.value, gender.value, account.value, password.value);
        //更新 localStorage
        localStorage.setItem("UserAccount", account.value);
        localStorage.setItem("UserPassword", password.value);
        window.location.href = 'home.html';
    }
});


//副函式區
function writeNewPost(userId, name, birth, identification, gender, account, password) {
    const postData = {
        Name: name,
        Birth: birth,
        Identification: identification,
        Gender: gender,
        Account: account,
        Password: password
    };
    const newPostKey = child(RootRef, userId).key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/' + newPostKey] = postData;
    return update(RootRef, updates);
}

//修改資訊時自動抓取填入
function Auto_Fill(userId) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        name.value = snapshot.val().Name;
        birth.value = snapshot.val().Birth;
        identification.value = snapshot.val().Identification;
        gender.value = snapshot.val().Gender;
        account.value = snapshot.val().Account;
        password.value = snapshot.val().Password;
    }).catch((error) => {
        console.log(error);
    });
}