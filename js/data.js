
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

//[[사용할 Firestore API 메서드 목록]]
//Create = addDoc
//Read = getDocs
//Update = updateDoc
//Delete = deleteDoc

//cdn 토큰값
const firebaseConfig = {
    apiKey: "AIzaSyCJUaBXlLnzg51QLhVPooGw1eNQlkzdi2o",
    authDomain: "library-e90dd.firebaseapp.com",
    projectId: "library-e90dd",
    storageBucket: "library-e90dd.appspot.com",
    messagingSenderId: "912997144460",
    appId: "1:912997144460:web:8de2664de91826829068a9",
    measurementId: "G-5CQMRWTJ3F"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
// Firestore 인스턴스 가져오기
const db = getFirestore(app);

// 'User' 컬렉션의 문서 가져오기
let users = await getDocs(collection(db, "User"));

users.forEach((user) => {
    console.log(user.id);
});