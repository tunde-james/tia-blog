'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

function Register() {
  const [err, setErr] = useState(false);
  const router = useRouter();

  async function handleRegister(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          required
        />
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
        <button className={styles.registerBtn}>Register</button>
      </form>
      {err && 'Somethiing went wrong'}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}

export default Register;
