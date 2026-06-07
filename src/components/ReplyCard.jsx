import { useState, useCallback } from 'react';
import styles from './ReplyCard.module.css';

export default function ReplyCard({ reply, index, isRecommended, delay, onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(reply).then(() => {
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    });
  }, [reply, onCopy]);

  return (
    <div
      className={`${styles.card} ${isRecommended ? styles.recommended : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isRecommended && (
        <div className={styles.bestPick}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          BEST PICK
        </div>
      )}
      <span className={styles.badge}>{index + 1}</span>
      <p className={styles.text}>{reply}</p>
      <button className={styles.copyBtn} onClick={handleCopy} aria-label="Copy reply">
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
