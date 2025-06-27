import Link from 'next/link';
import styles from '../styles/Home.module.css';
import posts from '../data/posts.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Découverte du Maroc</h1>
      <p className={styles.subtitle}>Explorez 3 villes marocaines emblématiques.</p>

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

      <div>
        <Link href="/about" className={styles.linkAbout}>À propos du blog →</Link>
      </div>
    </div>
  );
}
