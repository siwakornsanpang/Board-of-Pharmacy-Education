import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/favicon.ico" alt="Logo" className={styles.logo} />
        <div className={styles.textContainer}>
          <h1>คณะกรรมการการศึกษาเภสัชศาสตร์</h1>
          <p>Board of Pharmacy Education</p>
        </div>
      </div>

    </header>
  );
}