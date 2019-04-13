import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45pm"
        comment="Nice post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:00AM"
        comment="Very cool"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Mike"
        timeAgo="Yesterday at 5;55pm"
        comment="WOOOOOOOOOOOOOO"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
