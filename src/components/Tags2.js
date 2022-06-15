import React from "react";
import tags from "./TagsAPI";

export default function Tags2() {
  return (
    <form
      className="uk-grid uk-child-width-1-2@m"
      uk-scrollspy="cls: uk-animation-slide-right; target: .tags; delay: 300; repeat: false"
    >
      {tags.map((props) => {
        const { id, tagId2, tagLabel2, name } = props;

        return (
          <div className="uk-margin-medium-bottom tags " key={id}>
            <input type="radio" name="option" id={tagId2} />
            <label htmlFor={tagLabel2}>
              <span>
                <i className="lni lni-tag uk-margin-small-right"></i>
                {name}
              </span>
            </label>
          </div>
        );
      })}
    </form>
  );
}
