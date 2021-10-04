import LoginPage from '../components/LoginPageComponent/LoginPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
const HomePage = (props) => {
    const [announcements, setAnnouncements] = useState([]);

    const getAnnouncements = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/');
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

// export async function getStaticProps() {
//       let anncs = [];
//       const response = await axios.get('http://localhost:4000/api/');

//       anncs = response.data.anncs;

//       return { props: { anncs }, revalidate: 10 };
// }

export default HomePage;
