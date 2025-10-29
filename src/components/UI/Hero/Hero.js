import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <header className={styles.hero}>
      <PageTitle>
        My First react App
      </PageTitle>
      <p className={styles.subtitle}>
        Interesting things I want to check out
      </p>
    </header>
  );
};

export default Hero;