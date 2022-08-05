import React from 'react';
import { NavLink } from 'react-router-dom'
import { Button, InputText } from '../../components';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="" method="POST">
        <InputText
          type="text"
          name="Username"
          value="Enter Username.."
          id="login-username"
        />
        <InputText
          type="text"
          name="Password"
          value="Enter Password.."
          id="login-password"
        />
        <Button type="submit" name="Login" />
      </form>
      <h3>Don't have an account?</h3>
      <NavLink to="/register">Sign Up now</NavLink>
    </div>
  );
};

export default Login;