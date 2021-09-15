import React, { useState, useEffect } from 'react';
import styles from './encodeGrades.module.css';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';

function EncodeGrades(props) {
      const router = useRouter();
      const id = router.query.id;
      const subject = router.query.subject;

      const [sectionData, setSectionData] = useState([]);
      const [studentNameData, setstudentNameData] = useState([]);

      const [search, setSearch] = useState('');
      
      const searchBarHandler = (event) => {
            setSearch(event.target.value);
      };
      const filter = (list) => {
            return list.filter((data) => data.toLowerCase().indexOf(search) > -1);
      };
      console.log(id);
      useEffect(async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/teacher/mysections/${id}?subject=${subject}`,
                        {
                              withCredentials: true,
                        }
                  );

                  setSectionData(response.data.section);
                  setstudentNameData(response.data.section.studentNames);
                  console.log(response.data.section);
                  console.log(response.data.section.studentNames);
                  if (response.data.success) {
                        setValid(true);
                  }
            } catch (error) {
                  console.log(error);
            }
      }, []);
      const onSubmitHandler = () => {};
      return (
            <form className={styles.container} onSubmit={onSubmitHandler}>
                  <h1 className={styles.header}>Section Info</h1>
                  <div className={styles.formWrapper}>
                        <div className={styles.formContainer}>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="schoolYearFrom" className={styles.label}>
                                                School Year From
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{sectionData.schoolYearFrom}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="schoolYearTo" className={styles.label}>
                                                School Year To
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{sectionData.schoolYearTo}</div>
                                    </div>
                              </div>

                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="sectionName" className={styles.label}>
                                                Section Name
                                          </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{sectionData.sectionName}</div>
                                    </div>
                              </div>
                              <div className={styles.formFields}>
                                    <div className={styles.labelContainer}>
                                          <label htmlFor="yearLevel" className={styles.label}>
                                                Grade Level
                                          </label>
                                    </div>

                                    <div className={styles.inputContainer}>
                                          <div className={styles.input}>{sectionData.yearLevel}</div>
                                    </div>
                              </div>
                              {sectionData.strand && (
                                    <div className={styles.formFields}>
                                          <div className={styles.labelContainer}>
                                                <label htmlFor="strand" className={styles.label}>
                                                      Strand
                                                </label>
                                          </div>
                                          <div className={styles.inputContainer}>
                                                <div className={styles.input}>{sectionData.strand}</div>
                                          </div>
                                    </div>
                              )}
                              {sectionData.semester && (
                                    <div className={styles.formFields}>
                                          <div className={styles.labelContainer}>
                                                <label htmlFor="semester" className={styles.label}>
                                                      Semester
                                                </label>
                                          </div>

                                          <div className={styles.inputContainer}>
                                                <div className={styles.input}>{sectionData.semester}</div>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
                  <div className={styles.container}>
                        <h1 className={styles.header}>List of Sections</h1>
                        <div className={styles.filterContainer}>
                              <input
                                    className={styles.input}
                                    type="search"
                                    name="searchbar"
                                    id="searchbar"
                                    placeholder="Search Lastname"
                                    onChange={searchBarHandler}
                              />
                        </div>

                        <div className={styles.columnName}>Sections</div>
                        <ul className={styles.listContainer}>
                              <div className={styles.columnTitlecontainer}>
                                    <h4 className={styles.name}>Student Name</h4>
                                    <h4 className={styles.name}>Q1</h4>
                                    <h4 className={styles.name}>Q2</h4>
                                    <h4 className={styles.name}>Q3</h4>
                                    <h4 className={styles.name}>Q4</h4>
                              </div>

                              {filter(studentNameData).map((item, i) => (
                                    <li className={styles.itemContainer}>
                                          <div className={styles.userName}>{item}</div>
                                          <div className={styles.quarterGrade}>
                                                <input type="number" name="Q1" />
                                          </div>
                                          <div className={styles.quarterGrade}>
                                                <input type="number" name="Q2" />
                                          </div>
                                          <div className={styles.quarterGrade}>
                                                <input type="number" name="Q3" />
                                          </div>
                                          <div className={styles.quarterGrade}>
                                                <input type="number" name="Q4" />
                                          </div>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </form>
      );
}

export default EncodeGrades;
