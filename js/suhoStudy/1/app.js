/*
 *1. text를 받아서 alert을 뛰으는 popup 함수를 만들어라.
 *2. iPhone 일 때는 '아이폰' 이라는 문자열을 popup 해라.
 *3. Android일 때는 '안드로이드'라는 문자열을 popup 해라.
 *4. 둘다 아닐 때는 '기타'라는 문자열을 popup해라.
*/
// TEST와 색깔을 바꾸는 기능을 따로 하나 더 구현하라.




function getElementById(Id){
    return document.getElementById(Id);
}
getElementById('btn').addEventListener('click', app);

getElementById('input-color')
    .addEventListener('change', function(e) {
        changeColor('content', e.target.value);
    });
getElementById('input-font-size')
    .addEventListener('change', function(e) {
        changeFontSize('content', e.target.value);
    });

getElementById('input-color-test').addEventListener('change', function(e){
    changeFontSize('test', e.target.value);
});


function changeFontSize(id, fontSize){
    getElementById(id).style.fontSize = fontSize;
}

function draw(deviceName){
    getElementById('content').innerText = deviceName;
}
function changeColor(id, color){
    return getElementById(id).style.color = color;
}

function isIPhone() {
    return navigator.userAgent.match(/iPhone/);
}
function isAndroid() {
    return navigator.userAgent.match(/Android/);
}
function app() {
    if (isIPhone()) {
        return draw('아이폰');
    }
    if(isAndroid()) {
        return draw('안드로이드');
    }

    return draw('기타');
}