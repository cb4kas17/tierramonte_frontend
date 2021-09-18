import React, { useState, useEffect } from 'react';
import styles from './viewGrades.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';
import Link from 'next/link';
function ViewGrades() {
      const [studentGrade, setStudentGrade] = useState([]);
      const [prevGrade, setPrevGrade] = useState([]);
      const [studentGradeInfo, setStudentGradeInfo] = useState('');
      const [prevGradeInfo, setPrevGradeInfo] = useState([]);
      const [showPrevGradeHandler, setShowPrevGradeHandler] = useState([]);
      useEffect(async () => {
            try {
                  const response = await axios.get(`http://localhost:4000/api/parent/grades`, {
                        withCredentials: true,
                  });
                  console.log(response.data);
                  setPrevGradeInfo(response.data.gradesInfo);
                  setStudentGrade(response.data.gradeLatest);
                  setPrevGrade(response.data.grades);
                  setStudentGradeInfo(response.data.gradeLatestInfo);

                  console.log(response.data.gradeLatest);
                  console.log(response.data.grades);
                  console.log(response.data.gradeLatestInfo.sectionName);
                  console.log(response.data.gradesInfo);
            } catch (error) {
                  console.log(error);
            }
      }, []);

      const setShowPrevGradeClickHandler = (e, index) => {
            const list = [...showPrevGradeHandler];
            list[index] = e;
            setShowPrevGradeHandler(list);
            console.log(list);
      };
      return (
            <div className={styles.container}>
                  <h1 className={styles.header}>View Grades</h1>
                  <div className={styles.columnName}>{studentGradeInfo.sectionName}</div>
                  <ul className={styles.listContainer}>
                        <div className={styles.columnTitlecontainer}>
                              <h4 className={styles.name}>Subject</h4>
                              <h4 className={styles.name}>Q1</h4>
                              <h4 className={styles.name}>Q2</h4>
                              <h4 className={styles.name}>Q3</h4>
                              <h4 className={styles.name}>Q4</h4>
                        </div>

                        {studentGrade.map((item, i) => (
                              <li className={styles.itemContainer} key={i}>
                                    <div className={styles.userName}>{item.subject}</div>
                                    <div className={styles.quarterGrade}>{item.q1Grade}</div>
                                    <div className={styles.quarterGrade}>{item.q2Grade}</div>
                                    <div className={styles.quarterGrade}>{item.q3Grade}</div>
                                    <div className={styles.quarterGrade}>{item.q4Grade}</div>
                              </li>
                        ))}
                  </ul>

                  {prevGrade.map((item, i) => (
                        <div key={i} className={styles.prevGradeContainer}>
                              <div
                                    className={
                                          showPrevGradeHandler[i]
                                                ? styles.columnNamePrevGradeClicked
                                                : styles.columnNamePrevGrade
                                    }
                                    onClick={() => {
                                          setShowPrevGradeClickHandler(!showPrevGradeHandler[i], i);
                                    }}
                              >
                                    {prevGradeInfo[i].sectionName}
                              </div>
                              {showPrevGradeHandler[i] && (
                                    <ul className={styles.listContainer}>
                                          <div className={styles.columnTitlecontainer}>
                                                <h4 className={styles.name}>Subject</h4>
                                                <h4 className={styles.name}>Q1</h4>
                                                <h4 className={styles.name}>Q2</h4>
                                                <h4 className={styles.name}>Q3</h4>
                                                <h4 className={styles.name}>Q4</h4>
                                          </div>

                                          {item.map((x, y) => (
                                                <li className={styles.itemContainer}>
                                                      <div className={styles.userName}>{x.subject}</div>
                                                      <div className={styles.quarterGrade}>{x.q1Grade}</div>
                                                      <div className={styles.quarterGrade}>{x.q2Grade}</div>
                                                      <div className={styles.quarterGrade}>{x.q3Grade}</div>
                                                      <div className={styles.quarterGrade}>{x.q4Grade}</div>
                                                </li>
                                          ))}
                                    </ul>
                              )}
                        </div>
                  ))}
            </div>
      );
}

export default ViewGrades;
