import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './blogpost.module.css';

async function getData(id) {
  const res = await fetch(`http://127.0.0.1:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function BlogPost({ params }) {
  const data = await getData(params.id);

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </section>
  );
}

export default BlogPost;
