// main.js
// 메인이미지 변경 함수
function changeVisual(num) {
    /*
    1 이면 main-banner 이미지를 1번 이미지로 변경
    2 이면 main-banner 이미지를 2번 이미지로 변경
    3 이면 main-banner 이미지를 3번 이미지로 변경
    (힌트) 이미지 src를 변경.
    */

    // 버튼을 클릭하기 전에 기존의 on 클레스를 제거
    $('.tab-group a').removeClass('on');

    // tab ui
    if (num == 1) {
        $('#main-banner  img').attr('src', './images/main-banner1.jpg')
        $('.tab-group a').eq(0).addClass('on');
    } else if (num == 2) {
        $('#main-banner  img').attr('src', './images/main-banner2.jpg')
        $('.tab-group a').eq(1).addClass('on');
    } else if (num == 3) {
        $('#main-banner  img').attr('src', './images/main-banner3.jpg')
        $('.tab-group a').eq(2).addClass('on');
    }
}
    