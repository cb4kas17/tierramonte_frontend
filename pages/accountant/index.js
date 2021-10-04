import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfilePageContainer from '../../components/AccountantPageComponent/ProfilePageContainer';

function AccountantPage() {
    const [profile, setProfile] = useState([]);
    const getProfile = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/accountant', {
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

export default AccountantPage;
