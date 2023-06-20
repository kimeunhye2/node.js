// 노드의 기본기능알아보기
// 주소문자열과 요청파라미터
// 이벤트다루기
// 파일다루기
// 로그파일남기기
// url 모듈
// parse()      주소문자열을 URL객체로 
// format()     URL 객체를 주소문자열로

var url = require("url");
var curURL = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=nodejs")

console.log(curURL);
var curStr=url.format(curURL);
// console.log(curStr);
// querystring 모듈   
// parse() 요청파라미터문자열을 파라미터 객체로  
// stringfy() 

var curURL=url.parse("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=it++study&oquery=nodejs&tqi=i4P3%2Bdp0YihssZX9r0NssssssG8-186333")

var curStr=url.format(curURL);

var querystring=require("querystring");
var param=querystring.parse(curURL.query);
console.log(param.query);
console.log(querystring.stringify(param));

// 이벤트 보내고 받기
// 비동기방식으로 데이터를 한쪽에서 다른쪽으로 전달한다.
// emit으로 보내고 다른쪽에서 리스너를 등록해서 on으로 받는다.

process.on("exit",function(){
    console.log("exit 이벤트 발생함");
});
setTimeout(function(){
    console.log("2초뒤에 시스템 종료시도함")
    process.exit();
},2000);

var Calc=require("./calc3")
var calc=new Calc();
 
calc.emit("stop");
console.log(Calc.title+"에 이벤트 전달함")