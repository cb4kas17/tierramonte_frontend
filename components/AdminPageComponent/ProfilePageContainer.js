import styles from "./profilePageContainer.module.css";
import React, { useState } from "react";
import SideNavBar from "../Layout/SideNavBar";

import { useRouter } from "next/router";
import ProfilePage from "./ProfilePage";

function ProfilePageContainer(props) {
  const focus = "first";
  const navBarItems = [
    { id: 1, title: "Profile", push: "/admin" },
    { id: 2, title: "Create", push: "/admin/AdminCreateUser" },
    { id: 3, title: "List of users", push: `/admin/AdminViewUser` },
  ];
  let convertedRole = "";
  if (props.data.role === 0) {
    convertedRole = "Admin";
  }
  return (
    <div className={styles.profilePageContainer}>
      <SideNavBar
        className={styles.navbarContainer}
        items={navBarItems}
        highlighted={focus}
      />
      <ProfilePage
        fname={props.data.firstName}
        mname={props.data.middleName}
        lname={props.data.lastName}
        email={props.data.email}
        number={props.data.phoneNum}
        role={convertedRole}
      />
    </div>
  );
}

export default ProfilePageContainer;
