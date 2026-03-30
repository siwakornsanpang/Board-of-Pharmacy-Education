import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                
                <div className={styles.textContent}>
                    <h1 className={styles.titleTh}>คณะกรรมการการศึกษาเภสัชศาสตร์</h1>
                    <h2 className={styles.titleEn}>Board of Pharmacy Education</h2>
                </div>
            </div>
        </section>
    );
}
