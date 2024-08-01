import React from "react";
import TextLoop from "react-text-loop";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div>
        <div className="home">
          <div className="home_container">
            <div className="home_user_info">
              <h1>
                Hello Everyone
                <TextLoop interval={3000} adjustingSpeed={100}>
                  <span>First item</span>
                  <span>Second item</span>
                  <span>Third item</span>
                </TextLoop>
              </h1>
            </div>
            <div className="home_user_profile">
              <h1>User Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
