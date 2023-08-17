import React from 'react';
import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './page.module.css';

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <section className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="5"
          />
          <Button url="#">Send</Button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
