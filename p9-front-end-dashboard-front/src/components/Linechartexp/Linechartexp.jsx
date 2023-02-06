import React from "react";
import "./linechartexp.css";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
function Linechartexp() {
  const data = [
    { day: "L", sessionLength: 70 },
    { day: "M", sessionLength: 50 },
    { day: "M", sessionLength: 60 },
    { day: "J", sessionLength: 40 },
    { day: "V", sessionLength: 80 },
    { day: "S", sessionLength: 30 },
    { day: "D", sessionLength: 110 },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          className="redchart"
          data={data}
          width={300}
          height={300}
          margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
        >
          <text
            x={30}
            y={50}
            fill="white"
            fontSize={15}
            fill-opacity="0.5" 
            width={30}

          >
            Durée moyenne de la session
          </text>
          );
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
          />
          <XAxis
            dataKey="day"
            strokeOpacity={0}
            style={{
              fontSize: "O,5rem",
              fontFamily: "Roboto",
              fill: "white",
            }}
          ></XAxis>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Linechartexp;
