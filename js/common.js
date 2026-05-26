var header = '';
var headerHeight = '';
var pageHeight = 0;
var btnTop = '';
var mVarMouseOnMenu = false;
var firMenuLeft = 0;
var navIcon = '';
var useTransparentGNB = false;
var isMobile = false;

//*************** load ***************//
$(document).ready(function () {
    // 모바일 여부
    isMobile = detectMobileDevice(window.navigator.userAgent);

    /*--------------- top-button ---------------*/
    btnTop = document.getElementById('btn-top');
    btnTop.addEventListener('click', topBtnOnClick);
    
    /*--------------- menu-hover ---------------*/
    // $('.first-menu').mouseover(function(e){
    //     e.preventDefault;
    //     $('.sub-menu-cont').css('display','block');
    //     mVarMouseOnMenu = true;
    // });

    $('.first-menu').mouseleave(function() {
        mVarMouseOnMenu = false;
    });

    $('.first-menu li').mouseover(function(e) {
        e.preventDefault;

        var hElem = $("#header");
        if (!hElem.hasClass("m-over")) {
            hElem.addClass("m-over");
        }

        var elem = $(this);
        $('.first-menu li').removeClass("sel");
        elem.addClass("sel");

        var sub = elem.attr("data-sub");
        if (sub == "") {
            // $('.sub-menu-cont').css('display','none');
            $('.sub-menu-cont').removeClass("show");
        } else {
            $(".sub-menu-lv1").css("display", "none");
            $("#sub-" + sub).css("display", "flex");

            // $('.sub-menu-cont').css('display','block');
            $('.sub-menu-cont').addClass("show");
        }
        mVarMouseOnMenu = true;
    });
    
    $('.header-con').mouseover(function(e) {
        if(mVarMouseOnMenu == false) {
            $("#header").removeClass("m-over");
            $('.first-menu li').removeClass("sel");
            menuDropUp();
        }
    });
    $('.header-con').mouseleave(function(e) {
        if(mVarMouseOnMenu == false) {
            $("#header").removeClass("m-over");
            $('.first-menu li').removeClass("sel");
            menuDropUp();
        }
    });
    
    $('.sub-menu-cont').mouseover(function(e) {
        mVarMouseOnMenu = true;
    });
    $('.sub-menu-cont').mouseleave(function(e) {
        $('.first-menu li').removeClass("sel");
        menuDropUp();
    });
    
    menuResizing();
    responsiveMenu();
});

//*************** sub menu drop up ***************//
function menuDropUp() {
    // $('.sub-menu-cont').css('display','none');
    $('.sub-menu-cont').removeClass("show");
    mVarMouseOnMenu = false;
}

//***************** 브라우저 리사이징 *****************//
window.onresize = function (){
    menuResizing();
    responsiveMenu();
};

//*************** 브라우저 크기에 따른 메뉴 left 좌표 변동 ***************//
function menuResizing () {
    // firMenuLeft = document.getElementById("first-menu-con").getBoundingClientRect().left;
    // $('#sub-menu-con').css('padding-left', firMenuLeft);    // left 좌표 변동
}


//***************** 반응형 *****************//
function responsiveMenu(){
    if (window.outerWidth > 1200) {
        $('#nav-icon').removeClass('open');
        $('#responsive-menu-bg').css('display','none');
        $('body').css('overflow','auto');
        $("#header").removeClass("rspv");
        
    } else if (window.outerWidth <= 1200) {
        $('#nav-icon').off().click(function(){
            if( $(this).hasClass('open') == false ){
                $(this).addClass('open');
                $('body').css('overflow','hidden');
                $('#responsive-menu-bg').css('display','block');
                if (!$("#header").hasClass("rspv")) {
                    $("#header").addClass("rspv");
                }
            } else {
                $('#responsive-menu-bg').css('display','none');
                $('body').css('overflow','auto');
                $(this).removeClass('open');
                $("#header").removeClass("rspv");
            }
        });


        $('#first-menu-con').addClass('responsive');

        // var first = $('#first-menu-con').children('li');
        // var second = $('#sub-menu-con').children('ul');

        // // first menu hover
        // first.mouseover(function(){
        //     if($(this).index() < 5){
        //         second.removeClass('on');
        //         second[$(this).index()].classList.add('on');
        //     } else {
        //         second.removeClass('on');
        //     }
        //     mVarMouseOnMenu = true;
        // });
        // first.mouseleave(function(){
        //     if(mVarMouseOnMenu == false){
        //         second.removeClass('on');
        //     }
        // });

        // //second menu hover
        // second.mouseover(function(){
        //     mVarMouseOnMenu = true;
        // });
        // second.mouseleave(function(){
        //     second.removeClass('on');
        //     mVarMouseOnMenu = false;
        // });

        // (반응형) 태그 ID로 페이지 이동시 메뉴 닫기
        $('#responsive-menu ul a').on('click',function(){
            $('#responsive-menu-bg').css('display','none');
            $('body').css('overflow','auto');
            $('#nav-icon').removeClass('open');
        });

    }
}

//*************** 스크롤 ***************//
window.addEventListener("scroll", function(){
    header = document.querySelector("#header");
    pageHeight = 700;

    if(btnTop != ''){
        if (window.scrollY > pageHeight) {
            if(!btnTop.classList.contains('show')){  // 위로 가기 버튼
                btnTop.classList.add('show');    
            }
        } else {
            if(btnTop.classList.contains('show')){
                btnTop.classList.remove('show');    
            }
        }
    }
});

//*************** top-button ***************//
function topBtnOnClick(e) {
    var body = document.body;
    var doc = document.documentElement;

    if (body.scrollTop != 0 || doc.scrollTop != 0){
        e.preventDefault();
        $("html").addClass("scroll-to-top");
        $("html, body").animate({ scrollTop: 0 }, 400, function() {
            $("html").removeClass("scroll-to-top");
            if (useTransparentGNB) {
                $("#header").removeClass("solid");
            }
        });
    }
}

//*************** header/footer Load ***************//
function loadHTML(file){
    var rawFile = new XMLHttpRequest();

    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                document.write(allText);
            }
        }
    }

    rawFile.open("GET", file, false, '', '');
    rawFile.send(null);
}



//*************** recognize mobile device ***************//
function detectMobileDevice(agent) {
    const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]
    return mobileRegex.some(mobile => agent.match(mobile))
}