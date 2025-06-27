import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos du blog</h1>
      <p className={styles.text}>
        Bienvenue sur <strong>Découverte du Maroc</strong> ! Ce blog a été réalisé dans le cadre d’un projet étudiant pour explorer trois villes emblématiques du Maroc.
      </p>
      <p className={styles.text}>
        Le but est de montrer comment utiliser <strong>Next.js</strong> avec du contenu dynamique, des liens internes, et un design moderne.
      </p>
      <p className={styles.text}>
        Merci pour votre visite !
      </p>
      <Link href="/" className={styles.link}>← Retour à l'accueil</Link>
    </div>
  );
}
