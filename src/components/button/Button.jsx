import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

function Button({ url, children }) {
  return (
    <Link href={url}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}

export default Button;
