/*Lab:exp_8_Part2_Flip Flop J-K flipflop
	File name: ledonoff_exp8p2.js
    Author:Prakriti Dhang*/
    
    var vcc1, vcc2, gnd1, gnd2;
    var J, K, clkp;
    var jk;
    var qq1;
    var action;
    
    function ledchng(){



        var  j= document.getElementById('b1');  /* J*/
        var k= document.getElementById('b2'); /* K */
         var vcc1 = document.getElementById('b3'); /* VCC1 */
        var vcc2 = document.getElementById('b5');/* VCC2 */
        var gnd1 = document.getElementById('b4');  /* GND1 */
       var gnd2 = document.getElementById('b6'); /* GND2 */
    

    
       if((j.src.match("red")) &&(k.src.match("red")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        jk="00".split("");
        qq1="00".split("");
        action="No change";
        document.getElementById("add").style.visibility="visible";
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
    else if((j.src.match("red")) &&(k.src.match("green")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        jk="01".split("");
        qq1="10".split("");
        action="Reset";
        document.getElementById("add").style.visibility="visible";
        document.getElementById("lon1").style.visibility="visible";
        document.getElementById("lon2").style.visibility="hidden";
        document.getElementById("loff1").style.visibility="hidden";
        document.getElementById("loff2").style.visibility="visible";
       
    }


 /* else if((s.src.match("green")) &&(r.src.match("red")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="0";
        sr="10".split("");
        qq1="00".split("");
        document.getElementById("addb").style.visibility="visible";


    }*/
    else if((j.src.match("green")) &&(k.src.match("red")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        jk="10".split("");
        qq1="01".split("");
        action="Set";
        document.getElementById("add").style.visibility="visible";
        document.getElementById("lon1").style.visibility="hidden";
        document.getElementById("lon2").style.visibility="visible";
        document.getElementById("loff1").style.visibility="visible";
        document.getElementById("loff2").style.visibility="hidden";
        

    }
   else if((j.src.match("green")) &&(k.src.match("green")) && (vcc1.src.match("green")) && (vcc2.src.match("green"))){
        clkp="1";
        jk="11".split("");
        qq1="10".split("");
        action="Forbidden";
        document.getElementById("add").style.visibility="visible";
        document.getElementById("lon1").style.visibility="visible";
        document.getElementById("lon2").style.visibility="hidden";
        document.getElementById("loff1").style.visibility="hidden";
        document.getElementById("loff2").style.visibility="visible";
        
    }
            
        
else{
    document.getElementById("add").style.visibility="hidden";
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
            document.getElementById("clk").disabled = true;
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
        else if((vcc1.src.match("green")) && (vcc2.src.match("green"))){
            document.getElementById("clk").disabled = false;
            document.getElementById("clkbs").disabled = false;
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
     J =1;
    // clockpulses1();
        
        } 
    else
    {
        image.src = "red.JPG";
        document.getElementById('b1r').style.display="block";
        document.getElementById('b1g').style.display="none";
         J=0;
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
         K=1	;	
             
        } 
    else
    {
        image.src = "red.JPG";
        document.getElementById('b2r').style.display="block";
        document.getElementById('b2g').style.display="none";
         K=0;
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
            var image = document.getElementById('clk');		
            document.getElementById('red').style.display="none";
            document.getElementById('green').style.display="block";
            document.getElementById('clkbs').style.display="block";
            document.getElementById('clk').style.display="none";
         
           

            clkp="1";

       plotgraph();
            } 
       
        
        function clockstop(){
            document.getElementById('red').style.display="block";
            document.getElementById('green').style.display="none";
            document.getElementById('clk').style.display="block";
            document.getElementById('clkbs').style.display="none";
        }	


        function graphclosejk(){
            document.getElementById('graphshowjk').style.display="none";
        }