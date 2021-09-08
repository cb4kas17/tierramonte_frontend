import React, { useRef, useState, useEffect } from 'react';

import styles from './editStudentX.module.css';

import { useRouter } from 'next/router';
import Modal from '../../components/Layout/Modal.';
import axios from 'axios';
import Button from '../UI/Button';
function PreRegFormEdit(props) {
      // FOR MODAL
      // const [updated, setUpdated] = useState(false);
      // const [archive, setArchive] = useState(false);
      // const [confirmation, setConfirmation] = useState(false);
      const rounter = useRouter();
      const x = rounter.query.id;
      console.log(x);
      // FOR CHECKBOXES AND RADIO
      const [isIndig, setIsIndig] = useState(props.userInfo.indig);
      const [firstSemester, setfirstSemester] = useState(false);
      const [secondSemester, setsecondSemester] = useState(false);
      const [firstItem, setFirstItem] = useState(props.userInfo.modularP);
      const [secondItem, setSecondItem] = useState(props.userInfo.modularD);
      const [thirdItem, setThirdItem] = useState(props.userInfo.modularD);
      const [fourthItem, setFourthItem] = useState(props.userInfo.educTV);
      const [fifthItem, setFifthItem] = useState(props.userInfo.radioBased);
      const [sixthItem, setSixthItem] = useState(props.userInfo.homeschool);
      const [seventhItem, setSeventhItem] = useState(props.userInfo.blended);
      const [eighthItem, setEighthItem] = useState(props.userInfo.facetoface);

      const [errorMes, setErrorMes] = useState(false);
      const [errorMesParent, setErrorMesParent] = useState(false);

      let hasLRN = false;
      let semester = '';

      // REFS
      const yearFromRef = useRef();
      const yeartoRef = useRef();
      const gradeRef = useRef();
      const birthCertRef = useRef();
      const lrnRef = useRef();
      const fnameRef = useRef();
      const birthdateRef = useRef(Date);
      const lnameRef = useRef();
      const genderRef = useRef();
      const mnameRef = useRef();
      const mtoungeRef = useRef();
      const indigenousRef = useRef();
      const add1Ref = useRef();
      const add2Ref = useRef();
      const zipRef = useRef();
      const emailRef = useRef();
      const mobilenoRef = useRef();

      // parents
      const motherfnameRef = useRef();
      const fatherfnameRef = useRef();
      const motherlnameRef = useRef();
      const fatherlnameRef = useRef();
      const mothermidnameRef = useRef();
      const fathermidnameRef = useRef();
      const parentEmailRef = useRef();
      const parentNumRef = useRef();
      const guardianfnameRef = useRef();
      const emergencynameRef = useRef();
      const guardianlnameRef = useRef();
      const emergencymobilenoRef = useRef();
      const guardianmidnameRef = useRef();
      const emergencytelnoRef = useRef();

      // returning stud
      const lastgradelvlRef = useRef();
      const semesterRef = useRef();
      const lastschoolyrlvlRef = useRef();
      const trackRef = useRef();
      const schoolnameRef = useRef();
      const strandRef = useRef();
      const schoolAddRef = useRef();

      useEffect(() => {
            async () => {
                  console.log('trigger');
                  // if (props.userInfo.semester === '1st') {
                  //       setfirstSemester(true);
                  // } else if (props.userInfo.semester === '2nd') {
                  //       setsecondSemester(true);
                  // }
                  getData();
                  console.log();
            };
      }, []);
      const getData = async () => {
            console.log('success');
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/registrar/students/${x}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = await response.data.user;
                  const extraData = await response.data.userInfo;

                  console.log(data);
                  setUserData(data);
                  console.log(extraData);
                  setUserInfo(extraData);
            } catch (error) {
                  console.log(error);
            }
      };
      const onSubmitHandler = (event) => {
            event.preventDefault();
            if (lrnRef.current.value > 0) {
                  hasLRN = true;
            }
            if (firstSemester) {
                  semester = '1st';
            } else if (secondSemester) {
                  semester = '2nd';
            }

            const preRegData = {
                  hasLRN: hasLRN,
                  PSANo: birthCertRef.current.value,
                  LRNNo: lrnRef.current.value,
                  studentFirstName: fnameRef.current.value,
                  studentMiddleName: mnameRef.current.value,
                  studentLastName: lnameRef.current.value,
                  birthDate: birthdateRef.current.value,
                  gender: genderRef.current.value,
                  indig: isIndig,
                  indigSpec: indigenousRef.current.value,
                  motherTongue: mtoungeRef.current.value,
                  address1: add1Ref.current.value,
                  address2: add2Ref.current.value,
                  zipCode: zipRef.current.value,
                  email: emailRef.current.value,
                  phoneNum: mobilenoRef.current.value,
                  motherFirstName: motherfnameRef.current.value,
                  motherMiddleName: mothermidnameRef.current.value,
                  motherLastName: motherlnameRef.current.value,
                  fatherFirstName: fatherfnameRef.current.value,
                  fatherMiddleName: fathermidnameRef.current.value,
                  fatherLastName: fatherlnameRef.current.value,
                  guardianFirstName: guardianfnameRef.current.value,
                  guardianMiddleName: guardianmidnameRef.current.value,
                  guardianLastName: guardianlnameRef.current.value,
                  emergencyName: emergencynameRef.current.value,
                  emergencyTelephone: emergencytelnoRef.current.value,
                  emergencyCellphone: emergencymobilenoRef.current.value,
                  parentEmail: parentEmailRef.current.value,
                  parentPhoneNum: parentNumRef.current.value,
                  lastGradeLevel: lastgradelvlRef.current.value,
                  lastSchoolYear: lastschoolyrlvlRef.current.value,
                  schoolName: schoolnameRef.current.value,
                  schoolAddress: schoolAddRef.current.value,
                  semester: semester,
                  track: trackRef.current.value,
                  strand: strandRef.current.value,
                  modularP: firstItem,
                  modularD: secondItem,
                  online: thirdItem,
                  educTV: fourthItem,
                  radioBased: fifthItem,
                  homeschool: sixthItem,
                  blended: seventhItem,
                  facetoface: eighthItem,
            };
            const postData = async () => {
                  try {
                        const response = await axios.post(
                              'http://localhost:4000/api/prereg',
                              preRegData
                        );

                        console.log(response.data);
                        if (response.data === 'prereg created!') {
                              router.push('/');
                        } else if (
                              response.data === 'student email is in use!'
                        ) {
                              setErrorMes(true);
                              setErrorMesParent(false);
                        } else if (
                              response.data === 'parent email is in use!'
                        ) {
                              setErrorMes(false);
                              setErrorMesParent(true);
                        }
                  } catch (error) {
                        console.log(error);
                  }
            };
            console.log(preRegData);
            postData();
      };

      return (
            <form className={styles.container} onSubmit={onSubmitHandler}>
                  <h1 className={styles.formHeader}>Edit/Archive Student</h1>
                  <div className={styles.formContainer}>
                        <h2 className={styles.typeHeader}>Student</h2>
                        <div className={styles.yearSection}>
                              <div>
                                    <label htmlFor="yearfrom">Year From</label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="yearfrom"
                                          ref={yearFromRef}
                                          placeholder={
                                                props.userInfo.schoolYearFrom
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="yearto">Year To</label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="yearto"
                                          ref={yeartoRef}
                                          placeholder={
                                                props.userInfo.schoolYearTo
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="grade">
                                          Grade to enroll
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="grade"
                                          ref={gradeRef}
                                          placeholder={props.data.yearLevel}
                                    />
                              </div>
                        </div>
                        <div className={styles.studentSection}>
                              <div>
                                    <label htmlFor="birthCert">
                                          PSA Birth Certificate No.
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="birthCert"
                                          ref={birthCertRef}
                                          placeholder={props.userInfo.PSANo}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="lrn">
                                          Learner Reference No.
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="lrn"
                                          ref={lrnRef}
                                          placeholder={props.data.LRNNo}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="fname">First Name</label>
                                    <input
                                          type="text"
                                          id="fname"
                                          ref={fnameRef}
                                          placeholder={props.data.firstName}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="birthdate">
                                          Date of Birth
                                    </label>
                                    <input type="date" id="birthdate" />
                              </div>
                              <div>
                                    <label htmlFor="mname">Middle Name</label>
                                    <input
                                          type="text"
                                          id="mname"
                                          ref={mnameRef}
                                          placeholder={props.data.middleName}
                                    />
                              </div>

                              <div>
                                    <label htmlFor="gender">Gender</label>
                                    <input
                                          type="text"
                                          id="gender"
                                          ref={genderRef}
                                          placeholder={props.userInfo.gender}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="lname">Last Name</label>
                                    <input
                                          type="text"
                                          id="lname"
                                          ref={lnameRef}
                                          placeholder={props.data.lastName}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="isIndig">
                                          Belong in indigenous community?
                                    </label>
                                    <input
                                          type="checkbox"
                                          name="isIndig"
                                          id="isIndig"
                                          className={styles.isIndig}
                                          checked={isIndig}
                                          onChange={() => setIsIndig(!isIndig)}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="mtounge">
                                          Mother Tounge
                                    </label>
                                    <input
                                          type="text"
                                          id="mtounge"
                                          ref={mtoungeRef}
                                          placeholder={
                                                props.userInfo.motherTongue
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="indigenous">
                                          Indigenous name
                                    </label>
                                    <input
                                          type="text"
                                          id="indigenous"
                                          ref={indigenousRef}
                                          disabled={!isIndig}
                                          placeholder={props.userInfo.indigSpec}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="add1">Address Line 1</label>
                                    <input
                                          type="text"
                                          id="add1"
                                          ref={add1Ref}
                                          placeholder={props.userInfo.address1}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="add2">Address Line 2</label>
                                    <input
                                          type="text"
                                          id="add2"
                                          ref={add2Ref}
                                          placeholder={props.userInfo.address2}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="zip">Zip Code</label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="zip"
                                          ref={zipRef}
                                          placeholder={props.userInfo.zipCode}
                                    />
                              </div>
                              <div className={errorMes ? styles.invalid : ''}>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                          type="email"
                                          id="email"
                                          ref={emailRef}
                                          placeholder={props.data.email}
                                    />
                                    {errorMes && (
                                          <p className={styles.errorMes}>
                                                Email already exist
                                          </p>
                                    )}
                              </div>
                              <div>
                                    <label htmlFor="mobileno">
                                          Cellphone no.
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="mobileno"
                                          ref={mobilenoRef}
                                          placeholder={props.data.phoneNum}
                                    />
                              </div>
                        </div>

                        {/* PARENTS SECTION */}
                        <h2 className={styles.typeHeader}>Parents</h2>
                        <div className={styles.parentsSection}>
                              <h4 className={styles.typeSubHeader}>Mother</h4>
                              <h4 className={styles.typeSubHeader}>Father</h4>
                              <div>
                                    <label htmlFor="motherfname">
                                          First Name
                                    </label>
                                    <input
                                          type="text"
                                          id="motherfname"
                                          ref={motherfnameRef}
                                          placeholder={
                                                props.userInfo.motherFirstName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="fatherfname">
                                          First Name
                                    </label>
                                    <input
                                          type="text"
                                          id="fatherfname"
                                          ref={fatherfnameRef}
                                          placeholder={
                                                props.userInfo.fatherFirstName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="motherlname">
                                          Last Name
                                    </label>
                                    <input
                                          type="text"
                                          id="motherlname"
                                          ref={motherlnameRef}
                                          placeholder={
                                                props.userInfo.motherLastName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="fatherlname">
                                          Last Name
                                    </label>
                                    <input
                                          type="text"
                                          id="fatherlname"
                                          ref={fatherlnameRef}
                                          placeholder={
                                                props.userInfo.fatherLastName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="mothermidname">
                                          Middle Name
                                    </label>
                                    <input
                                          type="text"
                                          id="mothermidname"
                                          ref={mothermidnameRef}
                                          placeholder={
                                                props.userInfo.motherMiddleName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="fathermidname">
                                          Middle Name
                                    </label>
                                    <input
                                          type="text"
                                          id="fathermidname"
                                          ref={fathermidnameRef}
                                          placeholder={
                                                props.userInfo.fatherMiddleName
                                          }
                                    />
                              </div>
                              <div
                                    className={
                                          errorMesParent ? styles.invalid : ''
                                    }
                              >
                                    <label htmlFor="parentEmail">
                                          Parent Email (Any)
                                    </label>
                                    <input
                                          type="email"
                                          id="parentEmail"
                                          ref={parentEmailRef}
                                          placeholder={
                                                props.userInfo.parentEmail
                                          }
                                    />
                                    {errorMesParent && (
                                          <p className={styles.errorMes}>
                                                Email already exist
                                          </p>
                                    )}
                              </div>
                              <div>
                                    <label htmlFor="parentNum">
                                          Parent Mobile no.
                                    </label>
                                    <input
                                          type="number"
                                          id="parentNum"
                                          ref={parentNumRef}
                                          placeholder={
                                                props.userInfo.parentPhoneNum
                                          }
                                    />
                              </div>
                              <h4 className={styles.typeSubHeader}>Guardian</h4>
                              <h4 className={styles.typeSubHeader}>
                                    Emergency Contact
                              </h4>
                              <div>
                                    <label htmlFor="guardianfname">
                                          First Name
                                    </label>
                                    <input
                                          type="text"
                                          id="guardianfname"
                                          ref={guardianfnameRef}
                                          placeholder={
                                                props.userInfo.guardianFirstName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="emergencyname">Name</label>
                                    <input
                                          type="text"
                                          id="emergencyname"
                                          ref={emergencynameRef}
                                          placeholder={
                                                props.userInfo.emergencyName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="guardianlname">
                                          Last Name
                                    </label>
                                    <input
                                          type="text"
                                          id="guardianlname"
                                          ref={guardianlnameRef}
                                          placeholder={
                                                props.userInfo.guardianLastName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="emergencymobileno">
                                          Cellphone No.
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="emergencymobileno"
                                          ref={emergencymobilenoRef}
                                          placeholder={
                                                props.userInfo
                                                      .emergencyCellphone
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="guardianmidname">
                                          Middle Name
                                    </label>
                                    <input
                                          type="text"
                                          id="guardianmidname"
                                          ref={guardianmidnameRef}
                                          placeholder={
                                                props.userInfo
                                                      .guardianMiddleName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="emergencytelno">
                                          Telephone No.
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="emergencytelno"
                                          ref={emergencytelnoRef}
                                          placeholder={
                                                props.userInfo
                                                      .emergencyTelephone
                                          }
                                    />
                              </div>
                        </div>
                        <div className={styles.forStudentsContainer}>
                              <h2 className={styles.typeHeader}>
                                    For returning Students
                              </h2>
                              <h2 className={styles.typeHeader}>
                                    For SHS students
                              </h2>
                              <div>
                                    <label htmlFor="lastgradelvl">
                                          Last Grade Level Completed
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="lastgradelvl"
                                          ref={lastgradelvlRef}
                                          placeholder={
                                                props.userInfo.lastGradeLevel
                                          }
                                          //
                                    />
                              </div>

                              <div>
                                    <label>Semester</label>
                                    <div className={styles.radioInput}>
                                          <div>
                                                <input
                                                      type="radio"
                                                      name="semester"
                                                      id="1stsemester"
                                                      ref={semesterRef}
                                                      //
                                                      checked={firstSemester}
                                                      onChange={() => {
                                                            setfirstSemester(
                                                                  !firstSemester
                                                            );
                                                      }}
                                                />
                                                <label htmlFor="1stsemester">
                                                      1st
                                                </label>
                                          </div>
                                          <div>
                                                <input
                                                      type="radio"
                                                      name="semester"
                                                      id="2ndsemester"
                                                      ref={semesterRef}
                                                      //
                                                      checked={secondSemester}
                                                      onChange={() => {
                                                            setsecondSemester(
                                                                  !secondSemester
                                                            );
                                                      }}
                                                />
                                                <label htmlFor="2ndsemester">
                                                      2nd
                                                </label>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="lastschoolyrlvl">
                                          Last School Year Completed
                                    </label>
                                    <input
                                          type="number"
                                          min="0"
                                          id="lastschoolyrlvl"
                                          ref={lastschoolyrlvlRef}
                                          placeholder={
                                                props.userInfo.lastSchoolYear
                                          }
                                          //
                                    />
                              </div>
                              <div>
                                    <label htmlFor="track">Track</label>
                                    <input
                                          type="text"
                                          id="track"
                                          ref={trackRef}
                                          placeholder={props.userInfo.track}
                                          //
                                    />
                              </div>
                              <div>
                                    <label htmlFor="strand">Strand</label>
                                    <input
                                          type="text"
                                          id="strand"
                                          //
                                          ref={strandRef}
                                          placeholder={props.userInfo.strand}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="schoolname">
                                          School Name
                                    </label>
                                    <input
                                          type="text"
                                          id="schoolname"
                                          //
                                          ref={schoolnameRef}
                                          placeholder={
                                                props.userInfo.schoolName
                                          }
                                    />
                              </div>
                              <div>
                                    <label htmlFor="schoolAdd">
                                          School Address
                                    </label>
                                    <input
                                          type="text"
                                          id="schoolAdd"
                                          ref={schoolAddRef}
                                          //
                                          placeholder={
                                                props.userInfo.schoolAddress
                                          }
                                    />
                              </div>
                        </div>
                        <h2 className={styles.typeHeader}>
                              Preferred Distance Learning Methods
                        </h2>
                        <div className={styles.checkboxContainer}>
                              <label
                                    htmlFor="item1"
                                    className={styles.radioContainer}
                              >
                                    Modular (Print)
                                    <input
                                          type="checkbox"
                                          name="item1"
                                          id="item1"
                                          checked={firstItem}
                                          onChange={() =>
                                                setFirstItem((prev) => {
                                                      !prev;
                                                })
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item2"
                                    className={styles.radioContainer}
                              >
                                    Modular (Digital)
                                    <input
                                          type="checkbox"
                                          name="item2"
                                          id="item2"
                                          checked={secondItem}
                                          onChange={() =>
                                                setSecondItem(!secondItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item3"
                                    className={styles.radioContainer}
                              >
                                    Online
                                    <input
                                          type="checkbox"
                                          name="item3"
                                          id="item3"
                                          checked={thirdItem}
                                          onChange={() =>
                                                setThirdItem(!thirdItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item4"
                                    className={styles.radioContainer}
                              >
                                    Educational TV
                                    <input
                                          type="checkbox"
                                          name="item4"
                                          id="item4"
                                          checked={fourthItem}
                                          onChange={() =>
                                                setFourthItem(!fourthItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item5"
                                    className={styles.radioContainer}
                              >
                                    Radio Based Instruction
                                    <input
                                          type="checkbox"
                                          name="item5"
                                          id="item5"
                                          checked={fifthItem}
                                          onChange={() =>
                                                setFifthItem(!fifthItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item6"
                                    className={styles.radioContainer}
                              >
                                    Homeschooling
                                    <input
                                          type="checkbox"
                                          name="item6"
                                          id="item6"
                                          checked={sixthItem}
                                          onChange={() =>
                                                setSixthItem(!sixthItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item7"
                                    className={styles.radioContainer}
                              >
                                    Blended
                                    <input
                                          type="checkbox"
                                          name="item7"
                                          id="item7"
                                          checked={seventhItem}
                                          onChange={() =>
                                                setSeventhItem(!seventhItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                              <label
                                    htmlFor="item8"
                                    className={styles.radioContainer}
                              >
                                    Face to face
                                    <input
                                          type="checkbox"
                                          name="item8"
                                          id="item8"
                                          checked={eighthItem}
                                          onChange={() =>
                                                setEighthItem(!eighthItem)
                                          }
                                    />
                                    <span className={styles.checkmark}></span>
                              </label>
                        </div>
                        <div className={styles.buttonContainer}>
                              <Button
                                    className={styles.buttonUpdate}
                                    type={'submit'}
                              >
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
                        {/* {updated && (
                              <Modal className={styles.modalDesign}>
                                    <div className={styles.messageContainer}>
                                          <h2 className={styles.messageHeader}>
                                                Student Updated
                                          </h2>
                                          <h4 className={styles.messageBody}>
                                                Please check in the updated
                                                student to the List of Student
                                                Tab
                                          </h4>
                                          <h4 className={styles.messageFooter}>
                                                Thank you.
                                          </h4>
                                          <Button
                                                className={styles.modalButton}
                                                onClick={() => {
                                                      router.push(
                                                            '/registrar/Students'
                                                      );
                                                }}
                                          >
                                                Go back to student list
                                          </Button>
                                    </div>
                              </Modal>
                        )}
                        {archive && (
                              <Modal className={styles.modalDesign}>
                                    <div className={styles.messageContainer}>
                                          <h2 className={styles.messageHeader}>
                                                Student Successfully Archived
                                          </h2>
                                          <h4
                                                className={styles.messageBody}
                                          ></h4>
                                          <h4 className={styles.messageFooter}>
                                                Thank you.
                                          </h4>
                                          <Button
                                                className={styles.modalButton}
                                                onClick={() => {
                                                      router.push(
                                                            '/registrar/Students'
                                                      );
                                                }}
                                          >
                                                Go back to student list
                                          </Button>
                                    </div>
                              </Modal>
                        )}
                        {confirmation && (
                              <Modal className={styles.modalDesign}>
                                    <div className={styles.messageContainer}>
                                          <h2 className={styles.messageHeader}>
                                                Are you sure you want to archive
                                                the student?
                                          </h2>
                                          <h4
                                                className={styles.messageFooter}
                                          ></h4>
                                          <div
                                                className={
                                                      styles.buttonConfirmationContainer
                                                }
                                          >
                                                <Button
                                                      className={
                                                            styles.modalButtonYes
                                                      }
                                                      onClick={archiveUser}
                                                >
                                                      Yes
                                                </Button>
                                                <Button
                                                      className={
                                                            styles.modalButtonNo
                                                      }
                                                      onClick={() => {
                                                            setConfirmation(
                                                                  false
                                                            );
                                                      }}
                                                >
                                                      No
                                                </Button>
                                          </div>
                                    </div>
                              </Modal>
                        )} */}
                  </div>
            </form>
      );
}

export default PreRegFormEdit;
