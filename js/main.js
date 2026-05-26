var popupList = [];
var nowDate = new Date();

$(document).ready(function () {
  /*----------- 팝업 출력 --------------*/
  $.ajax({
    type: "post",
    dataType: "json",
    url: "../htmls/popup.php",
    success: function (data) {
      popupList = data;

      for (var i = 0; i < Object.keys(popupList).length; i++) {
        // 모달 태그 추가
        // 이미지 링크
        if (
          data[i].popup_link == "" ||
          data[i].popup_link == null ||
          data[i].popup_link == undefined
        ) {
          // 링크 없을 경우
          $("#main-popup").append(
            '<div class="modal" id="modal' +
              data[i].uid +
              '" tabindex="-1" popupList><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><img src="./wp' +
              popupList[i].file_path +
              '"></div><div class="modal-footer"><button type="button" class="btn btn-primary" href="javascript:void(0)" onclick = "todayClosePopupOnClick(' +
              data[i].uid +
              ');">오늘 하루 보지 않기</button><button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal" href="javascript:void(0)" onclick = "closePopup(' +
              data[i].uid +
              ');">닫기</button></div></div></div></div>',
          );
        } else if (data[i].popup_link.substr(0, 4) == "http") {
          // http 표기 있는 링크일 경우
          $("#main-popup").append(
            '<div class="modal" id="modal' +
              data[i].uid +
              '" tabindex="-1" popupList><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><a href="' +
              popupList[i].popup_link +
              '" target="_blank"><img src="./wp' +
              popupList[i].file_path +
              '"></div></a><div class="modal-footer"><button type="button" class="btn btn-primary" href="javascript:void(0)" onclick = "todayClosePopupOnClick(' +
              data[i].uid +
              ');">오늘 하루 보지 않기</button><button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal" href="javascript:void(0)" onclick = "closePopup(' +
              data[i].uid +
              ');">닫기</button></div></div></div></div>',
          );
        } else {
          // http 표기 없는 링크일 경우
          $("#main-popup").append(
            '<div class="modal" id="modal' +
              data[i].uid +
              '" tabindex="-1" popupList><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><a href="https://' +
              popupList[i].popup_link +
              '" target="_blank"><img src="./wp' +
              popupList[i].file_path +
              '"></div></a><div class="modal-footer"><button type="button" class="btn btn-primary" href="javascript:void(0)" onclick = "todayClosePopupOnClick(' +
              data[i].uid +
              ');">오늘 하루 보지 않기</button><button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal" href="javascript:void(0)" onclick = "closePopup(' +
              data[i].uid +
              ');">닫기</button></div></div></div></div>',
          );
        }

        // 이미지 사이즈 분기 처리
        if (data[i].file_width > 0 && data[i].file_width <= 300) {
          $("#modal" + data[i].uid + " .modal-dialog").addClass("modal-sm");
        } else if (data[i].file_width > 300 && data[i].file_width <= 700) {
          $("#modal" + data[i].uid + " .modal-dialog").addClass("modal-md"); // default
        } else if (data[i].file_width > 700) {
          $("#modal" + data[i].uid + " .modal-dialog").addClass("modal-lg");
        }

        $("#modal" + data[i].uid).modal("show"); // 모달 태그 출력
        $("#modal" + data[i].uid + " .modal-backdrop").remove(); // 모달 검은 배경 삭제
        // $('#modal'+ data[i].uid + ' .modal-dialog').draggable({ handle: ".modal-body" });    // 모달 드래그

        // 모달 하루 동안 보지 않기 체크
        todayPopupChk(data[i].uid);
      }
    },
    error: function (xhr) {
      console.log("출력할 팝업이 없습니다.");
    },
  });

  /*----------- 배너 슬라이드 (swiper) --------------*/
  var swiper = new Swiper(".main-banner-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 17000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  swiper.on("realIndexChange", function (swiper) {
    // console.log(swiper.realIndex);
    var slide = $(".main-banner-swiper .swiper-slide")[swiper.activeIndex];
    if (slide.classList.contains("typing-ani")) {
      var arr = ["채", "팅", "을", " 하", "듯", " 편", "하", "게", ","];

      var textElem = $(slide).find(".text-highlight");
      textElem.text(" ");

      var interval = 200;
      setTimeout(function () {
        textElem.text("");
        for (var i = 0; i < arr.length; i++) {
          typingAni(textElem, i * interval, arr[i]);
        }
      }, 800);
    }
  });

  function typingAni(elem, interval, addWord) {
    setTimeout(function (i) {
      elem.text(elem.text() + addWord);
    }, interval);
  }

  /*----------- 사업 영역2 슬라이드 (swiper) --------------*/
  var business_swiper = new Swiper(".business-card-swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*----------- 주요 제품 토글 버튼 이벤트 --------------*/
  $("#BtnMainProd1").on("click", function (e) {
    $("#MainProd1").css("display", "none");
    $("#MainProd2").css("display", "flex");
  });
  $("#BtnMainProd2").on("click", function (e) {
    $("#MainProd1").css("display", "flex");
    $("#MainProd2").css("display", "none");
  });

  /*----------- 고객사 로고 슬라이드 --------------*/
  logoSlide();
});

//***************** 팝업 (bootstrap modal) *****************//

/*----------- 팝업 닫기 --------------*/
function closePopup(idx) {
  $("#modal" + idx).modal("hide");
}

/*----------- 하루동안 보지 않기 클릭 --------------*/
function todayClosePopupOnClick(uid) {
  localStorage.setItem("savedDate" + uid, nowDate);
  $("#modal" + uid).modal("hide");
}

/*----------- 당일 팝업 보지 않기 확인 여부 --------------*/
function todayPopupChk(uid) {
  if (localStorage.getItem("savedDate" + uid)) {
    var saveDate = localStorage.getItem("savedDate" + uid); // 저장된 날짜 객체
    var savedDate = new Date(saveDate);
    var interval = nowDate.getDate() - savedDate.getDate();

    if (interval != 0) {
      $("#modal" + uid).modal("show");
      localStorage.removeItem("savedDate" + uid);
    } else {
      $("#modal" + uid).modal("hide");
    }
  }
}

/*----------- 팝업 출력 이후 이벤트 
$(document).on('show.bs.modal', '.modal', function(){
    $(this).find($('.modal-dialog')).draggable({ handle: ".modal-body" });
});--------------*/

//***************** 고객사 로고 슬라이드 *****************//
function logoSlide() {
  var bannerLeft = 0;
  var first = 1;
  var last;
  var imgCnt = 0;
  var $img = $(".main6-logos li"); // 로고열
  var $first;
  var $last;

  var colInterval = 100;
  if (isMobile) {
    colInterval = 50;
  }

  $img.each(function () {
    $(this).css("left", bannerLeft);
    bannerLeft += $(this).width() + colInterval; // 열 간격 (10px)
    $(this).attr("id", "banner" + ++imgCnt); // img에 id 속성 추가
  });

  if (imgCnt > 6) {
    // 열 6개 이상이면 왼쪽으로 이동
    last = imgCnt;

    setInterval(function () {
      $img.each(function () {
        $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
      });
      $first = $("#banner" + first);
      $last = $("#banner" + last);
      if ($first.position().left < -300) {
        // 제일 앞에 열 제일 뒤로 옮김
        $first.css("left", $last.position().left + $last.width() + colInterval);
        first++;
        last++;
        if (last > imgCnt) {
          last = 1;
        }
        if (first > imgCnt) {
          first = 1;
        }
      }
    }, 20); // 속도 조정
  }
}
