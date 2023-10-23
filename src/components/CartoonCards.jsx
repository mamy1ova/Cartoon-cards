import React from "react";

const CartoonCards = (props) => {
  const { name, status, species, image, location, origin } = props;

  const locationName = location.name;
  const originName = origin.name;

  const handleColor = (status) => {
    return status === "Alive"
      ? "greenyellow"
      : status === "Dead"
      ? "red"
      : "gray";
  };

  return (
    <div className="cartoon-cards">
      <img src={image} alt="image" />
      <div className="cards-data">
        <h2>{name}</h2>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            backgroundColor: handleColor(status),
          }}
        >
          <p>
            {status}{species}
          </p>
        </div>
        <span>Last known location:</span>
        <h3>{locationName}</h3>
        <span>First seen in:</span>
        <h3> {originName} </h3>
      </div>
    </div>
  );
};

export default CartoonCards;
