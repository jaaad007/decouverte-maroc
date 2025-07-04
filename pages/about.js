import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>À propos de <span>Découverte du Maroc</span></h1>
        <p>
          Bienvenue sur notre plateforme dédiée à la découverte des villes et du
          patrimoine marocain. Ce site a été conçu pour offrir une expérience immersive
          à travers les régions du Maroc, en mettant en valeur ses richesses culturelles,
          historiques et architecturales.
        </p>
        <p>
          Vous trouverez ici des informations détaillées sur différentes villes,
          accompagnées de photos et de descriptions des monuments les plus emblématiques.
          Notre objectif est de promouvoir le tourisme culturel et de faire rayonner
          l&apos;histoire fascinante du Maroc.
        </p>
        <p>
          Ce projet est né d&apos;une passion pour le patrimoine marocain et d&apos;un
          désir de le partager avec le monde entier. Nous espérons que vous prendrez
          autant de plaisir à explorer ce site que nous en avons eu à le créer.
        </p>
      </div>
    </div>
  );
}
