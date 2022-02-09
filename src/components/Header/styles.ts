import styled from "styled-components";


export const Container = styled.header`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 0.5rem;  
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    h2 {
      font-size: 2rem;
      line-height: 1.5rem;
      color: var(--gray-200);
    }

    a {
      font-size: 1.125rem;
      line-height: 1rem;
      color: var(--gray);
      padding: 0.3rem 0;
      position: relative;
      
      & + a {
        margin-left: 3rem;
      }
    }

    a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background: var(--blue);
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }

    a:hover::after,
    a:focus::after {
      opacity: 1;
      transform: translate3d(0, 0.2em, 0);
    }

    a::after {
      opacity: 1;
      transform: scale(0);
      transform-origin: center;
    }

    a:hover::after,
    a:focus::after{
      transform: scale(1);
    }
  }
`