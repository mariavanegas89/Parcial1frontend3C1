import React from "react";

const Message = ({ animal }) => {
  return (
    <>
      <h4>Muchas gracias</h4>
      <h4>
        se agrego el animal:{" "}
        {animal.name}
      </h4>
    </>
  );
};

export default Message;