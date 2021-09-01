import React, { useState } from "react";
import SideNavBar from "../Layout/SideNavBar";

import { useRouter } from "next/router";

import styles from "./createUserContainer.module.css";

import CreateUser from "./CreateUser";

function CreateUserContainer() {
   const focus = "second";
   const navBarItems = [
      { id: 1, title: "Profile", push: "/admin" },
      { id: 2, title: "Create", push: "/admin/AdminCreateUser" },
      { id: 3, title: "List of users", push: `/admin/AdminViewUser` },
   ];
   return (
      <div className={styles.createUserContainer}>
         <SideNavBar
            className={styles.navbarContainer}
            items={navBarItems}
            highlighted={focus}
         />
         <CreateUser className={styles.createUser} />
      </div>
   );
}

export default CreateUserContainer;
