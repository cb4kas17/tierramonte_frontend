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
      const [valid, setValid] = useState(false);

      const [sectionData, setSectionData] = useState([]);
      const [studentNameData, setstudentNameData] = useState([]);
      const [dataPass, setDataPass] = useState([]);
      const [lrnData, setLRNData] = useState([]);
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
                  setLRNData(response.data.section.studentLRNs);
                  const list = response.data.section.studentNames;
                  const LRNList = response.data.section.studentLRNs;
                  const studentList = [];
                  for (let i = 0; i < list.length; i++) {
                        studentList[i] = { name: list[i], LRNNo: LRNList[i], Q1: '', Q2: '', Q3: '', Q4: '' };
                  }
                  setDataPass(studentList);

                  if (response.data.success) {
                        // setValid(true);
                  }
            } catch (error) {
                  console.log(error);
            }
      }, []);

      const handleInputChange = (e, index) => {
            const { name, value } = e.target;
            const list = [...dataPass];
            list[index][name] = value;
            setDataPass(list);
      };
      const onSubmitHandler = async (event) => {
            event.preventDefault();
            console.log(dataPass);
            const gradeData = { students: dataPass };
            try {
                  const response = await axios.post(
                        `http://localhost:4000/api/teacher/mysections/${id}?subject=${subject}`,
                        gradeData,
                        {
                              withCredentials: true,
                        }
                  );
                  console.log(response.data);
                  if (response.data.success) {
                        setValid(true);
                  }
            } catch (error) {
                  console.log(error);
            }
      };

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
                                                <input
                                                      type="number"
                                                      name="Q1"
                                                      onChange={(e) => handleInputChange(e, i)}
                                                />
                                          </div>
                                          <div className={styles.quarterGrade}>
                                                <input
                                                      type="number"
                                                      name="Q2"
                                                      onChange={(e) => handleInputChange(e, i)}
                                                />
                                          </div>
                                          <div className={styles.quarterGrade}>
                                                <input
                                                      type="number"
                                                      name="Q3"
                                                      onChange={(e) => handleInputChange(e, i)}
                                                />
                                          </div>
                                          <div className={styles.quarterGrade}>
                                                <input
                                                      type="number"
                                                      name="Q4"
                                                      onChange={(e) => handleInputChange(e, i)}
                                                />
                                          </div>
                                    </li>
                              ))}
                        </ul>
                        <Button type="submit" className={styles.submitButton}>
                              Submit
                        </Button>
                  </div>
                  {valid && (
                        <Modal className={styles.modalDesign}>
                              <div className={styles.messageContainer}>
                                    <h2 className={styles.messageHeader}>Grades Encoded</h2>
                                    <h4 className={styles.messageFooter}>Thank you.</h4>
                                    <Button
                                          className={styles.modalButton}
                                          onClick={() => {
                                                router.push('/teacher/Sections');
                                          }}
                                    >
                                          Go back to Teacher List
                                    </Button>
                              </div>
                        </Modal>
                  )}
            </form>
      );
}

export default EncodeGrades;
