import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import { PostsList } from "../PostList/PostsList";

export const Post = () => {
  const data = [
    {
      name: "Адміністратор",
      text: "120% мінімальної ЗП - 6500,00",
      id: 1,
    },
    {
      name: "Касир",
      text: "110% мінімальної ЗП - 6200,00",
      id: 2,
    },
    {
      name: "менеджер",
      text: "115% мінімальної ЗП",
      id: 3,
    },
  ];
  return (
    <div className="post">
      <h3 className="post__title">Редактор посад</h3>
      <div className="post__content">
        <Link to="/newPost" className="post__create-btn">
          + Створити посаду
        </Link>
        <PostsList data={data} />
      </div>
    </div>
  );
};
