import React from "react";
import { useState, useEffect } from "react";
import UserCard from "../Cards/UserCard";
import { useParams } from "react-router-dom";

const User = () => {
  const [repos, setRepos] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?&sort=updated`
      );
      const data = await res.json();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <section className="pt-20 pb-20">
      <h1 className="text-2xl font-bold">Viewing {user}'s repositories</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {repos.map((repo) => (
          <UserCard key={repo.id} {...repo} />
        ))}
      </div>
    </section>
  );
};

export default User;
