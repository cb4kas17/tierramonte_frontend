import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnnouncementPageContainer from '../../../components/PrincipalPageComponent/AnnouncementPageContainer';

function AnnouncementPage(props) {
      const [announcements, setAnnouncements] = useState([]);

      const getAnnouncements = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/principal/annc',
                        { withCredentials: true }
                  );
                  setAnnouncements(response.data.anncs);
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getAnnouncements();
      }, []);
      return (
            <div>
                  <AnnouncementPageContainer anncs={announcements} />
            </div>
      );
}

export default AnnouncementPage;
