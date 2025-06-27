import posts from '../../data/posts.json';
import Link from 'next/link';
import styles from '../../styles/Post.module.css';

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}

export default function PostPage({ post }) {
  return (
    <div className={styles.container}>
      {/* Section en deux colonnes */}
      <div className={styles.headerSection}>
        <div className={styles.imageWrapper}>
          <img src={post.image} alt={post.title} className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
        </div>
      </div>

      {/* Section des monuments */}
      {post.monuments && (
        <div className={styles.monumentsSection}>
          <h2 className={styles.subtitle}>Monuments à découvrir</h2>
          <div className={styles.monumentsGrid}>
            {post.monuments.map((monument, index) => (
              <div key={index} className={styles.monumentCard}>
                <img
                  src={monument.image}
                  alt={monument.name}
                  className={styles.monumentImage}
                />
                <h3>{monument.name}</h3>
                <p>{monument.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Link href="/" className={styles.link}>← Retour à l&apos;accueil</Link>
    </div>
  );
}
