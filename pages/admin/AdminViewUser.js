import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AdminPageContainer from '../../components/AdminPageComponent/AdminPageContainer';

function AdminViewUser(props) {
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
      useEffect(() => {
        getAllUsers();
        
  },[]);
    return (
        <div>
            <AdminPageContainer data={allUsers} />
        </div>
    )
}

export default AdminViewUser
