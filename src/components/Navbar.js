import React from "react";

const Navbar = ({ city, language }) => {
  return (
    <div className="navbar">
      <div className="logo">Weather App</div>
      {city ? (
        <div>
          {city.name} / {city.country}
        </div>
      ) : (
        <div>
          {language !== "tr"
            ? "You need to allow location access...."
            : "Konum erişimine izin vermeniz gerekiyor.. "}
        </div>
      )}
    </div>
  );
};

export default Navbar;
