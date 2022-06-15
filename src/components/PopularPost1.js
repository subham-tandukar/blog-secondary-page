import React from "react";
import popularPost1 from "./PopularPost1API";

export default function PopularPost1() {
  return (
    <div
      id="popular-post1-content"
      uk-scrollspy="cls: uk-animation-slide-right; target: .popular-post1; delay: 300; repeat: false"
    >
      {popularPost1.map((props) => {
        const { id, image, date, category, userImg, userName, title } = props;

        return (
          <div
            className="popular-post1 uk-margin-medium-top uk-margin-medium-bottom"
            key={id}
          >
            <div className="uk-grid uk-child-width-1-2">
              <div className="popular-post1-img">
                <img src={image} alt="popular post image" />

                <div className="popular-post1-title">
                  <p>{title}</p>
                </div>
              </div>

              <div className="popular-post1-content">
                <div className="popular-post1-body">
                  <p>
                    <span
                      uk-icon="calendar"
                      className="uk-margin-small-right"
                    ></span>
                    {date}
                  </p>
                  <h5>{category}</h5>
                </div>

                <div className="popular-post1-footer">
                  <div className="user-img">
                    <img src={userImg} alt="user image" />
                  </div>
                  <p>{userName}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
