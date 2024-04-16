
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
    let name = $("#update-name").val();
    let mbti = $("#update-mbti").val();
    let work_style = $("#update-work_style").val();
    let blog_url = $("#update-blog_url").val();
    let tmi = $("#update-tmi").val();
    let profile_img_url = $("#profile_img_url").val();
    
    let dataToUpdate = {
        'name': name,
        'mbti': mbti,
        'work_style': work_style,
        'tmi': tmi,
        'blog_url': blog_url,
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
            <div class="profile-info" data-id="${user.id}">
                <div class="profile-image">
                    <img src="${row["profile_img_url"]}" alt="원형 이미지">
                </div>
                <p class="p-work_style">${row["work_style"]}</p>
                <p class="p-name">${row["name"]}</p>
            </div>
        `;
    $("#profileList").append(temp_profile_info_html);

    let temp_profile_detail_info_html = `
            <div class="profile-detail-info" data-id="${user.id}" data-name="${row["name"]}" data-mbti="${row["mbti"]}" data-work_style="${row["work_style"]}" data-blog_url="${row["blog_url"]}" data-tmi="${row["tmi"]}" data-profile_img_url="${row["profile_img_url"]}">
                <div class="close-btn"></div>
                <div class="btn-wrapper">
                    <div class="update-btn" data-id=""><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill : #ffffff" d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z" fill-rule="nonzero"/></svg></div>
                    <div class="delete-btn"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill : #ffffff" d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg></div>
                </div>
            </div>
        `;
    $("#profileDetailInfo").append(temp_profile_detail_info_html);
});

// [READ] - profile-info
$(".profile-info").click(function () {
    // let userId = $(this).attr("data-id");
    // let name = $(this).attr("data-name");
    // let mbti = $(this).attr("data-mbti");
    // let work_style = $(this).attr("data-work_style");
    // let blog_url = $(this).attr("data-blog_url");
    // let tmi = $(this).attr("data-tmi");
    // let profile_img_url = $(this).attr("data-profile_img_url");

    $(".profile-detail-info").show();
    $(".disabled-cover").show();
    $(".disabled-cover").animate({
        opacity: 0.8
    }, 500);
});

$('.update-btn').click(function () {
    var profileDetailInfo = $(this).closest('.profile-detail-info');

    let userId = profileDetailInfo.attr("data-id");
    let name = profileDetailInfo.attr("data-name");
    let mbti = profileDetailInfo.attr("data-mbti");
    let work_style = profileDetailInfo.attr("data-work_style");
    let blog_url = profileDetailInfo.attr("data-blog_url");
    let tmi = profileDetailInfo.attr("data-tmi");
    let profile_img_url = profileDetailInfo.attr("data-profile_img_url");

    // URL 파라미터로 데이터 추가
    var updatePageUrl = 'updatePage.html?userId=' + encodeURIComponent(userId) + '&name=' + encodeURIComponent(name) + '&mbti=' + encodeURIComponent(mbti) + '&work_style=' + encodeURIComponent(work_style) + '&blog_url=' + encodeURIComponent(blog_url) + '&tmi=' + encodeURIComponent(tmi) + '&profile_img_url=' + encodeURIComponent(profile_img_url);

    // 페이지 이동
    window.location.href = updatePageUrl;
});

$(".close-btn").click(function () {
    $(".profile-detail-info").hide();
    $(".disabled-cover").animate({
        opacity: 0.0
    }, 500);
    $(".disabled-cover").hide();
});
