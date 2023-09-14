import React from "react";
function ButtonSkill(props) {
  return (
    <div className=" p-2 ">
      <button className="bg-info bg-opacity-50 rounded-3 text-white">
        {props.name}
      </button>
    </div>
  );
}
export default ButtonSkill;
