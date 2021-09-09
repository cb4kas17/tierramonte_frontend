import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherPageContainer from '../../../components/PrincipalPageComponent/TeacherPageContainer';
function TeacherPage(props) {
      const [teachers, setTeachers] = useState([]);
      const getTeachers = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/principal/teachers',
                        { withCredentials: true }
                  );
                  setTeachers(response.data.users);
            } catch (error) {
                  console.log(error);
            }
      };
      useEffect(() => {
            getTeachers();
      }, []);
      return (
            <div>
                  <TeacherPageContainer data={teachers} />
            </div>
      );
}

export default TeacherPage;
