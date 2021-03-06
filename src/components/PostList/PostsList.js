import React from "react";
import { Link } from "react-router-dom";
import "./PostList.css";

export const PostsList = ({ data }) => {
  return (
    <table className="post__table">
      <thead>
        <tr className="post__table-row">
          <th>№</th>
          <th>Назва посади</th>
          <th>Посадовий оклад</th>
          <th>Редагувати</th>
          <th>Видалити</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => {
          return (
            <tr className="post__table-row" key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.text}</td>
              <td>
                <Link to={`/${item.id}`} className="post__table-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M14.7674 10.0511C14.5473 10.0511 14.3689 10.2295 14.3689 10.4496V13.9877C14.3681 14.6477 13.8334 15.1825 13.1734 15.1831H1.99241C1.33243 15.1825 0.797744 14.6477 0.796966 13.9877V3.60362C0.797744 2.94379 1.33243 2.40895 1.99241 2.40817H5.53051C5.75061 2.40817 5.92899 2.22979 5.92899 2.00969C5.92899 1.78974 5.75061 1.61121 5.53051 1.61121H1.99241C0.892539 1.61245 0.00124526 2.50374 0 3.60362V13.9878C0.00124526 15.0877 0.892539 15.979 1.99241 15.9802H13.1734C14.2733 15.979 15.1646 15.0877 15.1659 13.9878V10.4496C15.1659 10.2295 14.9875 10.0511 14.7674 10.0511Z"
                        fill="#313131"
                      />
                      <path
                        d="M15.008 0.585896C14.3077 -0.114407 13.1724 -0.114407 12.4721 0.585896L5.36287 7.69508C5.31415 7.7438 5.27897 7.80419 5.26061 7.8705L4.32573 11.2456C4.28728 11.384 4.32635 11.5322 4.42784 11.6338C4.52948 11.7353 4.67767 11.7744 4.81605 11.7361L8.19117 10.8011C8.25748 10.7827 8.31787 10.7475 8.3666 10.6988L15.4756 3.58946C16.1748 2.88869 16.1748 1.75426 15.4756 1.05349L15.008 0.585896ZM6.23113 7.95409L12.0495 2.13562L13.9259 4.01207L8.10743 9.83054L6.23113 7.95409ZM5.85631 8.70623L7.35545 10.2055L5.28178 10.7801L5.85631 8.70623ZM14.9121 3.02598L14.4895 3.44859L12.6129 1.57199L13.0357 1.14938C13.4247 0.760388 14.0554 0.760388 14.4444 1.14938L14.9121 1.61697C15.3005 2.00643 15.3005 2.63668 14.9121 3.02598Z"
                        fill="#313131"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </td>
              <td>
                <div className="post__table-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4599 2.30263H11.8556V1.75987C11.8556 0.789474 11.0008 0 9.95015 0H6.52391C5.47324 0 4.61846 0.789474 4.61846 1.75987V2.30263H1.01414C0.74702 2.30263 0.533325 2.5 0.533325 2.74671C0.533325 2.99342 0.74702 3.19079 1.01414 3.19079H1.88317V13.625C1.88317 14.9342 3.03712 16 4.45463 16H12.0194C13.4369 16 14.5909 14.9342 14.5909 13.625V3.19079H15.4599C15.727 3.19079 15.9407 2.99342 15.9407 2.74671C15.9407 2.5 15.727 2.30263 15.4599 2.30263ZM5.58009 1.75987C5.58009 1.27961 6.00392 0.888158 6.52391 0.888158H9.95015C10.4701 0.888158 10.894 1.27961 10.894 1.75987V2.30263H5.58009V1.75987ZM13.6293 13.625C13.6293 14.4441 12.9063 15.1118 12.0194 15.1118H4.45463C3.56779 15.1118 2.84479 14.4441 2.84479 13.625V3.19079H13.6328V13.625H13.6293Z"
                      fill="#313131"
                    />
                    <path
                      d="M8.23701 13.5197C8.50413 13.5197 8.71782 13.3224 8.71782 13.0757V5.22698C8.71782 4.98027 8.50413 4.7829 8.23701 4.7829C7.96989 4.7829 7.7562 4.98027 7.7562 5.22698V13.0724C7.7562 13.3191 7.96989 13.5197 8.23701 13.5197Z"
                      fill="#313131"
                    />
                    <path
                      d="M5.09928 13.0296C5.3664 13.0296 5.5801 12.8322 5.5801 12.5855V5.71382C5.5801 5.46711 5.3664 5.26974 5.09928 5.26974C4.83216 5.26974 4.61847 5.46711 4.61847 5.71382V12.5855C4.61847 12.8322 4.83573 13.0296 5.09928 13.0296Z"
                      fill="#313131"
                    />
                    <path
                      d="M11.3748 13.0296C11.6419 13.0296 11.8556 12.8322 11.8556 12.5855V5.71382C11.8556 5.46711 11.6419 5.26974 11.3748 5.26974C11.1077 5.26974 10.894 5.46711 10.894 5.71382V12.5855C10.894 12.8322 11.1077 13.0296 11.3748 13.0296Z"
                      fill="#313131"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
