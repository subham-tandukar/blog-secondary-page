import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div className="uk-container stories-wrapper">
      <div className="uk-grid uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s">
        {hits.map((curPost) => {
          const { title, authur, num_comments, url, objectID } = curPost;
          return (
            <div key={objectID}>
              <div className="stories uk-margin-medium-bottom uk-margin-top">
                <h5>{title}</h5>

                <p>
                  By {authur} | <span> {num_comments} </span> comments
                </p>

                <button className="uk-button">
                  <a href={url} target="_blank">
                    Read more
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
