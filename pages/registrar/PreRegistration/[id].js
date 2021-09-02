import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import PreRegistrationForm from '../../../components/RegistrarPageComponent/PreRegistrationForm';

function SelectedPreReg(props) {
      const router = useRouter();
      const id = router.query.id;
      console.log(id);
      const [preRegData, setPreRegData] = useState([]);
      const getData = async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/registrar/preregs/${id}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = await response.data.prereg;
                  console.log(data);
                  setPreRegData(data);
            } catch (error) {
                  console.log(error);
            }
      };
      useEffect(() => {
            getData();
      }, []);
      return (
            <div>
                  <PreRegistrationForm data={preRegData} />
            </div>
      );
}

export default SelectedPreReg;
