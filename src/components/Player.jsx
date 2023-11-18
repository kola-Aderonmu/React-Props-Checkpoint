import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

// Declaring an alert function
const handleButtonClick = () => {
  alert("This feature is still under construction!");
};

// Destructuring by selecting only the params needed
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
  




    <Card className="position-relative jhygf" style={{ width: "25rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={name}
          style={{
            width: "16rem",
            height: "20rem",
            objectPosition: "middle",
            borderRadius: "7rem",
            objectFit: "cover",
          }}
        />
      </div>
      {/* //Creating a jerseyNumber sign */}
      <div
        className="position-absolute m-4  text-white text-center d-flex justify-content-center align-items-center shadow-lg"
        style={{
          width: 50,
          height: 50,
          borderRadius: 23,
          background: "linear-gradient(45deg, #3498db, #2ecc71)",
          fontFamily: "Orbitron",
          fontWeight: "600",
          fontSize: "23px",
        }}
      >
        {" "}
        {jerseyNumber}
      </div>

      {/* //Declaring the Names of all the players */}
      <Card.Body>
        <Card.Title
          style={{
            fontFamily: "Bungee Inline",
            marginTop: "1rem",
            letterSpacing: "3px",
            fontSize: "22px",
            color: "",
            textAlign: "center",
          }}
        >
          {name}
        </Card.Title>
        {/* //Declaring the info under the players details */}
        <Card.Text>
          <span
            style={{ fontSize: "17px", fontWeight: "800", color: "#555555" }}
          >
            Team:
          </span>{" "}
          <span
            style={{ color: "#98817b", fontWeight: "650", marginLeft: "1rem" }}
          >
            {team}
          </span>{" "}
          <br />
          <span
            style={{ fontSize: "17px", fontWeight: "800", color: "#555555" }}
          >
            Nationality:
          </span>{" "}
          <span
            style={{
              color: "#98817b",
              fontWeight: "650",
              marginLeft: "0.5rem",
            }}
          >
            {nationality}
          </span>{" "}
          <br />
          <span
            style={{ fontSize: "17px", fontWeight: "800", color: "#555555" }}
          >
            Age:
          </span>{" "}
          <span
            style={{
              color: "#98817b",
              fontWeight: "650",
              marginLeft: "0.5rem",
            }}
          >
            {age}
          </span>{" "}
          <br />
          {/* <button className="shiny-button">Read More</button> */}
          <button
            class="btn btn-primary shiny-button"
            type="button"
            onClick={handleButtonClick}
          >
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            -- Read More --
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
    // </div>
  );
};

//Passing Props to my elements
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
};

export default Player;
