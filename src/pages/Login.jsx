import React from 'react'
import Template from '../components/Template';
import signupImg from '../assets/signup.png';

function Login({ setIsLogedIn }) {

  return (
    <div>
      <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="login"
      setIsLogedIn={setIsLogedIn}
      />
    </div>
  );
}

export default Login;
