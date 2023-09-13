import React from "react";
import asabeneh from "./image/asabeneh.jpg";
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
        <div className=" p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            HTML
          </button>
        </div>
        <div className="  p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            CSS
          </button>
        </div>
        <div className="  p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Sass
          </button>
        </div>
        <div className="  p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            JS
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            React
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Redux
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Node
          </button>
        </div>
        <div className="  p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            MongoDB
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Python
          </button>
        </div>
        <div className=" p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Flask
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Django
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            NumPy
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Pandas
          </button>
        </div>
        <div className="  p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Data Analysis
          </button>
        </div>
        <div className="  p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            MYSQL
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            GraphQL
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            D3.js
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Gatsby
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Docker
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Heroku
          </button>
        </div>
        <div className="   p-2 ">
          <button className="bg-info bg-opacity-50 rounded-3 text-white">
            Git
          </button>
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-start">
        <i class="far fa-clock p-1"></i>
        <p>Joined on Aug 30, 2020</p>
      </div>
    </div>
  );
}

export default App;
