import React from 'react';
import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './category.module.css';

function Category({ params }) {
  console.log(params);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <section className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#">See More</Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/887822/pexels-photo-887822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className={styles.img}
          />
        </div>
      </section>
      <section className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#">See More</Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/887822/pexels-photo-887822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className={styles.img}
          />
        </div>
      </section>
      <section className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#">See More</Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/887822/pexels-photo-887822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className={styles.img}
          />
        </div>
      </section>
    </div>
  );
}

export default Category;
