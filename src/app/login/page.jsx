import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h1 className='text-3xl text-center mt-10'>Login Page</h1>
        <form className={classes.form}>
          <div className={classes.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className={classes.input} />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={classes.input} />
          </div>
          <button type="submit" className={classes.loginBtn}>Login Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
