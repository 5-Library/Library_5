$(document).ready(function () {
    //[라이브러리 추가하기 버튼] mainPage -> createPage로 이동
    $('.create-btn').click(function () {
        window.location.href = 'createPage.html';
    });

    //[생성, 업데이트 취소 버튼] createPage / updatePage -> mainPage로 이동
    $('.cancel-btn').click(function () {
        window.location.href = 'index.html';
    });

    //[삭제하기 취소 버튼]
    $('.cancel-d-btn').click(function () {
        $(".delete-popup").hide();
        $('.profile-detail-info-wrap').show();
    });
});