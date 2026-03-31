import React from 'react';
import styles from './HighlightSection.module.css';

const HighlightSection: React.FC = () => {
  return (
    <section className={styles.highlightContainer}>
      {/* Left Content */}
      <div className={styles.leftContent}>
        <h3 className={styles.highlightLabel}>
          Highlight คณะกรรมการการศึกษาเภสัชศาสตร์
        </h3>
        <h1 className={styles.mainHeading}>
          "เราคือผู้สร้างรากฐานที่มั่นคง<br></br>ให้กับอนาคตของเภสัชกรไทย"
        </h1>
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        <div className={styles.listContainer}>
          <div className={styles.listItem}>มาตรฐานหลักสูตรระดับสากล (Global Standard)</div>
          <div className={styles.listItem}>เครือข่ายสถาบันการศึกษา (Academic Network)</div>
          <div className={styles.listItem}>การรับรองแหล่งฝึกปฏิบัติงาน (Certified Clerkship)</div>
          <div className={styles.listItem}>นวัตกรรมการเรียนรู้ (Educational Innovation)</div>
      
        </div>
        <h2 className={styles.rightHeader}>
          บทบาทและความน่าเชื่อถือ (Trust & Authority)
        </h2>
        
      </div>
    </section>
  );
};

export default HighlightSection;
