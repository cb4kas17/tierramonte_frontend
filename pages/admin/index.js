import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AdminPageContainer from '../../components/AdminPageComponent/AdminPageContainer';
function AdminPage(props) {
      const [allUsers, setAllUsers] = useState([]);
      const [profile, setProfile] = useState([]);
    
      const getAllUsers = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/admin/users',
                        { withCredentials: true }
                  );
                  setAllUsers(response.data.users);
                  
            } catch (error) {
                  console.log(error);
            }
      };
       
      const getProfile = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/admin',
                        { withCredentials: true }
                  );
                  setProfile(response.data.user);
                 
            } catch (error) {
                  console.log(error);
            }
      };

    

      useEffect(() => {
            getAllUsers();
            getProfile();
      },[]);
      return (
            <div>
                  <AdminPageContainer data={allUsers} />
            </div>
      );
}

export default AdminPage;
