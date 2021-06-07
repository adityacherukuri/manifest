import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Wrapper = styled.header`
  text-align: center;
  font-size: 15px;
  font-family: "SFUIText";
  padding: 1.5rem 5rem;
  z-index: 1;
  width: 100%;
  border: solid 1px lightgray;
`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <header>
        <h1>{title}</h1>
      </header>
      {/* <FaBars value={{ className: "react-icons" }} /> */}
    </Wrapper>
  );
};

Header.defaultProps = {
  title: "Manifest",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
