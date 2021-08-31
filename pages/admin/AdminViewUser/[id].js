import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
function SelectedUser(props) {
   const router = useRouter();
   //    const id = router.query.id;
   //    console.log(id);
   return (
      <div>
         <h1>Specific User</h1>
      </div>
   );
}

export const getStaticPaths = async () => {
   const response = await axios.get("http://localhost:4000/api/admin/users", {
      withCredentials: true,
   });
   const data = response.data;
   console.log(data);

   const paths = data.map((user) => {
      return {
         params: { id: user.id.toString() },
      };
   });
   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps = async (context) => {
   const id = context.params.id;
   const response = await axios.get(
      `http://localhost:4000/api/admin/users/${id}`,
      {
         withCredentials: true,
      }
   );
   const data = response.data;
   return {
      props: { data },
   };
};
export default SelectedUser;
