'use client';

import React from 'react';
import styles from './login.module.css';
import { signIn } from 'next-auth/react';

function Login() {
  async function handleLogin(event) {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    signIn('credentials', { email, password });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.loginBtn}>Login</button>
      </form>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
}

export default Login;
