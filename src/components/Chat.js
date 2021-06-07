import React from "react";
//import styled from "styled-components";
//import { GlobalContext } from "../context/GlobalState";

const Chat = ({ response }) => {
  return <li className="chat-item">{response.value}</li>;
};

export default Chat;
