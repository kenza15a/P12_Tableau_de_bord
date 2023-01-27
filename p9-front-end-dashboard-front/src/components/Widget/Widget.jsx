import React from "react";
import "./widget.css";
import calIcon from "./icons/calories-icon.png";
function Widget({ icon, grammage, unit }) {
  return (
    <>
      <div className="widget-container">
        <div className="widget-icon">
          <img src={icon} alt={icon}></img>
        </div>

        <div className="grammage">
          <h2 className="grammage-text">{grammage}</h2>
          <h3 className="unit">{unit}</h3>
        </div>
      </div>
    </>
  );
}
Widget.defaultProps = {
  icon: calIcon,
  grammage: "150",
  unit: "calories",
};

export default Widget;
