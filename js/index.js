var wid=document.documentElement.clientWidth;
if(wid>750){
    wid=750;
}
// 720可以根据实际设计稿的宽度进行修改
var fs=(wid*100)/750;
document.documentElement.style.fontSize=fs+"px";