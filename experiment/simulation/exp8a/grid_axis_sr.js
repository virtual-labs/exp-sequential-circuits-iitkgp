/*Lab:exp_8_Part1_Flip Flop S-R flipflop
	File name: grid_axis_sr.js
    Author:Prakriti Dhang*/


    var canvas;
    var ctxc;
    var cwidth, cheight;
    var ctxq;
    var ctxqb;
    var ctxr;
    var ctxs;
    var p= 45; //period  p = 70 long square wave
    var o= 25; //oscillation
    var ps= 90; //period  p = 70 long square wave
    var os= 25; //oscillation

    function drawGridclk(){


        /*   Draw Grid for Clock Pulse */
    canvas = document.getElementById("myCanvasclk");
     ctxc = canvas.getContext("2d");
   cwidth=  ctxc.canvas.width;
   cheight= ctxc.canvas.height;
   
   ctxc.beginPath();
        for (x=0;x<=cwidth;x+=55) {
            ctxc.moveTo(x, 0);
            ctxc.lineTo(x, cheight);
            //ctx.fillText("x", 1, 50);
        }
            for (y=0;y<=cheight;y+=10) {
                ctxc.moveTo(0, y);
                ctxc.lineTo(cwidth, y);
               
            }
            canvas.style.background = "black"; 
            ctxc.strokeStyle = "Gainsboro";  
            ctxc.lineWidth = 0.1;
            //ctx.fillText("x", 1, 50);*/
           
            ctxc.stroke();
        
    }
    function squareY(x) {
        return( (x%p)<o?o:0 );
    }

    var paused=false;
    function clockstop(){
       
        paused=true;
        document.getElementById('clkb').style.display="block";
            document.getElementById('clkbs').style.display="none";
      }

      /*function clockstart(){
        paused=false;
        clockpulse();
        requestAnimationFrame(animate);
      }    */
    function clockpulse(){
        
        var fps =40;
        var n=0;
        drawGridclk(ctxc);
        
    ctxc.lineWidth=1.5;

    
    requestAnimationFrame(animate);
    animate();
    function animate(){
        if(paused){return;}
        paused=false;
        setTimeout(function(){
            requestAnimationFrame(animate);

        n+=1.5;
        if(n>600){ //n >300
            n=0;
        }
       //ctxc.clearRect(0,0,cwidth,cheight);
            ctxc.beginPath();
           for(var x=0;x<n;x++){
                var y=squareY(x);
                ctxc.lineTo(x,y+50); // y cordinate
            }
            ctxc.strokeStyle = "Green"; 
            ctxc.stroke();

        }, 3000/fps);
    }
       
    
        
      }
    


    

/*   Draw Grid for S */
function drawGrids(){
    
       canvas = document.getElementById("myCanvass");
     ctxs = canvas.getContext("2d");
   cwidth=  ctxs.canvas.width;
   cheight= ctxs.canvas.height;
   
    ctxs.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctxs.moveTo(x, 0);
        ctxs.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctxs.moveTo(0, y);
            ctxs.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctxs.strokeStyle = "Gainsboro";  
        ctxs.lineWidth = 0.2;
        ctxs.stroke();

    }
  

    function squareS(x) {
        return( (x%ps)<os?os:0 );
    }

    function clockpulses1(){
        var fps =40; /* speed of the square wave */
        var n=0;
        drawGrids(ctxs);
       
        ctxs.lineWidth=1.5;
        requestAnimationFrame(animate);
        animate();
        function animate(){
            
            setTimeout(function(){
                requestAnimationFrame(animate);
    
            n+=1.5;
            if(n>100){ 
                n=0;
            }
           //ctxs.clearRect(0,0,cwidth,cheight);
                ctxs.beginPath();
               for(var x=0;x<n;x++){
                    var y=squareS(x+28);
                    ctxs.lineTo(x,y+50); // y cordinate
                }
                ctxs.strokeStyle = "Green"; 
                ctxs.stroke();
    
            }, 3000/fps);
        }
      
        
    }

    function clockpulses0(){
        var fps =60; /* speed of the square wave */
        var n=0;
        drawGrids(ctxs);
       
        ctxs.lineWidth=1;
        requestAnimationFrame(animate);
        animate();
        function animate(){
            
            setTimeout(function(){
                requestAnimationFrame(animate);
    
            n+=1.5;
            if(n>200){ 
                n=0;
            }
           // ctxc.clearRect(0,0,cwidth,cheight);
                ctxs.beginPath();
               
               for(var x=2;x<n;x++){
                ctxs.moveTo(x,75);
                ctxs.lineTo(0, 75);
                   
                }
                ctxs.strokeStyle = "Green"; 
                ctxs.stroke();
    
            }, 3000/fps);
        }
      

    }


    
        /*   Draw Grid for R */

        function drawGridr(){
      canvas = document.getElementById("myCanvasr");
         ctxr = canvas.getContext("2d");
       cwidth=  ctxr.canvas.width;
       cheight= ctxr.canvas.height;
       
        ctxr.beginPath();
        for (x=0;x<=cwidth;x+=55) {
            ctxr.moveTo(x, 0);
            ctxr.lineTo(x, cheight);
        }
            for (y=0;y<=cheight;y+=10) {
                ctxr.moveTo(0, y);
                ctxr.lineTo(cwidth, y);
               
            }
            canvas.style.background = "black"; 
            ctxr.strokeStyle = "Gainsboro";  
            ctxr.lineWidth = 0.2;
            ctxr.stroke();
        }


        function clockpulser1(){

            
           
            var fps =60; /* speed of the square wave */
            var n=0;
            drawGrids(ctxr);
           
            ctxr.lineWidth=1;
            requestAnimationFrame(animate);
            animate();
            function animate(){
                
                setTimeout(function(){
                    requestAnimationFrame(animate);
        
                n+=1.5;
                if(n>200){ 
                    n=0;
                }
               // ctxc.clearRect(0,0,cwidth,cheight);
                    ctxr.beginPath();
                   
                   for(var x=2;x<n;x++){
                    ctxr.moveTo(x,50);
                    ctxr.lineTo(0, 50);
                       
                    }
                    ctxr.strokeStyle = "Green"; 
                    ctxr.stroke();
        
                }, 3000/fps);
            }

        }




        function clockpulser0(){
            var fps =60; /* speed of the square wave */
            var n=0;
            drawGrids(ctxr);
           
            ctxr.lineWidth=1;
            requestAnimationFrame(animate);
            animate();
            function animate(){
                
                setTimeout(function(){
                    requestAnimationFrame(animate);
        
                n+=1.5;
                if(n>200){ 
                    n=0;
                }
               // ctxc.clearRect(0,0,cwidth,cheight);
                    ctxr.beginPath();
                   
                   for(var x=2;x<n;x++){
                    ctxr.moveTo(x,75);
                    ctxr.lineTo(0, 75);
                       
                    }
                    ctxr.strokeStyle = "Green"; 
                    ctxr.stroke();
        
                }, 3000/fps);
            }
          
    
        }
