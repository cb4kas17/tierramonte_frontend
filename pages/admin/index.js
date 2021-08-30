import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProfilePageContainer from '../../components/AdminPageComponent/ProfilePageContainer'
function AdminPage(props) {
     
      const [profile, setProfile] = useState([]);
    
   
       
      const getProfile = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/admin',
                        { withCredentials: true }
                  );
                  setProfile(response.data.user);
                  console.log(response.data.user)
                 
            } catch (error) {
                  console.log(error);
            }
      };

    

      useEffect(() => {
            getProfile();
      },[]);
      return (
            <div>
                  <ProfilePageContainer data={profile} />
            </div>
      );
}

export default AdminPage;
