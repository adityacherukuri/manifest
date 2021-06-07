import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Chat from "./Chat";
import NextButtons from "./NextButtons";
import wait from "../images/Wait.png";

const Chats = ({ currentChats, queryGroup }) => {
  const { responses } = useContext(GlobalContext);

  return (
    <div>
      <img className="wait" src={wait} alt="waiting" />
      <ul>
        {currentChats.map((response) => (
          <Chat response={response} key={response.id} />
        ))}
      </ul>
      <NextButtons queryGroup={queryGroup} />
    </div>
  );
};

export default Chats;
