import React, { useState } from "react";

function Form({ onValidated, status, message }) {
  const [email, setmail] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  return (
    <>
      <form style={{ width: "80%" }} onSubmit={(e) => submit(e)}>
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          className="mintEmailInput"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setmail(e.target.value)}
        />
        <button className="mintEmailButton" type="submit">
          Send
        </button>
      </form>
    </>
  );
}

export default Form;
