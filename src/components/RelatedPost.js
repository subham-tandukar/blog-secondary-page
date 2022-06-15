import React from "react";
import relatedPostAPI from "./RelatedPostAPI";

export default function RelatedPost() {
  return (
    <>
      <section
        className="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s"
        uk-scrollspy="cls: uk-animation-slide-bottom; target: .related-post-content; delay: 300; repeat: false"
      >
        {relatedPostAPI.map((props) => {
          const {
            id,
            image,
            date,
            category,
            description,
            userImg,
            userName,
            title,
          } = props;

          return (
            <div key={id}>
              <div className="related-post-content uk-margin-medium-bottom uk-margin-top">
                <div className="related-post-img">
                  <img src={image} alt="related post image" />
                </div>
                <div className="related-post-body">
                  <p>
                    <span
                      uk-icon="calendar"
                      className="uk-margin-small-right"
                    ></span>
                    {date}
                  </p>
                  <h4>{category}</h4>
                  <p>{description}</p>
                </div>
                <div className="related-post-footer">
                  <div className="user-img">
                    <img src={userImg} alt="user image" />
                  </div>
                  <p>{userName}</p>
                </div>
                <div className="title-badge">
                  <p>{title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
