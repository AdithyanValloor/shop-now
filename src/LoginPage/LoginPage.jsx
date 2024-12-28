import React, {useState} from 'react'
import { useLogin } from '../LoginProvider';
import './LoginPage.css'

function LoginPage() {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)

  const handlePasswordVal = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailVal = (e) => {
    console.log(e.target);
    
    setEmail(e.target.value)
  }
  
  const {login, isLoggedin} = useLogin()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("-------------------",);
    
    console.log("Form submitted : ", formData);

    setEmail('')
    setPassword('')
  
    if(formData.email === 'test11@gmail.com' && formData.password === 'pass123'){

      login()
      
      console.log('Login ======================', isLoggedin);
      
    }else{
      console.log('Login ======================', isLoggedin);

      setErrorMsg(true)
      
      console.log('Email or password is incorrect');
    }

  };

  console.log("Form data : ",formData);
  
  

  return (
    <div className='login-container'>
        <div className='login-box'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" 
              placeholder='Email'
              name='email'
              required
              value={email}
              onChange={(e)=>{
                handleChange(e),
                handleEmailVal(e)
              }}
            />
            <input type="password" 
              placeholder='Password'
              name='password'
              required
              value={password}
              onChange={(e)=>{
                handleChange(e),
                handlePasswordVal(e)
              }}
            />
            {errorMsg && (<div className='error-msg'>
              <p><i className="bi bi-exclamation-circle-fill"></i> The Email or password you entered is incorrect.</p>
            </div>)}
            <button className='btn-login'>Login</button>
          </form>
        </div>
      </div> 
  )
}

export default LoginPage
