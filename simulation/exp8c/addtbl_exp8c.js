/* /*Lab:exp_8_Part2_J-K flip flop
	File name: addtbl_exp8b.js
  content: table creation and plotting function call
    Author:Prakriti Dhang */

    /* Table creation */
var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var dataPoints = [];

var table, rows, switching, i, x, y, shouldSwitch;
function dintbl(){
    table = document.getElementById("mytabled");

    
    arr[0]=clkp[0];

    arr[1]=dt[0];
    

    arr[2]=qq1[0];
    arr[3]=qq1[1];

    arr[4]=action;    
    

    tabrowindex + 1;
    
       
    var row = table.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 5; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];

    }
    var rowCount = document.getElementById('mytabled').rows.length;

if(rowCount == 3){
    document.getElementById('plot').style.visibility="visible";
}


}


     function dplot(){
        document.getElementById('graphshowd').style.display="block";
       plotgraph();
        plotd();
        qplot();
        qbarplot();
        
     }