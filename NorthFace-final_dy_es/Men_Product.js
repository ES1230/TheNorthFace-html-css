
/* ------------------- 상단 메뉴바 하위 메뉴 로직 */
// 메인메뉴바에 hover시 하위메뉴바 노출시키기
var currHover = "";
// currHover : hover 존재 여부 체크할 변수

$(".navbar").hover(
  (e) => {
    if (currHover != "") {
      $(`#${currHover}`).hide();
      // hover가 있으면 기존 hover는 숨기기
    }

    var className = $(e.target).attr('class');
    // 이벤트가 발생한 요소의 클래스를 가져와서 변수 className에 저장
    if (className) {
      if (className === "navbar men-menu") {
        currHover = "men-menu"
        $(`#${currHover}`).show();
      }
      else if (className === "navbar women-menu") {
        currHover = "women-menu"
        $(`#${currHover}`).show();
      }
    }
  },
  () => {
    if (currHover != "") {
      $(`#${currHover}`).hover(
        () => { /* 하단 메뉴바 안쪽에 커서가 있을때 */ },
        () => { $(`#${currHover}`).hide(); }
        // 아니면 숨기기
      );
    }
   
  }
);
/* ------------------- 상단 메뉴바 하위 메뉴 로직 */
// 메인메뉴바에 hover시 하위메뉴바 노출시키기



function cart() {
  alert("현재 장바구니를 이용할 수 없습니다... sorry")
}




$(function () {
  //페이지 로드 시 카테고리 부분 접혀져 있는 상태로 만들기
  $(".cateButton").parent().siblings().children().hide();
  
  //img2 숨기기
  $(".img2").hide();

  //총 상품수 카운트
  let imageCount = $('.pArea img:visible').length;
  $("#tPA").text(imageCount);
  

  //head 안내 부분 순차적으로 p태그 보여주기
  let currentIndex =0;
  let rotating = $(".coupon p");  //p태그 담기

  rotating.eq(currentIndex).show(); //현재 p 보이기
  setInterval(rotateText,3000); //3초마다 변경

  function rotateText(){
    rotating.eq(currentIndex).hide(); //현재 p태그 숨김

    currentIndex = (currentIndex + 1) % rotating.length; //다음 p태그 인덱스 계산
    rotating.eq(currentIndex).show(); //다음 p태그 보이기
  }

  
  //상품 검색란 클릭했을 때 검색란 clear
  let searchInput = document.getElementById('searchAll');

  searchInput.addEventListener('click',function(){
    searchInput.value='';
    $(".pArea div").show();
  })

})


//상품 검색
$("#searchBtn").click(function () {
  //searchAll input버튼에서 value값 가져오기>대문자로 변경
  let searchWord = $("#searchAll").val().toUpperCase();
  $(".pArea div").hide();

  //검색창에 아무것도 입력하지 않았을 때
  if (searchWord == '') {
    $(".pArea div").show();
  }
  //검색결과 pArea에 노출
  else {
    $('.pArea div').each(function (index, e) {
      var pText = $(this).children('.productName').text().toUpperCase();

      if (pText.includes(searchWord)) {
        //포함되어 있으면 show로 변경
        $(this).show();
      }
    })
  }
  //상품수 다시 세기
  let allimageCount = $('.pArea img').length;
  let hideimageCount = $('.pArea img:hidden').length;
  $("#tPA").text(parseInt(allimageCount) - parseInt(hideimageCount));
})


//카테고리 클릭 시 페이지 내의 상품 갯수 보여주기
$("#sideBar").click(function(){

  //총 상품수
  let allimageCount = $('.pArea img').length;
  //숨겨져있는 상품수
  let hideimageCount = $('.pArea img:hidden').length;
  $("#tPA").text(parseInt(allimageCount)-parseInt(hideimageCount));

})

// 초기화 
$(".refreshLink").click(function(){
  location.reload();
})

// 카테고리 사이드바 이벤트 ----------------------------------------------------------------------------

const style1 = {color : 'crimson', 'font-weight' : 'bold', 'text-decoration' : 'underline'}; //마우스in
const style2 = {color : 'black', 'font-weight' : 'normal', 'text-decoration' : 'none'};  //마우스out

// 필터 숨기기
$("#filterHide").click(function(){
  $("#sideArea").toggle(400);
  $(".filterHideLabel").toggle(400);
})

//카테고리 제목버튼 누르면 소카테고리 감추기/열기
$(".cateButton").click(function(){
  $(this).parent().siblings().children().slideToggle(300);
})

// 호버이벤트------------------------------------------

