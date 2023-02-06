import React, { useState } from "react";
import "./title.css";
import PropTypes from "prop-types";
import { User_Main_Data } from "../../models/userMainData";

function Title({ name }) {
  /*const userInfos={
    firstName: 'Karl',
    lastName: 'Dovineau',
    age: 31,
}
const keyData={
  calorieCount: 1930,
  proteinCount: 155,
  carbohydrateCount: 290,
  lipidCount: 50
}
  const userInfo=new User_Main_Data(12,  userInfos, 0.12,keyData)
  const [titleInfos,setTitleInfos]=useState(userInfo);*/
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
Title.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Title;
