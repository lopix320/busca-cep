import styled from "styled-components";

export const Input = styled.input`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  border: none;
  /* margin: auto; */
  width: ${({ width }) => width};
  height: 25px;
  border-radius: 5px;
  padding: ${({ padding }) => padding};
  box-shadow: inset 0px 0px 5px;
  margin: 1rem;
  outline: none;
  transition-duration: 0.2s;
  &:hover {
    height: 27px;
    box-shadow: 0px 1px 5px black;
  }
  &:focus {
    height: 25px;
    box-shadow: 0px 1px 5px black;
  }
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
    rgba(172, 172, 172, 1) 31%,
    rgba(181, 181, 181, 1) 36%,
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
      rgba(194, 194, 194, 1) 59%,
      rgba(176, 176, 176, 1) 70%,
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
      rgba(194, 194, 194, 1) 59%,
      rgba(176, 176, 176, 1) 70%,
      rgba(235, 234, 234, 1) 100%
    );
    box-shadow: inset 0px 0px 5px black;
    /* box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color); */
    outline: none;
  }
`;
