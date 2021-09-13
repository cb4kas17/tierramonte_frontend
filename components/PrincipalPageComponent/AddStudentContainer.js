import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SideNavBar from '../Layout/SideNavBar';
import styles from './addStudentContainer.module.css';
import AddStudent from './AddStudent';

function AddStudentContainer() {
      const router = useRouter();
      const id = router.query.id;
      const [sectionInfo, setSectionInfo] = useState([]);
      const [studentArray, setStudentArray] = useState([]);

      useEffect(async () => {
            try {
                  const response = await axios.get(`http://localhost:4000/api/principal/sections/${id}`, {
                        withCredentials: true,
                  });
                  const data = response.data.section;
                  setSectionInfo(data);
                  setStudentArray(data.studentNames);
                  console.log(data);
                  console.log(data.studentNames);
            } catch (error) {
                  console.log(error);
            }
      }, []);
      const navBarItems = [
            { id: 1, title: 'Profile', push: '/principal' },
            {
                  id: 2,
                  title: 'Announcement',
                  push: '/principal/Announcement',
            },
            { id: 3, title: 'Sections', push: '/principal/Section' },
            { id: 4, title: 'Teachers', push: '/principal/Teacher' },
      ];
      return (
            <div>
                  <div className={styles.addStudentContainer}>
                        <SideNavBar className={styles.navbarContainer} items={navBarItems} />
                        <AddStudent className={styles.createSection} data={sectionInfo} stud={studentArray} />
                  </div>
            </div>
      );
}

export default AddStudentContainer;
