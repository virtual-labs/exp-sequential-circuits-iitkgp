/*Lab:exp_8_Part2_J-K flip flop
	File name: graphchartjs_jk.js
  content: creating canvasjs, ploting graph.
    Author:Prakriti Dhang */


var dataPointd =[];

var dataPointq =[];
var dataPointqb =[];

function plotgraph () {
  /*CanvasJS.addColorSet("greenShades",
  [//colorSet Array

 
    "#90EE90"   ,
              
  ]);*/
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    //colorSet:  "greenShades",
    theme: "dark1", 
   
    title:{
      text: "D Flip FLop",
      fontSize: 20,
    },
    axisY:{ 
      title: "Clk",
      labelAngle: 90,
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
      
    
    },
    axisX:{ 
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
     
    
    },
    data: [{
      type: "stepLine",
      color: "green",
      markerSize: 2,
      dataPoints: [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 1},
        { x: 3, y: 0 },
        { x: 4, y: 1},
        { x: 5, y: 0 },
        { x: 6, y: 1},
        { x: 7, y: 0 },
        { x: 8, y: 1},
        { x: 9, y: 0},
        { x: 10, y: 0}

      ]
    }]
  });
  chart.render();
}
function plotd(){

  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointd.push( { y: parseFloat(rwe1[1].innerHTML)});
    
}
  var chartd = new CanvasJS.Chart("chartContainerd", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
  
     
    axisY:{ 
      title: "Q",
      labelAngle: 180,
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "blue",
      markerSize: 5,
      dataPoints: dataPointd
     /* [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 0 }
      ]*/
    }]
  });
  chartd.render();
}



function qplot(){
  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointq.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}

  var chartq = new CanvasJS.Chart("chartContainerq", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "Q",
      labelAngle: 180,
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "yellow",
      markerSize: 5,
      dataPoints: dataPointq
    }]
  });
  chartq.render();

}

function qbarplot(){
  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointqb.push( { y: parseFloat(rwe1[3].innerHTML)});
    
}
  var chartqb = new CanvasJS.Chart("chartContainerqb", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Qbar",
      labelAngle: 180,
      interval: 0.5,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    
    },
    axisX:{ 
     
      interval: 1,
      minimum: 0,
      maximum: 10,
      lineThickness: 0.5,
    
    },
    data: [{
      type: "stepLine",
      color: "purple",
      markerSize: 5,
      dataPoints: dataPointqb
    }]
  });
  chartqb.render();
  
}



