import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  height: 4rem;
  border-radius: 4rem;
  border: 0;
  box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
  background: var(--blue);
  padding: 0 1.5rem;

  font-size: 1.5rem;
  color: var(--white);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`