// 전달인자를 직접 받으면서 styled-components 를 사용해서 만든 컴포넌트를 스토리로 만들어보기
import React from "react";
import styled from "styled-components";

const Button = ({ color, size, text }) => {
  return (
    <StyledButton color={color} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: ${(props) => props.color || "white"};
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;