/*   Draw Grid for Q  */

function drawGridq(){
           canvas = document.getElementById("myCanvasq");
            ctxq = canvas.getContext("2d");
           cwidth=  ctxq.canvas.width;
           cheight= ctxq.canvas.height;
           
            ctxq.beginPath();
            for (x=0;x<=cwidth;x+=55) {
                ctxq.moveTo(x, 0);
                ctxq.lineTo(x, cheight);
            }
                for (y=0;y<=cheight;y+=10) {
                    ctxq.moveTo(0, y);
                    ctxq.lineTo(cwidth, y);
                   
                }
                canvas.style.background = "black"; 
                ctxq.strokeStyle = "Gainsboro";  
                ctxq.lineWidth = 0.2;
                ctxq.stroke();


            }
                function clockpulseq1(){
                    var fps =60; /* speed of the square wave */
                    var n=0;
                    drawGridq(ctxq);
                    ctxq.lineWidth=1;
            requestAnimationFrame(animate);
            animate();
            function animate(){
                
                setTimeout(function(){
                    requestAnimationFrame(animate);
        
                n+=1.5;
                if(n>200){ 
                    n=0;
                }
               // ctxc.clearRect(0,0,cwidth,cheight);
                    ctxq.beginPath();
                   
                   for(var x=2;x<n;x++){
                    ctxq.moveTo(x,50);
                    ctxq.lineTo(0, 50);
                       
                    }
                    ctxq.strokeStyle = "Green"; 
                    ctxq.stroke();
        
                }, 3000/fps);
            }
                    
                  
                }
                function clockpulseq0(){
                    var fps =60; /* speed of the square wave */
                    var n=0;
                    drawGridq(ctxq);
                    ctxq.lineWidth=1;
            requestAnimationFrame(animate);
            animate();
            function animate(){
                
                setTimeout(function(){
                    requestAnimationFrame(animate);
        
                n+=1.5;
                if(n>200){ 
                    n=0;
                }
               // ctxc.clearRect(0,0,cwidth,cheight);
                    ctxq.beginPath();
                   
                   for(var x=2;x<n;x++){
                    ctxq.moveTo(x,75);
                    ctxq.lineTo(0, 75);
                       
                    }
                    ctxq.strokeStyle = "Green"; 
                    ctxq.stroke();
        
                }, 3000/fps);
            }
                    
                  
                }

/*   Draw Grid for Q bar */
function drawGridqbar(){
           canvas = document.getElementById("myCanvasqbar");
     ctxqb = canvas.getContext("2d");
   cwidth=  ctxqb.canvas.width;
   cheight= ctxqb.canvas.height;
   
    ctxqb.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctxqb.moveTo(x, 0);
        ctxqb.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctxqb.moveTo(0, y);
            ctxqb.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctxqb.strokeStyle = "Gainsboro";  
        ctxqb.lineWidth = 0.2;
        ctxqb.stroke();

}

function clockpulseqbar0(){
    var fps =60; /* speed of the square wave */
    var n=0;
    drawGridqbar(ctxqb);
   
    ctxqb.lineWidth=1;
    requestAnimationFrame(animate);
    animate();
    function animate(){
        
        setTimeout(function(){
            requestAnimationFrame(animate);

        n+=1.5;
        if(n>200){ 
            n=0;
        }
       // ctxc.clearRect(0,0,cwidth,cheight);
            ctxqb.beginPath();
           
           for(var x=2;x<n;x++){
            ctxqb.moveTo(x,75);
            ctxqb.lineTo(0, 75);
               
            }
            ctxqb.strokeStyle = "Green"; 
            ctxqb.stroke();

        }, 3000/fps);
    }
}
function clockpulseqbar1(){
    var fps =60; /* speed of the square wave */
    var n=0;
    drawGridqbar(ctxqb);
   
    ctxqb.lineWidth=1;
    requestAnimationFrame(animate);
    animate();
    function animate(){
        
        setTimeout(function(){
            requestAnimationFrame(animate);

        n+=1.5;
        if(n>200){ 
            n=0;
        }
       // ctxc.clearRect(0,0,cwidth,cheight);
            ctxqb.beginPath();
           
           for(var x=2;x<n;x++){
            ctxqb.moveTo(x,50);
            ctxqb.lineTo(0, 50);
               
            }
            ctxqb.strokeStyle = "Green"; 
            ctxqb.stroke();

        }, 3000/fps);
    }
}


