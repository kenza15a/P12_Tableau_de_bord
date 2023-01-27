import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import {

  Line,
  LineChart,
  Tooltip,
  XAxis,
 
  ResponsiveContainer,
} from "recharts";
import "./profile.css";

function Profile() {
    const data1 = [
        { day: "L", duration: 70 },
        { day: "M", duration: 50 },
        { day: "M", duration: 60 },
        { day: "J", duration: 40 },
        { day: "V", duration: 80 },
        { day: "S", duration: 30 },
        { day: "D", duration: 110 },
      ];
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <h1>Profile</h1>
        <ResponsiveContainer width={700} height="80%">
          <LineChart className="redchart" width={200} height={200} data={data1}>
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
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Profile;
