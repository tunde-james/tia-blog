import Image from 'next/image';
import Hero from 'public/hero.png';
import Button from '@/components/button/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better deisgn for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url="/portfolio">See our works</Button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </main>
  );
}
