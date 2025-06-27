import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutCard}>
        <h1 className={styles.title}>À propos du blog</h1>
        <p className={styles.text}>
          Bienvenue sur <strong>Découverte du Maroc</strong> ! Ce blog a été créé dans le cadre d’un projet étudiant pour explorer la richesse culturelle de trois grandes villes marocaines.
        </p>
        <p className={styles.text}>
          Chaque article présente une ville avec ses monuments emblématiques, accompagnés de photos et de descriptions détaillées. Le projet met en œuvre les compétences en développement web avec <strong>Next.js</strong> : rendu statique, contenu dynamique, et déploiement professionnel sur Vercel.
        </p>
        <p className={styles.text}>
          L&rsquo;objectif est d&rsquo;offrir un site informatif, responsive, élégant et bien structuré, conforme aux bonnes pratiques modernes.
        </p>
        <Link href="/" className={styles.link}>← Retour à l'accueil</Link>
      </div>
    </div>
  );
}
