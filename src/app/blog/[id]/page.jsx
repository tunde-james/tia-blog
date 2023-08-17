import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './blogpost.module.css';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quo voluptates nobis repellat?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17894573/pexels-photo-17894573/free-photo-of-man-sitting-in-outdoor-wear.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo
          voluptates nobis repellat? Eius, commodi Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam quo voluptates nobis repellat?
          Eius, commodi. Lorem ipsum dolor sit amet consectetur adipisicing.
          Eius, commodi Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam quo voluptates nobis repellat? Eius, commodi
        </p>
      </div>
    </section>
  );
}

export default BlogPost;
