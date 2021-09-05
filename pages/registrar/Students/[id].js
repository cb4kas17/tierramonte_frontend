import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import StudentProfilePageContainer from '../../../components/RegistrarPageComponent/StudentProfilePageContainer';
function SelectedUser(props) {
      const router = useRouter();
      const id = router.query.id;
      console.log(id);

      const [userData, setUserData] = useState([]);

      const getData = async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/registrar/students/${id}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = await response.data.user;
                  console.log(data);
                  setUserData(data);
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getData();
      }, []);

      return (
            <div>
                  <StudentProfilePageContainer data={userData} />
            </div>
      );
}

export default SelectedUser;
