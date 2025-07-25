import styles from './styles.module.css';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
