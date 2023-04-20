import React from "react"
import {BiPaperPlane} from "react-icons/bi";
import "./footer.css"
import { FaLinkedinIn,FaTwitter,FaFacebook,FaInstagram, FaYoutube } from "react-icons/fa";
function Footer(){
return(
<React.Fragment>


<footer class="page-footer a">


  <div class="container text-center text-md-left">

    
    <div class="row">

   
      <div class="col-md-2 ">

     <h5 class="font-weight-bold f" ><i style={{color:"blue"}}><BiPaperPlane/> </i> Referrizer</h5><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <FaLinkedinIn/> <FaTwitter/> <FaFacebook/>     <FaInstagram/>      <FaYoutube/>       

     

      </div>
     

     

      
      <div class="col-md-2 mx-auto">

      
        <h5 class="font-weight-bold f">Company</h5>

        <ul type="none" class="t">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>We're Hiring</a>
          </li>
          <li>
            <a>Investors</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>

      </div>
     

      

     
      <div class="col-md-3 mx-auto">

       
        <h5 class="font-weight-bold f">Solutions</h5>

        <ul class="list-unstyled t">
          <li>
            <a>Customer Lead Generation</a>
          </li>
          <li>
            <a>Customer Retention Boost</a>
          </li>
          <li>
            <a>Reputation Management</a>
          </li>
          <li>
            <a>Marketing Automation</a>
          </li>
          <li>
          <a>Partner Network</a>
        </li>
        </ul>

      </div>
     

      

      
      <div class="col-md-2 mx-auto">

       
        <h5 class="font-weight-bold f">Resources</h5>

        <ul class="list-unstyled t">
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Case Studies</a>
          </li>
          <li>
            <a>Marketplaces</a>
          </li>
          <li>
          <a>Industries</a>
        </li>
        </ul>
        <br/><br/><br/>
        @2013-2021 Referrizer inc.
      </div>
      <div class="col-md-2 mx-auto">

       
        <h5 class="font-weight-bold f">Help</h5>

        <ul class="list-unstyled t">
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Knowledge Base</a>
          </li>
          <li>
            <a>Live Chat</a>
          </li>
         
        </ul>
        <br/>
        <br/><br/><br/><br/>
        
        Login 

      </div>


      <div class="col-md-1 mx-auto">

       
      <h5 class="font-weight-bold f">Partner</h5>

      <ul class="list-unstyled t">
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Case Studies</a>
        </li>
        <li>
          <a>Marketplaces</a>
        </li>
        <li>
        <a>Industries</a>
      </li>
      </ul>
      <br/>
      <br/>
      Sign up for free
    </div>
    </div>

  </div>



</footer>




</React.Fragment>
 
  )
}

export default Footer
