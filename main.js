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
    //50보다 스크롤 내려가면 bg-header 클래스추가 (css에서 그림자 설정함)
}
window.addEventListener("scroll",scrollHeader)


//Reveal animation (사이트 참고)
ScrollReveal().reveal('.home_img, .about_date, .about_img, .recently_data, .recently_img, popular_card, .footer_description, .footer_content, .footer_info', {
    origin:'top', 
    distance:'60px', 
    duration: 2500, 
    delay:400 ,
    reset: true
});



ScrollReveal().reveal('.home_img', {origin:'bottom'});
ScrollReveal().reveal('.about_date, .recently_data', {origin:'left'});
ScrollReveal().reveal('.about_img, .recently_img', {origin:'right'});
ScrollReveal().reveal('.popular_card', { interval: 100 });



/* scroll-up */
/* window.addEventListener("scroll",function(){
    scrollup()
}) */

let scrollup=()=>{
    let scollup=document.getElementById('scrollup');
    pageYOffset>=350?scollup.classList.add('show-scroll'):scollup.classList.remove('show-scroll');
    //페이지 스크롤 350보다 크면 show-scroll 클래스 붙이고 아니면 떼기
    //페이지스크롤 내리면 하단에 페이지 상단으로 올라가도록 설정
}
window.addEventListener("scroll",scrollup)



//menu
let scrollActive=()=>{
    let scrollY=pageYOffset; //스크롤내리면 제일 상단부터 지나온 페이지 높이값
    //console.log(scrollY)

    let sections=document.querySelectorAll('section[id]');
    //section의 속성중 id를 가지고 있는 section들 모두
    //console.log(sections)

    //sections.forEach((아이템, 아이템의 인덱스번호)=>{}) 
    //sections의 아이템 각각에게 할 일을 지정 (매개변수 두개 받을 수 있음) 
    //인덱스번호는 생략가능 //할일 끝나면 종료
    sections.forEach((current)=>{
        let sectionHeight=current.offsetHeight;//자신 영역의 전체 높이값
        //console.log(sectionHeight)
        let sectionTop=current.offsetTop - 100; 
        //자신의 영역이 시작되는 지점(=내 머리가 천장에 닿는 지점)
        //값을 빼는 이유는 조금 더 빠른 시점에서 색상 변하도록 하려고

        let sectionId=current.getAttribute('id'); //id값 뽑는 방법
        //console.log(sectionId)

        //href 중에 sectionId를 포함한 것 뽑기
        let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`); //*= 은 포함한다는 의미
        console.log(sectionClass)

        if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
            //지나온 페이지 높이값이 내 영역의 머리가 닿는 지점보다 더 클때 +  
            //지나온 페이지 높이값이 내머리가 닿는지점+내영역의 높이보다 더 작을 때
            sectionClass.classList.add('active-link');
        }else{
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener("scroll",scrollActive)
