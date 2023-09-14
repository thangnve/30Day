import React from "react";
import asabeneh from "./image/asabeneh.jpg";
import ButtonSkill from "./component/buttonskill";

function App() {
  return (
    <div className="container mt-5 rounded-3 border">
      <div>
        <img
          className="rounded-circle mt-3"
          src={asabeneh}
          width="200"
          height="200"
        />
      </div>
      <div className="d-flex mt-3">
        <h6 style={{ letterSpacing: 3 }}>ASABENEH YETAYEH</h6>
        <i class="fas fa-check-circle fs-5 " style={{ color: "#143db8" }}></i>
      </div>
      <div className="mt-4">
        <p>Senior Developer, Finland</p>
      </div>
      <div>
        <h6 className="fw-bold mt-2">SKILLS</h6>
      </div>
      <div
        style={{ flexWrap: "wrap" }}
        className="d-flex justify-content-start "
      >
        <ButtonSkill name="HTML" />
        <ButtonSkill name="CSS" />
        <ButtonSkill name="Sass" />
        <ButtonSkill name="JS" />
        <ButtonSkill name="React" />
        <ButtonSkill name="Redux" />
        <ButtonSkill name="Node" />
        <ButtonSkill name="MongoDB" />
        <ButtonSkill name="Python" />
        <ButtonSkill name="Flask" />
        <ButtonSkill name="Django" />
        <ButtonSkill name="NumPy" />
        <ButtonSkill name="Pandas" />
        <ButtonSkill name="Data Analysis" />
        <ButtonSkill name="MYSQL" />
        <ButtonSkill name="GraphQL" />
        <ButtonSkill name="D3.js" />
        <ButtonSkill name="Gatsby" />
        <ButtonSkill name="Docker" />
        <ButtonSkill name="Heroku" />
        <ButtonSkill name="Git" />
      </div>
      <div className="d-flex mt-3 justify-content-start">
        <i class="far fa-clock p-1"></i>
        <p>Joined on Aug 30, 2020</p>
      </div>
    </div>
  );
}

export default App;
