import React from 'react';
import "../Home/Home.css";
const Footer = () => {
    return (
        <div>
         
         <footer class="bg-light text-center text-lg-start">
 
  <div class="container p-4 pb-0">
    <form action="">
     
      <div class="row">
       
        <div class="col-auto mb-4 mb-md-0">
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        

        
        <div class="col-md-5 col-12 mb-4 mb-md-0">
         
          <div class="form-outline mb-4">
            <input type="email" id="form5Example25" class="form-control" />
            <label class="form-label" for="form5Example25">Email address</label>
          </div>
        </div>
        

       
        <div class="col-auto mb-4 mb-md-0">
        
          <button type="submit" class="btn btn-primary mb-4">
            Subscribe
          </button>
        </div>
        
      </div>
      
    </form>
  </div>

 
  <div class="text-center p-3 mr-3" copy>
    © 2020 Copyright:
    <span class="text-dark ms-2" >Pronob roy</span>
  </div>
  
</footer>


        </div>
    );
};

export default Footer;