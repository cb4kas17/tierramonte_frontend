import React, { useState, useEffect } from 'react';
import styles from './addStudent.module.css';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';
import SelectStudentSection from './SelectStudentSection';
function AddStudent(props) {
      const router = useRouter();
      const id = router.query.id;
      const [valid, setValid] = useState(false);
      const [studentsPerYrLevel, setStudentsPerYrLevel] = useState();
      const filter = (list) => {
            return list.sort((a, b) => a - b);
      };

      console.log(`http://localhost:4000/api/principal/sectionAdd/${props.data.yearLevel}`);
      useEffect(async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/principal/sectionAdd/${props.data.yearLevel}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = response.data;
                  setStudentsPerYrLevel(data);
                  console.log('initiated');
                  console.log(data);
            } catch (error) {
                  console.log(error);
            }
      }, []);
      const onSubmitHandler = () => {};
      return (
            <form className={styles.container} onSubmit={onSubmitHandler}>
                  <h1 className={styles.header}>Add Students</h1>
                  <div className={styles.formWrapper}>
                        <div className={styles.formContainer}>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="schoolYearFrom" className={styles.label}>
                                                School Year From
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{props.data.schoolYearFrom}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="schoolYearTo" className={styles.label}>
                                                School Year To
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{props.data.schoolYearTo}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="sectionName" className={styles.label}>
                                                Section Name
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{props.data.sectionName}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="strand" className={styles.label}>
                                                Strand
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{props.data.strand}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="yearLevel" className={styles.label}>
                                                Grade Level
                                          </label>
                                    </div>

                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{props.data.yearLevel}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="semester" className={styles.label}>
                                                Semester
                                          </label>
                                    </div>

                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{props.data.semester}</div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className={styles.studentListWrapper}>
                        <h4 className={styles.studentListHeader}>Students in section</h4>
                        <div className={styles.studentListContainer}>
                              <ul className={styles.studentList}>
                                    {props.stud.map((item, i) => (
                                          <div className={styles.studItem}>{item}</div>
                                    ))}
                              </ul>
                        </div>
                  </div>
                  {/* <SelectStudentSection data={studentsPerYrLevel} /> */}
            </form>
      );
}

export default AddStudent;
