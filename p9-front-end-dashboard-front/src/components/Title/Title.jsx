import React from "react";
import "./title.css";
function Title({ name }) {
  return (
    <div className="header">
      <h1 className="title">
        Bonjour <span className="red-title"> {name}</span>
      </h1>
      <h3 className="sub-title">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h3>
    </div>
  );
}

export default Title;
