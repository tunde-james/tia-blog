import React from 'react';
import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './category.module.css';
import { items } from './data.js';
import { notFound } from 'next/navigation';

function getData(cat) {
  const data = items[cat];

  if (!data) {
    return notFound();
  }

  return data; 
}

function Category({ params }) {
  const data = getData(params.Category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data?.map((item) => (
        <section key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#">See More</Button>
          </div>
          <div className={styles.imgContainer}>
            <Image fill={true} src={item.image} alt="" className={styles.img} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default Category;
