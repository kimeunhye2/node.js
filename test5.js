// 내장모듈
// os모듈
// hostrame,totalmem(),freemem cps()

var os=require("os");
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.networkInterfaces());
// console.log(os.cpus());

// mac address - > 렘카드 주소(물리적인주소)
// IP ->논리적인 주소(192.168.10.100)

// path 모듈
// join()
// dirname() 디텍토리 이름
// basename() 확장자를 제외한 이름
// extname() 확장자를 반환

var path=require("path");
var directory=["user","이순신","강김찬"];
var doc=directory.join(path.sep);
console.log(doc);
console.log(path.sep);//      /

var dir=path.join("user/abc","node.exe");
console.log(dir);

var filename="c:\\program\\notepad.exe"
var dirName=path.dirname(filename);
console.log("디텍토리"+dirName);
var basename=path.basename(filename);
console.log("확장자포함:"+basename);
var basename=path.extname(filename);
console.log("확장자:"+basename);