import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import propTypes from "prop-types";
const Header = ({ showAdd, onAdd, title, name }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1 style={styling}>
        {title} {name}
      </h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};
//default props
Header.defaultProps = {
  name: "Everyday",
};
Header.propTypes = {
  title: propTypes.string.isRequired,
};
const styling = {
  color: "red",
  backgroundColor: "#fff",
};
export default Header;
