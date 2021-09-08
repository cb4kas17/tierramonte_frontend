import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import EditStudentContainer from '../../../components/RegistrarPageComponent/EditStudentContainer';

function EditStudent(props) {
      const router = useRouter();
      const id = router.query.id;
      console.log(id);
      const [userData, setUserData] = useState([]);
      const [userInfo, setUserInfo] = useState([]);

      const getData = async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/registrar/students/${id}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = await response.data.user;
                  const extraData = await response.data.userInfo;
                  console.log(data);
                  setUserData(data);
                  console.log(extraData);
                  setUserInfo(extraData);
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getData();
      }, []);

      return (
            <div>
                  <EditStudentContainer data={userData} userInfo={userInfo} />
            </div>
      );
}

export default EditStudent;
