import React from "react";
import "./number.css";
import { BsEye ,BsShieldCheck} from "react-icons/bs";
import { BiAlarm} from "react-icons/bi";
 function Value(){
   
    return(
     

       <React.Fragment>

       
<div class="y1">
<div class="j1"><br/>
<br/><br/><br/>
<h1 style={{color:"blue",textAlign:"center",paddingTop:"100px",fontFamily:'Overpass',fontSize:"20px"}}>Values</h1>
<h3 style={{color:"black",textAlign:"center",fontSize:"35px",fontFamily:'Overpass'}}>Our Values</h3>
<br/></div>
<div class="n1">
<div class="x"><b><b style={{color:"blue",paddingLeft:"80px"}}><BsShieldCheck/></b><br/>People First</b><br/>
<p style={{textAlign:"center"}}>Create high-converting landing <br/>pages in minutes,even if you<br/> are not a marketing</p></div>
<div class="x"><b><b style={{color:"blue",paddingLeft:"120px"}}><BiAlarm/></b><br/>Customer-Focused</b><br/><p style={{textAlign:"center"}}>Get to the of Google search results with<br/> SEO optimized pages.</p></div>
<div class="x"><b><b style={{color:"blue",paddingLeft:"100px"}}><BsEye/></b><br/>Transparancy</b><br/><p style={{textAlign:"center"}}>Attract a high volume of free<br/> traffic and trun it into paying<br/> customers.</p></div>


</div>
</div>
       </React.Fragment>
    )
   
} 
export default Value;