// 타이핑할 텍스트와 요소 선택
const content = "Hello, I’m Yujeong!";
const text = document.querySelector(".welcome h1");
let textIdx = 0;

// 타이핑 애니메이션 함수
function typing() {
    if (textIdx < content.length) {
        let txt = content.charAt(textIdx);
        text.innerHTML += txt; // 텍스트 추가
        textIdx++;
    }
    else {
        text.innerHTML = "";
        textIdx = 0;
    }
}

setInterval(typing, 200)

// 텍스트가 스크롤할때마다 움직이게 하는것
let subText = document.querySelector(".text");

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value<360){
        subText.style.animation="reverse 1s ease-out forwards";
    } else {
        subText.style.animation="move-text 1s ease-in";
    }
});