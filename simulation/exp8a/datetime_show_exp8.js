/*Lab:exp_8_Part1_S-R flip flop
	File name: datetime_show_exp8.js
  content: display date and time
    Author:Prakriti Dhang */

var day = new Date();
var sec=0;
var min=0;

function pgload() {
 
var day = new Date();
var month=day.getMonth();
var se=day.getSeconds();
var montharray=["Jan", "Feb","Mar","Apr", "May","Jun","Jul", "Aug","Sept","Oct", "Nov","Dec",];
month=montharray[month];
var hours=day.getHours();
/* convert to 12 hours */
var ampm=hours>=12?'PM':'AM';
if(hours>12){
hours=hours%12; 

}
var datetime= ct(day.getDate()) +" "+ct(month) +", "+day.getFullYear() +" "+ct(hours) + " : " + ct(day.getMinutes()) + " : " + ct(se) + " " + ampm;
document.getElementById('dispdatetime').innerHTML =datetime;
if(sec==59){
  min++;
  sec=0;
}
else{
sec++;
}
 /*document.getElementById('disptimer').innerHTML = "Timer: "+ct(min)+ " : "+ ct(sec) + " sec";*/

var t = setTimeout(pgload, 1000);

//window.scrollTo(0,0);



}
function ct(i) {
if (i < 10) {i = "0" + i};
return i;
}