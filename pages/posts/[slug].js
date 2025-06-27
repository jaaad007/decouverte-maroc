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
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.image} alt={post.title} className={styles.image} />
      <p className={styles.description}>{post.description}</p>
      <Link href="/" className={styles.link}>← Retour à l'accueil</Link>
    </div>
  );
}
