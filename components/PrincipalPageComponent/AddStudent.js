import React, { useState, useEffect } from 'react';
import styles from './addStudent.module.css';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';

function AddStudent(props) {
      const router = useRouter();
      const id = router.query.id;
      const [valid, setValid] = useState(false);
      const [search, setSearch] = useState('');
      const [yearLevel, setYearLevel] = useState('all');
      const [selected, setSelected] = useState({ bool: false, index: '' });

      const [stud, setStudents] = useState([]);
      //filter stud in section
      const filterName = (list) => {
            return list.sort((a, b) => a - b);
      };

      //filter search and dropdown of selecting student

      const filter = (list) => {
            if (yearLevel === 'all') {
                  return list.filter((data) => data.lastName.toLowerCase().indexOf(search) > -1);
            } else {
                  return list.filter(
                        (data) => data.yearLevel === yearLevel && data.lastName.toLowerCase().indexOf(search) > -1
                  );
            }
      };

      const searchBarHandler = (event) => {
            setSearch(event.target.value);
      };
      const yearLevelHandler = (event) => {
            setYearLevel(event.target.value);
      };

      const checkBoxChange = (e, index) => {
            setSelected({ bool: !selected.bool, index: index });
            if (selected.bool) {
                  const list = [...stud];
                  list[index] = e;
                  setStudents(list);
            }
            if (!selected.bool) {
                  const list = [...stud];
                  list.splice(index, 1);
                  setStudents(list);
            }
      };
      console.log(stud);

      const onSubmitHandler = (event) => {
            event.preventDefault();
            const students = [...stud];
            const postData = async () => {
                  try {
                        const response = await axios.post(
                              `http://localhost:4000/api/principal/sectionsStud/${id}`,
                              stud,
                              { withCredentials: true }
                        );

                        console.log(response.data);
                        if (response.data.success) {
                              setValid(true);
                        }
                  } catch (error) {
                        console.log(error);
                  }
            };
            console.log(students);
            postData();
      };
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
                                    {filterName(props.stud).map((item, i) => (
                                          <div className={styles.studItem} key={i}>
                                                {item}
                                          </div>
                                    ))}
                              </ul>
                        </div>
                  </div>
                  {/* <SelectStudentSection data={props.allstud} select={studentSelectedHanlder} index={indexHandler} /> */}
                  <div className={styles.studentcontainer}>
                        <h1 className={styles.studentheader}>Students per year level</h1>
                        <div className={styles.filterContainer}>
                              <div className={styles.select}>
                                    <p className={styles.dropdownName}>Year Level:</p>
                                    <select name="yearLevel" id="yearLevel" onChange={yearLevelHandler}>
                                          <option value="all">All</option>
                                          <option value="7">7</option>
                                          <option value="8">8</option>
                                          <option value="9">9</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                    </select>
                              </div>
                              <input
                                    className={styles.input}
                                    type="search"
                                    name="searchbar"
                                    id="searchbar"
                                    placeholder="Search Lastname"
                                    onChange={searchBarHandler}
                              />
                        </div>

                        <div className={styles.columnName}>Students</div>
                        <ul className={styles.listContainer}>
                              <h4 className={styles.name}>Name</h4>
                              {filter(props.allstud).map((item, i) => (
                                    <div key={i}>
                                          <li className={styles.itemContainer}>
                                                <a className={styles.userName}>
                                                      {item.lastName}, {item.firstName} {item.middleName}
                                                </a>

                                                <input
                                                      className={styles.checkbox}
                                                      type="checkbox"
                                                      onChange={() => {
                                                            checkBoxChange(item.LRNNo, i);
                                                      }}
                                                />
                                          </li>
                                    </div>
                              ))}
                        </ul>
                        <Button className={styles.submitButton} type="submit">
                              Submit
                        </Button>
                  </div>
                  {valid && (
                        <Modal className={styles.modalDesign}>
                              <div className={styles.messageContainer}>
                                    <h2 className={styles.messageHeader}>Students Added</h2>
                                    <h4 className={styles.messageFooter}>Thank you.</h4>
                                    <Button
                                          className={styles.modalButton}
                                          onClick={() => {
                                                router.push('/principal/Section');
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

export default AddStudent;
