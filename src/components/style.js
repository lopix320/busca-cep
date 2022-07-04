import styled from "styled-components";

export const Input = styled.input`
  margin: auto;
`;

export const Button = styled.button`
  text-align: center;
  font-size: 12px;
  height: 22px;
  width: 50px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition-duration: 0.1s;
  background: rgb(227, 227, 227);
  background: linear-gradient(
    140deg,
    rgba(227, 227, 227, 1) 0%,
    rgba(203, 203, 203, 1) 30%,
    rgba(235, 234, 234, 1) 100%
  );
  /* background: var(--color); */
  color: black;
  /* padding: 0.8rem 1.6rem; */
  box-shadow: 1px 1px 3px black;
  /* box-shadow: inset 0px 0px 5px black; */
  &:hover {
    font-size: 11px;
    background: rgb(227, 227, 227);
    background: linear-gradient(
      140deg,
      rgba(227, 227, 227, 1) 0%,
      rgba(203, 203, 203, 1) 74%,
      rgba(235, 234, 234, 1) 100%
    );
    box-shadow: inset 0px 0px 5px 1px black;
    /* box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color); */
    outline: none;
  }
  &:focus {
    font-size: 11px;
    background: rgb(227, 227, 227);
    background: linear-gradient(
      140deg,
      rgba(227, 227, 227, 1) 0%,
      rgba(203, 203, 203, 1) 74%,
      rgba(235, 234, 234, 1) 100%
    );
    box-shadow: inset 0px 0px 5px black;
    /* box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color); */
    outline: none;
  }
`;
