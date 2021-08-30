import React from "react";
import styles from "./createUser.module.css";
function CreateUser() {
  return (
    <div className={styles.containter}>
      <h1 className={styles.header}>Create User</h1>
      <div className={styles.formContainer}>
        <div className={styles.formFields}>
          <div className={styles.labelContainer}>
            <label htmlFor="fname" className={styles.label}>
              First Name
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" id="fname" className={styles.input} />
          </div>
        </div>
        <div className={styles.formFields}>
          <div className={styles.labelContainer}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input type="email" id="email" className={styles.input} />
          </div>
        </div>
        <div className={styles.formFields}>
          <div className={styles.labelContainer}>
            <label htmlFor="lname" className={styles.label}>
              Last Name
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" id="lname" className={styles.input} />
          </div>
        </div>
        <div className={styles.formFields}>
          <div className={styles.labelContainer}>
            <label htmlFor="number" className={styles.label}>
              Phone Number
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input type="number" id="number" className={styles.input} />
          </div>
        </div>
        <div className={styles.formFields}>
          <div className={styles.labelContainer}>
            <label htmlFor="mname" className={styles.label}>
              Middle Name
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" id="mname" className={styles.input} />
          </div>
        </div>
        <div className={styles.formFields}>
          <div className={styles.labelContainer}>
            <label htmlFor="role" className={styles.label}>
              Role
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" id="role" className={styles.input} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
