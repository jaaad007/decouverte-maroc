import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos du blog</h1>
      <p className={styles.text}>
        Bienvenue sur <strong>Découverte du Maroc</strong> ! Ce blog a été réalisé dans le cadre d&rsquo;un projet étudiant pour explorer trois villes emblématiques du Maroc.
      </p>
      <p className={styles.text}>
        L&rsquo;objectif est d&rsquo;appliquer les notions de développement web moderne avec <strong>Next.js</strong> : pages dynamiques, données externes (JSON), structure modulaire, déploiement sur Vercel...
      </p>
      <p className={styles.text}>
        Il s&rsquo;agit d&rsquo;un projet simple, mais professionnel, respectant les bonnes pratiques front-end et la mise en page responsive.
      </p>
      <Link href="/" className={styles.link}>← Retour à l&apos;accueil</Link>
    </div>
  );
}
