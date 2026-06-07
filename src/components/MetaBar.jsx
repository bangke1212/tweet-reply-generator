import styles from './MetaBar.module.css';

export default function MetaBar({ confidence, angle }) {
  if (!confidence?.score && !angle) return null;

  return (
    <div className={styles.bar}>
      {confidence?.score != null && (
        <span className={styles.pill}>
          <span className={styles.label}>Confidence</span>
          <span className={styles.value}>{confidence.score}/10</span>
        </span>
      )}
      {angle && (
        <span className={styles.pill}>
          <span className={styles.label}>Angle</span>
          <span className={styles.value}>{angle}</span>
        </span>
      )}
    </div>
  );
}
