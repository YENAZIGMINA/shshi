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


//❗ localStorage는 웹 브라우저에서 제공하는 웹 스토리지기술 중 하나입니다.
//❗ 웹에서 데이터를 클라이언트(자기 pc)측에 영구적으로 저장할 수 있게 해주는 저장소

// ✔ 배경테마 변경 (배경색 변경)
let themaButton = document.getElementById('thema-button');
let darkThema = "dark-thema";
let iconThema = "ri-sun-line"; 


let getCurrentThema=()=>{
    let result=document.body.classList.contains(darkThema)?'dark':'light';
    return result;
};
//아이콘 (달모양?:해모양?)
let getCurrentIcon=()=>{
    let result=themaButton.classList.contains(iconThema)?'ri-moon-clear-line':'ri-sun-line';
    return result;
};


themaButton.addEventListener("click",()=>{
    document.body.classList.toggle(darkThema);
    themaButton.classList.toggle(iconThema);


// 웹의 스토어에 값 세팅 (개발자모드 - application - local starage 확인)
localStorage.setItem('selected-thema',getCurrentThema());
localStorage.setItem('selected-icon',getCurrentIcon());

});


let selectedThema=localStorage.getItem('selected-thema');
let selectedIcon=localStorage.getItem('selected-icon');
console.log(selectedThema);
console.log(selectedIcon);

if(selectedThema){
    if(selectedThema == 'dark'){
        document.body.classList.add(darkThema);
    }else{
        document.body.classList.remove(darkThema);
    }

    if(selectedIcon == 'ri-moon-clear-line'){
        themaButton.classList.add(iconThema);
    }else{
        themaButton.classList.remove(iconThema);
    }
}



//header
let scrollHeader=()=>{
    let header=document.getElementById('header');
    pageYOffset>=50? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener("scroll",scrollHeader)


//Reveal animation (사이트 참고)
ScrollReveal().reveal('.home_img' , {origin:'top', distance:'60px', duration: 2500, delay:400 });