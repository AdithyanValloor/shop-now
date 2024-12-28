import React from 'react';
import './Home.css';
import AllProducts from '../AllProducts/AllProducts';
import { useLogin } from '../LoginProvider';
import LoginPage from '../LoginPage/LoginPage';


function Home() {
  
  const {isLoggedin} = useLogin()

  console.log("HOMEPAGE ",isLoggedin);
  
  
  if(isLoggedin){
    return (
      <>
        <div className='home-container'>
          <img className='home-banner' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/6f704160193483.5a4132925d935.gif" alt="" />
        </div>
        <AllProducts/>
      </>
    );
  }else{
    return <LoginPage/>
  }



}

export default Home;
