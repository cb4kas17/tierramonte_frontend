import React, { useState, useEffect } from 'react';
import ProfilePageContainer from '../../components/StudentPageComponent/ProfilePageContainer';
import axios from 'axios';
function StudentPage() {
      const [profile, setProfile] = useState([]);
      const getProfile = async () => {
            try {
                  const response = await axios.get('http://localhost:4000/api/student', {
                        withCredentials: true,
                  });
                  setProfile(response.data.user);
                  console.log(response.data.user);
            } catch (error) {
                  console.log(error);
            }
      };
      useEffect(() => {
            getProfile();
      }, []);
      return (
            <div>
                  <ProfilePageContainer data={profile} />
            </div>
      );
}

export default StudentPage;
