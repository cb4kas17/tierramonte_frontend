import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import EditAnnouncementContainer from '../../../components/PrincipalPageComponent/EditAnnouncementContainer';
function EditAnnouncement(props) {
      const router = useRouter();
      const id = router.query.id;
      const [anncData, setAnncData] = useState([]);
      const getData = async () => {
            try {
                  const response = await axios.get(
                        `http://localhost:4000/api/principal/annc/${id}`,
                        {
                              withCredentials: true,
                        }
                  );
                  const data = await response.data.annc;
                  console.log(data);
                  setAnncData(data);
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getData();
      }, []);
      return (
            <div>
                  <EditAnnouncementContainer data={anncData} />
            </div>
      );
}

export default EditAnnouncement;
