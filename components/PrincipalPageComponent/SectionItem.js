import React from 'react';
import styles from './sectionItem.module.css';
import Button from '../UI/Button';
import Link from 'next/link';
function SectionItem(props) {
      return (
            <div>
                  <li className={styles.itemContainer}>
                        <a className={styles.userName}>
                              {props.data.sectionName}
                        </a>
                        <div className={styles.roleName}>
                              <Button className={styles.editButtonx}>
                                    Edit Section
                              </Button>
                              <Button className={styles.editButtony}>
                                    Add Students
                              </Button>
                        </div>
                  </li>
            </div>
      );
}

export default SectionItem;
