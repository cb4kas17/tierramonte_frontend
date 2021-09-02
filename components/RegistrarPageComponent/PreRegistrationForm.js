import React from 'react';
import styles from './preRegistrationForm.module.css';
import axios from 'axios';
import Button from '../UI/Button';
import { data } from 'browserslist';

function PreRegistrationForm(props) {
      return (
            <div className={styles.container}>
                  <h1 className={styles.formHeader}>Pre-Registration Form</h1>
                  <div className={styles.formContainer}>
                        <div className={styles.yearSection}>
                              <div>
                                    <label htmlFor="returningStud">
                                          Returning Student?
                                    </label>
                                    <input
                                          type="checkbox"
                                          name="returningStud"
                                          id="returningStud"
                                          className={styles.returningcheckbox}
                                          checked={props.data.returning}
                                          disabled={true}
                                    />
                              </div>
                              <div>
                                    <label htmlFor="yearfrom">Year From</label>
                                    <div className={styles.input}>
                                          {props.data.schoolYearFrom}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="yearto">Year To</label>
                                    <div className={styles.input}>
                                          {props.data.schoolYearTo}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="grade">
                                          Grade to enroll
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.levelEnroll}
                                    </div>
                              </div>
                        </div>
                        <h2 className={styles.typeHeader}>Student</h2>
                        <div className={styles.studentSection}>
                              <div>
                                    <label htmlFor="birthCert">
                                          PSA Birth Certificate No.
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.PSANo}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="lrn">
                                          Learner Reference No.
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.LRNNo}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="fname">First Name</label>
                                    <div className={styles.input}>
                                          {props.data.studentFirstName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="birthdate">
                                          Date of Birth
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.birthDate}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="lname">Last Name</label>
                                    <div className={styles.input}>
                                          {props.data.studentLastName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="gender">Gender</label>
                                    <div className={styles.input}>
                                          {props.data.gender}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="mname">Middle Name</label>
                                    <div className={styles.input}>
                                          {props.data.studentMiddleName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="isIndig">
                                          Belong in indigenous community?
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.indig}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="mtounge">
                                          Mother Tounge
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.motherTongue}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="indigenous">
                                          Indigenous name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.indigSpec}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="add1">Address Line 1</label>
                                    <div className={styles.input}>
                                          {props.data.address1}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="add2">Address Line 2</label>
                                    <div className={styles.input}>
                                          {props.data.address2}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="zip">Zip Code</label>
                                    <div className={styles.input}>
                                          {props.data.zipCode}
                                    </div>
                              </div>
                              <div className={errorMes ? styles.invalid : ''}>
                                    <label htmlFor="email">E-mail</label>
                                    <div className={styles.input}>
                                          {props.data.email}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="mobileno">
                                          Cellphone no.
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.phoneNum}
                                    </div>
                              </div>
                        </div>
                        <h2 className={styles.typeHeader}>Parents</h2>
                        <div className={styles.parentsSection}>
                              <h4 className={styles.typeSubHeader}>Mother</h4>
                              <h4 className={styles.typeSubHeader}>Father</h4>
                              <div>
                                    <label htmlFor="motherfname">
                                          First Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.motherFirstName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="fatherfname">
                                          First Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.fatherFirstName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="motherlname">
                                          Last Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.motherLastName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="fatherlname">
                                          Last Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.fatherLastName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="mothermidname">
                                          Middle Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.motherMiddleName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="fathermidname">
                                          Middle Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.fatherMiddleName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="parentEmail">
                                          Parent Email (Any)
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.parentEmail}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="parentNum">
                                          Parent Mobile no.
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.parentPhoneNum}
                                    </div>
                              </div>
                              <h4 className={styles.typeSubHeader}>Guardian</h4>
                              <h4 className={styles.typeSubHeader}>
                                    Emergency Contact
                              </h4>
                              <div>
                                    <label htmlFor="guardianfname">
                                          First Name
                                    </label>
                                    <div className={styles.input}>
                                          {props.data.guardianFirstName}
                                    </div>
                              </div>
                              //Stopped at this... no emergency
                              <div>
                                    <label htmlFor="emergencyname">Name</label>
                                    <div className={styles.input}>
                                          {props.data.guardianFirstName}
                                    </div>
                              </div>
                              <div>
                                    <label htmlFor="guardianlname">
                                          Last Name
                                    </label>
                                    <input
                                          type="text"
                                          id="guardianlname"
                                          ref={guardianlnameRef}
                                          required={true}
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
                                          required={true}
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
                                          required={true}
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
                                          required={true}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default PreRegistrationForm;
