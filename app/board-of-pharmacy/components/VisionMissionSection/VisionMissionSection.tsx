import Image from "next/image";
import styles from "./VisionMissionSection.module.css";

export default function VisionMissionSection() {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headerArea}>
                <h2 className={styles.mainHeading}>
                    &quot;บ่มเพาะคุณภาพ สร้างมาตรฐาน:<br />
                    บทบาทคณะกรรมการการศึกษาเภสัชศาสตร์ จากอดีตสู่อนาคต&quot;
                </h2>
            </div>

            <div className={styles.cardsContainer}>
                {/* Vision Card */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 22V20H8V16H12V12H16V8H22V22H4Z" fill="#6A7432"/>
                                <path d="M14 8V2H21L18 5L21 8H14Z" fill="#6A7432"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>วิสัยทัศน์</h3>
                        <p className={styles.cardText}>
                            &quot;เป็นองค์กรที่ส่งเสริมความเข้มแข็งของการศึกษาเภสัชศาสตร์ที่ชี้นำสังคม<br />
                            บนมาตรฐานวิชาชีพและจริยธรรม เน้นการจัดการที่เป็นภาคีเครือข่าย&quot;
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageGradientOverlay}></div>
                        <Image
                            src="/images/vision/img1.png"
                            alt="Vision"
                            fill
                            className={styles.cardImage}
                        />
                    </div>
                </div>

                {/* Mission Card */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 22H16V20H13V4H14V2H10V4H11V20H8V22Z" fill="#6A7432"/>
                                <path d="M12 3H23L20 7L23 11H12V3Z" fill="#6A7432"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>พันธกิจ</h3>
                        <div className={styles.missionList}>
                            <p><strong>Standardization:</strong> สร้างหลักประกันให้กับสังคมด้านมาตรฐานวิชาชีพของหลักสูตรการศึกษาเภสัชศาสตร์</p>
                            <p><strong>Quality Assurance:</strong> มีระบบการรับรองคุณภาพสถานบันการศึกษาและแหล่งฝึกปฎิบัติงานวิชาชีพ</p>
                            <p><strong>Ethics &amp; Integrity:</strong> สร้างหลักประกันด้านคุณภาพและจริยธรรมของเภสัชกรใหม่ที่เข้าสู่วิชาชีพ</p>
                            <p><strong>Collaboration:</strong> ดำเนินงานในลักษณะภาคีเครือข่ายร่วมกับสถาบันการศึกษาและหน่วยงานที่เกี่ยวข้อง</p>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageGradientOverlay}></div>
                        <Image
                            src="/images/vision/img2.png"
                            alt="Mission"
                            fill
                            className={`${styles.cardImage} ${styles.missionImage}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
