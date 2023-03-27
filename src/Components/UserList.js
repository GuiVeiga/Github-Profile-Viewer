import React from "react";
import { useState, useEffect } from "react";
import UserListCard from "../Cards/UserListCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://api.github.com/users`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <section className="pt-20 pb-20">
        <h1 className="text-2xl font-bold">Viewing Github Users</h1>
        <h1 className="text-1xl">
          Click on the User's Avatars to view their repositories!
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {users.map((user) => (
            <UserListCard key={users.id} {...user} />
          ))}
        </div>
      </section>
    </>
  );
};

export default UserList;
