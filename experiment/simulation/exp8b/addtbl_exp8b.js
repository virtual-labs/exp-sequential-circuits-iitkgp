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
function jkintbl(){
    table = document.getElementById("mytablejk");

    
    arr[0]=clkp[0];

    arr[1]=jk[0];
    arr[2]=jk[1];
    

    arr[3]=qq1[0];
    arr[4]=qq1[1];

    arr[5]=action;    
    

    tabrowindex + 1;
    
       
    var row = table.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];

    }
    var rowCount = document.getElementById('mytablejk').rows.length;

if(rowCount == 5){
    document.getElementById('plotb').style.visibility="visible";
}


}


     function jkplot(){
        document.getElementById('graphshowjk').style.display="block";
       plotgraph();
        jplot();
       kplot();
        qplot();
        qbarplot();
        
     }