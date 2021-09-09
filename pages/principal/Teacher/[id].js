import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import EditTeacherContainer from '../../../components/PrincipalPageComponent/EditTeacherContainer';

function EditTeacher() {
      const router = useRouter();
      const id = router.query.id;
      const [teacherData, setTeacherData] = useState([]);
      const getData = async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/principal/teachers/${id}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = await response.data.user;
                  console.log(data);
                  setTeacherData(data);
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getData();
      }, []);
      return (
            <div>
                  <EditTeacherContainer data={teacherData} />
            </div>
      );
}

export default EditTeacher;
