
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

// [CREATE] 등록하기버튼
$("#createBtn").click(async function () {
    let name = $("#name").val();
    let mbti = $("#mbti").val();
    let work_style = $("#work_style").val();
    let tmi = $("#tmi").val();
    let profile_img_url = $("#profile_img_url").val();
    let blog_url = $("#blog_url").val();

    if (profile_img_url === '' || name === '' || mbti === '' || work_style === '' || tmi == '' || blog_url == '') { //데이터 입력 확인
        alert("정보를 모두 입력해주세요.")
    } else {
        let doc = {
            'name' : name,
            'profile_img_url': profile_img_url,
            'mbti': mbti,
            'work_style': work_style,
            'blog_url' : blog_url,
            'tmi': tmi
        };
        await addDoc(collection(db, "User"), doc);
        alert("저장 완료!");
        window.location.href = 'index.html';
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
    let profile_img_url = $("#update-profile_img_url").val();

    let dataToUpdate = {
        'name': name,
        'mbti': mbti,
        'work_style': work_style,
        'tmi': tmi,
        'blog_url': blog_url,
        'profile_img_url': profile_img_url
    };

    await updateDoc(doc(db, "User", userId), dataToUpdate);
    alert('수정되었습니다.');
    window.location.href = 'index.html';

});

// [DELETE] - 삭제하기 버튼
$("#deleteBtn").click(async function () {
    let userId = $(this).attr("data-id");
    await deleteDoc(doc(db, "User", userId));
    window.location.href = 'index.html';
});


// TEMPLATE
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


// [데이터 전달] profile-info -> profile-detail-info
$(".profile-info").click(function () {
    let userId = $(this).attr("data-id");
    let profileAttributes = {
        "data-id": userId,
        "data-name": $(this).attr("data-name"),
        "data-mbti": $(this).attr("data-mbti"),
        "data-work_style": $(this).attr("data-work_style"),
        "data-blog_url": $(this).attr("data-blog_url"),
        "data-tmi": $(this).attr("data-tmi"),
        "data-profile_img_url": $(this).attr("data-profile_img_url")
    };

    $(".profile-detail-info").attr(profileAttributes);
    $(".update-btn, .delete-btn").attr("data-id", userId);

    $(".profile-detail-info > .text-wrap > .p-d-i-name").text($(this).attr("data-name"));
    $(".profile-detail-info > .text-wrap > .p-d-i-work_style").text($(this).attr("data-work_style"));
    $(".profile-detail-info > .text-wrap > .p-d-i-mbti").text($(this).attr("data-mbti"));
    $(".profile-detail-info > .p-d-i-blog_url").text($(this).attr("data-blog_url"));
    $(".profile-detail-info > .p-d-i-tmi").text($(this).attr("data-tmi"));
    $(".profile-detail-info > .profile-img > .image").attr("src", $(this).attr("data-profile_img_url"));

    $(".profile-detail-info-wrap").show();
    $(".disabled-cover").show().animate({
        opacity: 0.8
    }, 500);
});


//[데이터 전달] update-btn -> updateBtn
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

//[닫기버튼]
$(".close-btn").click(function () {
    $(".profile-detail-info-wrap").hide();
    $(".disabled-cover").animate({
        opacity: 0.0
    }, 500);
    $(".disabled-cover").hide();
});

//[데이터 전달] delete-btn -> deleteBtn
$(".delete-btn").click(function () {
    $(".delete-popup").show();
    $('.profile-detail-info-wrap').hide();
    let userId = $(this).attr("data-id");
    $("#deleteBtn").attr("data-id", userId)
});
