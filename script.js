$("html").attr("lang", "kr");
function generate(){
var html='';
var arr = []
var GSSurl = "https://spreadsheets.google.com/feeds/cells/1fwiws2B_TjK2ThDcPB3LO5Kpx4BkkKtNXbA8UfL2QMg/1/public/basic?alt=json-in-script&callback=?";

 setTimeout(function() {

$.getJSON(GSSurl,function(data){
  var entry=data.feed.entry;
  var j = 0;
});
}, 100);

}

generate();
