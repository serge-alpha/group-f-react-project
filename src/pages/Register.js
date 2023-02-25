import React from 'react'

const Register = () => {
  return (
    <div>
           <section class="contact">
    <h2 class="section-title text-center">Register Here</h2>
    <div class="card">
        <form action="" class="form">
            <div class="form-control flex-center">
                <label for="name">Name</label>
                <input type="text" id="name" required autocomplete="name"/>
            </div>
     
            <div class="form-control flex-center">
                <label for="name">Contact Details</label>
                <input type="text" id="name" required autocomplete="name"/>
            </div>
    
            <div class="form-control flex-center">
                <label for="email">Email </label>
                <input type="text" id="name" required autocomplete="name"/>
                    
               
            </div>
        
                 <div class="form-control flex-center">
                        <label for="name">Message</label>
                        <input type="message" id="message"/>
                      
                       </div>
                       <div class="form-control flex-center">
                        <button class="btn">Submit</button>
                          
                  </div>
            </form>
          </div>
 </section>
 
</div>
  );
  };


export default Register;
