import styled from "@emotion/styled";

const StyledCheckBox = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 1.7rem;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: ${disabled
    ? "#81838f"
    : checked
    ? checkedColor
    : unCheckedColor};
  display: block;
  transition: all 0.3s;
  border-radius: 2rem;
  cursor: pointer;
  ${required && "border: 1.5px solid red;"}

  &:before {
    content: "";
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    display: block;
    left: 0.5rem;
    bottom: 0.3rem;
    background-color: white;
    transition: all 0.3s;
    transform: translate(${checked ? "200%" : 0}, 0);
  }
`;
