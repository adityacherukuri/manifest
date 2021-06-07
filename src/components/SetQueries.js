import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Chats from "./Chats";
// import NextButtons from "./NextButtons";

const SetQueries = () => {
  const { responses } = useContext(GlobalContext);
  const [queries, setQueries] = useState([]);
  const [queryGroup, setQueryGroup] = useState(0);
  const groupOne = () => {
    const filterd = responses.filter((response) => {
      return response.id <= 3;
    });
    //const newChats = [...queries, filterd];
    //console.log(newChats);
    setQueries(filterd);
    //console.log(queries);
    setQueryGroup(queryGroup + 1);
  };
  return (
    <div className="parent-help">
      {queries.length === 0 ? (
        <button className="help" onClick={groupOne}>
          Need Help!
        </button>
      ) : (
        <Chats currentChats={queries} queryGroup={queryGroup} />
      )}
    </div>
  );
};

export default SetQueries;