//정렬 기준 호버이벤트
$(".arrayCategory").hover(function(){
  $(this).css(style1);
}, function(){
  $(this).css(style2);
})

//상품 카테고리 호버이벤트
$(".productCategory").children().hover(function(){
  $(this).css(style1);
}, function(){
  $(this).css(style2);
})

//의류 사이즈 카테고리 호버이벤트
$(".size").hover(function(){
  $(this).css('background-color','#a8c1d1').css('font-weight','bold').css('color','white');
} , function(){
  $(this).css('background-color','white').css('font-weight','normal').css('color','black');
})

//성별 카테고리 호버이벤트
$(".genderBox").children().hover(function(){
  $(this).css(style1);
},function(){
  $(this).css(style2);
})

//컬러 카테고리 호버이벤트
$(".circle-color").hover(function(){
  $(this).css('box-shadow','0px 0px 4px black')  ;
}, function(){
  $(this).css('box-shadow','1px 1px 4px gray')  ;
})

// 클릭이벤트------------------------------------------

//카테고리 선택 시 글씨체 초기화 
function resetFunction(){
  $(".selectCategory").css('font-family','TheJamsil2Light');
  $(".size").css('font-family','TheJamsil2Light');
  $(".genderLabel").css('font-family','TheJamsil2Light');
  $("[name=genderLabel]").prop('checked',false);
}

// 전체보기
$(".allView").click(function(){
  $(".pArea div").show();
})

// 상품 카테고리별 노출 이미지 설정
$(".selectCategory").click(function(){

  resetFunction();

  let category = $(this).attr('id');
  $(this).css('font-family','TheJamsil4Medium');

  if(category == 'allViewcate'){
    $(".pArea div").show();
  }
  else{
    let category = $(this).attr('id');
    $('.pArea .'+ category).show();
    $('.pArea div:not(.' + category +')').hide();
  }
})

//의류 사이즈별 노출 이미지 설정
$(".size").click(function(){

  resetFunction();

  $(this).css('font-family','TheJamsil4Medium');

  let size = $(this).attr('id');
  
  if(size=='allSize'){ // allsize 누르면 실행
    $(".pArea div").show();
  }else{
    $('.pArea .'+ size).show();
    $('.pArea div:not(.' + size +')').hide();
  }
})

//성별 카테고리별 노출 이미지 설정
$(".genderLabel").click(function(){

  resetFunction();
  $(this).css('font-family','TheJamsil4Medium');

  let gender = $(this).children().attr('class');

  if(gender=="allView"){
    $(".pArea div").show();
    $(".allView").prop('checked',true);
  }else{
    $('.pArea .'+ gender).show();
    $('.pArea div:not(.' + gender +')').hide();
    $(".Men").prop('checked',true);
  }
})

// 상품 컬러별 노출 이미지 설정
$(".circle-color").click(function(){

  resetFunction();

  let color= $(this).attr('title');
  $('.pArea .' + color ).show();
  $('.pArea div:not(.'+ color +')').hide();

})


// 위아래 버튼 ----------------------------------------------------------------------------

//위로 올라가기 버튼 호버 이벤트
$(".scrollButton").hover(function(){
  $(this).css('background-color','black');
} , function(){
  $(this).css('background-color','gray');
})
//위로 올라가기 버튼 클릭 시 맨위로 이동
$(".upButton").click(function(){
  document.documentElement.scrollTop = 0;
})
$(".downButton").click(function(){
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
})

// 비디오 버튼
$(".xButton").click(function(){
  $(".videoButton").css('display','none');
})
$(".paddingVideo").click(function(){
  window.open('videopage.html');
})


// 상품페이지 이벤트---------------------------------------------------------------------

//상품페이지 상품별 호버 이벤트 적용
$(".pArea").children().hover(function(){
  $(this).find(".img2").show();
  $(this).find(".img1").hide();
},function(){
  $(this).find(".img1").show();
  $(this).find(".img2").hide();
})




// ---------------------------------------------------------------------------------------

// // 스크롤이 footer top에 닿으면 사이드바의 fix가 풀림 - help
// const footerTop = $("#footer").offset().top;

// $(window).scroll(function() {
//   // 스크롤 이동 시 실행되는 코드
//   // if(footerTop <= ($(window).height()+ $(window).scrollTop())){
//     if(document.documentElement.scrollHeight <= ($(window).scrollTop()) + 897){
    
//     // $("#sideBar").css('bottom','200px').css('top','200px');
//     /* bottom: 200px;  */
//   // if(($(window).scrollTop()) >= (footerTop) ){
//     $("#sideBar").css("position","initial");   
//   }else{
//     $("#sideBar").css("position","fixed");      
//   }
// });
