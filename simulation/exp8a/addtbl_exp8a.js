/* /*Lab:exp_8_Part1_S-R flip flop
	File name: addtbl_exp8a.js
  content: inert  into table, plot graph
    Author:Prakriti Dhang */

    /* Table creation */
var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var dataPoints = [];

var table, rows, switching, i, x, y, shouldSwitch;
function srintbl(){
    table = document.getElementById("mytablesr");

    
    arr[0]=clkp[0];

    arr[1]=sr[0];
    arr[2]=sr[1];
    

    arr[3]=qq1[0];
    arr[4]=qq1[1];

    arr[5]=action;    
    

    tabrowindex + 1;
    
       
    var row = table.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
       
    }
    var rowCount = document.getElementById('mytablesr').rows.length;

if(rowCount == 5){
    document.getElementById('plotb').style.visibility="visible";
}

}


     function srplot(){
       
        document.getElementById('graphshowsr').style.display="block";
        plotgraph();
        splot();
        rplot();
        qplot();
        qbarplot();
        
     }