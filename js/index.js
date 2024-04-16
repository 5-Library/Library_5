$(document).ready(function () {
    //[라이브러리 추가하기 버튼] mainPage -> createPage로 이동
    $('.create-btn').click(function () {
        window.location.href = 'createPage.html';
    });

    //[취소 버튼] createPage / updatePage -> mainPage로 이동
    $('.cancel-btn').click(function () {
        window.location.href = 'index.html';
    });

    //[삭제하기 취소 버튼]
    $('.cancel-d-btn').click(function () {
        $(".delete-popup").hide();
        $('.profile-detail-info').show();
    });

    // [프로필 버튼] profile-detail-info 띄우기
    $(".profile-info").click(function () {
        $(".disabled-cover").show();
        $(".disabled-cover").animate({
            opacity: 0.8
        }, 500);
    });

    //[닫기 버튼] profile-detail-info
    $(".close-btn").click(function () {
        $(".profile-detail-info").hide();
        $(".disabled-cover").animate({
            opacity: 0.0
        }, 500);
        $(".disabled-cover").hide();
    });

});