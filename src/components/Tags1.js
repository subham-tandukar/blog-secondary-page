import React from "react";
import tags from "./TagsAPI";

export default function Tags1() {
  return (
    <form className="uk-grid uk-child-width-1-2">
      {tags.map((props) => {
        const { id, tagId1, tagLabel1, name } = props;

        return (
          <div className="uk-margin-medium-bottom tags " key={id}>
            <input type="radio" name="option" id={tagId1} />
            <label htmlFor={tagLabel1}>
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
