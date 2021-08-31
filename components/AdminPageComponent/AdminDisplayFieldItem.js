import React from "react";
import styles from "./adminDisplayFieldItem.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
function AdminDisplayFieldItem(props) {
   return (
      <Link href={`/admin/AdminViewUser/${props.id}`}>
         <li className={styles.itemContainer}>
            <a>
               {props.lname}, {props.fname} {props.mname}
            </a>
            <p>{props.role}</p>
         </li>
      </Link>
   );
}

export default AdminDisplayFieldItem;
