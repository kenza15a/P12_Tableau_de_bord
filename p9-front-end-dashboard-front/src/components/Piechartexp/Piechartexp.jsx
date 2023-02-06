import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

function Piechartexp() {
  /* const data = [
    { name: "Group A", value: 400 },
   
  ];*/
  //piechart data
  const data = [{ name: "Group A", value: 45 }];
  const value = data[0].value;
  return (
    <>
      <ResponsiveContainer>
        <PieChart>
          <text>Score</text>
          <Pie
            dataKey="value"
            endAngle={value}
            startAngle={180}
            Raiuds={[20]}
            data={data}
            fill="#FF0000"
            innerRadius={75}
            outerRadius={90}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default Piechartexp;
