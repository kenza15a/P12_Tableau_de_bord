import React from "react";
import Title from "../Title/Title";
import Widget from "../Widget/Widget";
import "./mainpage.css";
import calIcon from "../Widget/icons/calories-icon.png";
import protIcon from "../Widget/icons/protein-icon.png";
import glucIcon from "../Widget/icons/carbs-icon.png";
import lipidIcon from "../Widget/icons/fat-icon.png";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
function Mainpage() {
  // Sample chart data
  const data1 = [
    { day: "L", duration: 70 },
    { day: "M", duration: 50 },
    { day: "M", duration: 60 },
    { day: "J", duration: 40 },
    { day: "V", duration: 80 },
    { day: "S", duration: 30 },
    { day: "D", duration: 110 },
  ];
  const data = [
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
            <BarChart width={700} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="pv" fill="#black" />
              <Bar dataKey="uv" fill="#E60000" />
            </BarChart>

            <div className="charts-groupe">
              <LineChart
                className="redchart"
                width={200}
                height={200}
                data={data1}
              >
                <Line
                  type="monotone"
                  dataKey="duration"
                  stroke="white"
                  strokeWidth={2}
                />
                <XAxis
                  tick={{ fontFamily: "sans-serif" }}
                  dataKey="day"
                  strokeOpacity={0}
                ></XAxis>
                <Tooltip />
              </LineChart>
              <LineChart
                className="redchart"
                width={200}
                height={200}
                data={data1}
              >
                <Line
                  type="monotone"
                  dataKey="duration"
                  stroke="white"
                  strokeWidth={2}
                />
                <XAxis
                  dataKey="day"
                  strokeOpacity={0}
                  margin={{ right: 30, left: 20 }}
                ></XAxis>
                <Tooltip />
              </LineChart>
              <LineChart
                className="redchart"
                width={200}
                height={200}
                data={data1}
              >
                <Line
                  type="monotone"
                  dataKey="duration"
                  stroke="white"
                  strokeWidth={2}
                />
                <XAxis dataKey="day" strokeOpacity={0}></XAxis>
                <Tooltip />
              </LineChart>
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
