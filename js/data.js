
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

// [CREATE] 등록하기버튼
$("#createBtn").click(async function () {
    let name = $("#name").val();
    let mbti = $("#mbti").val();
    let work_style = $("#work_style").val();
    let tmi = $("#tmi").val();
    let profile_img_url = $("#profile_img_url").val();

    if (profile_img_url === '' || name === '' || mbti === '' || work_style === '' || tmi == '') { //데이터 입력 확인
        alert("정보를 모두 입력해주세요.")
    } else {
        //[이도님 코드 작성 영역 addDoc 함수 사용해주세요]
    }
});

// [UPDATE] 등록하기버튼
$("#updateBtn").click(async function () {
    let userId = $(this).attr("data-id");
    let name = $("#name").val();
    let mbti = $("#mbti").val();
    let work_style = $("#work_style").val();
    let tmi = $("#tmi").val();
    let profile_img_url = $("#profile_img_url").val();

    let dataToUpdate = {
        'name': name,
        'mbti': mbti,
        'work_style': work_style,
        'tmi': tmi,
        'profile_img_url': profile_img_url,
    };

    //[나은님 코드 작성 영역 updateDoc 함수 사용해주세요]

});

// [DELETE] - 삭제하기 버튼
$("#deleteBtn").click(async function () {
    let userId = $(this).attr("data-id");

    //[나은님 코드 작성 영역 updateDoc 함수 사용해주세요]
    window.location.href = 'index.html';
});


// [READ] - TEMPLATE
users.forEach((user) => {
    let row = user.data();

    let temp_profile_info_html = `
            <div class="profile-info" data-id="${user.id}" data-name="${row["name"]}" data-mbti="${row["mbti"]}" data-work_style="${row["work_style"]}" data-blog_url="${row["blog_url"]}" data-tmi="${row["tmi"]}" data-profile_img_url="${row["profile_img_url"]}">
                <div class="profile-image">
                    <img src="${row["profile_img_url"]}" alt="원형 이미지">
                </div>
                <p class="p-work_style">${row["work_style"]}</p>
                <p class="p-name">${row["name"]}</p>
            </div>
        `;
    $("#profileList").append(temp_profile_info_html);
});

// [READ] - profile-info
$(".profile-info").click(function () {
    let userId = $(this).attr("data-id");
    let name = $(this).attr("data-name");
    let mbti = $(this).attr("data-mbti");
    let work_style = $(this).attr("data-work_style");
    let blog_url = $(this).attr("data-blog_url");
    let tmi = $(this).attr("data-tmi");
    let profile_img_url = $(this).attr("data-profile_img_url");

    $(".profile-detail-info").show();
    $(".disabled-cover").show();
    $(".disabled-cover").animate({
        opacity: 0.8
    }, 500);
});
