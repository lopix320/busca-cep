import React from "react";
import * as S from "./style";

const Input = ({ id, label, ...props }) => {
  return (
    <>
      {/* <label htmlFor={id}>{label}</label> */}
      <br />
      <S.Input id={id} name={id} style={{ width: "7rem" }} {...props} />
    </>
  );
};

export default Input;
