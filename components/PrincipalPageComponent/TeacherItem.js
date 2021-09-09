import React from 'react';
import styles from './teacherItem.module.css';
import Link from 'next/link';
function TeacherItem(props) {
      console.log(props.data);
      let role = '';
      if (props.data.role === 4) {
            role = 'Teacher';
      }
      return (
            <div>
                  <Link href={`/principal/Teacher/${props.data._id}`}>
                        <li className={styles.itemContainer}>
                              <a className={styles.userName}>
                                    {props.data.lastName},{' '}
                                    {props.data.firstName}{' '}
                                    {props.data.middleName}
                              </a>
                              <p className={styles.roleName}>{role}</p>
                        </li>
                  </Link>
            </div>
      );
}

export default TeacherItem;
