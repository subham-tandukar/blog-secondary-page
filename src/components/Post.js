import React from "react";
import RelatedPost from "./RelatedPost";
import PopularPost1 from "./PopularPost1";
import PopularPost2 from "./PopularPost2";
import Tags2 from "./Tags2";

export default function Post() {
  return (
    <>
      <div className="post uk-padding uk-padding-remove-bottom">
        <div className="uk-container uk-container-expand">
          <div className="uk-grid">
            <div className="uk-width-expand@l uk-overflow-hidden">
              <h3 className="related-post-heading">Related Posts</h3>
              <RelatedPost />
            </div>

            <div className="uk-width-1-3@l uk-overflow-hidden sidebar">
              <div id="popular-post1" className="uk-overflow-hidden">
                <h3 className="popular-post-heading">Popular Posts</h3>
                <PopularPost1 />
              </div>

              <div id="popular-post2" className="uk-overflow-hidden">
                <h3 className="popular-post-heading">Popular Posts</h3>
                <PopularPost2 />
              </div>

              <div id="tag" className="uk-overflow hidden">
                <h3 className="popular-tag-heading">Popular Tags</h3>
                <div className="popular-tag">
                  <Tags2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
