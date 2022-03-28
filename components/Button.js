import React from "react";

function Button({ title, onClick }) {
  return (
    <div className="header_button" onClick={onClick}>
      <span className="btn-size btn-primary cursor-pointer">{title}</span>
    </div>
  );
}

export default Button;
