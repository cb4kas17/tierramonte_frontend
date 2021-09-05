import React from "react";
import styles from "./studentsList.module.css";

import StudentsListItem from "./StudentsListItem";

function StudentsList(props) {
   return (
      <div className={styles.container}>
         <div className={styles.headerContainer}>
            <h1 className={styles.header}>Students</h1>
            <input
               className={styles.input}
               type="search"
               name="searchbar"
               id="searchbar"
               placeholder="Search lastname"
            />
         </div>
         <div className={styles.columnName}>Students</div>
         <ul className={styles.listContainer}>
            <h4 className={styles.name}>Name</h4>
            {props.data.map((item) => (
               <StudentsListItem key={item._id} data={item} />
            ))}
         </ul>
      </div>
   );
}

export default StudentsList;
