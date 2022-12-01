/*Lab:exp_8_Part1_S-R flip flop
	File name: graphchartjs.js
  content: creating canvasjs, ploting graph.
    Author:Prakriti Dhang */


var dataPoints =[];
var dataPointr =[];
var dataPointq =[];
var dataPointqb =[];

function plotgraph () {
  CanvasJS.addColorSet("greenShades",
  [//colorSet Array

 
    "#90EE90"   ,
              
  ]);
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    title:{
      text: "S-R Flip FLop",
      fontSize: 20,
    },
    axisY:{ 
      title: "Clk",
      interval: 0.5,
      lineThickness: 1,
      minimum: 0,
      maximum: 1,
      gridThickness: 0.2,
      lineThickness: 0.5,
    
    },
    axisX:{ 
      lineThickness: 1,
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
function splot(){

  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPoints.push( { y: parseFloat(rwe1[1].innerHTML)});
    
}
  var charts = new CanvasJS.Chart("chartContainers", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
  
     
    axisY:{ 
      title: "S",
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
      dataPoints: dataPoints
     /* [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1},
        { x: 3, y: 0 }
      ]*/
    }]
  });
  charts.render();
}

function rplot(){

  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointr.push( { y: parseFloat(rwe1[2].innerHTML)});
    
}
  var chartr = new CanvasJS.Chart("chartContainerr", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "R",
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
      color: "orange",
      markerSize: 5,
      dataPoints: dataPointr
    }]
  });
  chartr.render();


}

function qplot(){
  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointq.push( { y: parseFloat(rwe1[3].innerHTML)});
    
}

  var chartq = new CanvasJS.Chart("chartContainerq", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
    
    axisY:{ 
      title: "Q",
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
      dataPoints: dataPointq
    }]
  });
  chartq.render();

}

function qbarplot(){
  for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
    var rwe1 = table.rows[tabrowindex].cells;
    

    dataPointqb.push( { y: parseFloat(rwe1[4].innerHTML)});
    
}
  var chartqb = new CanvasJS.Chart("chartContainerqb", {
    animationEnabled: true,
    exportEnabled: true,
    animationDuration: 7000,
    colorSet:  "greenShades",
    theme: "dark1", 
   
    axisY:{ 
      title: "Qbar",
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
      color: "pink",
      markerSize: 5,
      dataPoints: dataPointqb
    }]
  });
  chartqb.render();
  
}



