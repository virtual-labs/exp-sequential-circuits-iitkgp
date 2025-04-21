/*Lab:exp_8_Part1_Flip Flop S-R flipflop
	File name: grid_axis_jk.js
    Author:Prakriti Dhang*/


    var cwidth, cheight;
    function drawGridjk(){


        /*   Draw Grid for Clock Pulse */
    var canvas = document.getElementById("myCanvasclk");
    var ctx = canvas.getContext("2d");
   cwidth=  ctx.canvas.width;
   cheight= ctx.canvas.height;
   
    ctx.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctx.moveTo(0, y);
            ctx.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctx.strokeStyle = "Gainsboro";  
        ctx.lineWidth = 0.3;
       
        ctx.stroke();

/*   Draw Grid for J */
        var canvas = document.getElementById("myCanvasj");
    var ctx = canvas.getContext("2d");
   cwidth=  ctx.canvas.width;
   cheight= ctx.canvas.height;
   
    ctx.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctx.moveTo(0, y);
            ctx.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctx.strokeStyle = "Gainsboro";  
        ctx.lineWidth = 0.3;
        ctx.stroke();
    
        /*   Draw Grid for K */
        var canvas = document.getElementById("myCanvask");
        var ctx = canvas.getContext("2d");
       cwidth=  ctx.canvas.width;
       cheight= ctx.canvas.height;
       
        ctx.beginPath();
        for (x=0;x<=cwidth;x+=55) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, cheight);
        }
            for (y=0;y<=cheight;y+=10) {
                ctx.moveTo(0, y);
                ctx.lineTo(cwidth, y);
               
            }
            canvas.style.background = "black"; 
            ctx.strokeStyle = "Gainsboro";  
            ctx.lineWidth = 0.3;
            ctx.stroke();

/*   Draw Grid for Q  */

            var canvas = document.getElementById("myCanvasq");
            var ctx = canvas.getContext("2d");
           cwidth=  ctx.canvas.width;
           cheight= ctx.canvas.height;
           
            ctx.beginPath();
            for (x=0;x<=cwidth;x+=55) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, cheight);
            }
                for (y=0;y<=cheight;y+=10) {
                    ctx.moveTo(0, y);
                    ctx.lineTo(cwidth, y);
                   
                }
                canvas.style.background = "black"; 
                ctx.strokeStyle = "Gainsboro";  
                ctx.lineWidth = 0.3;
                ctx.stroke();

/*   Draw Grid for Q bar */

                var canvas = document.getElementById("myCanvasqbar");
    var ctx = canvas.getContext("2d");
   cwidth=  ctx.canvas.width;
   cheight= ctx.canvas.height;
   
    ctx.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctx.moveTo(0, y);
            ctx.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctx.strokeStyle = "Gainsboro";  
        ctx.lineWidth = 0.3;
        ctx.stroke();

}

  