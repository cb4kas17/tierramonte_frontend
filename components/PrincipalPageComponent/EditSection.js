import React, { useState, useEffect } from 'react';
import styles from './editSection.module.css';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';

function EditSection() {
      const router = useRouter();
      const id = router.query.id;
      const [sectionData, setSectionData] = useState([]);

      //for modals
      const [updated, setUpdated] = useState(false);
      const [archive, setArchive] = useState(false);
      const [confirmation, setConfirmation] = useState(false);

      const {
            value: enteredSchoolYearFrom,
            isValid: enteredSchoolYearFromIsValid,
            hasError: enteredSchoolYearFromHasError,
            valueChangeHandler: schoolYearFromChangeHandler,
            inputBlurHandler: schoolYearFromBlurHandler,
      } = useInput((value) => !isNaN(value));
      const {
            value: enteredSchoolYearTo,
            isValid: enteredSchoolYearToIsValid,
            hasError: enteredSchoolYearToHasError,
            valueChangeHandler: schoolYearToChangeHandler,
            inputBlurHandler: schoolYearToBlurHandler,
      } = useInput((value) => !isNaN(value));

      const {
            value: enteredSectionName,
            isValid: enteredSectionNameIsValid,
            hasError: enteredSectionNameHasError,
            valueChangeHandler: sectionNameChangeHandler,
            inputBlurHandler: sectionNameBlurHandler,
      } = useInput((value) => value.trim() !== '');

      const {
            value: enteredStrand,
            isValid: enteredStrandIsValid,
            hasError: enteredStrandHasError,
            valueChangeHandler: strandChangeHandler,
            inputBlurHandler: strandBlurHandler,
      } = useInput((value) => value.trim() !== '');

      const {
            value: enteredYearLevel,
            isValid: enteredYearLevelIsValid,
            hasError: enteredYearLevelHasError,
            valueChangeHandler: yearLevelChangeHandler,
            inputBlurHandler: yearLevelBlurHandler,
      } = useInput((value) => !isNaN(value));
      const {
            value: enteredSemester,
            isValid: enteredSemesterIsValid,
            hasError: enteredSemesterHasError,
            valueChangeHandler: semesterChangeHandler,
            inputBlurHandler: semesterBlurHandler,
      } = useInput((value) => value.trim() !== '');

      useEffect(async () => {
            try {
                  const response = await axios.get(`http://localhost:4000/api/principal/sections/${id}`, {
                        withCredentials: true,
                  });
                  const data = await response.data.section;
                  setSectionData(data);
            } catch (error) {
                  console.log(error);
            }
      }, []);

      const archiveHandler = async () => {
            try {
                  const response = await axios.delete(`http://localhost:4000/api/principal/sections/${id}`, {
                        withCredentials: true,
                        credentials: 'include',
                  });
                  console.log(response);
                  if (response.data.success) {
                        setArchive(true);
                        setConfirmation(false);
                  } else {
                        setArchive(false);
                  }
            } catch (error) {
                  console.log(error);
            }
      };

      const onSubmitHandler = () => {};
      return (
            <div>
                  <form className={styles.container} onSubmit={onSubmitHandler}>
                        <h1 className={styles.header}>Edit Section</h1>
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
                                                <label htmlFor="strand" className={styles.label}>
                                                      Strand
                                                </label>
                                          </div>
                                          <div className={styles.inputContainer}>
                                                <div className={styles.input}>{sectionData.strand}</div>
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
                              </div>
                        </div>
                        <div className={styles.buttonContainer}>
                              <Button className={styles.buttonUpdate} type={'submit'}>
                                    Update
                              </Button>
                              <Button
                                    className={styles.buttonArchive}
                                    onClick={() => {
                                          setConfirmation(true);
                                    }}
                              >
                                    Archive
                              </Button>
                        </div>
                        {updated && (
                              <Modal className={styles.modalDesign}>
                                    <div className={styles.messageContainer}>
                                          <h2 className={styles.messageHeader}>Account Updated</h2>
                                          <h4 className={styles.messageBody}>
                                                Please check in the updated announcement to the List of Announcement.
                                          </h4>
                                          <h4 className={styles.messageFooter}>Thank you.</h4>
                                          <Button
                                                className={styles.modalButton}
                                                onClick={() => {
                                                      router.push('/principal/Announcement');
                                                }}
                                          >
                                                Go back to announcement list
                                          </Button>
                                    </div>
                              </Modal>
                        )}
                        {archive && (
                              <Modal className={styles.modalDesign}>
                                    <div className={styles.messageContainer}>
                                          <h2 className={styles.messageHeader}>Section Successfully Archived</h2>
                                          <h4 className={styles.messageFooter}>Thank you.</h4>
                                          <Button
                                                className={styles.modalButton}
                                                onClick={() => {
                                                      router.push('/principal/Section');
                                                }}
                                          >
                                                Go back to section list
                                          </Button>
                                    </div>
                              </Modal>
                        )}
                        {confirmation && (
                              <Modal className={styles.modalDesign}>
                                    <div className={styles.messageContainer}>
                                          <h2 className={styles.messageHeader}>
                                                Are you sure you want to archive this section?
                                          </h2>
                                          <h4 className={styles.messageFooter}></h4>
                                          <div className={styles.buttonConfirmationContainer}>
                                                <Button className={styles.modalButtonYes} onClick={archiveHandler}>
                                                      Yes
                                                </Button>
                                                <Button
                                                      className={styles.modalButtonNo}
                                                      onClick={() => {
                                                            setConfirmation(false);
                                                      }}
                                                >
                                                      No
                                                </Button>
                                          </div>
                                    </div>
                              </Modal>
                        )}
                  </form>
            </div>
      );
}

export default EditSection;