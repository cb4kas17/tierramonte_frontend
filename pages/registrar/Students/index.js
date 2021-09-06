import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import StudentsListContainer from '../../../components/RegistrarPageComponent/StudentsListContainer';
function Students(props) {
      const [allStudents, setAllStudents] = useState([]);
      const [searchValue, setSearchValue] = useState('');

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

      const search = (data) => {
            setSearchValue(data);
      };
      const filter = (list) => {
            return list.filter(
                  (data) =>
                        data.lastName.toLowerCase().indexOf(searchValue) > -1
            );
      };
      return (
            <div>
                  <StudentsListContainer
                        data={filter(allStudents)}
                        searchValueProps={search}
                  />
            </div>
      );
}

export default Students;
