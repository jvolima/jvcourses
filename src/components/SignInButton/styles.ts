import styled from "styled-components";

export const Button = styled.button`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  font-size: 1rem;
  margin-left: 3rem;
  background: var(--gray-200);
  color: var(--white);
  height: 3rem;
  width: auto;
  padding: 0 1rem;
  border-radius: 3rem;
  border: 0;

  .github {
    width: 24px;
    height: 24px;
    margin-right: 0.6rem;
    color: ${props => props.color}
  }

  .close {
    width: 20px;
    height: 20px;
    margin-left: 0.8rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`