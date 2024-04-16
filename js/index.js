$(document).ready(function () {
    //[라이브러리 추가하기 버튼] mainPage -> createPage로 이동
    $('.create-btn').click(function () {
        window.location.href = 'createPage.html';
    });

    //[테스트용] mainPage -> createPage로 이동
    $('.update-btn').click(function () {
        window.location.href = 'updatePage.html';
    });

    //[취소 버튼] createPage / updatePage -> mainPage로 이동
    $('.cancel-btn').click(function () {
        window.location.href = 'index.html';
    });

    $(".profile-info").click(function () {
        console.log("test")
        $(".disabled-cover").show();
        $(".disabled-cover").animate({
            opacity: 0.8
        }, 500); // 500ms(1초) 동안 투명도를 0.2로 변경
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