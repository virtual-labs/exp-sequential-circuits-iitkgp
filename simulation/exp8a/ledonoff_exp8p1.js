/*Lab:exp_8_Part1_Flip Flop S-R flipflop
	File name: ledonoff_exp8p1.js
    Author:Prakriti Dhang*/

    
    var vcc1, vcc2, gnd1, gnd2;
    var S, R, clkp;
    var sr;
    var qq1;
    var action;

    
  
    

    function ledchng(){

       

       
        var  s = document.getElementById('b1');  /* S */
        var  r = document.getElementById('b2'); /* R */
         var vcc1 = document.getElementById('b3'); /* VCC1 */
        var gnd1 = document.getElementById('b4');/* GND1 */
        var vcc2 = document.getElementById('b5');  /* VCC2 */
       var gnd2 = document.getElementById('b6'); /* GND2 */
    

       if((s.src.match("red")) &&(r.src.match("red")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        sr="00".split("");
        qq1="00".split("");
        action="No change";
        document.getElementById("addb").style.visibility="visible";
        document.getElementById("lon1").style.visibility="hidden";
        document.getElementById("lon2").style.visibility="hidden";
        document.getElementById("loff1").style.visibility="visible";
        document.getElementById("loff2").style.visibility="visible";
       
    }

 /* else if((s.src.match("red")) &&(r.src.match("green")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="0";
        sr="01".split("");
        qq1="00".split("");
        document.getElementById("addb").style.visibility="visible";
        document.getElementById("lon1").style.visibility="hidden";
        document.getElementById("lon2").style.visibility="hidden";
    }*/
    else if((s.src.match("red")) &&(r.src.match("green")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        sr="01".split("");
        qq1="01".split("");
        action="Reset";
        document.getElementById("addb").style.visibility="visible";
        document.getElementById("lon1").style.visibility="hidden";
        document.getElementById("lon2").style.visibility="visible";
        document.getElementById("loff1").style.visibility="visible";
        document.getElementById("loff2").style.visibility="hidden";
       
    }


 /* else if((s.src.match("green")) &&(r.src.match("red")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="0";
        sr="10".split("");
        qq1="00".split("");
        document.getElementById("addb").style.visibility="visible";


    }*/
    else if((s.src.match("green")) &&(r.src.match("red")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        sr="10".split("");
        qq1="10".split("");
        action="Set";
        document.getElementById("addb").style.visibility="visible";
        document.getElementById("lon1").style.visibility="visible";
        document.getElementById("lon2").style.visibility="hidden";
        document.getElementById("loff1").style.visibility="hidden";
        document.getElementById("loff2").style.visibility="visible";
        

    }
   else if((s.src.match("green")) &&(r.src.match("green")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        sr="11".split("");
        qq1="1?".split("");
        action="Forbidden";
        document.getElementById("addb").style.visibility="visible";
        document.getElementById("lon1").style.visibility="visible";
        document.getElementById("lon2").style.visibility="hidden";
        document.getElementById("loff1").style.visibility="hidden";
        document.getElementById("loff2").style.visibility="Visible";
        
    }
            
        
else{
    document.getElementById("addb").style.visibility="hidden";
    document.getElementById("lon1").style.visibility="hidden";
    document.getElementById("lon2").style.visibility="hidden";
   

    document.getElementById("loff1").style.visibility="visible";
    document.getElementById("loff2").style.visibility="visible";
}
            
           


        /* VCC connection */
        
         
        if((vcc1.src.match("red")) && (vcc2.src.match("red"))   ){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='visible';
            document.getElementById('v2').style.visibility='visible';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
        
            
        
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
           
        
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
          
            document.getElementById("clkb").disabled = true;
            document.getElementById("clkbs").disabled = true;
            
        }
       
            
       else if((vcc1.src.match("green")) && (vcc2.src.match("red"))){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='hidden';
            document.getElementById('v2').style.visibility='visible';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
        }
        else if((vcc1.src.match("red")) && (vcc2.src.match("green"))){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='visible';
            document.getElementById('v2').style.visibility='hidden';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
        }
       else if(vcc1.src.match("red") ){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='visible';
            document.getElementById('v2').style.visibility='hidden';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
            
        }
     else if(vcc2.src.match("red") ){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='hidden';
            document.getElementById('v2').style.visibility='visible';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
            
        }
      
        else{
            document.getElementById('showalt').style.visibility='hidden';
            
          
            document.getElementById('v1').style.visibility='hidden';
            document.getElementById('v2').style.visibility='hidden';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
        }
        
       /* else if((vcc1.src.match("green")) && (vcc2.src.match("green"))){
            document.getElementById('showalt').style.visibility='hidden';
            document.getElementById('v1').style.visibility='hidden';
            document.getElementById('v2').style.visibility='hidden';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';

        }*/
       
         if((vcc1.src.match("green")) && (vcc2.src.match("green"))){
            document.getElementById("clkb").disabled = false;
            document.getElementById("clkbs").disabled = false;
         }
       
      
       
        
        
        /* check GND connection */
       if((gnd1.src.match("green")) && (gnd2.src.match("green") )){
            document.getElementById('gnd1').style.visibility='visible';
            document.getElementById('gnd2').style.visibility='visible';
            document.getElementById('showalt').style.visibility='visible';

            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
           
        
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            
        
              
        }
        else if((gnd1.src.match("green"))  ){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='hidden';
            document.getElementById('v2').style.visibility='hidden';
            document.getElementById('gnd1').style.visibility='visible';
            document.getElementById('gnd2').style.visibility='hidden';
            
        }
        else if((gnd2.src.match("green"))  ){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v1').style.visibility='hidden';
            document.getElementById('v2').style.visibility='hidden';
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='visible';
            
        }
      
        else {
            
            document.getElementById('gnd1').style.visibility='hidden';
            document.getElementById('gnd2').style.visibility='hidden';
         
        }
        
        
        }


        function a1() {
            var image = document.getElementById('b1');	
        
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b1r').style.display="none";
            document.getElementById('b1g').style.display="block";
         S =1;
        // clockpulses1();
            
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b1r').style.display="block";
            document.getElementById('b1g').style.display="none";
             S=0;
            // clockpulses0();
            }
        ledchng();
        
        }
        function a2() {
            var image = document.getElementById('b2');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b2r').style.display="none";
            document.getElementById('b2g').style.display="block";
             R=1	;	
             	
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b2r').style.display="block";
            document.getElementById('b2g').style.display="none";
             R=0;
            }
            ledchng();
        }
        function a3() {
            var image = document.getElementById('b3');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b3r').style.display="none";
            document.getElementById('b3g').style.display="block";
           
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b3r').style.display="block";
            document.getElementById('b3g').style.display="none";
             
            }
            ledchng();
        }
        function a4() {
            var image = document.getElementById('b4');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b4r').style.display="none";
            document.getElementById('b4g').style.display="block";
            
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b4r').style.display="block";
            document.getElementById('b4g').style.display="none";
             
            }
            ledchng();
        }
        
        function a5() {
            var image = document.getElementById('b5');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b5r').style.display="none";
            document.getElementById('b5g').style.display="block";
             
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b5r').style.display="block";
            document.getElementById('b5g').style.display="none";
             
            }
            ledchng();
            
        }
        function a6() {
            var image = document.getElementById('b6');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b5r').style.display="none";
            document.getElementById('b5g').style.display="block";
             
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b5r').style.display="block";
            document.getElementById('b5g').style.display="none";
             
            }
            ledchng();
            
        }
        
        function clockstrt() {
            
            document.getElementById('red').style.display="none";
            document.getElementById('green').style.display="block";
            document.getElementById('clkbs').style.display="block";
            document.getElementById('clkb').style.display="none";
           // document.getElementById('graphshowsr').style.display="block";
          
           

            clkp="1";

            
           /* paused=false;
           
            drawGridclk();
            clockpulse();	
            drawGridq();
            drawGridqbar();
            drawGridr();
           drawGrids();*/
           
               
            
        }
        
        

        function graphclose(){
            document.getElementById('graphshowsr').style.display="none";
            document.getElementById('clkb').style.display="block";
            document.getElementById('clkbs').style.display="none";
           
            
        }
        function clockstop(){
            document.getElementById('red').style.display="block";
            document.getElementById('green').style.display="none";
            document.getElementById('clkb').style.display="block";
            document.getElementById('clkbs').style.display="none";
          }
        
       /* document.getElementById('addb').addEventListener('click', function() {
            ctxc.clearRect(0, 0, canvas.width, canvas.height);
            ctxs.clearRect(0, 0, canvas.width, canvas.height);
            ctxr.clearRect(0, 0, canvas.width, canvas.height);
            ctxq.clearRect(0, 0, canvas.width, canvas.height);
            ctxqb.clearRect(0, 0, canvas.width, canvas.height);
            
            }, false);*/