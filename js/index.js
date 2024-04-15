$(document).ready(function() {
    //[라이브러리 추가하기 버튼] mainPage -> createPage로 이동
    $('.create-btn').click(function() {
        window.location.href = 'createPage.html';
    });

    //[취소 버튼] createPage / updatePage -> mainPage로 이동
    $('.cancel-btn').click(function() {
        window.location.href = 'index.html';
    });
});