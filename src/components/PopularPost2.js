import React from "react";
import popularPost2 from "./PopularPost2API";

export default function PopularPost2() {
  return (
    <div
      id="popular-post2-content"
      uk-scrollspy="cls: uk-animation-slide-right; target: .popular-post2; delay: 300; repeat: false"
    >
      {popularPost2.map((props) => {
        const { id, image, category } = props;
        return (
          <div className="popular-post2 uk-margin-medium-top uk-margin-medium-bottom" key={id}>
            <div className="uk-grid uk-child-width-1-2">
              <div className="popular-post2-img">
                <img src={image} alt="popular post image" />
              </div>
              <div className="popular-post2-body">
                <h4>{category}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
