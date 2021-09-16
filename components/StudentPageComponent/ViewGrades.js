import React, { useState, useEffect } from 'react';
import styles from './viewGrades.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';
import Link from 'next/link';
function ViewGrades() {
      const [studentGrade, setStudentGrade] = useState([]);
      const [allGradeId, setAllGradeId] = useState([]);
      const [allGradeName, setAllGradeName] = useState([]);
      useEffect(async () => {
            try {
                  const response = await axios.get(`http://localhost:4000/api/student/grades`, {
                        withCredentials: true,
                  });

                  setStudentGrade(response.data.latestGrades);
                  setAllGradeId(response.data.allGradeIDs);
                  setAllGradeName(response.data.allGradeTitles);
                  console.log(response.data.latestGrades);
                  console.log(response.data.allGradeIDs);
                  console.log(response.data.allGradeTitles);
            } catch (error) {
                  console.log(error);
            }
      }, []);
      return (
            <div className={styles.container}>
                  <h1 className={styles.header}>View Grades</h1>
                  <div className={styles.columnName}>Sections</div>
                  <ul className={styles.listContainer}>
                        <div className={styles.columnTitlecontainer}>
                              <h4 className={styles.name}>Subject</h4>
                              <h4 className={styles.name}>Q1</h4>
                              <h4 className={styles.name}>Q2</h4>
                              <h4 className={styles.name}>Q3</h4>
                              <h4 className={styles.name}>Q4</h4>
                        </div>

                        {studentGrade.map((item, i) => (
                              <li className={styles.itemContainer}>
                                    <div className={styles.userName}>{item.subject}</div>
                                    <div className={styles.quarterGrade}>{item.q1Grade}</div>
                                    <div className={styles.quarterGrade}>{item.q2Grade}</div>
                                    <div className={styles.quarterGrade}>{item.q3Grade}</div>
                                    <div className={styles.quarterGrade}>{item.q4Grade}</div>
                              </li>
                        ))}
                  </ul>
                  {allGradeId.map((item, i) => (
                        <div className={styles.prevGradeContainer}>
                              <div className={styles.prevGrade}>
                                    <Link href={`/student/${item}`}>
                                          <a>{allGradeName[i]}</a>
                                    </Link>
                              </div>
                        </div>
                  ))}
            </div>
      );
}

export default ViewGrades;
