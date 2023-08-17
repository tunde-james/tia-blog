import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/Button';

function About() {
  return (
    <div className={styles.container}>
      <header className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.ImgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </header>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h3 className={styles.title}>Who are we?</h3>
          <p className={styles.desc}>
            Amet dictum sit amet justo donec. Placerat in egestas erat
            imperdiet. Tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus. Nulla facilisi cras fermentum odio. Diam vulputate ut
            pharetra sit. Consectetur libero id faucibus nisl tincidunt eget.
            Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At
            volutpat diam ut venenatis tellus in. Lorem ipsum dolor sit amet
            consectetur adipiscing elit ut. Venenatis tellus in metus vulputate
            eu.
            <br />
            <br />
            Tristique senectus et netus et malesuada fames ac turpis egestas. A
            lacus vestibulum sed arcu non odio euismod.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>what we do</h3>
          <p className={styles.desc}>
            Tristique senectus et netus et malesuada fames ac turpis egestas. A
            lacus vestibulum sed arcu non odio euismod. Quis auctor elit sed
            vulputate mi sit amet. Sed tempus urna et pharetra pharetra. Aliquam
            sem et tortor consequat. Lectus nulla at volutpat diam.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact">Contact</Button>
        </div>
      </div>
    </div>
  );
}

export default About;
