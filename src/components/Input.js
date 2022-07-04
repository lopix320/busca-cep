import React from "react";
import * as S from "./styled";

const Input = ({ id, fontSize, label, width, padding, ...props }) => {
  return (
    <>
      {/* <label htmlFor={id}>{label}</label> */}
      {/* <br /> */}
      <S.Input
        fontSize={fontSize}
        padding={padding}
        width={width}
        id={id}
        name={id}
        {...props}
      />
    </>
  );
};

export default Input;
