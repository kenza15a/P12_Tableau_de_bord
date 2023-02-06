import React from "react";
import Title from "../Title/Title";
import Widget from "../Widget/Widget";
import "./mainpage.css";
import calIcon from "../Widget/icons/calories-icon.png";
import protIcon from "../Widget/icons/protein-icon.png";
import glucIcon from "../Widget/icons/carbs-icon.png";
import lipidIcon from "../Widget/icons/fat-icon.png";

import Radarchartexp from "../RadarChart/Radarchartexp";
import Piechartexp from "../Piechartexp/Piechartexp";
import Linechartexp from "../Linechartexp/Linechartexp";
import Barchartexp from "../Barchartexp/Barchartexp";
function Mainpage() {
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

 
  return (
    <>
      <div className="main-container">
        <div className="page-title">
          <Title name="Tomas" />
        </div>
        <div className="page-content">
          <div className="charts">
            <Barchartexp data={data1} />
            <div className="charts-groupe">
              <Linechartexp />
              <Radarchartexp />
              <Piechartexp  />
            </div>
          </div>
          <div className="widgets">
            <Widget icon={calIcon} grammage="1,930kCal" unit="Calories" />
            <Widget icon={protIcon} grammage="155g" unit="Proteines" />
            <Widget icon={glucIcon} grammage="290g" unit="Glucides" />
            <Widget icon={lipidIcon} grammage="155g" unit="Proteines" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
