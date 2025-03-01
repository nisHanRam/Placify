import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Nishant",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
