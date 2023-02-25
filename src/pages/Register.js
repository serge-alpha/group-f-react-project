import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ userinfo }) => {
    const [info, setInfo] = useState({
        name: '',
        password: '',
        email: '',
        messege:'',
    });
    const navigate = useNavigate();
    const handleInfo = (event) => {
        setInfo((previnfo) => { return { ...previnfo, [event.target.name]: event.target.value } });
    }
    const Userdata = () => {
        userinfo(info);
        navigate('/');
    }
   
  return (
    <div>
           <section class="contact">
    <h2 class="section-title text-center">Register Here</h2>
              <div class="card">
                  <form action="" class="form" onSubmit={Userdata }>
            <div class="form-control flex-center">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" required autocomplete="name" onChange={handleInfo } name='name' />
            </div>
     
            <div class="form-control flex-center">
                <label htmlFor="name">Password</label>
                          <input type="password" id="name" required autocomplete="name" onChange={handleInfo} name="password" />
            </div>
    
            <div class="form-control flex-center">
                          <label htmlFor="email">Email </label>
                          <input type="email" id="name" required autocomplete="name" onChange={handleInfo} name='email' />
            </div>
        
                 <div class="form-control flex-center">               
                       </div>
                       <div class="form-control flex-center">
                          <button type='submit' class="submit__btn">Submit</button>
                          
                  </div>
            </form>
          </div>
 </section>
 
</div>
  );
  };


export default Register;
