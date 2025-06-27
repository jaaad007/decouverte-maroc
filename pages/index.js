import Link from 'next/link';
import styles from '../styles/Home.module.css';
import posts from '../data/posts.json';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Découverte du Maroc</h1>
          <p className={styles.subtitle}>Plongez dans les trésors culturels de trois villes marocaines incontournables.</p>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src="/images/maroc-hero.jpg" alt="Maroc" className={styles.heroImage} />
        </div>
      </section>

      {/* Liste des villes */}
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.card}>
            <img src={post.image} alt={post.title} className={styles.image} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/posts/${post.slug}`} className={styles.link}>Lire plus →</Link>
          </div>
        ))}
      </div>

      {/* Lien vers la page à propos */}
      <div className={styles.aboutLinkWrapper}>
        <Link href="/about" className={styles.linkAbout}>À propos du blog →</Link>
      </div>
    </div>
  );
}
