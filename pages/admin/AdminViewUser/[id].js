import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserProfilePageContainer from '../../../components/AdminPageComponent/UserProfilePageContainer';
function SelectedUser(props) {
    const router = useRouter();
    const id = router.query.id;
    console.log(id);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:4000/api/admin/users/${id}`, {
                    withCredentials: true,
                });
                const data = await response.data.user;
                console.log(data);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div>
            <UserProfilePageContainer data={userData} />
        </div>
    );
}

// export const getStaticPaths = async () => {
//    const response = await axios.get("http://localhost:4000/api/admin/users", {
//       withCredentials: true,
//    });
//    const data = response.data;
//    console.log(data);

//    const paths = data.map((user) => {
//       return {
//          params: { id: user.id.toString() },
//       };
//    });
//    return {
//       paths,
//       fallback: false,
//    };
// };

// export const getStaticProps = async (context) => {
//    const id = context.params.id;
//    const response = await axios.get(
//       `http://localhost:4000/api/admin/users/${id}`,
//       {
//          withCredentials: true,
//       }
//    );
//    const data = response.data;
//    return {
//       props: { data },
//    };
// };
export default SelectedUser;
