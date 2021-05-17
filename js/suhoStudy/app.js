/*
 *1. text를 받아서 alert을 뛰으는 popup 함수를 만들어라.
 *2. iPhone 일 때는 '아이폰' 이라는 문자열을 popup 해라.
 *3. Android일 때는 '안드로이드'라는 문자열을 popup 해라.
 *4. 둘다 아닐 때는 '기타'라는 문자열을 popup해라.
*/
// TEST와 색깔을 바꾸는 기능을 따로 하나 더 구현하라.

function getElementById(id){
    return document.getElementById(id);
}

document.getElementById('btn').addEventListener('click',app);
document.getElementById('input-color').addEventListener('change',function(e){
    changeColor('content', e.target.value);
});
document.getElementById('input-font-size').addEventListener('change',function(e){
    changefontSize(e.target.value);
});
document.getElementById('input-color-test').addEventListener('change',function(e){
    changeColor('test', e.target.value);
});

//칼라 넣기 (아이디값에 따라 달라지도록 만든 함수.)
function changeColor(id, color){
    document.getElementById(id).style.color = color;
}
// function changeColor(color){
//     document.getElementById('content').style.color = color;
// }

function changefontSize(fontSize){
    document.getElementById('content').style.fontSize = fontSize;
}

function isIPhone(){
    return navigator.userAgent.match(/iPhone/);
}
function isAndroid(){
    return navigator.userAgent.match(/Android/);
}

// 문자열일때 : 이름을 지을때 나오는 값들의 총괄할수있는 이름으로 지을것.
function draw(deviceName){
    document.getElementById('content').innerText = deviceName;
}

function app(){
    if(isIPhone()){
        return draw('아이폰');
    } 
    if(isAndroid()){
        return draw('안드로이드');
    }
    return draw('기타');
}


// 
// 팝업일때
function popup(text){
    alert(text);
}
// function app(){
//     if(isIPhone()){
//         return popup('아이폰');
//     } 
//     if(isAndroid()){
//         return popup('안드로이드');
//     }
//     return popup('기타');
// }
//app();



 function sum(a){
     return function(b){
         return a + b;
     }
 }
 var result =sum(a)(b);
 console.log(result);