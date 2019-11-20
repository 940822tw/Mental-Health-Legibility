$("html").attr("lang", "kr");


function Card(index,nameKor,nameEng,bgFile,chFile,bgFileModal,chFileModal,mainColor,offsetX,offsetY,mention,summary,desc1,desc2,dsec3,synonym,keyword){
this.index=index; this.nameKor=nameKor; this.nameEng=nameEng; this.bgFile=bgFile; this.chFile=chFile;  this.bgFileModal=bgFileModal; this.chFileModal=chFileModal; this.mainColor=mainColor; this.offsetX=offsetX; this.offsetY=offsetY; this.mention=mention;
this.summary=summary; this.desc1=desc1; this.desc2=desc2; this.dsec3=dsec3; this.synonym=synonym; this.keyword=keyword;}
var cardArr = [];


function generate(){
var arr = []
var GSSurl = "https://spreadsheets.google.com/feeds/cells/1fwiws2B_TjK2ThDcPB3LO5Kpx4BkkKtNXbA8UfL2QMg/1/public/basic?alt=json-in-script&callback=?";
 setTimeout(function() {
   $.getJSON(GSSurl,function(data){
     var entry=data.feed.entry;
     var j = 0;
     //헷갈리니 배열에 담아버리기
     for (var i = 0; i < entry.length; i++) {arr[i] = entry[i].content.$t};
     for (var j = 0; j < 61; j++){cardArr[j]=new Card(arr[j*17+0],arr[j*17+1],arr[j*17+2],arr[j*17+3],arr[j*17+4],arr[j*17+5],arr[j*17+6],arr[j*17+7],arr[j*17+8],arr[j*17+9],arr[j*17+10],arr[j*17+11],arr[j*17+12],arr[j*17+13],arr[j*17+14],arr[j*17+15],arr[j*17+16])}
     for (var i = 1; i < 61; i++){cardGenerate(i);}
     for (var i = 1; i < 61; i++){mobile(i)}
   });
    }, 50);
}

generate();

function cardGenerate(num){
var cardCode=''
    //////////////////
    // cardCode+='<div id="card-'+cardArr[num].index+'" class="card" style="box-shadow:0px 0px 9px -3px '+cardArr[num].mainColor+'">'
    cardCode+='<div id="card-'+cardArr[num].index+'" class="card" onclick="cardModal('+num+')" data-category="'+cardArr[num].desc2+'">'
      cardCode+='<div class="card-wrapper">'
        // cardCode+='<div class="card-name"></div><br>"
        cardCode+='<div class="card-mention"><span class="name">'+cardArr[num].nameKor+'</span><br><span style="color:'+cardArr[num].mainColor +'">'+cardArr[num].mention+'</span><br><span class="keyword">'+cardArr[num].keyword+'</span></div>'
        cardCode+='<div class="card-thumbnail"><img src="'+cardArr[num].chFile+'" style="margin-right:'+cardArr[num].offsetX+'; margin-bottom:'+cardArr[num].offsetY+'"/></div>'
        cardCode+='<div class="card-bg"><img src="'+cardArr[num].bgFile+'"/></div>'
        cardCode+='<div class="card-bg2"><img src="src/gr.png"/></div>'
      cardCode+='</div>'
    cardCode+='</div>'
    //////////////////
    $("#cardContainer").append(cardCode);
}


function cardModal(num){
var modalCode=''

   modalCode+='<div id="modal-'+num+'" class="modal">'
    modalCode+='<div id="modal-content-'+num+'" class="modal-content">'
      modalCode+='<div class="close" onclick="remove('+"'modal-"+num+"'"+')"><img src="src/close.png"></div>'
      modalCode+='<img class="modal-img-bg" src="'+cardArr[num].bgFileModal+'">'
      modalCode+='<img class="modal-img-ch" src="'+cardArr[num].chFileModal+'">'
      modalCode+='<div style="color:'+cardArr[num].mainColor+'" class="modal-nameKor">'+cardArr[num].nameKor+'</div>'
      modalCode+='<div style="color:'+cardArr[num].mainColor+'" class="modal-nameEng">'+cardArr[num].nameEng+'</div>'
      modalCode+='<div class="modal-keyword">'+cardArr[num].keyword+'</div>'
      // modalCode+='<div class="modal-desc1"></div>'
      modalCode+='<div class="modal-summary"><span class="category">인지도</span><br>'+cardArr[num].desc1+'<br><br><span class="category">정의</span><br>'+cardArr[num].summary+'<br><br><span class="category">비슷한 말</span><br>'+cardArr[num].synonym+'</div>'
      // modalCode+='<div class="modal-synonym"><span class="category">정의</span><br>'+cardArr[num].summary+'</div>'

    modalCode+='</div>'
    modalCode+='<div id="modal-bg-'+num+'" class="modal-bg" onclick="remove('+"'modal-"+num+"'"+')"></div>'
  modalCode+='</div>'
$("#s10").append(modalCode);
}


function mobile(num){
  var mobileCode=''
        mobileCode+='<div id="mobile-content-'+num+'" class="mobile-content">'
          mobileCode+='<img class="mobile-img-bg" src="'+cardArr[num].bgFileModal+'">'
          mobileCode+='<img class="mobile-img-ch" src="'+cardArr[num].chFileModal+'">'
          mobileCode+='<div style="color:'+cardArr[num].mainColor+'" class="mobile-nameKor">'+cardArr[num].nameKor+'</div>'
          mobileCode+='<div style="color:'+cardArr[num].mainColor+'" class="mobile-nameEng">'+cardArr[num].nameEng+'</div>'
          mobileCode+='<div class="mobile-keyword">'+cardArr[num].keyword+'</div>'
          mobileCode+='<div class="mobile-summary"><span class="category">인지도</span><br>'+cardArr[num].desc1+'<br><br><span class="category">정의</span><br>'+cardArr[num].summary+'<br><br><span class="category">비슷한 말</span><br>'+cardArr[num].synonym+'</div>'
        mobileCode+='</div>'
  $("#mobile").append(mobileCode);
}


function remove(id){
 obj = document.getElementById(id)
 obj.remove()
}

//smooth scrolling//
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) {
       $(".modal").remove()

    }
});

function search(){
  $('html, body').animate({scrollTop: '10000px'}, 10);
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value;
    // ul = document.getElementById("myUL");
    li = document.getElementsByClassName('card');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i]
      txtValue = a.textContent || a.innerText;
      if (txtValue.indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }




////////////////우울증, 증후군, 공포증, 중독,
