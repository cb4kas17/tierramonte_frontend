import LoginPage from '../components/LoginPageComponent/LoginPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
const HomePage = (props) => {
    const [announcements, setAnnouncements] = useState([]);

    const getAnnouncements = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api`);
            setAnnouncements(response.data.anncs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAnnouncements();
    }, []);

    return (
        <>
            <LoginPage anncs={announcements} isLogin={props.isLogin} login={props.login} />
        </>
    );
};

export default HomePage;
