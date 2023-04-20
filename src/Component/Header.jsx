import React from "react";
import "./header.css";
import {BiPaperPlane} from "react-icons/bi";
 function Header(){
   
    return(
     

       <React.Fragment>

       <div class="row header">
       <div class="col-sm-4 logo text-center fs-2 py-1"><b><center><b style={{color:"blue"}}><BiPaperPlane/></b>  Referrizer</center>
     </b>
       </div>
       <div class="col-sm-8 menu t">
      
       <nav class="navbar navbar-expand-lg">
         <div class="container-fluid">
        
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active solutions" aria-current="page" href="#">Solutions</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link active pricing" aria-current="page" href="#">Pricing</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link active testimonials" aria-current="page" href="#">Testimonials</a>
               </li>
             </ul>
             <form class="d-flex" role="search">
             <button class="login">Log in</button>
               <input class="form-control bg-primary text-white n" type="search" value="Get Started for Free" aria-label="Search"/>
               
             </form>
           </div>
         </div>
       </nav>
       
       
     
       </div>
       </div>
       </React.Fragment>
    )
   
} 
export default Header;