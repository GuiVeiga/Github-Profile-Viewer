import React from "react";
import { useNavigate } from "react-router";

export default function UserListCard(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/users/${props.login}`);
  }
  return (
    <>
      <article
        className="p-5 bg-white rounded-lg shadow shadow-gray-300 hover:bg-gray-200"
        // onClick={handleClick}
      >
        <img
          onClick={handleClick}
          src={props.avatar_url}
          alt={props.login}
          className="w-20 h-20 rounded-full shadow cursor-pointer"
        />
        <div>
          <h2 className="text-lg font-bold capitalize">
            User Login: {props.login}
          </h2>
          <h2>Id: {props.id}</h2>

          <a
            href={props.html_url}
            tarded="_blank"
            rel="noreferrer"
            className="underline"
          >
            Check Profile URL
          </a>
        </div>
      </article>
    </>
  );
}
