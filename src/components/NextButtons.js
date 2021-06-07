import React from "react";

const NextButtons = ({ queryGroup }) => {
  return (
    <div>
      {queryGroup === 1 && (
        <div className="parent-help">
          <button className="help">Yes</button>
          <button className="help">No</button>
        </div>
      )}
    </div>
  );
};

export default NextButtons;
