import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyD4I2qFImEw837cMYe6MkWN4zs_7t9lj5o",
    authDomain: "web-electronic-medical-records.firebaseapp.com",
    databaseURL: "https://web-electronic-medical-records-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-electronic-medical-records",
    storageBucket: "web-electronic-medical-records.appspot.com",
    messagingSenderId: "312303687958",
    appId: "1:312303687958:web:5bb1d5e1d34d1341ab5837"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// database
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

//元素
const ID = document.getElementById("ID");
const Name = document.getElementById("Name");
//var
var UserId = localStorage.getItem("UserId");
var UserName = localStorage.getItem("UserName");

ID.innerHTML = UserId;
Name.innerHTML = UserName;

/*
Write_Medical_Records.addEventListener("click", (e) => {
    e.preventDefault();
});*/