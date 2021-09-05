import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import StudentsListContainer from '../../../components/RegistrarPageComponent/StudentsListContainer';
function Students(props) {
      const [allStudents, setAllStudents] = useState([]);
      const getAllStudents = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/registrar/students',
                        { withCredentials: true }
                  );
                  setAllStudents(response.data.users);
                  console.log(response.data.users);
            } catch (error) {
                  console.log(error);
            }
      };
      useEffect(() => {
            getAllStudents();
      }, []);

      return (
            <div>
                  <StudentsListContainer data={allStudents} />
            </div>
      );
}

export default Students;
