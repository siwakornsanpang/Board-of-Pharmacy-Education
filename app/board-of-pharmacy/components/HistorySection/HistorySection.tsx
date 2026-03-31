"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import LocationSection from "../LocationSection/LocationSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "คณะกรรมการ",
    "สถานที่ตั้ง",
];

const TIMELINE_DATA = [
    {
        year: "พ.ศ. 2537",
        title: "การริเริ่ม",
        description:
            "ตราพระราชบัญญัติวิชาชีพเภสัชกรรม และจัดตั้งคณะกรรมการการศึกษาเพื่อวางเกณฑ์มาตรฐานการเรียนการสอน",
    },
    {
        year: "พ.ศ. 2542 - 2548",
        title: "การสร้างมาตรฐาน",
        description:
            "เริ่มระบบการรับรองสถาบันการศึกษาเภสัชศาสตร์ เพื่อควบคุมคุณภาพการผลิตบัณฑิตให้เท่าเทียมกันทั่วประเทศ",
    },
    {
        year: "พ.ศ. 2552",
        title: "การเปลี่ยนผ่านสำคัญ",
        description:
            "ประกาศรับรองหลักสูตรเภสัชศาสตรบัณฑิต 6 ปี (Doctor of Pharmacy: Pharm.D.) เป็นมาตรฐานหลักเพียงรูปแบบเดียว",
    },
    {
        year: "พ.ศ. 2558",
        title: "การพัฒนาเครือข่าย",
        description:
            "สร้างระบบเครือข่ายความร่วมมือสถาบันการศึกษาเภสัชศาสตร์ (ศคภท.) และพัฒนาระบบการตรวจประเมินคุณภาพแบบกัลยาณมิตร"
    },
    {
        year: "พ.ศ. 2563 - ปัจจุบัน",
        title: "นวัตกรรมการศึกษา",
        description:
            "พัฒนาเกณฑ์การรับรองหลักสูตรให้สอดคล้องกับเกณฑ์มาตรฐานสากล (WFPE) และรองรับการเรียนรู้ผ่านระบบดิจิทัล"
    }
];



export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>"เพราะอนาคตของวิชาชีพ...<br></br> เริ่มต้นที่การศึกษาชั้นเลิศ"</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && (
                    <>
                        {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            "จากรากฐานที่เข้มแข็ง สู่อนาคตที่ยั่งยืน: <br></br>สองทศวรรษแห่งการสร้างมาตรฐาน เพื่อบ่มเพาะเภสัชกรคุณภาพสู่สังคม"
                        </h2>

                        <p className={styles.subText}>
                           คณะกรรมการการศึกษาเภสัชศาสตร์ ก่อตั้งขึ้นภายใต้พระราชบัญญัติวิชาชีพเภสัชกรรม เพื่อเป็นองค์กรหลักในการขับเคลื่อนและวางรากฐานการศึกษาเภสัชศาสตร์ของประเทศไทย จากยุคเริ่มต้นที่มุ่งเน้นการกำหนดหลักสูตรพื้นฐาน สู่การยกระดับมาตรฐานหลักสูตรเภสัชศาสตรบัณฑิตเป็น 6 ปี (Pharm.D.) ทั่วประเทศ เพื่อเพิ่มศักยภาพในการบริบาลทางเภสัชกรรม ปัจจุบัน คณะกรรมการฯ ยังคงมุ่งมั่นทำหน้าที่ตรวจสอบ
และรับรองวิทยฐานะสถาบันการศึกษา รวมถึงแหล่งฝึกปฏิบัติงาน เพื่อสร้างความเชื่อมั่นว่าบัณฑิตเภสัชกรทุกคนจะมีศักยภาพสูง
และเป็นที่ยอมรับในระดับสากล
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc} >{item.description}</p>
                                </div>
                            ))}
                        </div>

                     
                        
                    </>
                )}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CommitteeSection />}



                {activeTab === 3 && <LocationSection />}

            </div>

        </section>
    );
}
