import React from 'react';
import styles from './sectionItem.module.css';
import { useRouter } from 'next/router';
import Button from '../UI/Button';
function SectionItem(props) {
      const router = useRouter();
      return (
            <li className={styles.itemContainer}>
                  <div className={styles.userName}>{props.data.sectionName}</div>
                  <div className={styles.userName}>{props.data.yearLevel}</div>
                  <div className={styles.userName}>
                        {props.data.subjects.map((item, i) => (
                              <p>{item}</p>
                        ))}
                  </div>
                  <Button
                        className={styles.encodeButton}
                        onClick={() => {
                              router.push(`/teacher/Sections/${props.data._id}}`);
                        }}
                  >
                        Encode Grade
                  </Button>
            </li>
      );
}

export default SectionItem;
