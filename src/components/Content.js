import React from "react";
import Tags1 from "./Tags1";

export default function Content(props) {
  return (
    <div className="main-content uk-container uk-margin-top uk-margin-bottom">
      <div className="uk-grid">
        <div className="uk-width-1-2@s content1 uk-padding">
          <h1>{props.title}</h1>
          <div className="uk-flex uk-flex-between date">
            <div>
              <p>
                <span
                  uk-icon="icon: calendar"
                  className="uk-margin-small-right"
                ></span>
                {props.createdDate}
              </p>
            </div>

            <div>
              <p>
                post-view
                <i className="lni lni-eye uk-margin-small-left"></i>
              </p>
            </div>
          </div>

          <h3 className="uk-margin-remove">{props.categoryName}</h3>
          <p className="post-txt">{props.post}</p>

          <div className="user-info uk-flex uk-flex-middle">
            <div className="user-img uk-margin-small-right">
              <img src="images/userImg.jpg" alt="user image" />
            </div>

            <div className="user-name">
              <span>{props.userName}</span>
            </div>
          </div>
        </div>

        <div className="uk-width-1-2@s content2 uk-padding uk-margin-small-top">
            <Tags1/>
          <form className="tags uk-margin-bottom">
            <div className="comment uk-margin-medium-top">
              <label htmlFor="comment">Facebook Comment</label>
              <input
                type="text"
                className="uk-input"
                placeholder="Type here..."
              />
            </div>

            <div className="share uk-margin-medium-top">
              <i className="lni lni-share uk-margin-small-right"></i>
              <span>Share over social media</span>
              <i className="lni lni-facebook-oval uk-margin-small-left"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Content.defaultProps={
  title:"Title",
  createdDate:"created_date",
  categoryName:"Category name",
  post:"post",
  userName:"User Full name",
}
