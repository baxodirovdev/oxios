import React from "react";
import { Link } from "react-router-dom";
import "./SetPost.css";
export const SetPost = () => {
  return (
    <div className="setPost">
      <Link to="/" className="cancel__btn">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41501L12.585 0L6.99998 5.58501L1.41501 0L0 1.41501L5.58501 6.99998L0 12.585L1.41501 14L6.99998 8.41499L12.585 14L14 12.585L8.41499 6.99998L14 1.41501Z"
            fill="#828282"
          />
        </svg>
      </Link>

      <form className="post__form">
        <div className="row">
          <label htmlFor="postName" className="post__label">
            Назва посади
            <input
              type="text"
              id="postName"
              className="post__input input-large"
            />
          </label>

          <input type="text" className="post__input input-medium" />
        </div>
        <div className="row">
          <label htmlFor="postText" className="post__label">
            Посадовий оклад
            <input
              type="text"
              id="postText"
              className="post__input input-large"
              placeholder="Виберіть зі списку"
            />
          </label>

          <label htmlFor="postText_2" className="post__label">
            (відсоток від мінімальної ЗП) або (фіксована сума)
            <input
              type="text"
              id="postText_2"
              className="post__input input-small"
            />
          </label>
        </div>

        <h4 className="post__subTitle">
          Посадові обов’язки - буде відображено в трудовому договорі
        </h4>
        <div className="post__workList">
          <div className="post__work">
            <div className="post__work-number">п.1</div>
            <p className="post__work-text">
              За угодою між працівником і власником або уповноваженим ним
              органом може встановлюватись як при прийнятті на роботу, так і
              згодом неповний робочий день або неповний робочий тиждень. На
              просьбу вагітної жінки, жінки, яка має дитину віком до
              чотирнадцяти років або дитину з інвалідністю, в тому числі таку,
              що знаходиться під її опікуванням, або здійснює догляд за хворим
              членом сім'ї відповідно до медичного висновку, власник або
              уповноважений ним орган зобов'язаний встановлювати їй неповний
              робочий день або неповний робочий тиждень.
            </p>
            <button type="button" className="post__work-delete">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9266 2.30263H11.3223V1.75987C11.3223 0.789474 10.4675 0 9.41682 0H5.99058C4.93992 0 4.08514 0.789474 4.08514 1.75987V2.30263H0.480814C0.213695 2.30263 0 2.5 0 2.74671C0 2.99342 0.213695 3.19079 0.480814 3.19079H1.34984V13.625C1.34984 14.9342 2.50379 16 3.9213 16H11.4861C12.9036 16 14.0576 14.9342 14.0576 13.625V3.19079H14.9266C15.1937 3.19079 15.4074 2.99342 15.4074 2.74671C15.4074 2.5 15.1937 2.30263 14.9266 2.30263ZM5.04676 1.75987C5.04676 1.27961 5.47059 0.888158 5.99058 0.888158H9.41682C9.93682 0.888158 10.3606 1.27961 10.3606 1.75987V2.30263H5.04676V1.75987ZM13.0959 13.625C13.0959 14.4441 12.3729 15.1118 11.4861 15.1118H3.9213C3.03447 15.1118 2.31147 14.4441 2.31147 13.625V3.19079H13.0995V13.625H13.0959Z"
                  fill="#313131"
                />
                <path
                  d="M7.70371 13.5197C7.97083 13.5197 8.18453 13.3224 8.18453 13.0757V5.22698C8.18453 4.98027 7.97083 4.7829 7.70371 4.7829C7.4366 4.7829 7.2229 4.98027 7.2229 5.22698V13.0724C7.2229 13.3191 7.4366 13.5197 7.70371 13.5197Z"
                  fill="#313131"
                />
                <path
                  d="M4.56596 13.0296C4.83308 13.0296 5.04677 12.8322 5.04677 12.5855V5.71382C5.04677 5.46711 4.83308 5.26974 4.56596 5.26974C4.29884 5.26974 4.08514 5.46711 4.08514 5.71382V12.5855C4.08514 12.8322 4.3024 13.0296 4.56596 13.0296Z"
                  fill="#313131"
                />
                <path
                  d="M10.8415 13.0296C11.1086 13.0296 11.3223 12.8322 11.3223 12.5855V5.71382C11.3223 5.46711 11.1086 5.26974 10.8415 5.26974C10.5744 5.26974 10.3607 5.46711 10.3607 5.71382V12.5855C10.3607 12.8322 10.5744 13.0296 10.8415 13.0296Z"
                  fill="#313131"
                />
              </svg>
            </button>
          </div>

          <div className="post__work">
            <div className="post__work-number">п.2</div>
            <p className="post__work-text">
              Робота на умовах неповного робочого часу не тягне за собою
              будь-яких обмежень обсягу трудових прав працівників.
            </p>
            <button type="button" className="post__work-delete">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9266 2.30263H11.3223V1.75987C11.3223 0.789474 10.4675 0 9.41682 0H5.99058C4.93992 0 4.08514 0.789474 4.08514 1.75987V2.30263H0.480814C0.213695 2.30263 0 2.5 0 2.74671C0 2.99342 0.213695 3.19079 0.480814 3.19079H1.34984V13.625C1.34984 14.9342 2.50379 16 3.9213 16H11.4861C12.9036 16 14.0576 14.9342 14.0576 13.625V3.19079H14.9266C15.1937 3.19079 15.4074 2.99342 15.4074 2.74671C15.4074 2.5 15.1937 2.30263 14.9266 2.30263ZM5.04676 1.75987C5.04676 1.27961 5.47059 0.888158 5.99058 0.888158H9.41682C9.93682 0.888158 10.3606 1.27961 10.3606 1.75987V2.30263H5.04676V1.75987ZM13.0959 13.625C13.0959 14.4441 12.3729 15.1118 11.4861 15.1118H3.9213C3.03447 15.1118 2.31147 14.4441 2.31147 13.625V3.19079H13.0995V13.625H13.0959Z"
                  fill="#313131"
                />
                <path
                  d="M7.70371 13.5197C7.97083 13.5197 8.18453 13.3224 8.18453 13.0757V5.22698C8.18453 4.98027 7.97083 4.7829 7.70371 4.7829C7.4366 4.7829 7.2229 4.98027 7.2229 5.22698V13.0724C7.2229 13.3191 7.4366 13.5197 7.70371 13.5197Z"
                  fill="#313131"
                />
                <path
                  d="M4.56596 13.0296C4.83308 13.0296 5.04677 12.8322 5.04677 12.5855V5.71382C5.04677 5.46711 4.83308 5.26974 4.56596 5.26974C4.29884 5.26974 4.08514 5.46711 4.08514 5.71382V12.5855C4.08514 12.8322 4.3024 13.0296 4.56596 13.0296Z"
                  fill="#313131"
                />
                <path
                  d="M10.8415 13.0296C11.1086 13.0296 11.3223 12.8322 11.3223 12.5855V5.71382C11.3223 5.46711 11.1086 5.26974 10.8415 5.26974C10.5744 5.26974 10.3607 5.46711 10.3607 5.71382V12.5855C10.3607 12.8322 10.5744 13.0296 10.8415 13.0296Z"
                  fill="#313131"
                />
              </svg>
            </button>
          </div>
        </div>

        <button type="button" className="add__btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="7" width="2" height="16" rx="1" fill="#4F4F4F" />
            <rect y="7" width="16" height="2" rx="1" fill="#4F4F4F" />
          </svg>
        </button>

        <button type="button" className="formSubmit__btn">
          Зберегти
        </button>
      </form>
    </div>
  );
};