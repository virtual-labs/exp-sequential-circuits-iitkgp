###  Theory 
 <div class="content" id="experiment-article-section-2-content">                            
             Sequential Circuits:&nbsp; The logic circuits whose outputs at any instant of time depend not only on the present input but also
			 on the past outputs are called sequential circuits.<br /><br />
			 The simplest kind of sequential circuit which is capable of storing one bit of information is called latch.The operation of basic 
			 latch can be modified, by providing an additional control input that determines, when the state of the circuit is to be changed.<br />
			 The latch with additional control input is called the Flip-Flop.The additional control input is either the clock or enable input.<br />
			 <br />
			 Different types of Flip-Flop:&nbsp; There are four basic types, namely, S-R, J-K, D and T Flip-Flops. 
			 
 <br />
          <br />
             <div align="center" class="big" style="text-decoration:underline;" > S-R Flip-Flop </div>
                      
<br />
                            <div align="center">
                            <img src="images/SRFF.jpg" style="width:200px;height:100px"/> 
                            <br />
                             Figure 1:&nbsp;Clocked NOR-based S-R Flip-Flop                            
                            <br />
                            <br />
                             </div>
                             <div align="center">
                            <img src="images/srff1.jpg" style="width:200px;height:100px" /> 
                            <br />
                            Figure 2:&nbsp;NAND-based S-R Flip-Flop
                            <br />
                            <br />
                             </div>
                             <div align="center">
                            <img src="images/typical waveform 1.jpg" /> 
                            <br />
                            Figure 3:&nbsp;Typical wave-form in S-R Flip-Flop
                            <br />
                            <br />
                             </div>
                             <div align="center">
                            <img src="images/srff char table.jpg" style="width:500px;height:600px" /> 
                            <br />
                            Figure 4:&nbsp;S-R Flip-Flop characteristic Table
                            <br />
                            <br />
                             </div>
                             NOTE :: &nbsp;clk, S and R signals are input signals <br />
                             
<font style="text-decoration:overline"> Q </font> and Q  : Output signals
                              
   
 
</div>
                            <div align="center" class="big" style="text-decoration:underline" > J-K Flip-Flop </div>
                            <div align="left">
  <br/>
                            <div align="center">
                            <img src="images/JKFF.jpg" /> 
                            <br />
                            Figure 1:&nbsp;J-K Flip-Flop using S-R Flip-Flop
                            <br />
                            <br />
                             </div>
                             <br />
                             <div align="center">
                            <img src="images/jkff1.jpg" /> 
                            <br />
                            Figure 2:&nbsp;NAND based J-K Flip-Flop 
                            <br />
                            <br />
                             </div>
                             <br />
                             <div align="center">
                            <img src="images/typical waveform 2.jpg" /> 
                            <br />
                            Figure 3:&nbsp;Typical wave-form in J-K Flip-Flop 
                            <br />
                            <br />
                             </div>
                             <br />
                             <div align="center">
                            <img src="images/jkff char table.jpg" /> 
                            <br />
                            Figure 4:&nbsp;J-K Flip-Flop characteristic Table
                            <br />
                            <br />
                             </div>
                             <div align="center" class="big" style="text-decoration:underline" > D Flip-Flop </div> 
                             <div align="left">

 <br/>
  <div align="center">
                            <img src="images/dff.jpg" />
                             <br />
                            Figure 1:&nbsp;D Flip-Flop
                            </div>
                            <br />
                             <div align="center">
                            <img src="images/dff1.jpg" /> 
                            <br />
                            Figure 2:&nbsp;NAND-based D Flip-Flop
                            <br />
                            <br />
                             </div>
                             <br />
                             <div align="center">
                            <img src="images/function table of dff.jpg" /> 
                            <br />
                            Figure 3:&nbsp;D Flip-Flop characteristic Table
                            <br />
                            <br />
                             </div>
                              <div align="center" class="big" style="text-decoration:underline" > Synthesis using Flip-Flop  </div> 
                            <div align="left">&nbsp; As a simple exersise,students can verify the operation of a serial (sequential)adder(1 bit full adder)
							Carry output of a one bit full adder can be fed back to the input of a D Flip-Flop.The output of this Flip=Flop can be fed back to the carry input of that adder. </div>
 <br/>
  <div align="center">
                            <img src="images/1.jpg" />
                             <br />
                           Figure 1:&nbsp;Verification of the functionality of a combinational circuit using seqential element(Flip-Flop)
                            </div>
            	<br/>
				
<div align="center">
                            <img src="images/exp8-synthesis.jpg" />
                             <br />
                            Figure 2:&nbsp;Gate diagram of combinational circuit(1 bit full adder)
                            </div>
							<br />
  <div align="center">
                            <img src="images/truth table 1 bit.jpg" />
                             <br />
                            Figure 3:&nbsp;Truth table of a 1 bit fulladder                            
                        </div>