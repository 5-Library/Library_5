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

    //[폼 필드 입력 확인] createPage / updatePage
    function checkInputs() {
        var allFilled = true;
        $('.form-control, .form-select, .form-textarea').each(function () {
            if ($(this).val() === '' || $(".form-select").val() === '일하는 스타일 선택') {
                allFilled = false;
                return false;
            }
        });

        if (allFilled) {
            $('#createBtn, #updateBtn').css({
                'background-color': '#566FF5',
                'color': '#ffffff'
            });
        } else {
            $('#createBtn, #updateBtn').css({
                'background-color': '#989898',
                'color': '#f7f7f7'
            });
        }
    }

    // 페이지 로드 시 검사
    checkInputs();

    // 입력 필드 값 변경 시 검사
    $('.form-control, .form-select, .form-textarea').on('change keyup', function () {
        checkInputs();
    });


});