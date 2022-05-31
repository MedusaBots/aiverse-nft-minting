import React from "react";

function Card(props) {
  return (
    <div className="Cardprop" style={{ color: `${props.color}` }}>
      <h2
        className="CardHeader"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        }}
      >
        {props.title}
      </h2>
      <hr className="hr" style={{ backgroundColor: `${props.hrcolor}` }} />
      <p
        className="pTag"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        }}
      >
        {props.text}
      </p>
    </div>
  );
}

export default Card;
