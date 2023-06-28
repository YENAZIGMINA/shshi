let navToggle = document.getElementById('nav_toggle');
let navMenu = document.getElementById('nav_menu');
let navClose = document.getElementById('nav_close');

//메뉴 나오게 클래스 추가
navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
})
//x버튼 누르면 노출된 메뉴 닫기
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
})



// ✔ 배경테마 변경 (배경색 변경)
let themaButton = document.getElementById('thema-button');
let darkThema = "dark-thema";
let iconThema = "ri-sun-line"; 

if(selectedThema){
    let getCurrentThema=()=>{
        document.body.classList.contains(darkThema)?'dark':'light';
    }
    let getCurrentIcon=()=>{}
}


themaButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkThema)
    themaButton.classList.toggle(iconThema)
})


// 웹의 스토어에 값 세팅
localStorage.setItem('selected-thema',getCurrentThema())
localStorage.setItem('selected-icon',getCurrentIcon())